import React from 'react';
import { X, UserCheck, Building2, Truck, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface RoleModalProps {
  role: string | null;
  onClose: () => void;
}

export const RoleModal: React.FC<RoleModalProps> = ({ role, onClose }) => {
  if (!role) return null;

  const getRoleInfo = () => {
    switch (role) {
      case 'shipper':
        return {
          title: 'پورتال صاحبان بار (شرکت‌ها و تجار)',
          icon: UserCheck,
          color: 'bg-emerald-600',
          badge: 'ویژه مشتریان',
          features: [
            'ثبت بی‌درنگ انواع درخواست حمل بار (شهری و بین شهری)',
            'مشاهده لحظه‌ای وضعیت حمل و ردیابی ناوگان',
            'دسترسی به بایگانی دیجیتال بارنامه‌ها و فاکتورها',
            'استعلام قیمت شفاف از بهترین شرکت‌های باربری'
          ]
        };
      case 'freight':
        return {
          title: 'داشبورد اختصاصی شرکت باربری همکار',
          icon: Building2,
          color: 'bg-blue-600',
          badge: 'ویژه اپراتور باربری',
          features: [
            'مدیریت و تایید بارهای ورودی به همراه تعیین نرخ مصوب',
            'تخصیص آنلاین بار به رانندگان طرف قرارداد در کمتر از ۱ دقیقه',
            'مدیریت تسویه‌حساب‌های مالی (نقدی/اعتباری/پای‌بار)',
            'کنترل لحظه‌ای مدارک تحویل بارنامه (POD)'
          ]
        };
      case 'driver':
      default:
        return {
          title: 'وب‌اپلیکیشن رانندگان کامیون (PWA)',
          icon: Truck,
          color: 'bg-amber-600',
          badge: 'ویژه رانندگان ناوگان',
          features: [
            'دریافت مستقیم اعلام بار روی گوشی بدون نیاز به حضور در پایانه',
            'دکمه‌های سریع تغییر وضعیت (بارگیری شد ➔ در مسیر ➔ تخلیه شد)',
            'امکان آپلود عکس بارنامه با دوربین گوشی جهت دریافت سریع کرایه',
            'شفافیت کامل مبلغ کرایه و مشخصات بارگیری'
          ]
        };
    }
  };

  const info = getRoleInfo();
  const Icon = info.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in zoom-in-95 duration-200 text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 rounded-2xl ${info.color} text-white flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 mb-1 inline-block">
              {info.badge}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
              {info.title}
            </h3>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs font-bold text-slate-800 mb-2">امکانات اصلی در فاز اول (MVP):</div>
          {info.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => {
              onClose();
              const el = document.getElementById('portals');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-electric text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all"
          >
            <span>مشاهده پیش‌نمایش زنده در صفحه</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors"
          >
            بستن پنجره
          </button>
        </div>

      </div>
    </div>
  );
};
