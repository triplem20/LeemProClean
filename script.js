
  var currentLang = 'ar';
  var CONTACT_PHONE = '+966508428794';

  var TITLES = {
    ar: 'ليم برو كلين | غسيل سجاد وموكيت في الرياض',
    en: 'Leem Pro Clean | Carpet & Rug Cleaning in Riyadh'
  };
  var DESCS = {
    ar: 'شركة متخصصة في غسيل السجاد والموكيت والمفروشات في الرياض. خدمات تنظيف احترافية، معالجة البقع والروائح، التعقيم، والاستلام والتوصيل.',
    en: 'A specialist carpet, carpet-tile and upholstery cleaning company in Riyadh. Professional cleaning, stain and odour treatment, sanitizing, and pickup and delivery.'
  };

  function applyLang(lang){
    currentLang = lang;
    var html = document.getElementById('htmlRoot');
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('pageTitle').textContent = TITLES[lang];
    document.getElementById('pageDesc').setAttribute('content', DESCS[lang]);

    document.querySelectorAll('[data-ar]').forEach(function(el){
      var text = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
      if(text !== null) el.textContent = text;
    });
    document.querySelectorAll('[data-ar-html]').forEach(function(el){
      var html_ = lang === 'ar' ? el.getAttribute('data-ar-html') : el.getAttribute('data-en-html');
      if(html_ !== null) el.innerHTML = html_;
    });
    document.querySelectorAll('[data-ar-placeholder]').forEach(function(el){
      var text = lang === 'ar' ? el.getAttribute('data-ar-placeholder') : el.getAttribute('data-en-placeholder');
      if(text !== null) el.setAttribute('placeholder', text);
    });

    document.getElementById('btnAr').classList.toggle('active', lang === 'ar');
    document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  }

  document.getElementById('btnAr').addEventListener('click', function(){ applyLang('ar'); });
  document.getElementById('btnEn').addEventListener('click', function(){ applyLang('en'); });

  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function(){
    var isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.getElementById('quoteSubmit').addEventListener('click', function(){
    var name = document.getElementById('qName').value.trim();
    var phone = document.getElementById('qPhone').value.trim();
    var city = document.getElementById('qCity').value.trim();
    var service = document.getElementById('qService').value;
    var count = document.getElementById('qCount').value.trim();
    var size = document.getElementById('qSize').value.trim();
    var notes = document.getElementById('qNotes').value.trim();

    var reminderAr = 'ملاحظة: الرجاء إرفاق صور القطع بعد فتح المحادثة مباشرة.';
    var reminderEn = 'Note: please upload the item photos immediately after the chat opens.';

    var lines = currentLang === 'ar'
      ? ['مرحبًا، أرغب في الحصول على عرض سعر:', 'الاسم: ' + name, 'الجوال: ' + phone, 'المدينة/الحي: ' + city, 'نوع الخدمة: ' + service, 'عدد القطع: ' + count, 'المقاسات: ' + size, 'ملاحظات: ' + notes, 'ملاحظة: ' + reminderAr.replace('ملاحظة: ', '')]
      : ['Hello, I would like a quote:', 'Name: ' + name, 'Mobile: ' + phone, 'City/District: ' + city, 'Service type: ' + service, 'Number of pieces: ' + count, 'Sizes: ' + size, 'Notes: ' + notes, 'Note: ' + reminderEn.replace('Note: ', '')];
    var messageText = lines.join('\n');
    var message = encodeURIComponent(messageText);
    window.open('https://wa.me/' + CONTACT_PHONE + '?text=' + message, '_blank');
  });
