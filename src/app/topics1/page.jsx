"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Topics1Page() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const mainCards = [
    { 
      id: 1, 
      title: "تعريف برنامج Word", 
      icon: "📝",
      content: "هو أداة بسيطة تساعد الطلاب على كتابة النصوص والجمل وتنظيمها خطوة بخطوة.",
      details: [] 
    },
    { 
      id: 2, 
      title: "شاشة البرنامج", 
      icon: "🖥️",
      content: "تتكون من مكان أبيض للكتابة وأزرار في الأعلى تساعدنا في التحكم في النص.",
      details: []
    },
    { 
      id: 3, 
      title: "قائمة الملف (File)", 
      icon: "📂",
      content: "تحتوي هذه القائمة على الأوامر الأساسية لإدارة مستنداتك.",
      details: [
        { name: "أداة إنشاء ملف جديد", desc: "لفتح صفحة جديدة للكتابة." },
        { name: "أداة فتح ملف", desc: "لفتح ملف تم حفظه مسبقاً." },
        { name: "أداة حفظ الملف", desc: "لحفظ عملك على الجهاز." },
        { name: "أداة إغلاق المستند", desc: "لإغلاق الملف بعد الانتهاء." }
      ]
    },
    { 
      id: 4, 
      title: "الشريط الرئيسي (Home)", 
      icon: "🏠",
      content: "هو الشريط الذي يحتوي على أكثر الأدوات استخداماً لتنسيق النصوص.",
      details: [
        { name: "نوع وحجم الخط", desc: "لتغيير شكل الخط وتكبيره أو تصغيره." },
        { name: "لون الخط", desc: "لتغيير لون الكتابة وجعلها جذابة." },
        { name: "تنسيق الخط (عريض)", desc: "لجعل الكلمات المهمة أكثر وضوحاً." },
        { name: "المحاذاة والنسخ واللصق", desc: "لترتيب النص ونقله من مكان لآخر." }
      ]
    },
    { 
      id: 5, 
      title: "قائمة إدراج (Insert)", 
      icon: "➕",
      content: "تستخدم لإضافة عناصر خارجية داخل صفحات الملف.",
      details: [
        { name: "إدراج صورة", desc: "لإضافة صور توضيحية داخل المستند." },
        { name: "إدراج جدول", desc: "لتنظيم البيانات في صفوف وأعمدة." },
        { name: "إدراج أشكال", desc: "لإضافة دوائر ومربعات للتوضيح." },
        { name: "رأس الصفحة والترقيم", desc: "لتنظيم شكل الملف النهائي." }
      ]
    },
    { 
      id: 6, 
      title: "قائمة التصميم (Design)", 
      icon: "🎨",
      content: "تساعد في تغيير المظهر العام لصفحات الملف.",
      details: [
        { name: "أداة النسق", desc: "لاختيار تصميم جاهز يشمل الألوان والخطوط." },
        { name: "لون الصفحة", desc: "لتغيير خلفية الملف." },
        { name: "حدود الصفحة", desc: "لإضافة إطار جمالي حول الصفحة." }
      ]
    },
    { 
      id: 7, 
      title: "قوائم أخرى في Word", 
      icon: "⚙️",
      content: "تضم مجموعة من القوائم المتقدمة لتنظيم العمل الاحترافي.",
      details: [
        { name: "قائمة التخطيط والمراجع", desc: "لترتيب الهوامش وإضافة الفهرس." },
        { name: "قائمة مراسلات ومراجعة", desc: "لإنشاء الخطابات وتصحيح الأخطاء." },
        { name: "قائمة عرض", desc: "لتغيير طريقة عرض الملف على الشاشة." }
      ]
    }
  ];

  const speakText = (text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#EBF2FA] font-sans flex flex-col items-center" dir="rtl">
      <nav className="w-full bg-[#2B579A] py-5 px-10 flex justify-between items-center text-white shadow-2xl mb-10">
        <div className="flex gap-8 font-black text-xl">
          <Link href="/" className="hover:text-yellow-300 transition-colors">الصفحة الرئيسية</Link>
          <Link href="/Topics" className="hover:text-yellow-300 transition-colors">تعليمات</Link>
          <Link href="/Topics1" className="text-yellow-400 border-b-4 border-yellow-400 pb-1">المحتوى التعليمي</Link>
          <Link href="/exma" className="hover:text-yellow-300 transition-colors">الاختبار</Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors">حول المنصة</Link>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white text-[#2B579A] px-5 py-2.5 rounded-xl shadow-lg font-bold text-lg hover:scale-105 transition-all">
            <span className="text-blue-500 text-xl">📧</span> تواصل معنا
          </button>
          <button className="flex items-center gap-2 bg-white text-[#2B579A] px-5 py-2.5 rounded-xl shadow-lg font-bold text-lg hover:scale-105 transition-all">
            <span className="text-red-500 text-2xl font-black">؟</span> المساعدة
          </button>
        </div>
      </nav>

      <h1 className="text-[#2B579A] text-5xl font-black mb-12 text-center">استكشف أدوات برنامج Word 🚀</h1>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mb-20 max-w-7xl w-full">
        {mainCards.map((card) => (
          <div key={card.id} className="bg-white rounded-[2.5rem] p-8 shadow-xl border-b-8 border-[#2B579A] hover:-translate-y-2 transition-transform text-center flex flex-col items-center">
            <span className="text-6xl mb-4 block">{card.icon}</span>
            <h3 className="text-[#2B579A] text-2xl font-black mb-6">{card.title}</h3>
            <button 
              onClick={() => setSelectedLesson(card)}
              className="mt-auto bg-[#2B579A] text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-700 transition-colors shadow-md"
            >
              عرض التفاصيل 🔍
            </button>
          </div>
        ))}
      </main>

      {selectedLesson && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6 overflow-y-auto">
          <div className="bg-white rounded-[3rem] p-10 max-w-3xl w-full relative shadow-2xl border-8 border-[#2B579A]">
            <button 
              onClick={() => {setSelectedLesson(null); window.speechSynthesis.cancel();}} 
              className="absolute top-5 right-7 text-4xl text-red-500 font-black hover:scale-110 transition-all"
            >
              X
            </button>
            
            <button 
              onClick={() => speakText(selectedLesson.content)}
              className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 active:scale-95 transition-all"
            >
              <span className="text-3xl">🔊</span>
            </button>

            <h2 className="text-[#2B579A] text-4xl font-black mb-6 text-center">{selectedLesson.title}</h2>
            <p className="text-2xl text-gray-700 font-bold text-center mb-8 leading-relaxed">
              {selectedLesson.content}
            </p>

            {selectedLesson.details.length > 0 && (
              <div className="grid grid-cols-1 gap-4 text-right bg-blue-50 p-6 rounded-3xl">
                {selectedLesson.details.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-yellow-400">
                    <span className="text-[#2B579A] font-black text-xl">{item.name}:</span>
                    <span className="text-gray-600 font-bold mr-2 text-lg">{item.desc}</span>
                  </div>
                ))}
              </div>
            )}

            <button 
              onClick={() => {setSelectedLesson(null); window.speechSynthesis.cancel();}} 
              className="mt-8 w-full bg-[#2B579A] text-white py-4 rounded-2xl text-xl font-black hover:bg-blue-700 transition-colors shadow-md"
            >
              حسناً، فهمت! 👍
            </button>
          </div>
        </div>
      )}

      <footer className="mt-auto py-8 text-[#2B579A] font-bold opacity-70">
        جامعة عين شمس • كلية التربية النوعية
      </footer>
    </div>
  );
}