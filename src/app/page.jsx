'use client';// 👈 السطر السحري اللي هيشغل الصفحة فوراً!

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // استيراد الموجّه لتبديل الصفحات

export default function WelcomePage() {
  // حالات التحكم في ظهور النوافذ (Modals)
  const [showLogin, setShowLogin] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  const router = useRouter(); // تفعيل الموجّه

  // دالة تسجيل الدخول والانتقال للصفحة التالية
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setShowLogin(false);
    router.push('/about'); // الانتقال لصفحة التعليمات والمحتوى فوراً
  };

  return (
    <div className="relative min-h-screen bg-[#f0f7ff] flex flex-col items-center justify-center font-sans text-right" dir="rtl">
      
      {/* الأزرار العلوية */}
      <div className="absolute top-10 w-full px-16 flex justify-between items-start">
        {/* زر تسجيل الدخول - بنفس حجم تواصل معنا ومساعدة تماماً px-8 py-3 */}
        <button 
          onClick={() => setShowLogin(true)}
          className="bg-white border border-[#1e3a8a] text-[#1e3a8a] px-8 py-3 rounded-full font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2 transition-all active:scale-95"
        >
          {/* أيقونة شخص دائرية واضحة جداً وملائمة لألوان الوورد */}
          <div className="bg-[#1e3a8a] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          تسجيل الدخول
        </button>

        {/* أزرار التواصل والمساعدة على اليسار بنفس الحجم تماماً */}
        <div className="flex gap-6">
          <button 
            onClick={() => setShowContact(true)}
            className="bg-white border border-[#1e3a8a] text-[#1e3a8a] px-8 py-3 rounded-full font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2 transition-all active:scale-95"
          >
            <span>📧</span> تواصل معنا
          </button>
          <button 
            onClick={() => setShowHelp(true)}
            className="bg-white border border-[#1e3a8a] text-[#1e3a8a] px-8 py-3 rounded-full font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2 transition-all active:scale-95"
          >
            <span>❓</span> مساعدة
          </button>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="text-center flex flex-col items-center gap-8 -mt-20">
        {/* حاوية اللوجو */}
        <div className="bg-white p-6 rounded-[40px] shadow-xl mb-2 border border-gray-100 ring-8 ring-[#1e3a8a]/5">
          <img 
            src="/word-logo.png" 
            alt="Word Logo" 
            className="w-36 h-36 object-contain"
          />
        </div>
        
        <h1 className="text-6xl font-black text-[#1e3a8a] tracking-tight drop-shadow-sm">
        Microsoft Word
        </h1>

        {/* الكلام الترحيبي */}
        <div className="space-y-4">
          <p className="text-3xl font-bold text-gray-800 tracking-wide">مرحباً بك يا بطل..</p>
          <p className="text-xl text-gray-600 max-w-2xl font-semibold leading-relaxed">
            هذا الموقع مصمم خصيصاً ليناسب قدراتك ويساعدك
            <br />
            على تعلم برنامج  Word بكل سهولة. 
          </p>
        </div>

        {/* زر البداية */}
        <Link href="/about" className="mt-6 bg-[#2e59a7] text-white text-3xl font-black px-16 py-6 rounded-[25px] shadow-2xl hover:scale-105 hover:bg-[#1e3a8a] transition-all duration-300">
           اكتشف أسرار الـ Word 🚀
        </Link>
      </div>

      {/* --- النوافذ (Modals) --- */}

      {/* 1. نافذة تسجيل الدخول */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-all">
          <div className="bg-white rounded-[40px] p-10 max-w-md w-full shadow-2xl relative border-t-[12px] border-[#1e3a8a]">
            <button onClick={() => setShowLogin(false)} className="absolute top-6 left-6 text-gray-400 hover:text-red-500 text-3xl">✕</button>
            <h2 className="text-3xl font-black text-[#1e3a8a] mb-8 text-center">تسجيل الدخول</h2>
            
            {/* نموذج الدخول مربوط بالدالة البرمجية */}
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <input type="text" placeholder="اسم المستخدم" className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl outline-none text-right text-lg" required />
              <input type="password" placeholder="كلمة المرور" className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl outline-none text-right text-lg" required />
              <button type="submit" className="w-full bg-[#1e3a8a] text-white py-5 rounded-2xl font-black text-2xl hover:bg-[#152a61] shadow-lg transition-all">دخول</button>
            </form>

          </div>
        </div>
      )}

      {/* 2. نافذة تواصل معنا */}
      {showContact && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-[40px] p-10 max-w-md w-full shadow-2xl relative border-[8px] border-[#ffcc00]">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 text-center">اسأل سؤالك 💡</h2>
            <textarea placeholder="اكتب سؤالك هنا يا بطل..." className="w-full h-44 p-5 bg-gray-50 border border-gray-200 rounded-2xl outline-none text-right mb-6 resize-none text-lg"></textarea>
            <div className="flex gap-4">
              <button className="flex-1 bg-[#ffcc00] text-[#1e3a8a] py-5 rounded-2xl font-black text-2xl hover:bg-[#e6b800] shadow-md">إرسال</button>
              <button onClick={() => setShowContact(false)} className="flex-1 bg-gray-200 text-gray-600 py-5 rounded-2xl font-black text-2xl">إلغاء</button>
            </div>
          </div>
        </div>
      )}

      {/* 3. نافذة المساعدة */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-[40px] p-10 max-w-lg w-full shadow-2xl relative border-[8px] border-[#00c853]">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-8 text-right underline decoration-[#00c853] decoration-8">كيف تستخدم الموقع؟ 🤔</h2>
            <ul className="space-y-6 text-right mb-10">
              <li className="text-2xl font-bold text-gray-700 flex items-center gap-3">
                <span className="bg-[#00c853] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">١</span>
                اضغط على الزر الكبير للبدء.
              </li>
              <li className="text-2xl font-bold text-gray-700 flex items-center gap-3">
                <span className="bg-[#00c853] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">٢</span>
                استمع للصوت الإرشادي.
              </li>
              <li className="text-2xl font-bold text-gray-700 flex items-center gap-3">
                <span className="bg-[#00c853] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">٣</span>
                راسلنا لأي سؤال.
              </li>
            </ul>
            <button onClick={() => setShowHelp(false)} className="w-full bg-[#00c853] text-white py-6 rounded-3xl font-black text-3xl hover:bg-[#00a344] shadow-xl transition-all">فهمت! 👍</button>
          </div>
        </div>
      )}

      {/* التذييل */}
      <div className="absolute bottom-6 text-center text-sm font-bold text-gray-500">
        جامعة عين شمس • كلية التربية النوعية • قسم تكنولوجيا التعليم
        <br />
        جميع الحقوق محفوظة © 2026
      </div>
    </div>
  );
}