const WHATSAPP_NUMBER = "966508428794";
const translations = {
    "لين برو كلين": "Leen Pro Clean", "الرئيسية": "Home", "لماذا تختارنا؟": "Why Choose Us?", "خدماتنا": "Our Services", "كيف نعمل": "How It Works", "القطاعات": "Industries", "الأسئلة الشائعة": "FAQ", "اطلب الخدمة الآن": "Request a Service",
    "نظافة احترافية وعناية متكاملة": "Professional Cleaning & Complete Care", "نظافة احترافية… تعيد لمفروشاتك رونقها": "Professional Cleaning That Restores Your Furnishings", "نقدم خدمات متخصصة في غسيل السجاد والموكيت والمفروشات باستخدام أساليب تنظيف احترافية ومواد مصممة للعناية بالألياف والأقمشة، مع عناية دقيقة بكل قطعة من لحظة استلامها وحتى تسليمها.": "We provide specialized carpet, rug, and upholstery cleaning using professional methods and products designed to care for fibers and fabrics, with careful attention from pickup through delivery.", "نعتني بالتفاصيل… لأن الفرق يظهر في التفاصيل.": "We care about the details because the difference is in the details.", "تواصل عبر واتساب": "Contact Us on WhatsApp", "خدمة استلام وتوصيل راقية": "Premium Pickup & Delivery", "نستلمها من باب منزلك، ونعيدها إليك مغسولة ومعقمة وجاهزة للاستخدام.": "We collect your items from your door and return them clean, sanitized, and ready to use.", "تغطية شاملة لمدينة الرياض": "Serving Riyadh Citywide", "لأن سجادك يستحق أكثر من مجرد غسيل تقليدي": "Your carpets deserve more than ordinary cleaning.",
    "عناية احترافية": "Professional Care", "نتعامل مع كل قطعة وفق نوع الألياف والخامة ودرجة الاتساخ لضمان الحماية الكاملة.": "We treat every item according to its fibers, material, and level of soiling for complete protection.", "مواد تنظيف متخصصة": "Specialized Products", "نستخدم مواد مخصصة للمفروشات والسجاد للحفاظ على سلامة الألوان ونعومة الألياف.": "We use products made for carpets and upholstery to preserve color and fiber softness.", "إزالة البقع والروائح": "Stain & Odor Removal", "نعمل على معالجة البقع الصعبة والروائح غير المرغوبة باستخدام حلول متطورة.": "We treat stubborn stains and unwanted odors with advanced cleaning solutions.", "تجفيف احترافي": "Professional Drying", "نهتم بمرحلة التجفيف الكامل لتقليل الرطوبة ومنع تكون أي روائح أو بكتيريا.": "Thorough drying reduces moisture and helps prevent odors and bacteria.", "استلام وتسليم مريح": "Convenient Pickup & Delivery", "نوفر خدمة استلام وتسليم مريحة لعملائنا وفق نطاق التغطية المتاح بالرياض.": "We offer convenient pickup and delivery within our available Riyadh coverage area.", "فحص دقيق للجودة": "Thorough Quality Check", "تمر جميع القطع بمرحلة فحص شاملة للتأكد من الجودة والنظافة قبل التسليم.": "Every item receives a complete inspection to verify quality and cleanliness before delivery.",
    "خدماتنا المتخصصة": "Our Specialized Services", "حلول تنظيف متكاملة تناسب جميع أنواع المفروشات": "Complete cleaning solutions for every type of furnishing.", "غسيل السجاد": "Carpet Cleaning", "تنظيف احترافي للسجاد بمختلف أنواعه وخاماته، مع معالجة الاتساخات والبقع والروائح وفق حالة كل قطعة.": "Professional cleaning for carpets of every type and material, with treatment tailored to each item's stains, dirt, and odors.", "غسيل الموكيت": "Rug Cleaning", "حلول متخصصة لتنظيف الموكيت في المنازل والمكاتب والمنشآت، مع الاهتمام بإزالة الأوساخ المترسبة.": "Specialized rug cleaning for homes, offices, and facilities, with careful removal of embedded dirt.", "تنظيف المفروشات": "Upholstery Cleaning", "تنظيف وعناية بالمجالس والكنب والمفروشات باستخدام طرق مناسبة لنوع القماش للحفاظ على مظهرها.": "Careful cleaning for sofas, seating, and upholstery using fabric-appropriate methods to preserve their appearance.", "إزالة البقع": "Stain Removal", "معالجة متخصصة للبقع المختلفة (قهوة، شاي، زيوت) مع اختيار طرق معالجة تناسب نوع الخامة.": "Specialized treatment for coffee, tea, oil, and other stains, using methods suited to each material.", "إزالة الروائح": "Odor Removal", "معالجة مصدر الروائح غير المرغوبة ومنح المفروشات إحساسًا متجددًا بالنظافة والانتعاش.": "We treat the source of unwanted odors and leave your furnishings feeling fresh and clean.", "التعقيم والعناية": "Sanitization & Care", "خدمات تعقيم وعناية إضافية للمفروشات والسجاد لحمايتها من الميكروبات وضمان بيئة صحية.": "Additional sanitization and care for carpets and upholstery to help protect against microbes and support a healthier environment.", "اطلب الخدمة": "Request Service",
    "كيف نعمل؟": "How It Works", "خطوات منظمة تضمن أعلى معايير الجودة": "Organized steps that ensure the highest quality standards.", "الاستلام": "Pickup", "تواصل معنا وأرسل التفاصيل": "Contact us and send the details.", "نستلم السجاد من موقعك": "We collect your items from your location.", "الفحص والتقييم": "Inspection & Assessment", "تحديد الخامة وطريقة التنظيف": "We identify the material and cleaning method.", "المعالجة والتنظيف": "Treatment & Cleaning", "استخدام مواد ومعدات مخصصة": "We use specialized products and equipment.", "التجفيف": "Drying", "التخلص التام من الرطوبة": "We remove moisture completely.", "فحص الجودة": "Quality Check", "مراجعة القطع قبل التغليف": "We review every item before packaging.", "التسليم": "Delivery", "إعادة القطع في الموعد المكتمل": "We return your items on schedule.",
    "خدمات للأفراد والمنشآت": "Services for Homes & Businesses", "حلول مخصصة تلبّي احتياجات جميع القطاعات": "Tailored solutions for every sector.", "للمنازل": "Homes", "تنظيف السجاد والموكيت والمجالس والمفروشات المنزلية بعناية فائقة.": "Careful cleaning for carpets, rugs, seating, and home furnishings.", "للشركات والمكاتب": "Companies & Offices", "برامج تنظيف دورية للمكاتب والمنشآت وفق جداول مرنة.": "Scheduled cleaning programs for offices and facilities.", "للمساجد": "Mosques", "حلول تنظيف متكاملة ومناسبة للمساحات الكبيرة وسجاد المساجد.": "Complete cleaning solutions for large spaces and mosque carpets.", "للفنادق والمرافق": "Hotels & Facilities", "تنظيف احترافي مستمر يلبي متطلبات تشغيل المرافق الفندقية.": "Ongoing professional cleaning that meets hospitality facility needs.",
    "احصل على عرض سعر سريع": "Get a Quick Quote", "أدخل بيانات طلبك وسيقوم فريقنا بالتواصل معك فوراً عبر الواتساب": "Enter your request details and our team will contact you promptly on WhatsApp.", "الاسم": "Name", "أدخل اسمك": "Enter your name", "رقم الجوال": "Mobile Number", "المدينة / الحي": "City / District", "الرياض - حي...": "Riyadh - District...", "نوع الخدمة": "Service Type", "تنظيف مجالس وكنب": "Sofa & Upholstery Cleaning", "إزالة بقع": "Stain Removal", "إزالة روائح": "Odor Removal", "خدمات منشآت / شركات": "Facility / Company Services", "عدد القطع": "Number of Items", "مثال: 3": "Example: 3", "المقاسات التقريبية (إن وجدت)": "Approximate Sizes (if available)", "مثال: 3x4 متر": "Example: 3x4 meters", "ملاحظات إضافية": "Additional Notes", "أي تفاصيل خاصة بوجود بقع معينة أو نوع خامة...": "Details about specific stains or material type...", "إرسال الطلب عبر واتساب": "Send Request via WhatsApp",
    "هل توفرون خدمة الاستلام والتوصيل؟": "Do you offer pickup and delivery?", "كم يستغرق وقت تنظيف السجاد؟": "How long does carpet cleaning take?", "هل يمكن إزالة جميع أنواع البقع؟": "Can all types of stains be removed?", "هل مواد التنظيف المستخدمة آمنة؟": "Are the cleaning products safe?", "نعم، نوفر خدمة استلام وتسليم السجاد والمفروشات من باب منزلك ضمن مناطق التغطية المتاحة في الرياض.": "Yes, we collect and deliver carpets and upholstery from your door within our available Riyadh coverage area.", "تختلف المدة بحسب عدد القطع وحالتها واحتياجها للتجفيف الكامل، وعادة ما يستغرق ذلك بين 48 إلى 72 ساعة لضمان التجفيف والجودة.": "The timeframe depends on the number and condition of the items and their drying needs. It usually takes 48 to 72 hours to ensure thorough drying and quality.", "نعمل على معالجة البقع بأفضل الطرق المناسبة للخامة، لكن لا يمكن ضمان إزالة البقع القديمة جداً بنسبة 100% إذا كانت قد أثرت مسبقاً على ألياف القماش أو الألوان.": "We treat stains with the best method for each material, but very old stains cannot be guaranteed to disappear completely if they have already affected the fabric fibers or colors.", "نعم، نستخدم مواد تنظيف متخصصة ومصممة خصيصاً للمفروشات والسجاد وتعتبر آمنة ومناسبة لمختلف أنواع الخامات.": "Yes, we use specialized products designed for carpets and upholstery that are safe and suitable for different materials.", "متخصصون في غسيل السجاد والموكيت والمفروشات بالرياض، نقدم حلول تنظيف احترافية وموثوقة للأفراد والمنشآت.": "We specialize in carpet, rug, and upholstery cleaning in Riyadh, providing professional and reliable solutions for homes and businesses.", "تواصل معنا": "Contact Us", "الرياض – المملكة العربية السعودية": "Riyadh, Saudi Arabia", "ساعات العمل": "Working Hours", "يومياً من الساعة 8:00 صباحاً حتى 10:00 مساءً": "Daily from 8:00 AM to 10:00 PM", "جميع الحقوق محفوظة.": "All rights reserved."
};
const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([arabic, english]) => [english, arabic]));
let currentLanguage = localStorage.getItem('leenProCleanLanguage') || 'ar';

function translatePage(language) {
    const dictionary = language === 'en' ? translations : reverseTranslations;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
        const value = node.nodeValue.trim();
        if (dictionary[value]) node.nodeValue = node.nodeValue.replace(value, dictionary[value]);
    });
    document.querySelectorAll('[placeholder], [title], option').forEach((element) => {
        ['placeholder', 'title'].forEach((attribute) => {
            if (element.hasAttribute(attribute) && dictionary[element.getAttribute(attribute)]) {
                element.setAttribute(attribute, dictionary[element.getAttribute(attribute)]);
            }
        });
        if (element.tagName === 'OPTION' && dictionary[element.value]) element.value = dictionary[element.value];
        const value = element.textContent.trim();
        if (dictionary[value]) element.textContent = dictionary[value];
    });
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('bootstrapStyles').href = language === 'ar'
        ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css'
        : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    document.getElementById('languageToggle').innerHTML = language === 'ar'
        ? '<i class="bi bi-globe me-1"></i> English'
        : '<i class="bi bi-globe me-1"></i> عربي';
    document.getElementById('languageToggle').setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    localStorage.setItem('leenProCleanLanguage', language);
    currentLanguage = language;
}

function toggleLanguage() {
    translatePage(currentLanguage === 'ar' ? 'en' : 'ar');
}

translatePage(currentLanguage);

function openWhatsApp(customMessage) {
    if (currentLanguage === 'en') {
        customMessage = customMessage
            .replace('مرحبًا، أرغب في الاستفسار عن خدمات غسيل السجاد والموكيت والحصول على عرض سعر.', 'Hello, I would like to ask about your carpet and rug cleaning services and request a quote.')
            .replace('مرحبًا، أرغب في الاستفسار عن خدمات غسيل السجاد والموكيت.', 'Hello, I would like to ask about your carpet and rug cleaning services.');
    }
    const encodedText = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const city = document.getElementById('formCity').value;
    const service = document.getElementById('formService').value;
    const count = document.getElementById('formCount').value;
    const sizes = document.getElementById('formSizes').value;
    const notes = document.getElementById('formNotes').value;
    const message = currentLanguage === 'en'
        ? `Hello, I would like to request a quote:\n- *Name:* ${name}\n- *Mobile:* ${phone}\n- *City/District:* ${city}\n- *Service:* ${service}\n- *Number of items:* ${count}\n${sizes ? `- *Sizes:* ${sizes}\n` : ''}${notes ? `- *Notes:* ${notes}` : ''}`
        : `مرحبًا، أرغب في طلب عرض سعر:\n- *الاسم:* ${name}\n- *الجوال:* ${phone}\n- *المدينة/الحي:* ${city}\n- *الخدمة:* ${service}\n- *عدد القطع:* ${count}\n${sizes ? `- *المقاسات:* ${sizes}\n` : ''}${notes ? `- *ملاحظات:* ${notes}` : ''}`;
    openWhatsApp(message);
}
