import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'پلتفرم بار (Baaar) دقیقا چه خدماتی ارائه می‌دهد؟',
    a: 'بار یک سامانه جامع ترابری است که امکان ثبت بار توسط صاحب کالا، تایید و قیمت‌گذاری توسط شرکت‌های باربری همکار و تخصیص مستقیم بار به رانندگان کامیون همراه با پیگیری زنده وضعیت حمل را فراهم می‌سازد.'
  },
  {
    q: 'نحوه تعیین قیمت کرایه و کمیسیون به چه صورت است؟',
    a: 'قیمت کرایه بر اساس نرخ‌های مصوب، نوع کامیون، وزن محموله و مسافت جاده‌ای توسط شرکت باربری همکار تعیین گردیده و پیش از ثبت نهایی شفاف می‌شود.'
  },
  {
    q: 'رانندگان چگونه بار دریافت می‌کنند؟ آیا نیاز به نصب برنامه سنگین دارند؟',
    a: 'خیر، رانندگان می‌توانند به راحتی از طریق وب‌اپلیکیشن سبک (PWA) یا لینک اختصاصی پیامک‌شده، کارت بار خود را روی هر نوع گوشی هوشمند مشاهده کنند.'
  },
  {
    q: 'آیا اسناد بارنامه و بیمه کالا در سامانه صادر می‌شود؟',
    a: 'بله، صدور بارنامه رسمی دولتی و پوشش بیمه مسئولیت کالا از طریق شرکت باربری همکار طرف قرارداد انجام می‌شود.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-700">
            <HelpCircle className="w-3.5 h-3.5" />
            پاسخ به ابهامات
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            سوالات متداول کاربران
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-right flex items-center justify-between font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
