'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [showContact, setShowContact] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  const speak = (text) => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      window.speechSynthesis.speak(utterance);
    }
  };

  const welcomeMessage = "تعليمات الموقع: أهلاً بك يا بطل! يمكنك التنقل بين أقسام الموقع من الروابط بالأعلى، وإذا احتجت لأي مساعدة أو أردت مراسلتنا، استخدم أزرار المساعدة وتواصل معنا الموجودة في أقصى اليسار.";

  useEffect(() => {
    speak(welcomeMessage);

    // هذا السطر يضمن أن الصوت يسكت فوراً ولا يكمل في أي صفحة ثانية عند الخروج
    return () => {
      if (typeof window !== 'undefined') {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f7ff] flex flex-col font-sans text-right relative" dir="rtl">
      
      {/* الشريط العلوي الثابت - تم تعديل اللون هنا إلى الأزرق الغامق #1e3a8a */}
      <div className="w-full bg-[#1e3a8a] px-8 py-4 flex justify-between items-center shadow-md">
        <nav className="flex gap-8 text-white font-bold text-lg">
          <Link href="/" className="hover:text-gray-200 transition-colors">الصفحة الرئيسية</Link>
          <Link href="/about" className="text-[#ffcc00] border-b-2 border-[#ffcc00] pb-1">تعليمات</Link>
          <Link href="/topics" className="hover:text-gray-200 transition-colors">المحتوى التعليمي</Link>
          <Link href="/exam" className="hover:text-gray-200 transition-colors">الاختبار</Link>
          <Link href="/about-platform" className="hover:text-gray-200 transition-colors">حول الموقع</Link>
        </nav>

        {/* الأزرار البيضاوية rounded-full وبنفس حجمها القديم */}
        <div className="flex gap-4">
          <button 
            onClick={() => { setShowContact(true); setShowHelp(false); speak("اسأل سؤالك"); }}
            className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold text-md shadow-sm flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-all outline-none"
          >
            <span className="bg-blue-50 rounded px-1 flex items-center justify-center text-xs">📧</span> تواصل معنا
          </button>
          <button 
            onClick={() => { setShowHelp(true); setShowContact(false); speak("كيف تستخدم الموقع؟"); }}
            className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold text-md shadow-sm flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-all outline-none"
          >
            <span className="text-red-600 font-black text-xl leading-none">؟</span> المساعدة
          </button>
        </div>
      </div>

      {/* المحتوى المركزي الثابت (يظهر خلف النوافذ) */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-4xl p-16 rounded-[60px] shadow-2xl border border-blue-50 text-center flex flex-col items-center gap-8">
          <button 
            onClick={() => speak(welcomeMessage)}
            className="bg-[#ffcc00] w-24 h-24 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-all cursor-pointer"
          >
            <span className="text-5xl text-white">🔊</span>
          </button>
          <h1 className="text-6xl font-black text-[#2b579a]">تعليمات الموقع</h1>
          <p className="text-3xl font-bold text-[#2b579a] leading-loose max-w-3xl">
            أهلاً بك يا بطل! يمكنك التنقل بين أقسام الموقع من الروابط بالأعلى، وإذا احتجت لأي مساعدة أو أردت مراسلتنا، استخدم زر (المساعدة) و (تواصل معنا) الموجودة في جهة اليسار.
          </p>
        </div>
      </main>

      {/* نافذة "تواصل معنا" مع تأثير الخلفية الشفافة الضبابية */}
      {showContact && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-md bg-white/10 transition-all duration-300">
          <div className="bg-white rounded-[40px] border-[6px] border-[#ffcc00] p-8 max-w-md w-full shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-in zoom-in duration-200">
            <h2 className="text-3xl font-black text-[#2b579a] text-center mb-6 flex justify-center items-center gap-2">
               اسأل سؤالك 💡
            </h2>
            <textarea 
              className="w-full border-2 border-gray-100 rounded-2xl p-4 text-xl h-40 focus:border-[#ffcc00] outline-none transition-all text-right bg-gray-50"
              placeholder="اكتب سؤالك هنا يا بطل..."
            ></textarea>
            <div className="flex gap-4 mt-6">
              <button 
                onClick={() => setShowContact(false)}
                className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-2xl font-bold text-xl hover:bg-gray-200 transition-all"
              >إلغاء</button>
              <button 
                onClick={() => { setShowContact(false); alert('تم الإرسال!'); }}
                className="flex-1 bg-[#ffcc00] text-white py-3 rounded-2xl font-bold text-xl hover:bg-[#e6b800] transition-all shadow-md"
              >إرسال</button>
            </div>
          </div>
        </div>
      )}

      {/* نافذة "المساعدة" مع تأثير الخلفية الشفافة الضبابية */}
      {showHelp && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-md bg-white/10 transition-all duration-300">
          <div className="bg-white rounded-[40px] border-[6px] border-[#00c853] p-8 max-w-md w-full shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-in zoom-in duration-200">
            <h2 className="text-3xl font-black text-[#2b579a] text-center mb-6 border-b-4 border-[#00c853] pb-2 inline-block w-full">
              كيف تستخدم الموقع؟ 🧐
            </h2>
            <ul className="text-right space-y-4 text-xl font-bold text-gray-700 mb-8">
              <li>1. اضغط على زر "يلا بينا نبدأ" للدروس.</li>
              <li>2. استمع للصوت الإرشادي في كل صفحة.</li>
              <li>3. راسلنا من "تواصل معنا" لأي سؤال.</li>
            </ul>
            <button 
              onClick={() => setShowHelp(false)}
              className="w-full bg-[#00c853] text-white py-4 rounded-2xl font-bold text-2xl hover:bg-[#00a344] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              فهمت! 👍
            </button>
          </div>
        </div>
      )}

      <footer className="w-full p-8 text-center text-blue-900 opacity-70">
        <p className="text-xl font-bold">جامعة عين شمس • كلية التربية النوعية</p>
        <p className="text-lg font-bold mt-2 text-gray-500">2026 © جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}