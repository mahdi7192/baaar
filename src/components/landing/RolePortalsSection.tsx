import React, { useState } from 'react';
import { Building2, UserCheck, Truck, ArrowLeft, CheckCircle2, ShieldCheck, MapPin, Upload, FileText } from 'lucide-react';

interface RolePortalsProps {
  onOpenRoleModal?: (role: string) => void;
}

export const RolePortalsSection: React.FC<RolePortalsProps> = ({ onOpenRoleModal }) => {
  const [activeTab, setActiveTab] = useState<'freight' | 'shipper' | 'driver'>('freight');

  return (
    <section id="portals" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-700">
            تجربه کاربری یکپارچه
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            پیش‌نمایش سامانه برای <span className="text-gradient-electric">۳ ذینفع اصلی</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            محصول بار (Baaar) واسط‌های کاربری اختیاصی و بهینه‌سازی‌شده برای هر بازیگر ترابری ارائه می‌دهد. روی هر زبانه کلیک کنید تا عملکرد سیستم را مشاهده نمایید.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('freight')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 shadow-sm ${
              activeTab === 'freight'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Building2 className={`w-4 h-4 ${activeTab === 'freight' ? 'text-blue-400' : 'text-blue-600'}`} />
            <span>۱. داشبورد مدیریت شرکت باربری</span>
          </button>

          <button
            onClick={() => setActiveTab('shipper')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 shadow-sm ${
              activeTab === 'shipper'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <UserCheck className={`w-4 h-4 ${activeTab === 'shipper' ? 'text-blue-400' : 'text-blue-600'}`} />
            <span>۲. پورتال صاحبان بار (شرکت‌ها)</span>
          </button>

          <button
            onClick={() => setActiveTab('driver')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 shadow-sm ${
              activeTab === 'driver'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Truck className={`w-4 h-4 ${activeTab === 'driver' ? 'text-blue-400' : 'text-blue-600'}`} />
            <span>۳. وب‌اپلیکیشن رانندگان (PWA)</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl relative">
          
          {/* 1. FREIGHT ADMIN PREVIEW */}
          {activeTab === 'freight' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-5 text-right">
                <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold">
                  اتوماسیون کامل شرکت باربری
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  کنترل ۱۰۰٪ بارهای ورودی، نرخ‌گذاری و تخصیص به راننده
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  شرکت‌های باربری همکار با استفاده از این داشبورد، بارهای ارسال‌شده توسط مشتریان را تایید کرده، کرایه و کمیسیون را تعیین نموده و در کمتر از چند کلیک بار را به راننده مطمئن تخصیص می‌دهند.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    مشاهده لیست بارهای جدید و مدیریت وضعیت سفارشات
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    تعیین قیمت مصوب، نحوه پرداخت (پیش‌پرداخت / اعتباری / پای‌بار)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    بانک اطلاعاتی رانندگان، کامیون‌ها و مشاهده مدارک تحویل (POD)
                  </li>
                </ul>

                <button
                  onClick={() => onOpenRoleModal?.('freight')}
                  className="mt-4 px-6 py-3 rounded-xl bg-gradient-electric text-white font-extrabold text-xs shadow-lg flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                >
                  <span>ورود آزمایشی به داشبورد باربری</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Mockup Preview Box */}
              <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-4 sm:p-6 text-white space-y-4 shadow-xl border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 mr-2">Freight-Admin Portal v1.0</span>
                  </div>
                  <span className="text-[11px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-mono">LIVE FEED</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-800/90 rounded-xl p-3 flex items-center justify-between text-xs border border-slate-700">
                    <div>
                      <span className="font-bold text-white block">بار صنعتی - ۲۲ تن میلگرد</span>
                      <span className="text-slate-400 text-[11px]">تهران ➔ اصفهان</span>
                    </div>
                    <div className="text-left">
                      <span className="text-emerald-400 font-bold block">۱۸.۵ م تومان</span>
                      <span className="text-[10px] text-slate-400">راننده: علی رضایی</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/90 rounded-xl p-3 flex items-center justify-between text-xs border border-slate-700">
                    <div>
                      <span className="font-bold text-white block">مواد غذایی - ۱۵ تن روغن</span>
                      <span className="text-slate-400 text-[11px]">مشهد ➔ تبریز</span>
                    </div>
                    <div className="text-left">
                      <span className="text-amber-400 font-bold block">در انتظار قیمت‌گذاری</span>
                      <button className="mt-1 px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold text-white">تایید & اساین</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. SHIPPER PREVIEW */}
          {activeTab === 'shipper' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-5 text-right">
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold">
                  پورتال صاحبان بار و تجار
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  ثبت آسان سفارش و پیگیری زنده موقعیت بار
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  صاحبان کالا و صنایع بدون نیاز به تماس‌های مکرر تلفنی، درخواست بار خود را ثبت کرده و وضعیت حمل کالا را از مرحله تایید تا تحویل به صورت آنلاین مشاهده می‌کنند.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    استعلام سریع نرخ کرایه شفاف و بدون واسطه
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    بایگانی دیجیتال اسناد، بارنامه‌ها و رسیدهای تحویل کالا
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    مشاهده لحظه‌ای راننده مسئول و شماره پلاک کامیون
                  </li>
                </ul>

                <button
                  onClick={() => onOpenRoleModal?.('shipper')}
                  className="mt-4 px-6 py-3 rounded-xl bg-slate-900 text-white font-extrabold text-xs shadow-lg flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                >
                  <span>ورود آزمایشی به پورتال صاحب بار</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Mockup Preview Box */}
              <div className="lg:col-span-6 bg-slate-100 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200/80 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900">وضعیت حمل سفارش #۹۰۴۲</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-[11px]">در حال حمل</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>بارگیری شد</span>
                    <span>تحویل به انبار مقصد (باقیمانده ۲ ساعت)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. DRIVER PREVIEW */}
          {activeTab === 'driver' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-5 text-right">
                <div className="inline-block px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold">
                  وب‌اپلیکیشن سبک رانندگان (PWA)
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  دریافت کارت بار روی گوشی بدون نیاز به معطلی در پایانه
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  رانندگان ناوگان جاده‌ای کارت بار تخصیص‌یافته را روی گوشی مشاهده کرده و با چند لمس ساده وضعیت حمل را به‌روزرسانی کرده و تصویر بارنامه را ارسال می‌نمایند.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    مشاهده مشخصات کامل بار، آدرس بارگیری، تخلیه و مبلغ کرایه
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    دکمه‌های گام‌به‌گام: بارگیری شد ➔ در مسیر ➔ تخلیه شد
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    آپلود سریع عکس بارنامه جهت تسویه حساب آنی
                  </li>
                </ul>

                <button
                  onClick={() => onOpenRoleModal?.('driver')}
                  className="mt-4 px-6 py-3 rounded-xl bg-gradient-electric text-white font-extrabold text-xs shadow-lg flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                >
                  <span>ورود آزمایشی به وب‌اپ راننده</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-72 bg-slate-900 rounded-[2.5rem] p-3 border-4 border-slate-800 shadow-2xl">
                  <div className="bg-slate-50 rounded-[2rem] p-4 text-slate-900 space-y-4">
                    <div className="w-16 h-4 bg-slate-300 rounded-full mx-auto mb-2" />
                    <div className="text-center font-bold text-xs">کارت بار اختصاص داده شده</div>
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 text-xs space-y-2 text-right">
                      <div className="font-extrabold text-blue-700">تهران به اصفهان</div>
                      <div className="text-slate-500 text-[10px]">تریلی کفی - ۲۲ تن میلگرد</div>
                      <div className="font-bold text-slate-900">کرایه: ۱۸,۵۰۰,۰۰۰ تومان</div>
                      <button className="w-full py-2 bg-emerald-600 text-white font-bold rounded-lg text-[11px]">
                        تغییر وضعیت به "تخلیه شد"
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
