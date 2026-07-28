import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 border-t border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">+۱۰,۰۰۰</div>
            <div className="text-xs text-slate-400 font-bold">بار موفق حمل‌شده</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">+۱,۵۰۰</div>
            <div className="text-xs text-slate-400 font-bold">راننده کامیون فعال</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">زیر ۳۰ دقیقه</div>
            <div className="text-xs text-slate-400 font-bold">میانگین زمان تخصیص</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">۹۸.۸٪</div>
            <div className="text-xs text-slate-400 font-bold">رضایت صاحبان بار</div>
          </div>

        </div>
      </div>
    </section>
  );
};
