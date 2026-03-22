import React from 'react';

export default function Page() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#FDFBFF] font-tajawal text-slate-900 selection:bg-[#4A0080] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E6D4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="h-10 w-auto">
                <img src="/brand/logo_transparent.png" alt="Webly Logo" className="h-full w-auto" />
              </div>
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#features" className="text-slate-600 hover:text-[#6B0F9F] font-medium transition-colors">المميزات</a>
              <a href="#process" className="text-slate-600 hover:text-[#6B0F9F] font-medium transition-colors">آلية العمل</a>
              <a href="#pricing" className="text-slate-600 hover:text-[#6B0F9F] font-medium transition-colors">الباقات</a>
            </div>
            <div>
              <button className="bg-[#4A0080] hover:bg-[#6B0F9F] text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-purple-900/20">
                ابدأ رحلتك الآن
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#E6D4FF] via-[#FDFBFF] to-[#FDFBFF] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6D4FF] text-[#4A0080] font-medium text-sm mb-8 border border-[#CC99FF]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC99FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4A0080]"></span>
              </span>
              نقدم لكم Webly Smart Launch 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#000000] tracking-tight leading-[1.1] mb-8 font-tajawal">
              لا تشترِ مجرد موقع إلكتروني.. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A0080] to-[#6B0F9F]">
                أطلق "منظومة نمو" تعمل بالذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              حوّل حضورك الرقمي في الإمارات والسعودية من مجرد واجهة إلى **بائع رقمي ذكي** يغلق المبيعات، يؤتمت العمليات، ويضاعف أرباحك 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#4A0080] hover:bg-[#6B0F9F] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2">
                احجز عرضاً تجريبياً (Demo) الآن
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="bg-white hover:bg-slate-50 text-[#4A0080] border border-[#E6D4FF] px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                اكتشف خطتنا للـ 30 يوم القادمة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#E6D4FF]/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#4A0080] mb-6">هل موقعك الحالي مجرد "كتالوج" صامت؟</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
            أغلب الشركات تكتفي بمواقع تقليدية. في ويبلي، نحن نبني **Sales Funnel** متكامل ومؤتمت. من اللحظة التي يرى فيها العميل إعلانك، وحتى إتمام عملية البيع عبر الـ AI Agent الخاص بنا.. كل شيء يعمل في تناغم تام.
            </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-y border-[#E6D4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#4A0080] mb-4">مع ويبلي، أنت تبني "سلطة" (Authority) في مجالك</h2>
            <p className="text-slate-600 text-lg">نحن لا نصمم فقط؛ نحن نضع استراتيجية Lead Generation تضمن لك أول 10 عملاء في 30 يوماً.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'أتمتة مبيعات ذكية',
                desc: 'مربوط مباشرة بـ Whatsapp Business API لإدارة المحادثات وإغلاق الصفقات بذكاء بشري وسرعة فائقة.',
                icon: (
                  <svg className="w-6 h-6 text-[#6B0F9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                )
              },
              {
                title: 'بناء المصداقية (Credibility)',
                desc: 'محتوى استراتيجي مخصص لكل منصة (LinkedIn, Instagram, TikTok) يضعك كخبير أول في تخصصك.',
                icon: (
                  <svg className="w-6 h-6 text-[#6B0F9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                )
              },
              {
                title: 'Sales Funnel متكامل',
                desc: 'من الإعلان الممول إلى صفحة الهبوط، ثم الـ Lead Magnet، وصولاً إلى العميل الذي يدفع.. منظومة مؤتمتة بالكامل.',
                icon: (
                  <svg className="w-6 h-6 text-[#6B0F9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#FDFBFF] border border-[#E6D4FF] hover:border-[#CC99FF] hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4A0080] mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4A0080] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative text-center">
          <h2 className="text-4xl font-bold text-white mb-6">حوّل حضورك الرقمي إلى "ماكينة أرباح"</h2>
          <p className="text-[#E6D4FF] text-xl mb-10">
            هدفنا واضح: بناء مصداقيتك، وجلب أول 10 عملاء يدفعون خلال 30 يوماً عبر سيلز فانل احترافي مؤتمت.
          </p>
          <button className="bg-[#CC99FF] hover:bg-[#E6D4FF] text-[#4A0080] px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-purple-600/20">
            احجز عرضاً تجريبياً (Demo) الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-auto">
                <img src="/brand/logo_white_transparent.png" alt="Webly Logo" className="h-full w-auto" />
              </div>
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
