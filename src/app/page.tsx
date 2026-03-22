import React from 'react';

export default function Page() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-2xl text-blue-950">ويـبـلـي<span className="text-blue-600">.</span></span>
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">المميزات</a>
              <a href="#process" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">آلية العمل</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">الباقات</a>
            </div>
            <div>
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-900/20">
                ابدأ رحلتك الآن
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-slate-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-8 border border-blue-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              نقدم لكم Webly Smart Launch
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-950 tracking-tight leading-[1.1] mb-8">
              لا تشترِ مجرد موقع إلكتروني.. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
                وظّف بائعاً رقمياً ذكياً لا ينام
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              أطلق مشروعك في السعودية والإمارات مع باقة Webly Smart Launch: موقعك الاحترافي مدعوماً بـ AI Sales Agent يحوّل الزوار العابرين إلى عملاء دائمين على مدار الساعة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2">
                احجز عرضاً تجريبياً (Demo) الآن
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="bg-white hover:bg-slate-50 text-blue-950 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                اكتشف كيف نعمل
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">هل موقعك الحالي مجرد "كتالوج" صامت؟</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
            أغلب الشركات تكتفي بمواقع تقليدية تعمل كواجهة عرض فقط؛ زوار يدخلون ويخرجون دون أي تفاعل، ومبيعات ضائعة لأن أحداً لم يجب على استفساراتهم في اللحظة المناسبة. في سوق تنافسي كالسوق الخليجي، موقعك الصامت هو فرصة ضائعة للمنافسين.
            </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-950 mb-4">مع Webly، موقعك هو "ماكينة مبيعات"</h2>
            <p className="text-slate-600 text-lg">نمنحك ثلاث فوائد جوهرية من خلال دمج الـ AI Sales Agent في قلب موقعك.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'إغلاق المبيعات فوراً',
                desc: 'المساعد الذكي لا يكتفي بالرد، بل يدير الحوار بذكاء لإقناع الزائر بالمنتج أو الخدمة وإتمام الطلب في اللحظة نفسها.',
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                )
              },
              {
                title: 'تفاعل بشري الدقة، رقمي السرعة',
                desc: 'استجابة فورية لعملائك 24/7، بلغة مهذبة ودقيقة تفهم احتياجات السوق المحلي وتجيب على أصعب التساؤلات.',
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                )
              },
              {
                title: 'تأهيل العملاء (Lead Qualification)',
                desc: 'يقوم المساعد بفرز الزوار وجمع بيانات المهتمين وتصنيفهم، ليرسل لك فقط العملاء الجاهزين للتعاقد.',
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative text-center">
          <h2 className="text-4xl font-bold text-white mb-6">حوّل موقعك من عبء مالي إلى أكبر مصدر للدخل</h2>
          <p className="text-blue-200 text-xl mb-10">
            انضم للشركات الرائدة التي تعتمد على Webly لتعزيز تواجدها الرقمي وأتمتة مبيعاتها بالذكاء الاصطناعي.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20">
            احجز عرضاً تجريبياً (Demo) الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-bold text-xl text-white">ويـبـلـي</span>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Webly Digital Solutions. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
