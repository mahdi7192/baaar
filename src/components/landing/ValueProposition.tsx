import React from 'react';
import { ShieldCheck, Zap, DollarSign, BarChart3, Clock, Truck, FileCheck, Layers } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-700">
            مزایای رقابتی پلتفرم بار
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            چرا صنایع و باربری‌ها <span className="text-gradient-electric">بار (Baaar)</span> را انتخاب می‌کنند؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            کاهش اتلاف زمان، شفافیت کامل مالی و حذف واسطه‌های غیرضروری در زنجیره ترابری کشور.
          </p>
        </div>

        {/* 3-Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1: Shipper Value */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-8 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">صاحبان بار و صنایع</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              ارسال سریع انواع کالا با قیمت شفاف، تضمین بیمه و امکان پیگیری لحظه‌ای موقعیت بار بدون نیاز به تماس‌های مکرر.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">✓ دریافت نرخ مصوب باربری در چند دقیقه</li>
              <li className="flex items-center gap-2">✓ صدور بارنامه رسمی دولتی</li>
              <li className="flex items-center gap-2">✓ مشاهده تصویر رسید تحویل بار (POD)</li>
            </ul>
          </div>

          {/* Feature 2: Freight Co Value */}
          <div className="rounded-2xl bg-slate-900 text-white border border-slate-800 p-8 space-y-4 shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-electric" />
            <div className="w-12 h-12 rounded-xl bg-gradient-electric text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">شرکت‌های باربری</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              اتوماسیون جامع ثبت بار، نرخ‌گذاری و تخصیص ناوگان به رانندگان طرف قرارداد جهت افزایش ۵ برابری ظرفیت عملیاتی.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">✓ کاهش ۹۰ درصدی هماهنگی‌های تلفنی</li>
              <li className="flex items-center gap-2">✓ تسویه‌حساب منظم و مدیریت کمیسیون</li>
              <li className="flex items-center gap-2">✓ بانک اطلاعاتی رانندگان سابقه دار</li>
            </ul>
          </div>

          {/* Feature 3: Driver Value */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-8 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">رانندگان و کامیون‌داران</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              دریافت هوشمند اعلام بار مستقیم روی گوشی، کاهش خواب ناوگان در پایانه‌ها و تضمین دریافت کرایه.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">✓ پذیرش آنلاین بار بدون معطلی</li>
              <li className="flex items-center gap-2">✓ ثبت آسان تغییر وضعیت بارگیری و مسیر</li>
              <li className="flex items-center gap-2">✓ آپلود سریع اسناد جهت دریافت کرایه</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
