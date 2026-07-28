import React from 'react';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-electric flex items-center justify-center text-white">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">
                بار <span className="text-blue-500 font-bold">.Baaar</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              پلتفرم هوشمند ترابری جاده‌ای و اتصال یکپارچه صاحبان کالا، باربری‌های رسمی و کامیون‌داران کشور.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm">دسترسی سریع</div>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#request-form" className="hover:text-blue-400">ثبت بار جدید</a></li>
              <li><a href="#features" className="hover:text-blue-400">مزایا و امکانات</a></li>
              <li><a href="#workflow" className="hover:text-blue-400">نحوه کارکرد</a></li>
              <li><a href="#portals" className="hover:text-blue-400">پیش‌نمایش سامانه</a></li>
            </ul>
          </div>

          {/* Col 3: Role Links */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm">ورود به سامانه‌ها</div>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#portals" className="hover:text-blue-400">داشبورد باربری همکار</a></li>
              <li><a href="#portals" className="hover:text-blue-400">پورتال سفارشات صاحب بار</a></li>
              <li><a href="#portals" className="hover:text-blue-400">وب‌اپلیکیشن رانندگان (PWA)</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm">ارتباط با ما</div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>پشتیبانی ۲۴ ساعته: ۰۲۱-۸۸۸۸۹۹۹۹</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>info@baaar.ir</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>تهران، خیابان آزادی، پلاک ۱۲۰</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-[11px] text-slate-500">
          تمامی حقوق مادی و معنوی متعلق به پلتفرم هوشمند ترابری «بار (Baaar)» می‌باشد. ۱۴۰۵ ©
        </div>

      </div>
    </footer>
  );
};
