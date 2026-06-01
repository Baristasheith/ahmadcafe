
/**
 * مطعم وكافي أحمد — بيانات القائمة (عربي / English / کوردی)
 */
const MENU_DATA = [
  {
    id: "fresh-juices",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1400&q=80",
    titles: {
      ar: "العصائر الطبيعية",
      en: "Fresh Juices",
      ku: "شیڕە سروشتییەکان",
    },
    items: [
      {
        n: { ar: "عصير برتقال", en: "Orange Juice", ku: "شیڕی پرتەقاڵ" },
        p: 3000,
        img: "https://cdn.salla.sa/yAmra/6lhzzeA55277IbjGtzFpuNKBJSizvlYRzThjAR1e.jpg",
      },
      {
        n: { ar: "عصير ليمون", en: "Lemon Juice", ku: "شیڕی لیموون" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhi5sUp_ynvKNR3WTt_q9z59fX0Asn4Z49fg&s",
      },
      {
        n: { ar: "عصير رمان", en: "Pomegranate Juice", ku: "شیڕی هەنار" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5z9RWG9Z4aWOEXl9lEtLjttVzAl6J2CNnw&s",
      },
      {
        n: { ar: "عصير فراولة", en: "Strawberry Juice", ku: "شیڕی فراولە" },
        p: 3000,
        img: "https://the-foodinc.com/cdn/shop/files/strawberry.jpg?v=1716281995&width=1445",
      },
      {
        n: { ar: "عصير مانجا", en: "Mango Juice", ku: "شیڕی مانگۆ" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoTtGfmd1NrQmrnevAM-FganNtNyx1usPSg&s",
      },
      {
        n: { ar: "عصير أناناس", en: "Pineapple Juice", ku: "شیڕی ئەنەناس" },
        p: 3000,
        img: "https://png.pngtree.com/thumb_back/fh260/background/20241117/pngtree-glass-of-pineapple-juice-with-fruit-image_16582647.jpg",
      },
      {
        n: { ar: "عصير أناناس طبيعي", en: "Natural Pineapple Juice", ku: "شیڕی ئەنەناسی سروشتی" },
        p: 10000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVi6xE9O4FbE7hJZIO_z0AaVmIwnkD33xDeDIca1bVYg&s",
      },
      {
        n: { ar: "عصير بولو", en: "Polo Juice", ku: "شیڕی پۆلۆ" },
        p: 3000,
        img: "https://www.imcheftoday.com/wp-content/uploads/2025/07/matcha_chia_seed_lemonade-768x768.webp",
      },
      {
        n: { ar: "عصير ليمون مع زنجبيل", en: "Lemon & Ginger Juice", ku: "شیڕی لیموون و زەنجەبیل" },
        p: 3000,
        img: "https://png.pngtree.com/thumb_back/fh260/background/20220716/pngtree-honey-ginger-lemonade-honey-refrigerated-organic-photo-image_47624796.jpg",
      },
      {
        n: { ar: "عصير كيوي", en: "Kiwi Juice", ku: "شیڕی کیوی" },
        p: 3000,
        img: "https://aboalirestaurants.com/wp-content/uploads/2024/06/21-Kiwi-Juice-32-AED.jpg",
      },
      {
        n: { ar: "عصير سندي", en: "Sindy Juice", ku: "شیڕی سەندی" },
        p: 3000,
        img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "كندور موسمي", en: "Seasonal Cantaloupe", ku: "کەنەنگی وەرزی" },
        p: 3000,
        img: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/muskmelon_juice.jpg",
      },
      {
        n: { ar: "عصير تفاح", en: "Apple Juice", ku: "شیڕی سێو" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fdXgVKjr3Flw30ckMAXfk1QnuEgr_9QDEQ&s",
      },
      {
        n: { ar: "عصير جزر", en: "Carrot Juice", ku: "شیڕی زەردەک" },
        p: 3000,
        img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=480&q=80",
      },
    ],
  },
  {
    id: "smoothies",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1400&q=80",
    titles: { ar: "السموذي", en: "Smoothies", ku: "سمۆزی" },
    items: [
      {
        n: { ar: "سموزي مشكل", en: "Mixed Smoothie", ku: "سمۆزی تێکەڵ" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "سموزي فراولة", en: "Strawberry Smoothie", ku: "سمۆزی فراولە" },
        p: 4000,
        img: "https://almmedia.almarai.com/Recipes/Strawberry-Protein-Smoothie,942024102637AM.png",
      },
      {
        n: { ar: "سموزي اناناس", en: "Pineapple Smoothie", ku: "سمۆزی ئەنەناس" },
        p: 4000,
        img: "https://aklat.net/foods/323/18851-pineapple-smoothie-2.png",
      },
      {
        n: { ar: "سموزي بلوبيري", en: "Blueberry Smoothie", ku: "سمۆزی بلووبێری" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "سموزي خوخ", en: "Peach Smoothie", ku: "سمۆزی قۆخ" },
        p: 4000,
        img: "https://kitchen.sayidaty.net/uploads/small/b7/b717342c7aac70be7362ab8be11d695a_w750_h500.jpg",
      },
    ],
  },
  {
    id: "coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    titles: { ar: "القهوة", en: "Coffee", ku: "قاوە" },
    items: [
      {
        n: { ar: "قهوة تركي", en: "Turkish Coffee", ku: "قاوەی تورکی" },
        p: 1000,
        img: "https://store.alameedcoffee.com/cdn/shop/articles/img-1726051589406.jpg?v=1734268592&width=1920",
      },
      {
        n: { ar: "قهوة عربي", en: "Arabic Coffee", ku: "قاوەی عەرەبی" },
        p: 1000,
        img: "https://store.alameedcoffee.com/cdn/shop/articles/img-1726051589406.jpg?v=1734268592&width=1920",
      },
      {
        n: { ar: "قهوة كزوان", en: "Kazwan Coffee", ku: "قاوەی کزوان" },
        p: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl6jypyln5IXhLxkef79yegChH1opLjL8Iw&s",
      },
      {
        n: { ar: "قهوة لبنانية", en: "Lebanese Coffee", ku: "قاوەی لوبنانی" },
        p: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl6jypyln5IXhLxkef79yegChH1opLjL8Iw&s",
      },
      {
        n: { ar: "قهوة بالحليب", en: "Coffee with Milk", ku: "قاوە لەگەڵ شیری" },
        p: 2000,
        img: "https://www.shorouknews.com/uploadedimages/Other/original/French-coffee-with-hazelnut-and-milk.jpg",
      },
      {
        n: { ar: "نسكافي بلاك", en: "Nescafé Black", ku: "نسکافێ ڕەش" },
        p: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQciH9mMGCwrPNZmiNhYj4UUlBTpfNVsKYw&s",
      },
      {
        n: { ar: "هوت جكليت", en: "Hot Chocolate", ku: "شوکۆلاتەی گەرم" },
        p: 2000,
        img: "https://kitchen.sayidaty.net/uploads/small/4a/4a819767b4ecd3a3aac10521c5c4ae2d_w750_h500.jpg",
      },
      {
        n: { ar: "وايت هوت جكليت", en: "White Hot Chocolate", ku: "شوکۆلاتەی سپی گەرم" },
        p: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhunBr0V0Df38816ROw97Cr7ol01oo5n9rg&s",
      },
      {
        n: { ar: "قهوة بالفستق", en: "Pistachio Coffee", ku: "قاوە لەگەڵ فستق" },
        p: 3000,
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "هوت موكا", en: "Hot Mocha", ku: "مۆکای گەرم" },
        p: 3000,
        img: "https://media.zid.store/7c34b60d-39b9-4924-8931-373aa8288793/7c7324d3-f56b-43bd-87d3-bd3b0cad880e.jpg",
      },
      {
        n: { ar: "اسبريسو سنكل", en: "Single Espresso", ku: "ئێسپرێسۆ تاک" },
        p: 2000,
        img: "https://png.pngtree.com/thumb_back/fh260/background/20240213/pngtree-cup-of-hot-espresso-coffee-shot-on-wooden-table-photo-image_3124173.jpg",
      },
      {
        n: { ar: "اسبريسو دبل", en: "Double Espresso", ku: "ئێسپرێسۆ دوو قات" },
        p: 3000,
        img: "https://png.pngtree.com/thumb_back/fh260/background/20240213/pngtree-cup-of-hot-espresso-coffee-shot-on-wooden-table-photo-image_3124173.jpg",
      },
      {
        n: { ar: "اسبريسو موكا", en: "Espresso Mocha", ku: "ئێسپرێسۆ مۆکا" },
        p: 3000,
        img: "https://png.pngtree.com/thumb_back/fh260/background/20240213/pngtree-cup-of-hot-espresso-coffee-shot-on-wooden-table-photo-image_3124173.jpg",
      },
      {
        n: { ar: "اسبريسو بان موكا", en: "Espresso Ban Mocha", ku: "ئێسپرێسۆ بان مۆکا" },
        p: 3000,
        img: "https://png.pngtree.com/thumb_back/fh260/background/20240213/pngtree-cup-of-hot-espresso-coffee-shot-on-wooden-table-photo-image_3124173.jpg",
      },
      {
        n: { ar: "امريكانو", en: "Americano", ku: "ئەمریکانۆ" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0AqjMqg5hjFVnK9n55VP1Xq_H0jXwywUuw&s",
      },
    ],
  },
  {
    id: "hot-drinks",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1400&q=80",
    titles: { ar: "المشروبات الساخنة", en: "Hot Drinks", ku: "خواردنەوەی گەرم" },
    items: [
      {
        n: { ar: "كمون وليمون", en: "Cumin & Lemon", ku: "کمون و لیموون" },
        p: 1000,
        img: "https://cdn.altibbi.com/cdn/cache/xlarge/image/2021/04/16/3254e0c6d177f73fd0def473539c2bf3.png.webp",
      },
      {
        n: { ar: "متة", en: "Mate", ku: "ماتە" },
        p: 3000,
        img: "https://cdn.salla.sa/jZZEwq/80ef744d-eab1-41cf-b73c-83b201b0dbab-1000x1000-pNvtA0Av1pGcpK5G3hIO10TMsK8V6W056BRpsAYI.png",
      },
      {
        n: { ar: "زهورات", en: "Herbal Tea", ku: "دەمە زەڕەفەکان" },
        p: 1500,
        img: "https://sharfto.sh.sy/upload/product/13187685521689957037.jpeg",
      },
      {
        n: { ar: "زنجبيل مع ليمون", en: "Ginger & Lemon", ku: "زەنجەبیل و لیموون" },
        p: 2000,
        img: "https://thehappyfrog.com.au/wp-content/uploads/2025/05/Screenshot-2025-05-13-at-10.52.34%E2%80%AFam-1024x667.png",
      },
      {
        n: { ar: "حليب", en: "Milk", ku: "شیری" },
        p: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoedPR1iPfexGFJVTgM7xBl3p6QhiyTq83w&s",
      },
      {
        n: { ar: "1x3", en: "1×3", ku: "١×٣" },
        p: 1500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKcnrkQdrX1Oscu1JmUmh4OLIduj2oHcaLw&s",
      },
      {
        n: { ar: "كابتشينو", en: "Cappuccino", ku: "کاپوچینۆ" },
        p: 1500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77K2PjDFdO77GbWCepZOOeyWicVEuVnk6kxjPFXWFOg&s",
      },
      {
        n: { ar: "شاي كرك", en: "Karak Tea", ku: "چای کرک" },
        p: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZVuHBB_PRyTDOT09q0DimDh8QcZa-BJTzg&s",
      },
      {
        n: { ar: "شاي اخضر", en: "Green Tea", ku: "چای سەوز" },
        p: 1000,
        img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "شاي مع ليمون", en: "Tea with Lemon", ku: "چای لەگەڵ لیموون" },
        p: 1000,
        img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "شاي مع نعناع", en: "Tea with Mint", ku: "چای لەگەڵ نەعناع" },
        p: 1000,
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "شاي نسلة", en: "Nescafé Tea", ku: "چای نێسکافێ" },
        p: 1500,
        img: "https://cdn.al-ain.com/images/2022/8/30/198-222708-drinking-cups-tea-day-extends-life_700x400.jpg",
      },
      {
        n: { ar: "سحلب", en: "Sahlab", ku: "سەحلەب" },
        p: 2000,
        img: "https://kitchen.sayidaty.net/uploads/small/26/26cc7e15b6a79199dbbfbf5578ce0a8a_w750_h750.jpg",
      },
    ],
  },
  {
    id: "desserts",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80",
    titles: { ar: "الحلويات", en: "Desserts & Pastry", ku: "شیرینی و پەستری" },
    items: [
      {
        n: { ar: "كريب براونيز", en: "Brownie Crêpe", ku: "کرێپ براونیز" },
        p: 7000,
        img: "https://mayarcoffee.com/wp-content/uploads/2019/06/D131EB42-1D43-4007-85C0-CD854A0C41FC.jpeg",
      },
      {
        n: { ar: "كريب نوتيلا", en: "Nutella Crêpe", ku: "کرێپ نوتێلا" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWgdlxP8S3L9ucxyOMP9HZeR8wP3VF-s7UA&s",
      },
      {
        n: { ar: "كريب فستق", en: "Pistachio Crêpe", ku: "کرێپ فستق" },
        p: 5000,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/tns6sp6bp2nvou7slph2jycv4p9x/Untitled%20design%20-%202024-04-11T110626.626.jpg?w=1080&q=75",
      },
      {
        n: { ar: "كريب فواكه", en: "Fruit Crêpe", ku: "کرێپ میوە" },
        p: 5000,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/tns6sp6bp2nvou7slph2jycv4p9x/Untitled%20design%20-%202024-04-11T110626.626.jpg?w=1080&q=75",
      },
      {
        n: { ar: "كريب كيندر", en: "Kinder Crêpe", ku: "کرێپ کیندەر" },
        p: 5000,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/tns6sp6bp2nvou7slph2jycv4p9x/Untitled%20design%20-%202024-04-11T110626.626.jpg?w=1080&q=75",
      },
      {
        n: { ar: "كريب لوتس", en: "Lotus Crêpe", ku: "کرێپ لۆتس" },
        p: 5000,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/tns6sp6bp2nvou7slph2jycv4p9x/Untitled%20design%20-%202024-04-11T110626.626.jpg?w=1080&q=75",
      },
      {
        n: { ar: "وافل احمد", en: "Ahmed Waffle", ku: "وافڵی ئەحمەد" },
        p: 7000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3oTpuO8SEkbQwwx6pCVFBdoe3x6msMKypw&s",
      },
      {
        n: { ar: "وافل", en: "Waffle", ku: "وافڵ" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3oTpuO8SEkbQwwx6pCVFBdoe3x6msMKypw&s",
      },
      {
        n: { ar: "بان كيك", en: "Pancake", ku: "پانکێک" },
        p: 5000,
        img: "https://www.mzamer.com/media/images/22/07/24/e343bfe345.jpg",
      },
      {
        n: { ar: "كنافة فستق", en: "Pistachio Kunafa", ku: "کنافە فستق" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zveoOp5qxXkjqn5Iwgw8UAiTAv7e4MUFLw&s",
      },
      {
        n: { ar: "كنافة جبن", en: "Cheese Kunafa", ku: "کنافە پەنیری" },
        p: 4000,
        img: "https://storage.de.cloud.ovh.net/v1/AUTH_822fb2b5f08942e5991f0bbd03a121b7/minidine-prod/coffeshop/items/thumbnail/2851599328205_lg.jpeg",
      },
      {
        n: { ar: "كنافة مشكل", en: "Mixed Kunafa", ku: "کنافە تێکەڵ" },
        p: 6000,
        img: "https://storage.de.cloud.ovh.net/v1/AUTH_822fb2b5f08942e5991f0bbd03a121b7/minidine-prod/coffeshop/items/thumbnail/2851599328205_lg.jpeg",
      },
      {
        n: { ar: "بركر كنافة", en: "Kunafa Burger", ku: "بەرگەری کنافە" },
        p: 8000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhTSTclCiIx6VqZOl43wQ1ibXjRCve5I8lQ&s",
      },
      {
        n: { ar: "كنافة قشطة", en: "Cream Kunafa", ku: "کنافە قشطە" },
        p: 6000,
        img: "https://storage.de.cloud.ovh.net/v1/AUTH_822fb2b5f08942e5991f0bbd03a121b7/minidine-prod/coffeshop/items/thumbnail/2851599328205_lg.jpeg",
      },
      {
        n: { ar: "موالح", en: "Mwalih", ku: "موالح" },
        p: 3000,
        img: "https://images.unsplash.com/photo-1605196345838-132c33db3116?auto=format&fit=crop&w=480&q=80",
      },
    ],
  },
  {
    id: "ice-cream",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1400&q=80",
    titles: {
      ar: "الأيس كريم والفواكه",
      en: "Ice Cream & Fruit",
      ku: "ئایس کرێم و میوە",
    },
    items: [
      {
        n: { ar: "صحن فواكه", en: "Fruit Plate", ku: "قاپی میوە" },
        p: 7000,
        img: "https://cdn.salla.sa/gZbgd/1a857edd-62e1-4723-a652-753190cb703f-1000x1000-6dwPj1lB9RFT1O6bLwFJJqFcTHreR1p5phTgVDTc.jpg",
      },
      {
        n: { ar: "صحن فواكه كبير", en: "Large Fruit Plate", ku: "قاپی میوەی گەورە" },
        p: 10000,
        img: "https://cdn.salla.sa/gZbgd/1a857edd-62e1-4723-a652-753190cb703f-1000x1000-6dwPj1lB9RFT1O6bLwFJJqFcTHreR1p5phTgVDTc.jpg",
      },
      {
        n: { ar: "سلطة فواكه وسط", en: "Medium Fruit Salad", ku: "سلاتی میوەی ناوەند" },
        p: 8000,
        img: "https://www.nestle-cereals.com/mena/sites/g/files/qirczx1051/files/styles/1_1_768px_width/public/srh_recipes/6b1085ba4f112969800b172d6a852c7f.jpg.webp?itok=lw9dDvi3",
      },
      {
        n: { ar: "سلطة فواكه كبير VIP", en: "VIP Large Fruit Salad", ku: "سلاتی میوەی گەورەی VIP" },
        p: 12000,
        img: "https://www.nestle-cereals.com/mena/sites/g/files/qirczx1051/files/styles/1_1_768px_width/public/srh_recipes/6b1085ba4f112969800b172d6a852c7f.jpg.webp?itok=lw9dDvi3",
      },
      {
        n: { ar: "ايس كريم ايطالي", en: "Italian Ice Cream", ku: "ئایس کرێمی ئیتاڵی" },
        p: 3000,
        img: "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2022/08/13/images/219380.jpg",
      },
      {
        n: { ar: "ايس كريم بنانا سبليت", en: "Banana Split", ku: "بەنانا سپلێت" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelBva33V0NIhoNFZUP7ebyuXdhHHTdzCWow&s",
      },
      {
        n: { ar: "ايس كريم شوكولاتا", en: "Chocolate Ice Cream", ku: "ئایس کرێمی شوکۆلاتا" },
        p: 4000,
        img: "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2022/08/13/images/219380.jpg",
      },
    ],
  },
  {
    id: "hookah",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpftM6L-0VsDgZ0is0x2lCnzOLtIei9mCkg&s",
    titles: { ar: "الأراكيل", en: "Hookah", ku: "نەرگیلە" },
    items: [
      {
        n: { ar: "خلطة أحمد", en: "Ahmed Mix", ku: "تێکەڵەی ئەحمەد" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m4vPMu_MT6n0lgqhWFzHfUqwd1zhU56Jjw&s",
      },
      {
        n: { ar: "ليمون ونعناع", en: "Lemon & Mint", ku: "لیموون و نەعناع" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m4vPMu_MT6n0lgqhWFzHfUqwd1zhU56Jjw&s",
      },
      {
        n: { ar: "علك ونعناع", en: "Gum & Mint", ku: "عەلک و نەعناع" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m4vPMu_MT6n0lgqhWFzHfUqwd1zhU56Jjw&s",
      },
      {
        n: { ar: "تفاحتين", en: "Two Apples", ku: "دوو سێو" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m4vPMu_MT6n0lgqhWFzHfUqwd1zhU56Jjw&s",
      },
      {
        n: { ar: "عنب", en: "Grape", ku: "تەڕخان" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m4vPMu_MT6n0lgqhWFzHfUqwd1zhU56Jjw&s",
      },
      {
        n: { ar: "خلطة VIP", en: "VIP Mix", ku: "تێکەڵەی VIP" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m4vPMu_MT6n0lgqhWFzHfUqwd1zhU56Jjw&s",
      },
      {
        n: { ar: "خلطة امريكانو", en: "Americano Mix", ku: "تێکەڵەی ئەمریکانۆ" },
        p: 7000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m4vPMu_MT6n0lgqhWFzHfUqwd1zhU56Jjw&s",
      },
      {
        n: { ar: "اركيل فريش سندي", en: "Fresh Sindy Hookah", ku: "نەرگیلەی سەندی فرێش" },
        p: 10000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmIwVrNfcgPTbMc0kXv-JBBKASFcXM_ZKpg&s",
      },
      {
        n: { ar: "اركيل فريش اناناس طبيعي", en: "Fresh Natural Pineapple Hookah", ku: "نەرگیلەی ئەنەناسی سروشتی" },
        p: 15000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyu89N2vW0_b2f8Ml5fp21FOXiiHBP2NDpgg&s",
      },
    ],
  },
  {
    id: "ice-coffee",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80",
    titles: { ar: "القهوة الباردة", en: "Iced Coffee", ku: "قاوەی سارد" },
    items: [
      {
        n: { ar: "ايس كافي", en: "Iced Coffee", ku: "ئایس کافێ" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGZg0_2ID3Fh7XYKtQ1wo_ANUjV4vecwgJLWumLBj9w&s",
      },
      {
        n: { ar: "ايس كافي موكا", en: "Iced Mocha", ku: "ئایس کافێ مۆکا" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "ايس كافي كراميل", en: "Iced Caramel", ku: "ئایس کافێ کارامێل" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHW5nNlvrwk7hX800WIcYGxdc-RmekVzeP7w&s",
      },
      {
        n: { ar: "ايس كافي لوتس", en: "Iced Lotus", ku: "ئایس کافێ لۆتس" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "فرابتشينو", en: "Frappuccino", ku: "فراپوچینۆ" },
        p: 4000,
        img: "https://www.starbucks.co.nz/content/menu/0709658001652996079.jpg",
      },
      {
        n: { ar: "ايس كافي احمد", en: "Ahmed Iced Coffee", ku: "ئایس کافێی ئەحمەد" },
        p: 5000,
        img: "https://cdn.salla.sa/gEDKd/f816f74f-7189-4103-891a-35085d336784-667.5x1000-g1CAMRh2FsMSl5H6Vh1hqFMpB3SVBHYkHFV7lbuX.jpg",
      },
      {
        n: { ar: "ايس كافي بيستاشيو", en: "Iced Pistachio Coffee", ku: "ئایس کافێ فستق" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDE_2MQ3BXMDcOT73q9wj_UyJQltTyeWVXow&s",
      },
    ],
  },
  {
    id: "milkshake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbHr70KlNSdTPVsBCUe9Ek6cTWGd8enKamA&s",
    titles: { ar: "الميلك شيك", en: "Milkshake", ku: "میلک شیک" },
    items: [
      {
        n: { ar: "ميلك شيك فانيل", en: "Vanilla Milkshake", ku: "میلک شیک ڤانیل" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_U2G2ERrIKQ4m0RqL7iVtkq37i4kCAuGPKw&s",
      },
      {
        n: { ar: "ميلك شيك فراولة", en: "Strawberry Milkshake", ku: "میلک شیک فراولە" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "ميلك شيك اوريو", en: "Oreo Milkshake", ku: "میلک شیک ئۆرێۆ" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAp8vkwI-UMAY9u6TkpfDQ5WUwucwX_fHj8w&s",
      },
      {
        n: { ar: "ميلك شيك فستق", en: "Pistachio Milkshake", ku: "میلک شیک فستق" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZ5R-KlVoikM4gvSNnWgCffs3NON6NY0pdQ&s",
      },
      {
        n: { ar: "ميلك شيك نوتيلا", en: "Nutella Milkshake", ku: "میلک شیک نوتێلا" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbwBf3bNbpsKp_P88lbc0Kns_eSfAQPlrDQ&s",
      },
      {
        n: { ar: "ميلك شيك لوتس", en: "Lotus Milkshake", ku: "میلک شیک لۆتس" },
        p: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5SEi2bRfX2IvbWnNO8u6D1JxL-2cgKM9FQ&s",
      },
    ],
  },
  {
    id: "cocktails",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeb7W5il9tUvq3wUH0meIbpknVBnZl4CFEA&s",
    titles: { ar: "الكوكتيلات", en: "Cocktails", ku: "کۆکتێل" },
    items: [
      {
        n: { ar: "موز وحليب", en: "Banana & Milk", ku: "مۆز و شیری" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyHxJWlc1IBMvQf9tTpDmxqI4RPdg0sXfdw&s",
      },
      {
        n: { ar: "موز وحليب وفراولة", en: "Banana, Milk & Strawberry", ku: "مۆز و شیری و فراولە" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNOI_GN890qnyjU2cs3jld-cb5wHS0YqiGQ&s",
      },
      {
        n: { ar: "موز وحليب وعسل", en: "Banana, Milk & Honey", ku: "مۆز و شیری و هەنگوین" },
        p: 3000,
        img: "https://s.lahamag.com/storage/attachments/150/Capture_997785_1.png/r/640/Capture_997785_1.png",
      },
      {
        n: { ar: "موز وحليب ونوتيلا", en: "Banana, Milk & Nutella", ku: "مۆز و شیری و نوتێلا" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyDoxc1N4wFlLT9dNM_6VrK2aVYD8tPX7UA&s",
      },
      {
        n: { ar: "موز وحليب ومكسرات", en: "Banana, Milk & Nuts", ku: "مۆز و شیری و گووزە" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWfgNP_1HDF7HdjA0xyvCaK7_vzhCG1TWPg&s",
      },
      {
        n: { ar: "كوكتيل فواكه", en: "Fruit Cocktail", ku: "کۆکتێلی میوە" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بينا كولادا", en: "Piña Colada", ku: "پینا کۆلادا" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "أفوكادو", en: "Avocado", ku: "ئافۆکادۆ" },
        p: 6000,
        img: "https://khairatlebanon.com/storage/370/conversions/01J2KFZYY8WSEZQQH4QEJT880D-HD.png",
      },
      {
        n: { ar: "جوز الهند", en: "Coconut", ku: "كيه ز هند" },
        p: 4000,
        img: "https://img.pikbest.com/photo/20251030/with-coconut-shell-cocktails-bright-umbrellas-and-neon-beach-reflections_11981727.jpg!f305cw",
      },
      {
        n: { ar: "امبراطور", en: "Emperor", ku: "ئیمبراتۆر" },
        p: 12000,
        img: "https://amenu.net/storage/Item/image/16753/conversions/66769375225f8_IMG_0162-menu.webp",
      },
      {
        n: { ar: "كوكتيل احمد", en: "Ahmed Cocktail", ku: "کۆکتێلی ئەحمەد" },
        p: 6000,
        img: "https://m.media-amazon.com/images/I/71lGKLtB7JL.jpghttps://m.media-amazon.com/images/I/71lGKLtB7JL.jpg",
      },
    ],
  },
  {
    id: "mojito",
    image:
      "https://cdn.al-ain.com/lg/images/2023/11/15/206-232307-cda3073352.jpg",
    titles: { ar: "الموهيتو", en: "Mojito", ku: "مۆهیتۆ" },
    items: [
      {
        n: { ar: "بلو هواي", en: "Blue Hawaii", ku: "بلوو هاوایی" },
        p: 4000,
        img: "https://preview.redd.it/the-blue-hawaiian-is-alright-in-my-book-v0-yeb4z7w2q5qe1.jpeg?auto=webp&s=5781b930841f0a93fcbcb55c2004d2a370c77344",
      },
      {
        n: { ar: "موهيتو بجميع النكهات", en: "Mojito (All Flavors)", ku: "مۆهیتۆ بە هەموو تامەکان" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "موهيتو اورجينال", en: "Original Mojito", ku: "مۆهیتۆ ئۆرجیناڵ" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "اديشن موهيتو", en: "Addiction Mojito", ku: "ئادیشن مۆهیتۆ" },
        p: 4000,
        img: "https://bait-alyasamine.com/storage/uploads/MenuImages/Passion%20fruit%20mojito/%20-1734941885.jpg",
      },
      {
        n: { ar: "NOVARO", en: "NOVARO", ku: "NOVARO" },
        p: 4000,
        img: "https://images.unsplash.com/photo-1461823385004-d7660947a7c0?auto=format&fit=crop&w=480&q=80",
      },
      
      
    ],
  },
  {
    id: "pies",
    image:
      "https://i.ytimg.com/vi/-WeOcTz4OtI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-PWIFRlj5i8jvwIk6ZDQY5Egb4w",
    titles: { ar: "قسم الفطائر", en: "Oven Pies", ku: "پایەکانی فڕن" },
    items: [
      {
        n: { ar: "جبنة كوردية", en: "Kurdish Cheese", ku: "پەنیری کوردی" },
        p: 1500,
        img: "https://images.deliveryhero.io/image/hungerstation/menuitem/image_url_ref/df5aba07fafc4dc912531e9ca45131a8.jpg?width=1440&quality=75&webp=true",
      },
      {
        n: { ar: "قشقوان", en: "Kashkawan", ku: "قەشقەوان" },
        p: 1500,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/3gj1jp55nqp91lgup51uhvm4xcg7/%D8%AC%D8%A8%D9%86_%D9%82%D8%B4%D9%82%D9%88%D8%A7%D9%86.jpg?w=1080&q=75",
      },
      {
        n: { ar: "قشقوان زيتون", en: "Kashkawan & Olives", ku: "قەشقەوان و زەیتوون" },
        p: 1500,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/3gj1jp55nqp91lgup51uhvm4xcg7/%D8%AC%D8%A8%D9%86_%D9%82%D8%B4%D9%82%D9%88%D8%A7%D9%86.jpg?w=1080&q=75",
      },
      {
        n: { ar: "قشقوان فطر", en: "Kashkawan & Mushroom", ku: "قەشقەوان و قارچک" },
        p: 1500,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/3gj1jp55nqp91lgup51uhvm4xcg7/%D8%AC%D8%A8%D9%86_%D9%82%D8%B4%D9%82%D9%88%D8%A7%D9%86.jpg?w=1080&q=75",
      },
      {
        n: { ar: "مرتديلا قشقوان", en: "Mortadella Kashkawan", ku: "مورتادێلا قەشقەوان" },
        p: 1500,
        img: "https://magic-stores.com/wp-content/uploads/2021/08/%D9%85%D8%B1%D8%AA%D8%AF%D9%8A%D9%84%D8%A7-%D8%A8%D8%A7%D9%84%D9%82%D8%B4%D9%82%D9%88%D8%A7%D9%86.png",
      },
      {
        n: { ar: "محمرة قشقوان", en: "Muhammara Kashkawan", ku: "مُحمرە قەشقەوان" },
        p: 1500,
        img: "https://i.ytimg.com/vi/jfMU4TmNYeE/hqdefault.jpg",
      },
      {
        n: { ar: "لحم عجين", en: "Lahm Bi Ajeen", ku: "گۆشت و خمیر" },
        p: 1500,
        img: "https://tajerlink.com/uploads/merchants/tj_2a8b2c_siraj_2a8b7a/documents/items/101627719212633059.jpg",
      },
      {
        n: { ar: "لحم عجين دبل", en: "Double Lahm Bi Ajeen", ku: "گۆشت و خمیری دوو قات" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gsl-FmQwBcTCQBQTWGk1PyDc-e3qvcNWQA&s",
      },
      {
        n: { ar: "لحم عجين دبل + بيض", en: "Double + Egg", ku: "دوو قات + هێلکە" },
        p: 3500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShasYfOFsVEps17hJa1d0OB0D3bzPg6xkS1g&s",
      },
      {
        n: { ar: "لحم عجين دبل + قشقوان", en: "Double + Kashkawan", ku: "دوو قات + قەشقەوان" },
        p: 3500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidNHr8OvwZIyCrUPaI8QvoQ5p8MxjuGzVdw&s",
      },
      {
        n: { ar: "لحم عجين + بيض", en: "Lahm Bi Ajeen + Egg", ku: "گۆشت و خمیر + هێلکە" },
        p: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShasYfOFsVEps17hJa1d0OB0D3bzPg6xkS1g&s",
      },
      {
        n: { ar: "شيش", en: "Shish", ku: "شیش" },
        p: 1500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyW6OjBPXIGKwHakaTxO7rmSwKdHVhFfmHA&s",
      },
      {
        n: { ar: "سجق / باسترما", en: "Sujuk / Pastrami", ku: "سجق / پاسترما" },
        p: 1500,
        img: "https://i.ytimg.com/vi/2Ws1gG-0j7o/maxresdefault.jpg",
      },
      {
        n: { ar: "بيتزا سوارية", en: "Sawareh Pizza", ku: "پیتزای سوارەیە" },
        p: 1500,
        img: "https://i.ytimg.com/vi/0PqKcEe_gJU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf7uhfIj_63Igde1xm8wKj1_z3Kw",
      },
      {
        n: { ar: "سنفورة", en: "Sanfoorah", ku: "سەنفورە" },
        p: 1500,
        img: "https://i.ytimg.com/vi/0PqKcEe_gJU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf7uhfIj_63Igde1xm8wKj1_z3Kw",
      },
      {
        n: { ar: "هوددوغ", en: "Hot Dog", ku: "هۆت دۆگ" },
        p: 1500,
        img: "https://i.ytimg.com/vi/0PqKcEe_gJU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf7uhfIj_63Igde1xm8wKj1_z3Kw",
      },
      {
        n: { ar: "زعتر", en: "Zaatar", ku: "زەعەتەر" },
        p: 1000,
        img: "https://kitchen.sayidaty.net/uploads/small/a6/a614c860b6966d13917fd33368b70b44_w750_h500.jpg",
      },
      {
        n: { ar: "محمرة", en: "Muhammara", ku: "مُحمرە" },
        p: 1000,
        img: "https://kitchen.sayidaty.net/uploads/small/ee/eea9020a7296cd1bc19654c18d408f19_w750_h500.jpg",
      },
      {
        n: { ar: "سبانغ", en: "Spanach", ku: "سپاناغ" },
        p: 1000,
        img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "دوبليكس", en: "Duplex", ku: "دوبلێکس" },
        p: 2000,
        img: "https://i.ytimg.com/vi/0PqKcEe_gJU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf7uhfIj_63Igde1xm8wKj1_z3Kw",
      },
      {
        n: { ar: "نوتيلا", en: "Nutella", ku: "نوتێلا" },
        p: 1000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6HDIs9wCrzka4OHHUFicdJpLF_7qscSeOA&s",
      },
      {
        n: { ar: "فطيرة احمد", en: "Ahmed Pie", ku: "پایەی ئەحمەد" },
        p: 4000,
        img: "https://i.ytimg.com/vi/0PqKcEe_gJU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf7uhfIj_63Igde1xm8wKj1_z3Kw",
      },
      {
        n: { ar: "فطيرة لحمة مع بيتزا", en: "Meat Pie with Pizza", ku: "پایەی گۆشت لەگەڵ پیتزا" },
        p: 4000,
        img: "https://damaskmart.com/cdn/shop/products/a6fd6062c0cd0328708365aa8cb6f990_1024x1024.jpg?v=1599473158",
      },
      {
        n: { ar: "سجق مع قشقوان", en: "Sujuk with Kashkawan", ku: "سجق لەگەڵ قەشقەوان" },
        p: 1500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliGl3jkSjKz1U01_YeRMxupbRdNQ765B6Fg&s",
      },
      {
        n: { ar: "كيلو لحم عجين", en: "1 kg Lahm Bi Ajeen", ku: "١ کیلۆ گۆشت و خمیر" },
        p: 25000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfQj6Hxhc4UnVZ3EDtALtD5lwc0uKNBBLJQ&s",
      },
      {
        n: { ar: "كيلو صفيحة باللبن", en: "1 kg Sfiha with Laban", ku: "١ کیلۆ سفیحە بە لبن" },
        p: 30000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfJfMusyl7OHTemYFny0pTladMfbTXKn21KGddQKW7g&s",
      },
      {
        n: { ar: "كيلو صفيحة مع دبس رمان", en: "1 kg Sfiha with Pomegranate Molasses", ku: "١ کیلۆ سفیحە لەگەڵ دبس هەنار" },
        p: 30000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfJfMusyl7OHTemYFny0pTladMfbTXKn21KGddQKW7g&s",
      },
    ],
  },
  {
    id: "shawarma",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyMEzvGYauD_GU-wPPBGCQ9zRnLaP53FMPw&s",
    titles: { ar: "قسم الشاورما", en: "Shawarma", ku: "شاورما" },
    items: [
      {
        n: { ar: "سندويش شاورما", en: "Shawarma Sandwich", ku: "ساندویچ شاورما" },
        p: 1500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyMEzvGYauD_GU-wPPBGCQ9zRnLaP53FMPw&s",
      },
      {
        n: { ar: "شاورما دبل", en: "Double Shawarma", ku: "شاورمای دوو قات" },
        p: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyMEzvGYauD_GU-wPPBGCQ9zRnLaP53FMPw&s",
      },
      {
        n: { ar: "شاورما صاج", en: "Saj Shawarma", ku: "شاورمای ساج" },
        p: 2000,
        img: "https://images.deliveryhero.io/image/talabat/MenuItems/3751637CC5D8377C14E2CB3AA617B04B",
      },
      {
        n: { ar: "شاورما صمون", en: "Samoon Shawarma", ku: "شاورمای سەمون" },
        p: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0--oRXd1FVB8kYIPTK7FtKjvRL_ew5Kv1KBBhiA84w&s",
      },
      {
        n: { ar: "جيز شاورما", en: "Cheese Shawarma", ku: "شاورما پەنیری" },
        p: 2500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyMEzvGYauD_GU-wPPBGCQ9zRnLaP53FMPw&s",
      },
      {
        n: { ar: "شاورما بطاطا", en: "Shawarma with Fries", ku: "شاورما لەگەڵ بەطاطا" },
        p: 1500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyMEzvGYauD_GU-wPPBGCQ9zRnLaP53FMPw&s",
      },
      {
        n: { ar: "شاورما عربي", en: "Arabic Shawarma", ku: "شاورمای عەرەبی" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5_UFiyaWnmohUbetmi9l9VByAqE1-NuEAg&s",
      },
      {
        n: { ar: "كيلو شاورما", en: "1 kg Shawarma", ku: "١ کیلۆ شاورما" },
        p: 20000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDyLpSy-myU4nrfqRZJrz4WfS8qaJLqpuaA&s",
      },
      {
        n: { ar: "بوكس شاورما", en: "Shawarma Box", ku: "بۆکسی شاورما" },
        p: 4000,
        img: "https://i.ytimg.com/vi/GBYOkzwxUug/maxresdefault.jpg",
      },
      {
        n: { ar: "فتة شاورما", en: "Shawarma Fattah", ku: "فتە شاورما" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq&s",
      },
      {
        n: { ar: "وجبة شاورما فرط مع جبنة", en: "Shawarma Meal with Cheese", ku: "وجبەی شاورما لەگەڵ پەنیری" },
        p: 7000,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/wkyl5m0i6g1oxbg7omicf54gjo6u/-.jpg",
      },
    ],
  },
  {
    id: "pizza",
    image:
      "https://static.webteb.net/images/content/ramadanrecipe_recipe_1284_317c83b072f-60f1-4476-9cbe-c2c5851f5755.jpg",
    titles: { ar: "قسم البيتزا", en: "Pizza", ku: "پیتزا" },
    priceTable: {
      ar: [
        { k: "وسط", v: 3000 },
        { k: "كبير", v: 5000 },
        { k: "دبل", v: 7000 },
        { k: "عائلي", v: 10000 },
      ],
      en: [
        { k: "Medium", v: 3000 },
        { k: "Large", v: 5000 },
        { k: "Double", v: 7000 },
        { k: "Family", v: 10000 },
      ],
      ku: [
        { k: "ناوەند", v: 3000 },
        { k: "گەورە", v: 5000 },
        { k: "دوو قات", v: 7000 },
        { k: "خێزانی", v: 10000 },
      ],
    },
    items: [
      {
        n: { ar: "بيتزا خضراوات", en: "Vegetable Pizza", ku: "پیتزای سەوزەوات" },
        img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بيتزا دجاج", en: "Chicken Pizza", ku: "پیتزای مریشک" },
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بيتزا لحم", en: "Meat Pizza", ku: "پیتزای گۆشت" },
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بيتزا بابروني", en: "Pepperoni Pizza", ku: "پیتزای پێپەرۆنی" },
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بيتزا مارغريتا", en: "Margherita Pizza", ku: "پیتزای مارگاریتا" },
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بيتزا مشكلة", en: "Mixed Pizza", ku: "پیتزای تێکەڵ" },
        img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بيتزا هوددوغ", en: "Hot Dog Pizza", ku: "پیتزای هۆت دۆگ" },
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs8iGEqDQ3BMbkvploYuNYmU5VIT0ezW-NA&s",
      },
      {
        n: { ar: "بيتزا الفصول الأربعة", en: "Four Seasons Pizza", ku: "پیتزای چوار وەرز" },
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "بيتزا تونا", en: "Tuna Pizza", ku: "پیتزای تونا" },
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq&s",
      },
      {
        n: { ar: "بيتزا محشي", en: "Stuffed Pizza", ku: "پیتزای پڕکراو" },
        img: "https://images.alwatanvoice.com/news/large/9999166179.jpg",
      },
      {
        n: { ar: "بيتزا أحمد", en: "Ahmed Pizza", ku: "پیتزای ئەحمەد" },
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJtc131ISlDmPWpFIgmsVBgnnt-JoY7DLUw&s",
      },
      {
        n: { ar: "بيتزا كريسبي مع شيدر", en: "Crispy Pizza with Cheddar", ku: "پیتزای کرێسپی لەگەڵ چێدار" },
        img: "https://snd.ps/thumb/730x400/uploads/images/2023/05/Rx01B.jpg",
      },
    ],
  },
  {
    id: "grilled",
    image:
      "https://guide.opensooq.com/wp-content/uploads/2022/09/1-23.webp",
    titles: { ar: "قسم المشويات", en: "Grilled", ku: "برژاو" },
    items: [
      {
        n: { ar: "فروج عالفحم", en: "Charcoal Chicken", ku: "مریشکی سەر ئەنجیر" },
        p: 15000,
        img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "كيلو كباب", en: "1 kg Kebab", ku: "١ کیلۆ کباب" },
        p: 25000,
        img: "https://images.deliveryhero.io/image/talabat/MenuItems/DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq.jpg",
      },
      {
        n: { ar: "كيلو كباب فروج", en: "1 kg Chicken Kebab", ku: "١ کیلۆ کباب مریشک" },
        p: 22000,
        img: "https://i.ytimg.com/vi/jt5mllXZyfc/sddefault.jpg",
      },
      {
        n: { ar: "كيلو مشوي مشكل", en: "1 kg Mixed Grill", ku: "١ کیلۆ برژاوی تێکەڵ" },
        p: 35000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dcieJnGtZ4pcNc7R3PTnMWtewBAZtAmYTg&s",
      },
      {
        n: { ar: "كيلو تكه لحم", en: "1 kg Meat Tikka", ku: "١ کیلۆ تیکەی گۆشت" },
        p: 40000,
        img: "https://dyj6gt4964deb.cloudfront.net/images/552ab75b-3b45-438b-aafa-62c0163b7800.jpeg",
      },
      {
        n: { ar: "كيلو شيش", en: "1 kg Shish", ku: "١ کیلۆ شیش" },
        p: 22000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHjQzCCQskGrghKmz6joaVZDnrBjIYroKsA&s",
      },
      {
        n: { ar: "كيلو جوانح", en: "1 kg Wings", ku: "١ کیلۆ باڵ مریشک" },
        p: 20000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GeMJeRWo2I9LhwbO_IdxJ1R4k_mKojM0Rw&s",
      },
      {
        n: { ar: "كيلو ماريا", en: "1 kg Maria", ku: "١ کیلۆ ماریا" },
        p: 25000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhcnN64gJKhkKegDPJgqahrzRdil6GaQCBA&s",
      },
      {
        n: { ar: "ساندويش كباب", en: "Kebab Sandwich", ku: "ساندویچ کباب" },
        p: 2500,
        img: "https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/alreefallibnani/products/871645-placeholder5894.jpg",
      },
      {
        n: { ar: "ساندويش شيش", en: "Shish Sandwich", ku: "ساندویچ شیش" },
        p: 2500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVBG8DoTj8GEFqlozB429FCRKi0ec1oLOVw&s",
      },
      {
        n: { ar: "ساندويش سودة / معلاق", en: "Souda / Malaq Sandwich", ku: "ساندویچ سودە / مەعلاق" },
        p: 2500,
        img: "https://static.aljamila.com/styles/640x426/public/shutterstock_118757785_1.jpg",
      },
      {
        n: { ar: "ساندويش تكه لحم", en: "Meat Tikka Sandwich", ku: "ساندویچ تیکەی گۆشت" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHP-vP3j4lokuCUdubSLC2tNPvdqWmTiZa0A&s",
      },
      {
        n: { ar: "نفر كباب", en: "Kebab Portion", ku: "نەفەر کباب" },
        p: 12000,
        img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "نصف نفر كباب", en: "Half Kebab Portion", ku: "نیو نەفەر کباب" },
        p: 6000,
        img: "https://fodflix.com/storage/products/0NmcO4vZLTVW26gDsrpAyS8RlTTAinQ4VSPoYZsN-2.jpg",
      },
      {
        n: { ar: "نفر مشكل", en: "Mixed Grill Portion", ku: "نەفەر تێکەڵ" },
        p: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3WFC66GMa7V53mWs1JwTRwRC3IzP54Mavw&s",
      },
      {
        n: { ar: "نفر كباب فروج", en: "Chicken Kebab Portion", ku: "نەفەر کباب مریشک" },
        p: 8000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_OA8A-_8FB4qx6XcJFkt_GtJzdfS8idgSQ&s",
      },
      {
        n: { ar: "نفر تكه لحم", en: "Meat Tikka Portion", ku: "نەفەر تیکەی گۆشت" },
        p: 14000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKbWJMAlq2l4eATmKD7O1zuIholTSB4FHhg&s",
      },
      {
        n: { ar: "نصف كيلو جوانح", en: "½ kg Wings", ku: "نیو کیلۆ باڵ مریشک" },
        p: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaR1bRYYjeScKCT6h78n1OK2V7t8l0WRQrLg&s",
      },
      {
        n: { ar: "نفر شيش", en: "Shish Portion", ku: "نەفەر شیش" },
        p: 10000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOcQoeCimuFfFIOqpiGKY56CQVP3pcO8eMA&s",
      },
      {
        n: { ar: "وجبة ماريا", en: "Maria Meal", ku: "وجبەی ماریا" },
        p: 6000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4G0R376I2vK3lZViJ5jzXsTLbfwA2QQKL6A&s",
      },
      {
        n: { ar: "وجبة توشكا (ماريا مع قشقوان)", en: "Toshka Meal (Maria & Kashkawan)", ku: "وجبەی تۆشکا (ماریا و قەشقەوان)" },
        p: 7000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1d9te52ZfvL1m4u9gVTs26NNVICJuYbA6ug&s",
      },
    ],
  },
  {
    id: "breakfast",
    image:
      "https://wiki-arabic.com/wp-content/uploads/2023/01/%D8%A3%D9%81%D9%83%D8%A7%D8%B1-%D9%81%D8%B7%D9%88%D8%B1-%D8%B5%D8%AD%D9%8A-%D9%84%D8%B0%D9%8A%D8%B0-819x1024.webp",
    titles: { ar: "قسم الفطور", en: "Breakfast", ku: "نیوەڕۆژانە" },
    items: [
      {
        n: { ar: "فول بالزيت / باللبن", en: "Foul with Oil / Laban", ku: "فول بە ڕۆن / لەگەڵ لبن" },
        p: 3000,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/cjszh8fenieq3p3jnzji3yuvplde/odoo-template-13791.jpg?w=1080&q=75",
      },
      {
        n: { ar: "حمص / متبل", en: "Hummus / Mutabal", ku: "حummus / متبەل" },
        p: 2500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINpwBZqryMcJ1xuehnNUNAme2iPT16TO1UA&s",
      },
      {
        n: { ar: "فتة بالمكسرات / باللحمة / شاورما", en: "Fattah (Nuts / Meat / Shawarma)", ku: "فتە (گووزە / گۆشت / شاورما)" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRqnkEJQRHS2uaFc3zl2VM2jWB7jRFDK1Yg&s",
      },
      {
        n: { ar: "مامونية بالقرفة", en: "Mamounia with Cinnamon", ku: "مامۆنیا بە دارچین" },
        p: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrB46QFTU-hoXWbKfDAezmbLAX-3zHYTa5dQ&s",
      },
      {
        n: { ar: "مامونية بالقشطة", en: "Mamounia with Cream", ku: "مامۆنیا بە قشطە" },
        p: 3500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrB46QFTU-hoXWbKfDAezmbLAX-3zHYTa5dQ&s",
      },
      {
        n: { ar: "حمص باللحمة / شرحات لحم", en: "Hummus with Meat", ku: "حummus لەگەڵ گۆشت" },
        p: 5000,
        img: "https://shawarma.orient-sweet.de/18-medium_default/hummus-with-meat.jpg",
      },
      {
        n: { ar: "حمص شرحات شاورما", en: "Hummus with Shawarma Strips", ku: "حummus شرحات شاورما" },
        p: 5000,
        img: "https://shawarma.orient-sweet.de/18-medium_default/hummus-with-meat.jpg",
      },
      {
        n: { ar: "بيض مسلوق", en: "Boiled Eggs", ku: "هێلکەی کوڵاو" },
        p: 2500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JAq_BqZM1ik6iXO--e7LaW66X9BsLqprIw&s",
      },
      {
        n: { ar: "أومليت", en: "Omelette", ku: "ئۆملێت" },
        p: 2500,
        img: "https://img.youm7.com/ArticleImgs/2019/5/28/176165-%D8%A3%D9%88%D9%85%D9%84%D9%8A%D8%AA-%D8%A7%D9%84%D8%AF%D8%A7%D9%8A%D8%AA--(2).jpg",
      },
    ],
  },
  {
    id: "meals",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5RoUealqcbv2rxDSnUkEN1eGdHi-ThzuCw&s",
    titles: {
      ar: "الوجبات الغربية والشرقية",
      en: "Western & Eastern Meals",
      ku: "وجبە ڕۆژئاوایی و ڕۆژهەڵاتییەکان",
    },
    items: [
      {
        n: { ar: "كريسبي / اسكالوب (ساندويش)", en: "Crispy / Escalope (Sandwich)", ku: "کرێسپی / ئێسکالۆپ (ساندویچ)" },
        p: 3500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSDFKeaSHY7MydAy4o8Oa50xdKPYq6Mm8-w&s",
      },
      {
        n: { ar: "كريسبي / اسكالوب (وجبة)", en: "Crispy / Escalope (Meal)", ku: "کرێسپی / ئێسکالۆپ (وجبە)" },
        p: 5000,
        img: "https://cdn.arabsstock.com/uploads/images/310006/crispy-chicken-pieces-plate-with-thumbnail-310006.webp",
      },
      {
        n: { ar: "فاهيتا / مكسيكي / فرانشيسكو", en: "Fajita / Mexican / Francisco", ku: "فاهیتا / مەکسیکی / فرانسیسکۆ" },
        p: 5000,
        img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "همبرغر (لحم/دجاج)", en: "Burger (Beef / Chicken)", ku: "هەمبەرگەر (گۆشت/مریشک)" },
        p: 3500,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "همبرغر فحم / تشيز / بيض", en: "Charcoal / Cheese / Egg Burger", ku: "هەمبەرگەر سەر ئەنجیر / چیز / هێلکە" },
        p: 3500,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=480&q=80",
      },
      {
        n: { ar: "همبرغر دبل لحم / اكسترا تشيز", en: "Double Beef / Extra Cheese Burger", ku: "هەمبەرگەری دوو گۆشت / ئێکسترا چیز" },
        p: 6000,
        img: "https://img.pikbest.com/photo/20240922/doubledecker-burger-with-bacon-cheese-_10875808.jpg!bw800",
      },
      {
        n: { ar: "رز مع ربع فروج", en: "Rice with Quarter Chicken", ku: "برنج لەگەڵ چارەک مریشک" },
        p: 6000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nebna5bhCt0kVF_cvDZVhoDzVTsI8injPQ&s",
      },
      {
        n: { ar: "ريزو (عادي / سبايسي)", en: "Rizo (Regular / Spicy)", ku: "ڕیزۆ (ئاسایی / توندوتیژ)" },
        p: 6000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZaXzRz7rOW3yAkNjBRS-4EsFaxRsTFcIBw&s",
      },
     {
        n: { ar: "(1kg)كيلو كريسبي", en: "(1kg)crispy chicken"},
        p: 6000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuB46IUbP4cAFYJlWbJlgrMG9Arfsq2xCt3g&s",
      },
      {
        n: { ar: "(1kg)كيلو سكالوب", en: "A kilo of scallops", ku: "A kilo of scallops" },
        p: 6000,
        img: "https://kitchen.sayidaty.net/uploads/small/ec/ec71b4a577b2a7adbc5103f6630d263f_w750_h500.jpg",
      },
    ],
  },
  {
    id: "broasted",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80",
    titles: { ar: "بروستد", en: "Broasted", ku: "بروستێد" },
    items: [
      {
        n: { ar: "بروستد كامل", en: "Full Broasted", ku: "بروستێدی تەواو" },
        p: 20000,
        img: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/t4gy4ocolk4jr8jqymkty6pfpej2/odoo-template-12207.jpg?w=1080&q=75",
      },
      {
        n: { ar: "وجبة بروستد", en: "Broasted Meal", ku: "وجبەی بروستێد" },
        p: 10000,
        img: "https://blog.bayut.sa/uploads/2021/04/%D9%88%D8%AC%D8%A8%D8%A9-%D8%A8%D8%B1%D9%88%D8%B3%D8%AA%D8%AFAR040082021-1024x640.jpg",
      },
      {
        n: { ar: "فروج مسحب", en: "Chicken Strips", ku: "مریشکی مەسحەب" },
        p: 15000,
        img: "https://taibafarmsarabia.com/wp-content/uploads/2021/07/13-768x512.jpg",
      },
      {
        n: { ar: "نصف مسحب", en: "Half Strips", ku: "نیو مەسحەب" },
        p: 8000,
        img: "https://storage.de.cloud.ovh.net/v1/AUTH_822fb2b5f08942e5991f0bbd03a121b7/minidine-prod/na3na3/items/thumbnail/7481657172916_lg.jpg",
      },
      {
        n: { ar: "فروج مشوي", en: "Grilled Chicken", ku: "مریشکی مەشوی" },
        p: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iG6AhwG1EAbuwfJOs8FiCjwvFwcHtMpT3bF05vAAUw&s",
      },
      {
        n: { ar: "نصف مشوي", en: "Half Grilled", ku: "نیو مەشوی" },
        p: 6000,
        img: "https://dajajati.net/wp-content/uploads/2025/09/%D9%81%D8%B1%D9%88%D8%AC-%D9%85%D8%B4%D9%88%D9%8A-%D9%85%D8%B9-%D8%B1%D8%B2.jpg",
      },
      {
        n: { ar: "نصف فروج ع فحم", en: "Half Charcoal Chicken", ku: "نیو مریشکی سەر ئەنجیر" },
        p: 8000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eosmTUrUsc2Jin0rlnO1CUMZOsoux8PJ2w&s",
      },
    ],
  },
  {
    id: "cold-appetizers",
    image:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f4f5?auto=format&fit=crop&w=1400&q=80",
    titles: { ar: "مقبلات باردة", en: "Cold Appetizers", ku: "پێشخورە سواردە" },
    items: [
      {
        n: { ar: "باذنجانية", en: "Eggplant Dip", ku: "بەدنگەی" },
        p: 2000,
        img: "https://img-global.cpcdn.com/recipes/de655bbcc9f15b4c/200x200cq80/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-%D9%84%D9%88%D8%B5%D9%81%D8%A9%D8%B3%D9%84%D8%B7%D8%A9-%D8%A8%D8%A7%D8%B0%D9%86%D8%AC%D8%A7%D9%86-%D8%B5%D8%AD%D9%8A-%D8%A8%D8%AF%D9%88%D9%86-%D9%82%D9%84%D9%8A.jpg",
      },
      {
        n: { ar: "تبولة", en: "Tabouleh", ku: "تەبوبلە" },
        p: 2000,
        img: "https://kitchen.sayidaty.net/uploads/small/ac/acd226ff163adcfd79e9a263c253e48a_w750_h750.jpg",
      },
      {
        n: { ar: "فتوش", en: "Fattoush", ku: "فەتووش" },
        p: 3000,
        img: "https://kitchen.sayidaty.net/uploads/node/fattoushsalad.jpg",
      },
      {
        n: { ar: "جرجير", en: "Arugula Salad", ku: "سەلادەی جەرژێر" },
        p: 3000,
        img: "https://kitchen.sayidaty.net/uploads/small/48/483788542157b4187df5c10147d462e2_w750_h750.jpg",
      },
      {
        n: { ar: "سلطة سيزر", en: "Caesar Salad", ku: "سەلادەی سێزەر" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUbvtfYHlCu6G_uTFwM0Pu8TOaAKMhBN7nQ&s",
      },
      {
        n: { ar: "سلطة افوكادو انناس", en: "Avocado Pineapple Salad", ku: "سەلادەی ئەفووکادۆ و ئەنەناس" },
        p: 5000,
        img: "https://wasfetmama.com/wp-content/uploads/2022/02/%D8%B3%D9%84%D8%B7%D8%A9-%D8%A7%D9%84%D8%A7%D9%81%D9%88%D9%83%D8%A7%D8%AF%D9%88-%D9%88-%D8%A7%D9%84%D8%AE%D8%B3.jpg",
      },
      {
        n: { ar: "سلطة يونانية", en: "Greek Salad", ku: "سەلادەی یۆنان" },
        p: 5000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkMzJLpsGmoYmFSM6QmFiy1eV_rLYETr9oQ&s",
      },
      {
        n: { ar: "سلطة تونا", en: "Tuna Salad", ku: "سەلادەی تۆنا" },
        p: 5000,
        img: "https://media.gemini.media/img/large/2023/3/15/2023_3_15_21_47_51_561.jpg",
      },
      {
        n: { ar: "سلطة جاجيك", en: "Cacik Salad", ku: "سەلادەی جاجیک" },
        p: 2000,
        img: "https://img-global.cpcdn.com/recipes/1a449c19f6c74f42/200x200cq80/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-%D9%84%D9%88%D8%B5%D9%81%D8%A9%D8%B3%D9%84%D8%B7%D8%A9-%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1-%D8%A8%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D8%AF%D9%8A.jpg",
      },
      {
        n: { ar: "سويسرية", en: "Swiss Salad", ku: "سەلادەی سوئیس" },
        p: 2000,
        img: "https://cdn.alweb.com/thumbs/recipes/article/fit727x484/%D8%B7%D8%B1%D9%82-%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1-%D8%B3%D9%84%D8%B7%D8%A9-%D8%B3%D9%88%D9%8A%D8%B3%D8%B1%D9%8A%D8%A9.jpg",
      },
      {
        n: { ar: "بابا غنوج", en: "Baba Ganoush", ku: "بابا غنۆج" },
        p: 2000,
        img: "https://kitchen.sayidaty.net/uploads/small/4e/4ea4552f472ad65033de4d439c33a693_w750_h500.jpg",
      },
      {
        n: { ar: "مايونيز", en: "Mayonnaise", ku: "مایۆنێز" },
        p: 2000,
        img: "https://kitchen.sayidaty.net/uploads/small/27/2730b7cb4c27a3bf8ab04565ada1de7e_w750_h500.jpg",
      },
    ],
  },
];

/** روابط التواصل — رقم الهاتف ورابط الانستغرام واتساب */
const CONTACT = {
  instagram: "https://www.instagram.com/ahmad_restaurant_cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  whatsapp: "https://wa.me/9647505606560",
  phone: "tel:+9647505606560",
};

/** أوصاف تلقائية عند غياب حقل d — الصور مُعرَّفة يدويًا لكل صنف */
(function enrichMenuItems() {
  function tailForCategory(catId) {
    switch (catId) {
      case "fresh-juices":
        return {
          ar: "عصير طبيعي منعش، يُحضَّر طازجًا.",
          en: "Fresh natural juice, chilled and refreshing.",
          ku: "شیڕەی سروشتی ساردخۆش، ڕاستەوخۆ تازە.",
        };
      case "smoothies":
        return {
          ar: "خليط كريمي غني بالفواكه.",
          en: "Thick, creamy fruit blend.",
          ku: "تێکەڵەیەکی قڕیم لەگەڵ میوە.",
        };
      case "coffee":
      case "ice-coffee":
        return {
          ar: "قهوة مختارة بعناية وتقديم متوازن.",
          en: "Carefully brewed, balanced flavor.",
          ku: "قاوەی هەڵبژاردراو و تامێکی هاوسەنگ.",
        };
      case "hot-drinks":
        return {
          ar: "مشروب ساخن مريح للمزاج.",
          en: "A comforting hot drink.",
          ku: "خواردنەوەیەکی گەرم و ئارامکەر.",
        };
      case "desserts":
      case "ice-cream":
        return {
          ar: "حلوى تُحضَّر بجودة ولمسة لذيذة.",
          en: "Dessert made with care and great taste.",
          ku: "شیرینی بە کوالیتی و تامی جوان.",
        };
      case "hookah":
        return {
          ar: "خلطة مرتبة وتجهيز أنيق.",
          en: "Well-prepared shisha mix.",
          ku: "تێکەڵەیەکی ڕێکخراو و ئامادەکراو.",
        };
      case "milkshake":
        return {
          ar: "كريمي، بارد، غني بالنكهة.",
          en: "Creamy, cold, full of flavor.",
          ku: "قڕیم، سارد، پڕ تام.",
        };
      case "cocktails":
      case "mojito":
        return {
          ar: "مزيج منعش ومتوازن.",
          en: "Refreshing mixed drink.",
          ku: "تێکەڵەیەکی ساردخۆش و هاوسەنگ.",
        };
      case "pies":
        return {
          ar: "من الفرن، عجينة طرية وحشوة ساخنة.",
          en: "Oven-fresh with soft dough and hot filling.",
          ku: "لە فڕنەوە، نانێکی نەرم و ناوەڕۆک گەرم.",
        };
      case "shawarma":
        return {
          ar: "تتبيلة أصلية ولحم طري.",
          en: "Authentic marinade and tender meat.",
          ku: "تەبیلە ڕەسەن و گۆشتی نەرم.",
        };
      case "pizza":
        return {
          ar: "عجينة يومية وصوص غني — السعر حسب الحجم.",
          en: "Fresh dough, rich sauce — priced by size.",
          ku: "خمیر و سۆس تازە — نرخ بەپێی قەبارە.",
        };
      case "grilled":
        return {
          ar: "على الفحم بلمسة توابل مميزة.",
          en: "Charcoal-grilled with signature spices.",
          ku: "لەسەر ئەنجیر بە بەهاراتی تایبەت.",
        };
      case "breakfast":
        return {
          ar: "فطور دافئ يبدأ يومك بشكل مريح.",
          en: "A warm start to your day.",
          ku: "نیوەڕۆژانەیەکی گەرم بۆ دەستپێکی ڕۆژ.",
        };
      case "meals":
        return {
          ar: "وجبة متكاملة ومذاق غني.",
          en: "A hearty meal with bold flavor.",
          ku: "وجبەیەکی پڕ و تامدار.",
        };
      default:
        return {
          ar: "يُحضَّر عند الطلب بعناية.",
          en: "Made to order with care.",
          ku: "بە وریایی بەپێی داواکاری.",
        };
    }
  }

  MENU_DATA.forEach(function (cat) {
    var tail = tailForCategory(cat.id);
    cat.items.forEach(function (item) {
      if (!item.d) {
        item.d = {
          ar: item.n.ar + " — " + tail.ar,
          en: item.n.en + " — " + tail.en,
          ku: item.n.ku + " — " + tail.ku,
        };
      }
    });
  });
})();

const UI_STRINGS = {
  ar: {
    badge: "مطعم وكافي",
    title: "مطعم وكافي أحمد",
    subtitle:
      "أجواء هادئة، ألوان مريحة، وقائمة غنية بالمشروبات والمأكولات. اضغط أدناه لاستكشاف القائمة كاملة.",
    cta: "عرض المينيو",
    hint: "",
    menuHeading: "قائمة الطعام والمشروبات",
    menuIntro: "اختر قسمًا لعرض الأصناف والأسعار مع صورة القسم.",
    back: "الرئيسية",
    backSections: "كل الأقسام",
    itemsUnit: "صنف",
    footer: "مطعم وكافي أحمد | نتشرف بخدمتكم",
    currency: "د.ع",
    priceBySize: "حسب الحجم",
    socialAria: "تواصل معنا",
    instagramLabel: "إنستغرام",
    whatsappLabel: "واتساب",
    callUs: "الهاتف",
    backToSections: "العودة للقائمة",
    addToCart: "إضافة للسلة",
    addedToCart: "أضيفت",
    cartSummary: "السلة: {count} ⇩ اضغط لاظهار الطلبات",
    cartEmpty: "السلة فارغة",
    cartTotal: "المجموع",
    cartPanelTitle: "عناصر السلة",
    whatsappOrderTitle: "إرسال الطلب عبر واتساب",
    whatsappOrderHint: "أدخل الاسم الكامل، رقم الهاتف، والعنوان بدقة ثم اضغط إرسال لفتح رسالة واتساب بالطلب.",
    whatsappOrderName: "الاسم الكامل",
    whatsappOrderNamePlaceholder: "اكتب الاسم الكامل",
    whatsappOrderPhone: "رقم الهاتف",
    whatsappOrderPhonePlaceholder: "اكتب رقم الهاتف",
    whatsappOrderAddress: "العنوان الكامل",
    whatsappOrderAddressPlaceholder: "اكتب العنوان بالتفصيل",
    whatsappOrderPreview: "مراجعة الطلب",
    whatsappSendButton: "إرسال إلى واتساب",
    whatsappValidationMessage: "يرجى تعبئة الاسم الكامل والهاتف والعنوان قبل الإرسال.",
    whatsappSendingMessage: "جارٍ فتح واتساب برسالة الطلب...",
    searchPlaceholder: "ابحث عن صنف...",
    searchNoResults: "لا توجد نتائج مطابقة لهذا البحث.",
    searchAria: "بحث عن صنف",
    selectSectionHint: "استخدم الشريط أعلاه لاختيار القسم ثم ستظهر الأصناف هنا.",
  },
  en: {
    badge: "Restaurant & Café",
    title: "Ahmed Restaurant & Café",
    subtitle:
      "Calm vibes, easy-on-the-eyes colors, and a full menu of drinks and food. Tap below to browse everything.",
    cta: "View menu",
    hint: "",
    menuHeading: "Food & Drinks",
    menuIntro: "Tap a category to see items and prices with a photo.",
    back: "Home",
    backSections: "All categories",
    itemsUnit: "items",
    footer: "Ahmed Restaurant & Café | We’re glad to serve you",
    currency: "IQD",
    priceBySize: "By size",
    socialAria: "Contact us",
    instagramLabel: "Instagram",
    whatsappLabel: "WhatsApp",
    callUs: "Phone",
    backToSections: "Back to menu",
    addToCart: "Add to cart",
    addedToCart: "Added",
    cartSummary: "Cart: {count} ⇩ Click to view orders",
    cartEmpty: "Your cart is empty",
    cartTotal: "Total",
    cartPanelTitle: "Cart items",
    whatsappOrderTitle: "Send order via WhatsApp",
    whatsappOrderHint: "Enter your full name, phone number, and exact address, then tap send to open a WhatsApp order message.",
    whatsappOrderName: "Full name",
    whatsappOrderNamePlaceholder: "Enter your full name",
    whatsappOrderPhone: "Phone number",
    whatsappOrderPhonePlaceholder: "Enter your phone number",
    whatsappOrderAddress: "Exact address",
    whatsappOrderAddressPlaceholder: "Enter your full address",
    whatsappOrderPreview: "Order review",
    whatsappSendButton: "Send to WhatsApp",
    whatsappValidationMessage: "Please complete full name, phone number, and address before sending.",
    whatsappSendingMessage: "Opening WhatsApp with the order message...",
    searchPlaceholder: "Search for an item...",
    searchNoResults: "No matching items found.",
    searchAria: "Search for an item",
    selectSectionHint: "Use the rail above to pick a section, then the items will appear here.",
  },
  ku: {
    badge: "چێشتخانە و قاوەخانە",
    title: "چێشتخانە و قاوەخانەی ئەحمەد",
    subtitle:
      "کاتێکی ئارام، ڕەنگی نەرم بۆ چاو، و لیستێکی پڕ لە خواردن و خواردنەوە. کرتە بکە بۆ بینینی هەموو لیستەکە.",
    cta: "پیشاندانی لیست",
    hint: "",
    menuHeading: "خواردن و خواردنەوە",
    menuIntro: "بەشێک هەڵبژێرە بۆ بینینی بەرهەم و نرخ و وێنەکەی.",
    back: "سەرەکی",
    backSections: "هەموو بەشەکان",
    itemsUnit: "بەرهەم",
    footer: "چێشتخانە و قاوەخانەی ئەحمەد | بە خۆشحاڵی خزمەتتان دەکەین",
    currency: "د.ع",
    priceBySize: "بەپێی قەبارە",
    socialAria: "پەیوەندی",
    instagramLabel: "ئینستاگرام",
    whatsappLabel: "واتسئاپ",
    callUs: "تەلەفۆن",
    backToSections: "گەڕانەوە بۆ لیستەکە",
    addToCart: "زیادکردن بۆ سەلبەکە",
    addedToCart: "زیادکرا",
    cartSummary: "سەلبەکە: {count} ⇩ کلیک بکە بۆ بینینی داواکاریەکان",
    cartEmpty: "سەلبەکە بۆشە",
    cartTotal: "کۆی گشتی",
    cartPanelTitle: "بابەتی سەلبەکە",
    whatsappOrderTitle: "ناردنی داواکاری لە واتساب",
    whatsappOrderHint: "ناوی تەواو، ژمارەی تەلەفۆن و ناونیشانی وورد بنووسە و پاشان کرتەی ناردن بکە بۆ کردنەوەی پیغامێکی واتساب.",
    whatsappOrderName: "ناوی تەواو",
    whatsappOrderNamePlaceholder: "ناوی تەواوت بنووسە",
    whatsappOrderPhone: "ژمارەی تەلەفۆن",
    whatsappOrderPhonePlaceholder: "ژمارەی تەلەفۆنت بنووسە",
    whatsappOrderAddress: "ناونیشانی ورد",
    whatsappOrderAddressPlaceholder: "ناونیشانی تەواوت بنووسە",
    whatsappOrderPreview: "پێداچوونەوەی داواکاری",
    whatsappSendButton: "ناردن بۆ واتساب",
    whatsappValidationMessage: "تکایە ناوی تەواو، ژمارەی تەلەفۆن و ناونیشان پێش ناردن تەواو بکە.",
    whatsappSendingMessage: "واتساب دەکرێتەوە بە پیغامەکەی داواکاری...",
    searchPlaceholder: "بەدوای هەمی بگەڕێ...",
    searchNoResults: "هیچ ئەنجامێک نەدۆزراوە.",
    searchAria: "گەڕان لە شوێن خۆراک",
    selectSectionHint: "لە شریتی سەرەوە بەش هەڵبژێرە و ئەنجامی بەشەکە لێرە دەردەکەوێت.",
  },
};