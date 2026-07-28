import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Building2, UserCheck, ArrowLeft, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRoleModal?: (role: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRoleModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-electric flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                  بار <span className="text-blue-600 font-extrabold">.Baaar</span>
                </span>
                <span className="text-[10px] font-medium text-slate-500 tracking-wider">
                  پلتفرم هوشمند ترابری جاده‌ای
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#request-form" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              ثبت بار سریع
            </a>
            <a href="#features" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              مزایا و ارزش‌ها
            </a>
            <a href="#workflow" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              نحوه کارکرد
            </a>
            <a href="#portals" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              پیش‌نمایش سامانه
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              سوالات متداول
            </a>
          </nav>

          {/* Action Buttons for User Roles */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenRoleModal?.('shipper')}
              className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 text-slate-800 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-600" />
              پورتال صاحب بار
            </button>
            <button
              onClick={() => onOpenRoleModal?.('freight')}
              className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 text-slate-800 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all flex items-center gap-1.5"
            >
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              داشبورد باربری
            </button>
            <button
              onClick={() => onOpenRoleModal?.('driver')}
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-gradient-electric text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
            >
              <Truck className="w-4 h-4" />
              <span>اپلیکیشن رانندگان</span>
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3">
            <a
              href="#request-form"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 py-1"
            >
              ثبت بار سریع
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 py-1"
            >
              مزایا و ارزش‌ها
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 py-1"
            >
              نحوه کارکرد
            </a>
            <a
              href="#portals"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 py-1"
            >
              پیش‌نمایش سامانه
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 py-1"
            >
              سوالات متداول
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRoleModal?.('shipper'); }}
              className="w-full py-2.5 text-xs font-bold text-center rounded-lg border border-slate-300 text-slate-800"
            >
              پورتال صاحب بار
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRoleModal?.('freight'); }}
              className="w-full py-2.5 text-xs font-bold text-center rounded-lg border border-slate-300 text-slate-800"
            >
              داشبورد باربری
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRoleModal?.('driver'); }}
              className="w-full py-2.5 text-xs font-bold text-center rounded-lg bg-gradient-electric text-white"
            >
              اپلیکیشن رانندگان
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
