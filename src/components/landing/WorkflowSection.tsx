import React from 'react';
import { ClipboardList, Calculator, Truck, CheckCircle2, ArrowLeft } from 'lucide-react';

const STEPS = [
  {
    step: '۱',
    title: 'ثبت اولیه درخواست بار',
    desc: 'صاحب بار مشخصات محموله (مبدا، مقصد، نوع کالا و وزن) را در پورتال ثبت می‌کند.',
    icon: ClipboardList,
    color: 'bg-blue-500'
  },
  {
    step: '۲',
    title: 'تایید و نرخ‌گذاری باربری',
    desc: 'شرکت باربری همکار درخواست را بررسی، کرایه مصوب را تعیین و تایید می‌نماید.',
    icon: Calculator,
    color: 'bg-indigo-500'
  },
  {
    step: '۳',
    title: 'تخصیص هوشمند راننده',
    desc: 'کارت بار به راننده ثبت‌شده تخصیص داده شده و مشخصات کامیون برای صاحب بار ارسال می‌گردد.',
    icon: Truck,
    color: 'bg-amber-500'
  },
  {
    step: '۴',
    title: 'حمل، ردیابی و تحویل (POD)',
    desc: 'راننده مراحل بارگیری، در مسیر و تخلیه را ثبت کرده و تصویر بارنامه/رسید را آپلود می‌کند.',
    icon: CheckCircle2,
    color: 'bg-emerald-500'
  }
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-slate-900 text-white relative overflow-hidden bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-bold text-blue-400">
            فرایند عملیاتی B2B2C
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            چرخه حیات بار از <span className="text-gradient-electric">ثبت تا تحویل کالا</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            فرآیندی شفاف، گام‌به‌گام و قابل پیگیری برای تمامی بازیگران صنعت ترابری.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 backdrop-blur-md space-y-4 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center font-black shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-blue-400 transition-colors">
                    0{item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white pt-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
