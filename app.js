(function () {
  "use strict";

  const STORAGE_KEY = "ahmed-menu-lang";
  const SUPPORTED = ["ar", "en", "ku"];

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    return "ar";
  }

  function getMenuRoute() {
    const h = window.location.hash.replace(/^#/, "");
    if (!h.startsWith("menu")) return { type: "welcome" };
    const tail = h.slice("menu".length).replace(/^\//, "");
    if (!tail) return { type: "menu", cat: null };
    const [cat, item] = tail.split("/");
    return { type: "menu", cat, item: item === undefined ? null : Number(item) };
  }

  function setHashMenuHub() {
    window.location.hash = "menu";
  }

  function setHashMenuCategory(catId) {
    window.location.hash = "menu/" + catId;
  }

  function setHashMenuItem(catId, itemIndex) {
    window.location.hash = "menu/" + catId + "/" + itemIndex;
  }

  function setHashWelcome() {
    window.location.hash = "";
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    applyUiStrings(lang);
    refreshMenuView(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang === "ku" ? "ckb" : lang);
    document.documentElement.setAttribute("dir", "rtl");
    document.body.setAttribute("dir", "rtl");
    document.body.classList.remove("lang-ar", "lang-en", "lang-ku");
    document.body.classList.add("lang-" + lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.lang === lang);
    });
  }

  function formatPrice(n, lang) {
    const s = new Intl.NumberFormat("en-US").format(n);
    const u = UI_STRINGS[lang].currency;
    if (lang === "en") return s + " " + u;
    return s + " " + u;
  }

  const CART_KEY = "ahmed-menu-cart";
  const ORDER_WHATSAPP_NUMBER = typeof CONTACT !== "undefined"
    ? String(CONTACT.whatsapp || "").replace(/^https:\/\/wa\.me\//, "").replace(/[^0-9]/g, "")
    : "9647505606560";

  let cart = new Map();
  const orderFormState = {
    name: "",
    phone: "",
    address: "",
  };

  function loadCart() {
    cart = new Map();
    try {
      localStorage.removeItem(CART_KEY);
    } catch (error) {
      // ignore storage cleanup errors
    }
  }

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(Array.from(cart.entries())));
  }

  function getCartCount() {
    return Array.from(cart.values()).reduce((total, count) => total + count, 0);
  }

  function buildCartIndex(lang) {
    const index = new Map();
    MENU_DATA.forEach((cat) => {
      cat.items.forEach((item) => {
        const imgUrl = item.img || cat.image;
        const key = cat.id + "::" + item.n.ar + "::" + imgUrl;
        index.set(key, {
          name: item.n[lang] || item.n.ar,
          price: item.p || 0,
          imgUrl: imgUrl,
          categoryId: cat.id,
        });
      });
    });
    return index;
  }

  function buildOrderMessage(lang, cartIndex, entries, customerData) {
    const totalItems = entries.reduce((total, [, count]) => total + count, 0);
    const totalPrice = entries.reduce((sum, [key, count]) => {
      const item = cartIndex.get(key);
      if (!item) return sum;
      return sum + item.price * count;
    }, 0);

    const itemLines = entries.map(([key, count]) => {
      const item = cartIndex.get(key);
      const itemName = item ? item.name : key.split("::")[1];
      const lineTotal = (item ? item.price : 0) * count;
      return "- " + itemName + " × " + count + " — " + formatPrice(lineTotal, lang);
    });

    return [
      "طلب جديد من الموقع",
      "الاسم: " + (customerData.name || "غير محدد"),
      "الهاتف: " + (customerData.phone || "غير محدد"),
      "العنوان: " + (customerData.address || "غير محدد"),
      "",
      "العناصر المختارة:",
      itemLines.length ? itemLines.join("\n") : "- لا توجد عناصر في السلة",
      "",
      "عدد العناصر: " + totalItems,
      "المجموع: " + formatPrice(totalPrice, lang),
    ].join("\n");
  }

  function renderCartDrawer(lang) {
    const drawer = document.getElementById("cart-drawer");
    if (!drawer) return;

    const cartIndex = buildCartIndex(lang);
    const entries = Array.from(cart.entries());
    const totalItems = entries.reduce((total, [, count]) => total + count, 0);
    const totalPrice = entries.reduce((sum, [key, count]) => {
      const item = cartIndex.get(key);
      if (!item) return sum;
      return sum + item.price * count;
    }, 0);

    drawer.innerHTML = "";

    const header = document.createElement("div");
    header.className = "cart-drawer__header";
    const title = document.createElement("div");
    title.className = "cart-drawer__title";
    title.textContent = UI_STRINGS[lang].cartPanelTitle;
    const countBadge = document.createElement("span");
    countBadge.className = "cart-drawer__count";
    countBadge.textContent = String(totalItems);
    header.appendChild(title);
    header.appendChild(countBadge);

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "cart-drawer__items";

    if (!entries.length) {
      const empty = document.createElement("div");
      empty.className = "cart-drawer__empty";
      empty.textContent = UI_STRINGS[lang].cartEmpty;
      itemsWrap.appendChild(empty);
    } else {
      entries.forEach(([key, count]) => {
        const item = cartIndex.get(key);
        const lineTotal = (item ? item.price : 0) * count;
        const row = document.createElement("div");
        row.className = "cart-drawer__row cart-drawer__row--interactive";
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");
        row.setAttribute("aria-expanded", "false");

        const main = document.createElement("div");
        main.className = "cart-drawer__main";

        const nameEl = document.createElement("div");
        nameEl.className = "cart-drawer__name";
        nameEl.textContent = item ? item.name : key.split("::")[1];

        const metaEl = document.createElement("div");
        metaEl.className = "cart-drawer__meta";
        if (item) {
          metaEl.textContent = formatPrice(item.price, lang);
        } else {
          metaEl.textContent = "";
        }

        main.appendChild(nameEl);
        main.appendChild(metaEl);

        const actions = document.createElement("div");
        actions.className = "cart-drawer__actions";

        const minusButton = document.createElement("button");
        minusButton.type = "button";
        minusButton.className = "cart-drawer__mini-btn";
        minusButton.textContent = "−";
        minusButton.setAttribute("aria-label", "تقليل الكمية");

        const countBadge = document.createElement("span");
        countBadge.className = "cart-drawer__mini-count";
        countBadge.textContent = String(count);

        const plusButton = document.createElement("button");
        plusButton.type = "button";
        plusButton.className = "cart-drawer__mini-btn";
        plusButton.textContent = "+";
        plusButton.setAttribute("aria-label", "زيادة الكمية");

        const clearButton = document.createElement("button");
        clearButton.type = "button";
        clearButton.className = "cart-drawer__clear-btn";
        clearButton.textContent = "×";
        clearButton.setAttribute("aria-label", "مسح العنصر");

        const detail = document.createElement("div");
        detail.className = "cart-drawer__detail";
        detail.hidden = true;
        detail.textContent = [
          "الكمية: " + count,
          "السعر: " + formatPrice(item ? item.price : 0, lang),
          "المجموع: " + formatPrice(lineTotal, lang),
        ].join(" • ");

        const syncRow = () => {
          const nextCount = cart.get(key) || 0;
          countBadge.textContent = String(nextCount);
          detail.textContent = [
            "الكمية: " + nextCount,
            "السعر: " + formatPrice(item ? item.price : 0, lang),
            "المجموع: " + formatPrice((item ? item.price : 0) * nextCount, lang),
          ].join(" • ");
          if (nextCount <= 0) {
            row.remove();
            renderCartDrawer(lang);
            updateCartSummary(lang);
            return;
          }
          const updatedTotal = (item ? item.price : 0) * nextCount;
          totalEl.textContent = formatPrice(updatedTotal, lang);
          countBadge.textContent = String(nextCount);
          updateCartSummary(lang);
        };

        row.addEventListener("click", (event) => {
          if (event.target.closest(".cart-drawer__actions")) {
            return;
          }
          const expanded = row.classList.toggle("is-expanded");
          detail.hidden = !expanded;
          row.setAttribute("aria-expanded", String(expanded));
        });

        row.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            row.click();
          }
        });

        minusButton.addEventListener("click", () => {
          const nextCount = Math.max((cart.get(key) || 0) - 1, 0);
          if (nextCount === 0) {
            cart.delete(key);
          } else {
            cart.set(key, nextCount);
          }
          saveCart();
          syncRow();
        });

        plusButton.addEventListener("click", () => {
          cart.set(key, (cart.get(key) || 0) + 1);
          saveCart();
          syncRow();
        });

        clearButton.addEventListener("click", () => {
          cart.delete(key);
          saveCart();
          syncRow();
        });

        actions.appendChild(minusButton);
        actions.appendChild(countBadge);
        actions.appendChild(plusButton);
        actions.appendChild(clearButton);

        const totalEl = document.createElement("div");
        totalEl.className = "cart-drawer__total";
        totalEl.textContent = formatPrice(lineTotal, lang);

        row.appendChild(main);
        row.appendChild(totalEl);
        row.appendChild(actions);
        row.appendChild(detail);
        itemsWrap.appendChild(row);
      });
    }

    const footer = document.createElement("div");
    footer.className = "cart-drawer__footer";
    const footerLabel = document.createElement("span");
    footerLabel.className = "cart-drawer__footer-label";
    footerLabel.textContent = UI_STRINGS[lang].cartTotal;
    const totalValue = document.createElement("strong");
    totalValue.className = "cart-drawer__footer-value";
    totalValue.textContent = formatPrice(totalPrice, lang);
    footer.appendChild(footerLabel);
    footer.appendChild(totalValue);

    drawer.appendChild(header);
    drawer.appendChild(itemsWrap);
    drawer.appendChild(footer);

    if (entries.length) {
      const orderSection = document.createElement("section");
      orderSection.className = "cart-drawer__order";

      const orderIntro = document.createElement("div");
      orderIntro.className = "cart-drawer__order-intro";
      const orderTitle = document.createElement("div");
      orderTitle.className = "cart-drawer__order-title";
      orderTitle.textContent = UI_STRINGS[lang].whatsappOrderTitle;
      const orderHint = document.createElement("p");
      orderHint.className = "cart-drawer__order-hint";
      orderHint.textContent = UI_STRINGS[lang].whatsappOrderHint;
      orderIntro.appendChild(orderTitle);
      orderIntro.appendChild(orderHint);

      const orderForm = document.createElement("form");
      orderForm.className = "cart-drawer__order-form";

      const fieldConfigs = [
        {
          key: "name",
          type: "text",
          label: UI_STRINGS[lang].whatsappOrderName,
          autocomplete: "name",
          placeholder: UI_STRINGS[lang].whatsappOrderNamePlaceholder,
        },
        {
          key: "phone",
          type: "tel",
          label: UI_STRINGS[lang].whatsappOrderPhone,
          autocomplete: "tel",
          placeholder: UI_STRINGS[lang].whatsappOrderPhonePlaceholder,
        },
        {
          key: "address",
          type: "textarea",
          label: UI_STRINGS[lang].whatsappOrderAddress,
          autocomplete: "street-address",
          placeholder: UI_STRINGS[lang].whatsappOrderAddressPlaceholder,
        },
      ];

      fieldConfigs.forEach((config) => {
        const fieldWrap = document.createElement("label");
        fieldWrap.className = "cart-drawer__field-group";

        const fieldLabel = document.createElement("span");
        fieldLabel.className = "cart-drawer__field-label";
        fieldLabel.textContent = config.label;

        const field = config.type === "textarea"
          ? document.createElement("textarea")
          : document.createElement("input");

        field.className = "cart-drawer__field";
        if (config.type === "textarea") {
          field.classList.add("cart-drawer__field--textarea");
          field.rows = 3;
        } else {
          field.type = config.type;
        }
        field.name = config.key;
        field.placeholder = config.placeholder;
        field.autocomplete = config.autocomplete;
        field.required = true;
        field.value = orderFormState[config.key] || "";

        field.addEventListener("input", (event) => {
          orderFormState[config.key] = event.target.value;
          preview.textContent = buildOrderMessage(lang, cartIndex, entries, orderFormState);
          status.textContent = "";
        });

        fieldWrap.appendChild(fieldLabel);
        fieldWrap.appendChild(field);
        orderForm.appendChild(fieldWrap);
      });

      const previewWrap = document.createElement("div");
      previewWrap.className = "cart-drawer__preview";
      const previewLabel = document.createElement("div");
      previewLabel.className = "cart-drawer__preview-label";
      previewLabel.textContent = UI_STRINGS[lang].whatsappOrderPreview;
      const preview = document.createElement("pre");
      preview.className = "cart-drawer__preview-body";
      preview.textContent = buildOrderMessage(lang, cartIndex, entries, orderFormState);
      previewWrap.appendChild(previewLabel);
      previewWrap.appendChild(preview);

      const sendButton = document.createElement("button");
      sendButton.type = "submit";
      sendButton.className = "cart-drawer__send-btn";
      sendButton.textContent = UI_STRINGS[lang].whatsappSendButton;

      const status = document.createElement("p");
      status.className = "cart-drawer__status";
      status.setAttribute("aria-live", "polite");

      orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = orderFormState.name.trim();
        const phoneNumber = orderFormState.phone.trim();
        const address = orderFormState.address.trim();

        if (!fullName || !phoneNumber || !address) {
          status.textContent = UI_STRINGS[lang].whatsappValidationMessage;
          return;
        }

        const whatsappMessage = buildOrderMessage(lang, cartIndex, entries, orderFormState);
        const whatsappUrl = "https://wa.me/" + ORDER_WHATSAPP_NUMBER + "?text=" + encodeURIComponent(whatsappMessage);
        status.textContent = UI_STRINGS[lang].whatsappSendingMessage;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      });

      orderForm.appendChild(previewWrap);
      orderForm.appendChild(sendButton);
      orderForm.appendChild(status);

      orderSection.appendChild(orderIntro);
      orderSection.appendChild(orderForm);
      drawer.appendChild(orderSection);
    }
  }

  function toggleCartDrawer(forceOpen) {
    const drawer = document.getElementById("cart-drawer");
    const summary = document.getElementById("cart-summary");
    if (!drawer) return;

    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : drawer.hidden;
    if (shouldOpen) {
      clearTimeout(drawer._closeTimer);
      renderCartDrawer(getLang());
      drawer.hidden = false;
      drawer.setAttribute("aria-modal", "true");
      drawer.classList.remove("is-closing");
      requestAnimationFrame(() => {
        drawer.classList.add("is-open");
      });
      if (summary) summary.setAttribute("aria-expanded", "true");
    } else {
      drawer.classList.remove("is-open");
      drawer.classList.add("is-closing");
      drawer.removeAttribute("aria-modal");
      clearTimeout(drawer._closeTimer);
      drawer._closeTimer = window.setTimeout(() => {
        drawer.hidden = true;
        drawer.classList.remove("is-closing");
      }, 240);
      if (summary) summary.setAttribute("aria-expanded", "false");
    }
  }

  function updateCartSummary(lang) {
    const summary = document.getElementById("cart-summary");
    if (summary) {
      summary.textContent = UI_STRINGS[lang].cartSummary.replace("{count}", getCartCount());
    }
    const detailSummary = document.getElementById("detail-cart-summary");
    if (detailSummary) {
      detailSummary.textContent = UI_STRINGS[lang].cartSummary.replace("{count}", getCartCount());
    }

    const floatingCount = document.getElementById("cart-fab-count");
    if (floatingCount) {
      floatingCount.textContent = String(getCartCount());
    }

    const floatingButton = document.getElementById("cart-fab");
    if (floatingButton) {
      floatingButton.classList.toggle("has-items", getCartCount() > 0);
    }

    const cartDrawer = document.getElementById("cart-drawer");
    if (cartDrawer && !cartDrawer.hidden) {
      renderCartDrawer(lang);
    }
  }

  function applyUiStrings(lang) {
    const u = UI_STRINGS[lang];
    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    set("ui-badge", u.badge);
    set("ui-title", u.title);
    set("ui-subtitle", u.subtitle);
    set("ui-cta", u.cta);
    set("ui-hint", u.hint);
    set("ui-menu-heading", u.menuHeading);
    set("ui-menu-intro", u.menuIntro);
    set("ui-back", u.back);
    set("ui-back-sections", u.backSections);
    set("ui-footer", u.footer);
    const brand = document.getElementById("brand-mini");
    if (brand) brand.textContent = u.title;

    updateCartSummary(lang);

    if (typeof CONTACT !== "undefined") {
      document.querySelectorAll(".social-bar").forEach((bar) => {
        bar.setAttribute("aria-label", u.socialAria);
      });
      document.querySelectorAll("a.social-link--ig, #contact-instagram").forEach((a) => {
        a.href = CONTACT.instagram;
      });
      document.querySelectorAll("#contact-whatsapp").forEach((a) => {
        a.href = CONTACT.whatsapp;
      });
      document.querySelectorAll("#contact-phone").forEach((a) => {
        a.href = CONTACT.phone;
      });
      document.querySelectorAll(".social-lbl-ig, #contact-instagram-label").forEach((el) => {
        el.textContent = u.instagramLabel;
      });
      document.querySelectorAll("#contact-whatsapp-label").forEach((el) => {
        el.textContent = u.whatsappLabel;
      });
      const phoneLabel = document.getElementById("contact-phone-label");
      if (phoneLabel) phoneLabel.textContent = u.callUs;
    }
  }

  function itemCountLabel(count, lang) {
    const u = UI_STRINGS[lang];
    return count + " " + u.itemsUnit;
  }

  function openImageModal(imgSrc, imgName) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("image-modal-img");
    const modalDesc = document.getElementById("image-modal-desc");
    if (modal) {
      modalImg.src = imgSrc;
      modalImg.alt = imgName;
      modalDesc.textContent = imgName;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }
  }

  function closeImageModal() {
    const modal = document.getElementById("image-modal");
    if (modal) {
      modal.hidden = true;
      document.body.style.overflow = "";
    }
  }

  function attachImageClickListeners() {
    const images = document.querySelectorAll(".detail-row__img");
    images.forEach((img) => {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        const nameEl = img.closest(".detail-row").querySelector(".detail-row__name");
        const name = nameEl ? nameEl.textContent : img.alt;
        openImageModal(img.src, name);
      });
    });
  }

  function renderHub(lang) {
    const hub = document.getElementById("menu-hub");
    if (!hub || typeof MENU_DATA === "undefined") return;
    const previousRail = hub.querySelector(".menu-section-rail");
    const previousScrollLeft = previousRail ? previousRail.scrollLeft : 0;
    hub.innerHTML = "";
    hub.hidden = false;

    const route = getMenuRoute();
    const activeCategory = route.type === "menu" ? route.cat : null;

    const sectionRail = document.createElement("div");
    sectionRail.className = "menu-section-rail";
    sectionRail.dir = "rtl";
    sectionRail.setAttribute("role", "tablist");
    sectionRail.setAttribute("aria-label", "أقسام القائمة");

    MENU_DATA.forEach((cat) => {
      const count = cat.items.length;
      const sectionButton = document.createElement("button");
      sectionButton.type = "button";
      sectionButton.className = "section-chip" + (activeCategory === cat.id ? " section-chip--active" : "");
      sectionButton.setAttribute("role", "tab");
      sectionButton.setAttribute("aria-selected", activeCategory === cat.id ? "true" : "false");

      const label = document.createElement("span");
      label.className = "section-chip__label";
      label.textContent = cat.titles[lang] || cat.titles.ar;

      const countBadge = document.createElement("span");
      countBadge.className = "section-chip__count";
      countBadge.textContent = String(count);

      sectionButton.appendChild(label);
      sectionButton.appendChild(countBadge);

      sectionButton.addEventListener("click", () => {
        setHashMenuCategory(cat.id);
      });

      sectionRail.appendChild(sectionButton);
    });

    hub.appendChild(sectionRail);
    sectionRail.scrollLeft = previousScrollLeft;

    if (!MENU_DATA.length) {
      const empty = document.createElement("div");
      empty.className = "menu-empty";
      empty.innerHTML = "<p class=\"menu-empty__eyebrow\">اختر قسمًا</p><p class=\"menu-empty__text\">" + UI_STRINGS[lang].selectSectionHint + "</p>";
      hub.appendChild(empty);
      return;
    }

    if (!activeCategory) {
      const empty = document.createElement("div");
      empty.className = "menu-empty";
      empty.innerHTML = "<p class=\"menu-empty__eyebrow\">اختر قسمًا</p><p class=\"menu-empty__text\">" + UI_STRINGS[lang].selectSectionHint + "</p>";
      hub.appendChild(empty);
    }
  }

  function renderDetail(lang, cat, selectedItemIndex) {
    const detail = document.getElementById("menu-detail");
    if (!detail) return;
    detail.classList.remove("is-visible");
    detail.innerHTML = "";

    const title = cat.titles[lang] || cat.titles.ar;

    const topbar = document.createElement("div");
    topbar.className = "detail-topbar";

    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "detail-back-btn";
    backButton.textContent = UI_STRINGS[lang].backToSections;
    backButton.addEventListener("click", () => {
      setHashMenuHub();
      applyRoute();
    });

    topbar.appendChild(backButton);

    const hero = document.createElement("div");
    hero.className = "detail-hero";
    hero.style.backgroundImage = "url('" + cat.image + "')";

    const heroInner = document.createElement("div");
    heroInner.className = "detail-hero__inner";
    const h1 = document.createElement("h3");
    h1.className = "detail-hero__title";
    h1.textContent = title;
    heroInner.appendChild(h1);
    hero.appendChild(heroInner);

    const sheet = document.createElement("div");
    sheet.className = "detail-sheet";

    if (cat.priceTable) {
      const rows = cat.priceTable[lang] || cat.priceTable.ar;
      const wrap = document.createElement("div");
      wrap.className = "detail-price-band";
      const label = document.createElement("p");
      label.className = "detail-price-label";
      label.textContent = UI_STRINGS[lang].priceBySize + " —";
      wrap.appendChild(label);
      const chips = document.createElement("div");
      chips.className = "detail-chips";
      rows.forEach((row) => {
        const chip = document.createElement("span");
        chip.className = "detail-chip";
        chip.textContent = row.k + " · " + formatPrice(row.v, lang);
        chips.appendChild(chip);
      });
      wrap.appendChild(chips);
      sheet.appendChild(wrap);
    }

    const list = document.createElement("ul");
    list.className = "detail-list";

    cat.items.forEach((item, itemIndex) => {
      const name = item.n[lang] || item.n.ar;
      const descText =
        item.d && (item.d[lang] || item.d.ar) ? item.d[lang] || item.d.ar : "";
      const imgUrl = item.img || cat.image;
      const itemKey = cat.id + "::" + name + "::" + imgUrl;

      const li = document.createElement("li");
      li.className = "detail-row";
      if (itemIndex === selectedItemIndex) {
        li.classList.add("detail-row--selected");
      }

      const img = document.createElement("img");
      img.className = "detail-row__img";
      img.src = imgUrl;
      img.alt = name;
      img.title = name;
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 176;
      img.height = 176;

      const main = document.createElement("div");
      main.className = "detail-row__main";

      const nameEl = document.createElement("span");
      nameEl.className = "detail-row__name";
      nameEl.textContent = name;

      const descEl = document.createElement("span");
      descEl.className = "detail-row__desc";
      descEl.textContent = descText;

      main.appendChild(nameEl);
      main.appendChild(descEl);

      const actions = document.createElement("div");
      actions.className = "detail-row__actions";

      const preview = document.createElement("div");
      preview.className = "detail-row__preview";

      const priceEl = document.createElement("span");
      priceEl.className = "detail-row__price";
      if (item.p != null) {
        priceEl.textContent = formatPrice(item.p, lang);
      } else {
        priceEl.textContent = UI_STRINGS[lang].priceBySize;
      }

      const totalEl = document.createElement("span");
      totalEl.className = "detail-row__total";

      preview.appendChild(priceEl);
      preview.appendChild(totalEl);

      const addButton = document.createElement("button");
      addButton.type = "button";
      addButton.className = "detail-add-btn";
      addButton.textContent = UI_STRINGS[lang].addToCart;

      const controls = document.createElement("div");
      controls.className = "detail-qty";

      const minusButton = document.createElement("button");
      minusButton.type = "button";
      minusButton.className = "detail-qty__btn";
      minusButton.textContent = "−";
      minusButton.setAttribute("aria-label", "تقليل الكمية");

      const countBadge = document.createElement("span");
      countBadge.className = "detail-qty__count";

      const plusButton = document.createElement("button");
      plusButton.type = "button";
      plusButton.className = "detail-qty__btn";
      plusButton.textContent = "+";
      plusButton.setAttribute("aria-label", "زيادة الكمية");

      const clearButton = document.createElement("button");
      clearButton.type = "button";
      clearButton.className = "detail-qty__clear";
      clearButton.textContent = "×";
      clearButton.setAttribute("aria-label", "مسح العنصر");

      const syncQuantity = () => {
        const currentCount = cart.get(itemKey) || 0;
        countBadge.textContent = String(currentCount);
        clearButton.disabled = currentCount === 0;
        minusButton.disabled = currentCount === 0;
        controls.hidden = currentCount === 0;
        addButton.hidden = currentCount > 0;
        if (item.p != null && currentCount > 0) {
          totalEl.textContent = UI_STRINGS[lang].cartTotal + ": " + formatPrice(item.p * currentCount, lang);
          totalEl.hidden = false;
        } else {
          totalEl.textContent = "";
          totalEl.hidden = true;
        }
        updateCartSummary(lang);
      };

      addButton.addEventListener("click", () => {
        cart.set(itemKey, (cart.get(itemKey) || 0) + 1);
        saveCart();
        syncQuantity();
      });

      minusButton.addEventListener("click", () => {
        const currentCount = cart.get(itemKey) || 0;
        const nextCount = Math.max(currentCount - 1, 0);
        if (nextCount === 0) {
          cart.delete(itemKey);
        } else {
          cart.set(itemKey, nextCount);
        }
        saveCart();
        syncQuantity();
      });

      plusButton.addEventListener("click", () => {
        cart.set(itemKey, (cart.get(itemKey) || 0) + 1);
        saveCart();
        syncQuantity();
      });

      clearButton.addEventListener("click", () => {
        cart.delete(itemKey);
        saveCart();
        syncQuantity();
      });

      controls.appendChild(minusButton);
      controls.appendChild(countBadge);
      controls.appendChild(plusButton);
      controls.appendChild(clearButton);

      syncQuantity();

      actions.appendChild(preview);
      actions.appendChild(addButton);
      actions.appendChild(controls);

      const content = document.createElement("div");
      content.className = "detail-row__content";
      content.appendChild(main);
      content.appendChild(actions);

      li.appendChild(img);
      li.appendChild(content);
      list.appendChild(li);
    });

    sheet.appendChild(list);
    detail.appendChild(topbar);
    detail.appendChild(hero);
    detail.appendChild(sheet);
    requestAnimationFrame(() => {
      detail.classList.add("is-visible");
      if (Number.isInteger(selectedItemIndex)) {
        const selectedRow = detail.querySelector(".detail-row--selected");
        if (selectedRow) selectedRow.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
    updateCartSummary(lang);
    attachImageClickListeners();
  }

  function showWelcomePage() {
    document.getElementById("page-welcome").classList.add("is-active");
    document.getElementById("page-menu").classList.remove("is-active");
    toggleCartDrawer(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showMenuPage(scrollTop) {
    document.getElementById("page-welcome").classList.remove("is-active");
    document.getElementById("page-menu").classList.add("is-active");
    toggleCartDrawer(false);
    if (scrollTop !== false) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateTopBar(isDetail) {
    const intro = document.getElementById("ui-menu-intro");
    const sectionsBtn = document.getElementById("ui-back-sections");
    const shell = document.querySelector(".menu-shell");
    if (intro) intro.hidden = !!isDetail;
    if (sectionsBtn) sectionsBtn.hidden = !isDetail;
    if (shell) shell.classList.toggle("menu-shell--detail", !!isDetail);
  }

  function showCategoryHub(lang, scrollTop) {
    const hub = document.getElementById("menu-hub");
    const detail = document.getElementById("menu-detail");
    if (detail) {
      detail.innerHTML = "";
      detail.hidden = true;
    }
    if (hub) hub.hidden = false;
    toggleCartDrawer(false);
    renderHub(lang);
    updateTopBar(false);
    updateCartSummary(lang);
    if (scrollTop !== false) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showCategoryDetail(lang, catId, scrollTop, selectedItemIndex) {
    const cat = MENU_DATA.find((c) => c.id === catId);
    if (!cat) {
      setHashMenuHub();
      return;
    }
    const hub = document.getElementById("menu-hub");
    const detail = document.getElementById("menu-detail");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartSummary = document.getElementById("cart-summary");
    if (hub) {
      hub.hidden = false;
      renderHub(lang);
    }
    if (detail) {
      detail.hidden = false;
      renderDetail(lang, cat, selectedItemIndex);
    }
    toggleCartDrawer(false);
    if (cartSummary) {
      cartSummary.setAttribute("aria-expanded", "false");
    }
    updateTopBar(true);
    updateCartSummary(lang);
    if (scrollTop !== false) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function refreshMenuView(lang) {
    const route = getMenuRoute();
    if (route.type !== "menu") return;
    if (route.cat) showCategoryDetail(lang, route.cat, false, route.item);
    else showCategoryHub(lang, false);
  }

  function applyRoute() {
    const route = getMenuRoute();
    if (route.type === "welcome") {
      showWelcomePage();
      return;
    }
    showMenuPage(!(route.cat && Number.isInteger(route.item)));
    const lang = getLang();
    if (route.cat && MENU_DATA.some((c) => c.id === route.cat)) {
      showCategoryDetail(lang, route.cat, false, route.item);
    } else if (route.cat) {
      setHashMenuHub();
    } else {
      showCategoryHub(lang, false);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    const lang = getLang();
    applyLang(lang);
    applyUiStrings(lang);
    applyRoute();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });

    const cta = document.getElementById("ui-cta");
    if (cta) {
      cta.addEventListener("click", () => {
        const items = MENU_DATA.flatMap((cat) =>
          cat.items.map((item, index) => ({ catId: cat.id, itemIndex: index })),
        );
        const randomItem = items[Math.floor(Math.random() * items.length)];
        if (randomItem) {
          setHashMenuItem(randomItem.catId, randomItem.itemIndex);
        } else {
          setHashMenuHub();
        }
        applyRoute();
      });
    }

    const back = document.getElementById("ui-back");
    if (back) {
      back.addEventListener("click", () => {
        setHashWelcome();
        applyRoute();
      });
    }

    const backSections = document.getElementById("ui-back-sections");
    if (backSections) {
      backSections.addEventListener("click", () => {
        setHashMenuHub();
        applyRoute();
      });
    }

    const imageModalClose = document.getElementById("image-modal-close");
    if (imageModalClose) {
      imageModalClose.addEventListener("click", closeImageModal);
    }

    const imageModal = document.getElementById("image-modal");
    if (imageModal) {
      const overlay = imageModal.querySelector(".image-modal__overlay");
      if (overlay) {
        overlay.addEventListener("click", closeImageModal);
      }
    }

    const cartSummary = document.getElementById("cart-summary");
    const cartDrawer = document.getElementById("cart-drawer");

    const floatingCart = document.createElement("button");
    floatingCart.type = "button";
    floatingCart.className = "cart-fab";
    floatingCart.id = "cart-fab";
    floatingCart.setAttribute("aria-label", "عرض السلة");
    floatingCart.innerHTML = '<span class="cart-fab__icon" aria-hidden="true">🛍️</span><span class="cart-fab__count" id="cart-fab-count">0</span>';
    document.body.appendChild(floatingCart);

    if (cartSummary && cartDrawer) {
      cartSummary.addEventListener("click", () => {
        toggleCartDrawer();
      });
      cartSummary.setAttribute("aria-expanded", "false");
    }

    const floatingCartButton = document.getElementById("cart-fab");
    if (floatingCartButton) {
      floatingCartButton.addEventListener("click", () => {
        toggleCartDrawer();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeImageModal();
      }
    });

    window.addEventListener("hashchange", () => {
      const route = getMenuRoute();
      if (route.type === "welcome") {
        showWelcomePage();
        return;
      }
      showMenuPage();
      refreshMenuView(getLang());
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
