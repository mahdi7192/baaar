import React, { useState, useId } from 'react';
import { MapPin, Truck, Weight, PackageCheck, Send, CheckCircle2, Phone, Sparkles, Calculator } from 'lucide-react';

const CITIES = [
  'تهران', 'اصفهان', 'مشهد', 'تبریز', 'شیراز', 'اهواز', 
  'بندرعباس', 'یزد', 'کرمان', 'رشت', 'ارومیه', 'قم'
];

const CARGO_TYPES = [
  { id: 'industrial', label: 'مواد صنعتی و فلزات' },
  { id: 'agricultural', label: 'محصولات کشاورزی و غذایی' },
  { id: 'construction', label: 'مصالح و لوازم ساختمانی' },
  { id: 'furniture', label: 'اثاثیه و تجاری خرد' },
  { id: 'chemical', label: 'مواد شیمیایی و بشکه‌ای' },
];

const TRUCK_TYPES = [
  { id: 'trailer-flat', label: 'تریلی کفی (تا ۲۴ تن)' },
  { id: 'trailer-transit', label: 'تریلی ترانزیت/چادری' },
  { id: 'truck-double', label: 'کامیون جفت (۱۰ چرخ - ۱۵ تن)' },
  { id: 'truck-single', label: 'کامیون تک (۶ چرخ - ۱۰ تن)' },
  { id: 'khavar', label: 'خاور / کامیونت (۴ تن)' },
];

export const CargoRequestForm: React.FC = () => {
  const originCityId = useId();
  const destCityId = useId();
  const cargoTypeId = useId();
  const truckTypeId = useId();
  const weightId = useId();
  const phoneId = useId();

  const [origin, setOrigin] = useState('تهران');
  const [destination, setDestination] = useState('اصفهان');
  const [cargoType, setCargoType] = useState('industrial');
  const [truckType, setTruckType] = useState('trailer-flat');
  const [weight, setWeight] = useState(15);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Price Estimate Calculator
  const calculateEstimate = () => {
    let baseRate = 8000000;
    if (origin !== destination) baseRate += 7000000;
    if (weight > 10) baseRate += (weight - 10) * 450000;
    if (truckType.includes('trailer')) baseRate += 3000000;
    return baseRate.toLocaleString('fa-IR');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="request-form" className="py-20 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-700">
            <Calculator className="w-3.5 h-3.5" />
            استعلام آنلاین و ثبت سفارش
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ثبت سریع درخواست بار در <span className="text-gradient-electric">کمتر از ۱ دقیقه</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            اطلاعات بار خود را وارد کنید تا به بهترین شرکت‌های باربری ارجاع داده شده و تایید کرایه و تخصیص کامیون در سریع‌ترین زمان صورت پذیرد.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 shadow-xl relative">
          
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                درخواست بار شما با موفقیت ثبت شد!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                سفارش شما از مبدا <strong className="text-slate-900">{origin}</strong> به مقصد <strong className="text-slate-900">{destination}</strong> در سیستم قرار گرفت. اپراتور باربری همکار به زودی جهت هماهنگی با شماره شما تماس خواهد گرفت.
              </p>
              <div className="bg-white rounded-2xl p-4 max-w-sm mx-auto border border-slate-200 text-right space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">شماره پیگیری:</span>
                  <span className="font-mono font-bold text-blue-600">BAR-88392</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">تخمین کرایه پایه:</span>
                  <span className="font-bold text-slate-800">{calculateEstimate()} تومان</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">وضعیت:</span>
                  <span className="font-bold text-amber-600">در انتظار تایید باربری</span>
                </div>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                ثبت درخواست بار دیگر
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Route Selection (Mabda / Maqsad) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={originCityId} className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    شهر مبدا (بارگیری)
                  </label>
                  <select
                    id={originCityId}
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    {CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={destCityId} className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    شهر مقصد (تخلیه)
                  </label>
                  <select
                    id={destCityId}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    {CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cargo Details & Truck Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={cargoTypeId} className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
                    <PackageCheck className="w-4 h-4 text-blue-600" />
                    نوع کالا / محموله
                  </label>
                  <select
                    id={cargoTypeId}
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    {CARGO_TYPES.map((type) => (
                      <option key={type.id} value={type.id}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={truckTypeId} className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    نوع ناوگان / کامیون مورد نیاز
                  </label>
                  <select
                    id={truckTypeId}
                    value={truckType}
                    onChange={(e) => setTruckType(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    {TRUCK_TYPES.map((truck) => (
                      <option key={truck.id} value={truck.id}>{truck.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Weight Slider & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor={weightId} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Weight className="w-4 h-4 text-blue-600" />
                      وزن تقریبی بار:
                    </label>
                    <span className="text-sm font-extrabold text-blue-600 font-mono">
                      {weight} تن
                    </span>
                  </div>
                  <input
                    id={weightId}
                    type="range"
                    min="1"
                    max="25"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>۱ تن</span>
                    <span>۱۲ تن</span>
                    <span>۲۵ تن</span>
                  </div>
                </div>

                <div>
                  <label htmlFor={phoneId} className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    شماره موبایل جهت دریافت پیشنهاد قیمت
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    dir="ltr"
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-right"
                  />
                </div>
              </div>

              {/* Instant Price Estimate Bar & Submit Button */}
              <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
                <div className="text-right">
                  <div className="text-xs text-blue-200 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    تخمین کرایه پیشنهاد شده باربری:
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    حدود <span className="text-blue-400 font-mono">{calculateEstimate()}</span> تومان
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-gradient-electric text-white font-extrabold text-sm shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>در حال ثبت...</span>
                  ) : (
                    <>
                      <span>ارسال درخواست و استعلام قیمت</span>
                      <Send className="w-4 h-4 rotate-180" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
