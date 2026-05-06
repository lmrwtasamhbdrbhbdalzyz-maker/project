'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AboutPlatform() {
  const [showModal, setShowModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col font-sans" dir="rtl">
      
      {/* الشريط العلوي الثابت - الروابط يمين والأزرار يسار */}
      <div className="w-full bg-[#1e3a8a] px-16 py-6 flex flex-row justify-between items-center shadow-xl z-[100] sticky top-0">
        <nav className="flex gap-10 text-white font-bold text-xl items-center">
          <Link href="/" className="hover:text-yellow-400 transition-colors">الرئيسية</Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors">التعليمات</Link>
          <Link href="/topics" className="hover:text-yellow-400 transition-colors">المحتوي التعليمي</Link>
          <Link href="/exam" className="hover:text-yellow-400 transition-colors">الاختبار</Link>
          <Link href="/platform" className="text-yellow-400 border-b-2 border-yellow-400 pb-1">حول الموقع</Link>
        </nav>

        <div className="flex gap-6 items-center">
          <button onClick={() => setShowModal('contact')} className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-400 hover:scale-105 transition-all">تواصل معنا 📧</button>
          <button onClick={() => setShowModal('help')} className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-400 hover:scale-105 transition-all">؟ المساعدة</button>
        </div>
      </div>

      {/* نافذة تواصل معنا (الصفراء) */}
      {showModal === 'contact' && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200] backdrop-blur-sm p-4">
          <div className="bg-white rounded-[40px] max-w-lg w-full p-10 shadow-2xl border-[6px] border-yellow-400 text-right">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-8 flex items-center justify-center gap-3">اسأل سؤالك 💡</h2>
            <textarea 
              placeholder="اكتب سؤالك هنا يا بطل..."
              className="w-full h-48 p-6 rounded-3xl border-2 border-slate-200 text-xl focus:border-yellow-400 outline-none resize-none mb-8 bg-slate-50 text-right"
            ></textarea>
            <div className="flex gap-4">
              <button onClick={() => setShowModal(null)} className="flex-1 bg-yellow-500 text-white py-4 rounded-2xl text-2xl font-black hover:bg-yellow-600 transition-all shadow-lg">إرسال</button>
              <button onClick={() => setShowModal(null)} className="flex-1 bg-slate-200 text-slate-600 py-4 rounded-2xl text-2xl font-black hover:bg-slate-300 transition-all">إلغاء</button>
            </div>
          </div>
        </div>
      )}

      {/* نافذة المساعدة (الخضراء) */}
      {showModal === 'help' && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200] backdrop-blur-sm p-4">
          <div className="bg-white rounded-[40px] max-w-lg w-full p-10 shadow-2xl border-[6px] border-green-400 text-right">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-8 text-center border-b-4 border-blue-100 pb-4">كيف تستخدم الموقع؟ 🧐</h2>
            <ul className="space-y-6 text-2xl font-bold text-slate-700 mb-10 leading-relaxed">
              <li className="flex items-start gap-3"><span>1.</span> اضغط على زر "يلا بينا نبدأ" للدروس.</li>
              <li className="flex items-start gap-3"><span>2.</span> استمع للصوت الإرشادي في كل صفحة.</li>
              <li className="flex items-start gap-3"><span>3.</span> راسلنا من "تواصل معنا" لأي سؤال.</li>
            </ul>
            <button onClick={() => setShowModal(null)} className="w-full bg-[#00c853] text-white py-5 rounded-2xl text-3xl font-black hover:bg-green-600 transition-all shadow-xl flex items-center justify-center gap-3">فهمت! 👍</button>
          </div>
        </div>
      )}

      {/* المحتوى الرئيسي */}
      <div className="flex-grow p-12 flex flex-col items-center">
        <div className="max-w-6xl w-full space-y-16">
          
          <h1 className="text-6xl font-black text-[#1e3a8a] text-center mb-16 underline decoration-yellow-400 italic">عن موقعنا التعليمي 🚀</h1>

          {/* 1. قسم بيانات المشروع (إعداد مروة) */}
          <div className="bg-white p-12 rounded-[60px] shadow-2xl border-r-[20px] border-[#1e3a8a] text-right relative">
             <h2 className="text-4xl font-black text-[#1e3a8a] mb-12 mt-4 border-b-4 border-blue-50 pb-6 italic">بطاقة تعريفية بالعمل 🎓</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                <div className="space-y-6">
                  <p className="text-2xl font-bold text-slate-800"><span className="text-[#1e3a8a]">● إعداد الطالبة:</span> مروة أسامة عبد ربه عبد العزيز</p>
                  <p className="text-2xl font-bold text-slate-800"><span className="text-[#1e3a8a]">● القسم:</span> تكنولوجيا التعليم -  معلم حاسب</p>
                  <p className="text-2xl font-bold text-slate-800"><span className="text-[#1e3a8a]">● الشعبة:</span> تربية خاصة</p>
                </div>
                <div className="space-y-6">
                  <p className="text-2xl font-bold text-slate-800"><span className="text-[#1e3a8a]">● تحت إشراف:</span> الدكتورة:- أمل</p>
                  <p className="text-2xl font-bold text-slate-800"><span className="text-[#1e3a8a]">● تحت إشراف:</span> الدكتور :-محمد عادل</p>
                  <p className="text-2xl font-bold text-slate-800"><span className="text-[#1e3a8a]">● المادة:</span> مقرر مواقع الويب التعليمية</p>
                </div>
             </div>
          </div>

          {/* 2. الأهداف والفئات (التي أضفناها مؤخراً) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-white p-10 rounded-[50px] shadow-2xl border-b-[12px] border-green-400">
              <div className="text-6xl mb-6">👥</div>
              <h2 className="text-3xl font-black text-[#1e3a8a] mb-4 italic">الفئة المستهدفة</h2>
              <p className="text-2xl font-bold text-slate-600 leading-relaxed">
                هذا الموقع مصمم خصيصاً للطلاب الذين يعانون من <span className="text-green-600">صعوبات التعلم</span>.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[50px] shadow-2xl border-b-[12px] border-yellow-400">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl font-black text-[#1e3a8a] mb-4 italic">الهدف من الموقع</h2>
              <p className="text-2xl font-bold text-slate-600 leading-relaxed">
                يهدف الموقع إلى مساعدة <span className="text-yellow-600">ذوي صعوبات التعلم</span> في إتقان مهارات برنامج "وورد".
              </p>
            </div>
          </div>

          {/* 3. البطاقات الأساسية (التي كانت موجودة في البداية) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-white p-10 rounded-[50px] shadow-2xl border-b-[10px] border-[#1e3a8a]">
              <div className="text-6xl mb-6">🌟</div>
              <h2 className="text-3xl font-black text-[#1e3a8a] mb-4 italic">رؤيتنا</h2>
              <p className="text-xl font-bold text-slate-600 leading-relaxed">
                أن نجعل تعلم التكنولوجيا رحلة ممتعة وسهلة لكل الأبطال الصغار ببراعة.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[50px] shadow-2xl border-b-[10px] border-yellow-400">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-3xl font-black text-[#1e3a8a] mb-4 italic">ماذا ستتعلم؟</h2>
              <p className="text-xl font-bold text-slate-600 leading-relaxed">
                ستتعرف على واجهة البرنامج، قائمة ملف، وكيفية تنسيق الخطوط وإضافة الصور.
              </p>
            </div>
          </div>

          {/* 4. قسم لماذا تختار منصتنا؟ */}
          <div className="bg-white p-12 rounded-[60px] shadow-2xl border-r-[15px] border-green-400 text-right">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-10 italic">لماذا تختار موقعنا؟ ✨</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "شرح سهل وبسيط يناسب الأبطال الصغار.",
                "تعليمات صوتية ترافقك في كل خطوة.",
                "اختبارات تفاعلية لجمع النجوم الذهبية.",
                "تصميم مريح للعين يدعم العربية تماماً."
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4 text-2xl font-bold text-slate-700 flex-row-reverse">
                  <span className="text-green-500 text-3xl">✔</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* تذييل الصفحة */}
          <div className="mt-20 text-center text-slate-400 font-bold border-t-2 border-slate-100 pt-10">
            <p className="text-2xl mb-2 text-slate-500">جامعة عين شمس • كلية التربية النوعية</p>
            <p>© 2026 جميع الحقوق محفوظة - مروة أسامة</p>
          </div>
        </div>
      </div>
    </div>
  );
}