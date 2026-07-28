import React from 'react';
import { Truck, ShieldCheck, Clock, ArrowLeft, Building2, UserCheck, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenRoleModal?: (role: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRoleModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Main Text Content */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Live Platform Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold text-blue-700 tracking-wide flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                شبکه یکپارچه ترابری جاده‌ای (B2B2C)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight">
              مدیریت و ارسال بار جاده‌ای،{' '}
              <span className="text-gradient-electric block mt-1">
                سریع، شفاف و هوشمند
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              پلتفرم <strong className="text-slate-900 font-bold">بار (Baaar)</strong> اتصال مستقیم بین{' '}
              <span className="text-blue-700 font-semibold">صاحبان کالا</span>،{' '}
              <span className="text-blue-700 font-semibold">شرکت‌های باربری همکار</span> و{' '}
              <span className="text-blue-700 font-semibold">کامیون‌داران</span> را فراهم می‌سازد. از اعلام بار تا قیمت‌گذاری، تخصیص ناوگان و تحویل بارنامه را در یک چرخه هوشمند تجربه کنید.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#request-form"
                className="px-7 py-4 rounded-xl bg-gradient-electric text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
              >
                <span>استعلام قیمت و ثبت بار سریع</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </a>

              <a
                href="#portals"
                className="px-6 py-4 rounded-xl border border-slate-300 bg-white text-slate-800 font-bold text-sm hover:bg-slate-100 hover:border-slate-400 transition-all flex items-center gap-2"
              >
                <span>مشاهده داشبوردهای کاربری</span>
              </a>
            </div>

            {/* Trust Features Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-100/80 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">تخصیص آنلاین</h4>
                  <p className="text-[11px] text-slate-500">زیر ۳۰ دقیقه</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">بارنامه و بیمه</h4>
                  <p className="text-[11px] text-slate-500">تضمین ۱۰۰٪ اسناد</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-indigo-100/80 flex items-center justify-center text-indigo-600 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">ناوگان سنگین</h4>
                  <p className="text-[11px] text-slate-500">انواع کامیون و تریلی</p>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Interactive Card Graphic / Role Portal Quick Switches */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Live Card Mockup */}
            <div className="relative rounded-3xl bg-white p-6 shadow-2xl border border-slate-200/90 overflow-hidden">
              
              {/* Card Right Status Stripe */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-electric" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
                    شماره بار: BAR-9042
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  در حال حمل (در مسیر)
                </span>
              </div>

              {/* Route Info */}
              <div className="space-y-4 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">مبدا بارگیری</div>
                    <div className="text-sm font-bold text-slate-800">تهران، شهرک صنعتی شمس‌آباد</div>
                  </div>
                </div>

                <div className="border-r-2 border-dashed border-slate-200 mr-3.5 my-1 h-5" />

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">مقصد تخلیه</div>
                    <div className="text-sm font-bold text-slate-800">اصفهان، شهرک صنعتی جی</div>
                  </div>
                </div>
              </div>

              {/* Load Specification Grid */}
              <div className="bg-slate-50 rounded-xl p-3.5 grid grid-cols-2 gap-3 text-xs mb-5 border border-slate-100">
                <div>
                  <span className="text-slate-400 block text-[11px]">نوع بار & وزن:</span>
                  <span className="font-bold text-slate-800">میلگرد صنعتی (۲۲ تن)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">نوع ناوگان:</span>
                  <span className="font-bold text-slate-800">تریلی کفی ۱۰ چرخ</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">کرایه مصوب:</span>
                  <span className="font-bold text-blue-600">۱۸,۵۰۰,۰۰۰ تومان</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">راننده مسئول:</span>
                  <span className="font-bold text-slate-800">علی رضایی (ولوو FH)</span>
                </div>
              </div>

              {/* Quick Role Portal Buttons Inside Card */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 text-center mb-2">
                  مشاهده تست آنلاین با نقش‌های مختلف:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onOpenRoleModal?.('shipper')}
                    className="p-2 text-[11px] font-bold rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 transition-all text-center flex flex-col items-center gap-1"
                  >
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>صاحب بار</span>
                  </button>
                  <button
                    onClick={() => onOpenRoleModal?.('freight')}
                    className="p-2 text-[11px] font-bold rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 transition-all text-center flex flex-col items-center gap-1"
                  >
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>باربری</span>
                  </button>
                  <button
                    onClick={() => onOpenRoleModal?.('driver')}
                    className="p-2 text-[11px] font-bold rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 transition-all text-center flex flex-col items-center gap-1"
                  >
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span>راننده</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
