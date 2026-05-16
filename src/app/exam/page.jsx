'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ExamPage() {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const questions = [
    { id: 1, question: "برنامج مايكروسوفت وورد يُستخدم لكتابة القصص والرسائل والدروس.", options: ["صح", "خطأ"], answer: "صح" },
    { id: 2, question: "أداة 'حجم الخط' تُستخدم لتغيير لون الكلام وجعله أحمر أو أزرق.", options: ["صح", "خطأ"], answer: "خطأ" },
    { id: 3, question: "نستخدم قائمة 'إدراج' عندما نريد إضافة صورة أو شكل للملف.", options: ["صح", "خطأ"], answer: "صح" },
    { id: 4, question: "أداة 'توسيط النص' تجعل الكلام يبدأ من أول السطر جهة اليمين.", options: ["صح", "خطأ"], answer: "خطأ" },
    { id: 5, question: "زر 'حفظ' في قائمة ملف يحمي عملنا من الضياع ويخزنه على الجهاز.", options: ["صح", "خطأ"], answer: "صح" },
    { id: 6, question: "إذا أردنا فتح صفحة جديدة فارغة تماماً، نختار من قائمة 'ملف' أمر:", options: ["إغلاق", "جديد", "طباعة"], answer: "جديد" },
    { id: 7, question: "لتغيير شكل الحروف وجعلها تبدو أجمل، نستخدم أداة:", options: ["نوع الخط", "مسح النص", "إدراج جدول"], answer: "نوع الخط" },
    { id: 8, question: "الأداة التي تضع إطاراً أو زينة حول حدود الورقة تسمى:", options: ["لون الخط", "حدود الصفحة", "ترقيم الصفحات"], answer: "حدود الصفحة" },
    { id: 9, question: "لجعل الكلمة 'سميكة' وواضحة جداً عن باقي الكلام، نضغط على حرف:", options: ["ب (عريض)", "م (مائل)", "س (تحته خط)"], answer: "ب (عريض)" },
    { id: 10, question: "نستخدم أداة 'إدراج جدول' لكي نقوم بـ:", options: ["تلوين الصفحة", "تنظيم البيانات في صفوف وأعمدة", "الخروج من البرنامج"], answer: "تنظيم البيانات في صفوف وأعمدة" }
  ];

  const speak = (text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      window.speechSynthesis.speak(utterance);
    }
  };

  // إيقاف الصوت تلقائياً عند الانتقال لصفحة أخرى
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleAnswer = (qId, option, correctAnswer) => {
    if (answeredQuestions[qId]) return; 
    if (option === correctAnswer) {
      setScore(prev => prev + 1);
      speak("ممتاز، إجابة صحيحة");
    } else {
      speak("حاول مرة أخرى في السؤال القادم");
    }
    setAnsweredQuestions({ ...answeredQuestions, [qId]: option });
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col font-sans" dir="rtl">
      
      {/* شريط التنقل العلوي ثابت */}
      <div className="w-full bg-[#1e3a8a] px-16 py-6 flex flex-row justify-between items-center shadow-xl z-[100] sticky top-0">
        <nav className="flex gap-10 text-white font-bold text-xl items-center">
          <Link href="/" className="hover:text-yellow-400 transition-colors">الرئيسية</Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors">التعليمات</Link>
          <Link href="/topics" className="hover:text-yellow-400 transition-colors">المحتوى</Link>
          <Link href="/exam" className="text-yellow-400 border-b-2 border-yellow-400 pb-1">الاختبار</Link>
          <Link href="/platform" className="hover:text-yellow-400 transition-colors">حول الموقع</Link>
        </nav>

        <div className="flex gap-6 items-center">
          <button onClick={() => { setShowModal('contact'); speak("اسأل سؤالك"); }} className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-400 hover:scale-105 transition-all">تواصل معنا 📧</button>
          <button onClick={() => { setShowModal('help'); speak("كيف تستخدم الموقع؟"); }} className="bg-white text-[#1e3a8a] px-6 py-2 rounded-full font-bold shadow-md hover:bg-yellow-400 hover:scale-105 transition-all">؟ المساعدة</button>
        </div>
      </div>

      {/* نافذة تواصل معنا (الصفراء) */}
      {showModal === 'contact' && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200] backdrop-blur-sm p-4">
          <div className="bg-white rounded-[40px] max-w-lg w-full p-10 shadow-2xl border-[6px] border-yellow-400">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-8 flex items-center justify-center gap-3">اسأل سؤالك 💡</h2>
            <textarea 
              placeholder="اكتب سؤالك هنا يا بطل..."
              className="w-full h-48 p-6 rounded-3xl border-2 border-slate-200 text-xl focus:border-yellow-400 outline-none resize-none mb-8 bg-slate-50"
            ></textarea>
            <div className="flex gap-4">
              <button onClick={() => setShowModal(null)} className="flex-1 bg-yellow-500 text-white py-4 rounded-2xl text-2xl font-black hover:bg-yellow-600 transition-all shadow-lg active:scale-95">إرسال</button>
              <button onClick={() => setShowModal(null)} className="flex-1 bg-slate-200 text-slate-600 py-4 rounded-2xl text-2xl font-black hover:bg-slate-300 transition-all active:scale-95">إلغاء</button>
            </div>
          </div>
        </div>
      )}

      {/* نافذة المساعدة (الخضراء) */}
      {showModal === 'help' && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200] backdrop-blur-sm p-4">
          <div className="bg-white rounded-[40px] max-w-lg w-full p-10 shadow-2xl border-[6px] border-green-400">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-8 text-center border-b-4 border-blue-100 pb-4">كيف تستخدم الموقع؟ 🧐</h2>
            <ul className="space-y-6 text-2xl font-bold text-slate-700 mb-10 leading-relaxed">
              <li className="flex items-start gap-3"><span>1.</span> اضغط على زر "يلا بينا نبدأ" للدروس.</li>
              <li className="flex items-start gap-3"><span>2.</span> استمع للصوت الإرشادي في كل صفحة.</li>
              <li className="flex items-start gap-3"><span>3.</span> راسلنا من "تواصل معنا" لأي سؤال.</li>
            </ul>
            <button onClick={() => setShowModal(null)} className="w-full bg-[#00c853] text-white py-5 rounded-2xl text-3xl font-black hover:bg-green-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">فهمت! 👍</button>
          </div>
        </div>
      )}

      {/* شريط النجوم الذهبية */}
      <div className="w-full bg-white/90 backdrop-blur-md p-4 flex justify-center gap-3 shadow-md sticky top-[88px] z-[90] border-b-2 border-blue-100">
        <span className="font-black text-[#1e3a8a] text-xl ml-4">نجومك الذهبية:</span>
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className={`text-4xl transition-all duration-500 ${i < score ? 'scale-125 drop-shadow-md text-yellow-400' : 'grayscale opacity-10'}`}
          >
            ⭐
          </span>
        ))}
      </div>

      {/* محتوى الاختبار */}
      <div className="p-10 flex flex-col items-center flex-grow text-right">
        {!showResult ? (
          <div className="w-full max-w-3xl space-y-12">
            <h1 className="text-5xl font-black text-[#1e3a8a] text-center mb-16 underline decoration-yellow-400">اختبار البطل الذكي 🏆</h1>
            {questions.map((q) => (
              <div key={q.id} className="bg-white p-12 rounded-[60px] shadow-2xl border-r-[15px] border-[#1e3a8a] relative hover:scale-[1.01] transition-transform">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="text-3xl font-black text-slate-800 leading-relaxed max-w-[85%]">{q.id}. {q.question}</h3>
                  <button onClick={() => speak(q.question)} className="bg-blue-50 text-[#1e3a8a] p-4 rounded-3xl hover:bg-[#1e3a8a] hover:text-white transition-all text-3xl shadow-sm">🔊</button>
                </div>
                <div className={`grid ${q.options.length === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      disabled={answeredQuestions[q.id]}
                      onClick={() => handleAnswer(q.id, opt, q.answer)}
                      className={`py-6 rounded-[35px] text-2xl font-black transition-all border-4 shadow-sm ${
                        answeredQuestions[q.id] === opt 
                          ? (opt === q.answer ? 'bg-green-500 text-white border-green-200' : 'bg-red-400 text-white border-red-200')
                          : 'bg-slate-50 text-[#1e3a8a] border-transparent hover:border-[#1e3a8a] hover:bg-white active:scale-95'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button 
              onClick={() => { setShowResult(true); window.scrollTo(0,0); }}
              className="w-full bg-[#1e3a8a] text-white py-8 rounded-[45px] text-4xl font-black shadow-2xl hover:bg-blue-800 transition-all mb-24 border-b-[12px] border-blue-950"
            >
              استلام وسام النجاح 🎖️
            </button>
          </div>
        ) : (
          /* عرض النتيجة الذكي بناءً على درجتك المطلوبة */
          <div className="w-full max-w-2xl bg-white p-20 rounded-[80px] shadow-2xl border-[20px] border-yellow-400 text-center mt-10">
            {score < 5 ? (
              /* إذا كانت الدرجة أقل من 5 */
              <>
                <div className="text-[140px] mb-8">🔄</div>
                <h2 className="text-6xl font-black text-red-500 mb-6">حاول مرة أخرى</h2>
                <div className="text-8xl font-black text-slate-400 mb-8">{score} / 10</div>
                <p className="text-3xl text-slate-500 mb-12 font-bold leading-relaxed">أنت بطل وستنجح بالتأكيد في المرة القادمة! 💪</p>
              </>
            ) : (
              /* إذا كانت الدرجة 5 أو أكثر (فوق الخمسة وتشجيع) */
              <>
                <div className="text-[140px] mb-8">🏅</div>
                <h2 className="text-6xl font-black text-[#1e3a8a] mb-6">مبارك الفوز!</h2>
                <div className="text-8xl font-black text-yellow-500 mb-8">{score} / 10</div>
                <p className="text-3xl text-slate-500 mb-12 font-bold leading-relaxed">أنت بطل رائع وذكي جداً! 🎉<br/>لقد أصبحت الآن خبيراً في برنامج مايكروسوفت وورد</p>
              </>
            )}
            <button onClick={() => window.location.reload()} className="bg-[#1e3a8a] text-white py-6 px-20 rounded-full text-3xl font-black shadow-xl hover:scale-110 transition-transform border-b-8 border-blue-900">إعادة الاختبار 🔄</button>
          </div>
        )}
      </div>
    </div>
  );
}