'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function TopicsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const speak = (text) => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      window.speechSynthesis.speak(utterance);
    }
  };

  const contentData = {
    intro: { title: "تعريف البرنامج", icon: "📝", description: "برنامج معالج نصوص يستخدم لكتابة الأبحاث وتنسيق الكتب وتنسيق النصوص بشكل احترافي.", tools: [{ name: "ما هو Word؟", info: "هو أحد برامج شركة مايكروسوفت أوفيس المتخصص في معالجة الكلمات وإنشاء المستندات.", img: "/word-intro.jpg" }] },
    open: { title: "فتح البرنامج", icon: "🚀", description: "تعلم الطريقة الصحيحة لتشغيل البرنامج للبدء في العمل.", tools: [{ name: "طريقة الفتح", info: "اضغط مرتين على أيقونة البرنامج الموجودة على سطح المكتب أو ابحث عنه في قائمة ابدأ.", img: "/lesson1.jpg" }] },
    screen: { title: "شاشة البرنامج", icon: "💻", description: "استعراض لمكونات واجهة المستخدم الرئيسية التي ستتعامل معها.", tools: [{ name: "واجهة البرنامج", info: "تحتوي على منطقة العمل البيضاء، وشريط الأدوات، ومسطرة القياس.", img: "/word-screen.jpg" }] },
    file: { title: "قائمة ملف ", icon: "📁", description: "هذه القائمة مسؤولة عن إدارة الملف ككل من حيث الحفظ والفتح والطباعة.", tools: [{ name: "أداة إنشاء ملف جديد", info: "تستخدم لفتح صفحة بيضاء جديدة تماماً للبدء في كتابة مشروع جديد.", img: "/file-new.jpg" }, { name: "أداة فتح ملف", info: "تستخدم لفتح ملف كنت قد قمت بكتابته وحفظه سابقاً على جهاز الكمبيوتر.", img: "/file-open.jpg" }, { name: "أداة حفظ", info: "لحفظ التعديلات التي قمت بها داخل الملف لضمان عدم ضياعها.", img: "/file-save.jpg" }, { name: "أداة الطباعة", info: "لإرسال المستند إلى الطابعة والحصول عليه ورقياً.", img: "/file-print.jpg" }] },
    home: { title: "الشريط الرئيسي ", icon: "🏠", description: "يحتوي على أكثر الأدوات استخداماً لتنسيق النصوص والفقرات.", tools: [{ name: "نوع وحجم الخط", info: "تغيير شكل الخط وتكبير أو تصغير الكلام ليكون واضحاً للقراءة.", img: "/home-size.jpg" }, { name: "لون الخط", info: "تغيير لون الكتابة لتمييز العناوين أو الكلمات الهامة.", img: "/home-color.jpg" }, { name: "المحاذاة", info: "ترتيب النص ليكون في اليمين، اليسار، أو الوسط.", img: "/home-right.jpg" }] },
    insert: { title: "قائمة إدراج ", icon: "➕", description: "إضافة عناصر خارجية وكائنات متنوعة للمستند لتعزيز المحتوى.", tools: [{ name: "إدراج جدول", info: "إضافة جداول لتنظيم البيانات في صفوف وأعمدة بدقة.", img: "/insert-table.jpg" }, { name: "إدراج صور", info: "إضافة صور من الجهاز أو عبر الإنترنت لتوضيح الفكرة.", img: "/insert-image.jpg" }, { name: "الرأس والتذييل", info: "إضافة نص ثابت يظهر في أعلى أو أسفل كل صفحة.", img: "/insert-header.jpg" }] },
    design: { title: "قائمة تصميم", icon: "🎨", description: "التحكم في المظهر الجمالي العام للصفحة.", tools: [{ name: "حدود الصفحة", info: "إضافة إطار أو برواز حول الصفحة.", img: "/design-border.jpg" }] },
    layout: { title: "تخطيط الصفحة", icon: "📐", description: "ضبط حجم واتجاه الورقة والهوامش قبل الطباعة.", tools: [{ name: "الهوامش والاتجاه", info: "تحديد المساحة الفارغة واختيار وضع الصفحة طولياً أو عرضياً.", img: "/lesson6.jpg" }] },
    refs: { title: "قائمة مراجع", icon: "📚", description: "أدوات مخصصة للأبحاث العلمية والفهارس.", tools: [{ name: "جدول المحتويات", info: "إنشاء فهرس تلقائي للعناوين الموجودة لتسهيل الوصول للمواضيع.", img: "/lesson7.jpg" }] },
    mail: { title: "قائمة مراسلات", icon: "✉️", description: "تستخدم لعمل خطابات موجهة لمجموعة كبيرة من الأشخاص دفعة واحدة.", tools: [{ name: "دمج المراسلات", info: "ربط قاعدة بيانات أسماء بالخطاب المكتوب لطباعتها مخصصة لكل شخص.", img: "/lesson8.jpg" }] },
    review: { title: "قائمة مراجعة", icon: "✔️", description: "للتأكد من سلامة النص لغوياً وإملائياً قبل الاعتماد النهائي.", tools: [{ name: "تدقيق إملائي", info: "البحث عن الأخطاء المطبعية واللغوية وتصحيحها تلقائياً.", img: "/lesson9.jpg" }] },
    view: { title: "قائمة عرض", icon: "👁️", description: "تغيير طريقة رؤية المستند على الشاشة بما يناسب عملك.", tools: [{ name: "طرق العرض", info: "التحكم في درجة تقريب الصفحة أو تغيير وضع الرؤية.", img: "/lesson10.jpg" }] },
    
    // البطاقة رقم 13 الجديدة
    download: { 
      title: "تحميل الملف", 
      icon: "📥", 
      description: "يمكنك تحميل كتاب الشرح التعليمي الشامل بصيغة PDF لمراجعته في أي وقت بدون إنترنت.",
      isFile: true,
      fileUrl: "/word-handout.pdf" // تأكدي من وضع الملف في مجلد public بنفس هذا الاسم
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f7ff] flex flex-col font-sans text-right" dir="rtl">
      
      {/* الشريط العلوي - الروابط يمين والأزرار يسار كما في الكود الأصلي */}
      <div className="w-full bg-[#1e3a8a] px-16 py-6 flex justify-between items-center shadow-lg z-50">
        <nav className="flex gap-10 text-white font-bold text-xl">
          <Link href="/" className="hover:text-yellow-400">الرئيسية</Link>
          <Link href="/about" className="hover:text-yellow-400">التعليمات</Link>
          <Link href="/topics" className="text-yellow-400 border-b-2 border-yellow-400 pb-1">المحتوي التعليمي</Link>
          <Link href="/exam" className="hover:text-yellow-400">الاختبار</Link>
          <Link href="/platform" className="hover:text-yellow-400">حول الموقع</Link>
        </nav>

        <div className="flex gap-6">
          <button onClick={() => setShowModal('contact')} className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform">تواصل معنا 📧</button>
          <button onClick={() => setShowModal('help')} className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform">؟ المساعدة</button>
        </div>
      </div>

      <div className="p-10 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-2">
          <h1 className="text-6xl font-black text-[#1e3a8a]"> المحتوى التعليمي</h1>
          <button onClick={() => speak("صفحة المحتوى. اختر القائمة التي تود دراستها")} className="text-[#FFD700] hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" viewBox="0 0 256 256">
                <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM144,207.64l-61.12-47.53A8,8,0,0,0,77.25,158H32V98H77.25a8,8,0,0,0,5.63-2.11L144,48.36Z"></path>
                <path d="M197.66,74.34a8,8,0,0,0-11.32,11.32,60,60,0,0,1,0,84.85,8,8,0,0,0,11.32,11.32,76,76,0,0,0,0-107.49Z"></path>
             </svg>
          </button>
        </div>
        <p className="text-2xl font-bold text-gray-500 mb-12 text-center">اختر القائمة التي تود دراستها</p>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
            {Object.keys(contentData).map((key) => (
              <div key={key} onClick={() => { setSelectedCategory(key); speak(`درس ${contentData[key].title}`); }} className="bg-white p-8 rounded-[40px] shadow-xl border-t-8 border-[#1e3a8a] flex flex-col items-center cursor-pointer hover:scale-105 transition-all">
                <span className="text-7xl mb-4">{contentData[key].icon}</span>
                <h2 className="text-2xl font-bold text-[#1e3a8a]">{contentData[key].title}</h2>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-6xl bg-white rounded-[50px] shadow-2xl overflow-hidden border-4 border-[#1e3a8a] animate-pop-in">
            <div className="bg-[#1e3a8a] p-8 flex justify-between items-center text-white">
              <h2 className="text-4xl font-bold">{contentData[selectedCategory].title}</h2>
              <button onClick={() => setSelectedCategory(null)} className="bg-red-500 hover:bg-red-600 px-10 py-3 rounded-full font-bold shadow-lg">رجوع للدروس ↩</button>
            </div>
            
            <div className="p-12 space-y-12">
              <div className="bg-blue-50 p-8 rounded-[30px] border-r-8 border-blue-500 shadow-sm">
                <h3 className="text-3xl font-black text-[#1e3a8a] mb-4">وصف القائمة:</h3>
                <p className="text-2xl text-gray-700 leading-relaxed">{contentData[selectedCategory].description}</p>
                <button onClick={() => speak(contentData[selectedCategory].description)} className="mt-4 flex items-center gap-2 text-blue-700 font-bold hover:underline">🔊 استمع للوصف</button>
              </div>

              {/* التحقق إذا كانت البطاقة للتحميل */}
              {contentData[selectedCategory].isFile ? (
                <div className="flex flex-col items-center justify-center p-20 bg-gray-50 rounded-[40px] border-4 border-dashed border-gray-300">
                  <div className="text-[120px] mb-8 animate-bounce">📄</div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8">جاهز للتحميل؟</h3>
                  <a 
                    href={contentData[selectedCategory].fileUrl} 
                    download 
                    className="bg-green-500 hover:bg-green-600 text-white text-3xl px-16 py-6 rounded-full font-black shadow-2xl transition-all transform hover:scale-110 flex items-center gap-4"
                  >
                    تحميل الكتاب الآن 📥
                  </a>
                </div>
              ) : (
                <div className="grid gap-10">
                  {contentData[selectedCategory].tools.map((tool, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-[30px] border-2 border-gray-100 shadow-md">
                      <div className="flex-1 text-right">
                        <div className="flex items-center gap-3 mb-4">
                           <span className="bg-yellow-400 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center font-black">{index + 1}</span>
                           <h4 className="text-3xl font-bold text-[#1e3a8a]">{tool.name}</h4>
                        </div>
                        <p className="text-2xl leading-relaxed text-gray-600 mb-6">{tool.info}</p>
                        <button onClick={() => speak(tool.info)} className="bg-[#1e3a8a] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-colors shadow-md">🔊 اسمع الشرح</button>
                      </div>
                      {tool.img && (
                        <div className="w-full md:w-2/5 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
                          <img src={tool.img} alt={tool.name} className="w-full h-auto object-cover" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* النوافذ المنبثقة */}
      {showModal === 'contact' && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
          <div className="bg-white p-8 rounded-[40px] w-full max-w-lg shadow-2xl border-[8px] border-yellow-400 text-center animate-pop-in">
            <h3 className="text-3xl font-black text-[#1e3a8a] mb-6">تواصل معنا 📧</h3>
            <textarea placeholder="اكتب رسالتك هنا..." className="w-full h-44 p-4 border-2 border-gray-200 rounded-3xl text-xl text-right outline-none mb-6 resize-none" />
            <div className="flex gap-4">
              <button className="flex-1 bg-yellow-400 text-blue-900 py-4 rounded-2xl text-2xl font-black shadow-lg">إرسال</button>
              <button onClick={() => setShowModal(null)} className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-2xl text-2xl font-black">إلغاء</button>
            </div>
          </div>
        </div>
      )}

      {showModal === 'help' && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
          <div className="bg-white p-10 rounded-[40px] w-full max-w-xl shadow-2xl border-[8px] border-[#00c853] text-center animate-pop-in">
            <h3 className="text-4xl font-black text-[#1e3a8a] mb-8 underline decoration-blue-200">دليل الاستخدام 🧐</h3>
            <ul className="text-right space-y-6 mb-10 text-2xl font-bold text-gray-700 px-4">
              <li>1. الروابط في الأعلى تنقلك بين أقسام الموقع.</li>
              <li>2. اضغط على أي بطاقة لعرض أدوات البرنامج بالتفصيل.</li>
              <li>3. استخدم أيقونة السماعة لسماع الشرح الصوتي.</li>
            </ul>
            <button onClick={() => setShowModal(null)} className="w-full bg-[#00c853] text-white py-5 rounded-3xl text-3xl font-black shadow-lg">فهمت! 👍</button>
          </div>
        </div>
      )}
    </div>
  );
}