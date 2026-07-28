# دیزاین سیستم و راهنمای طراحی پلتفرم بار (Baaar Design System)

> **سبک دیزاین:** مینیمال مدرن (Minimalist Modern) با جهت‌گیری راست‌چین (RTL)  
> **فونت پایه:** استعداد (Estedad)  
> **تمرکز:** چابکی عملیاتی، خوانایی بالا، حس پرمیوم و مدرن در پلتفرم ترابری  

---

## ۱. فلسفه دیزاین (Design Philosophy)

### ۱.۱. اصل بنیادی (Core Principle)
**شفافیت از طریق ساختار، هویت از طریق جزییات قاطع.**  
این دیزاین سیستم بر پایه تضادی هدفمند شکل گرفته است: **خویشتن‌داری در تعداد عناصر، قاطعیت در اجرا.** هر عنصری که در صفحه ظاهر می‌شود باید حق حضور خود را کسب کرده باشد؛ اما همان عناصر با دقت و ظرافتی خیره‌کننده پیاده‌سازی می‌شوند.

فضای خالی (Whitespace) در این سیستم یک فضای پوچ نیست؛ بلکه ابزاری دقیق برای هدایت چشم کاربر است. انیمیشن‌ها صرفاً تزئینی نیستند، بلکه ابزار ارتباطی و اعلام استاتوس لحظه‌ای بار هستند. رنگ‌ها پراکنده نیستند، بلکه در یک گرادینت آبی الکتریسیته (Electric Blue) متمرکز شده‌اند که توجه را مجذوب خود می‌کند.

---

### ۱.۲. حس و حال بصری (The Visual Vibe)

**حرفه‌ای، مطمئن، هنرمدانه و زنده.**

این دیزاین حاصل تلاقی دقت یک محصول نرم‌افزاری مدرن (SaaS) با جسارت یک پلتفرم پیشرو ترابری است. حس کیفیت پرمیوم، اعتماد، و امنیت در انتقال بار را تداعی می‌کند.

**کلیدواژه‌های احساسی:**
- **مطمئن (Confident):** عناصر دارای سایز قاطع، رنگ‌های پویا و انیمیشن‌های باهدف هستند.
- **ارتقا یافته (Sophisticated):** استفاده از فونت مدرن «استعداد»، سایه‌پردازی چندلایه و لایه‌های شیشه‌ای (Glassmorphism).
- **پویا و زنده (Alive):** نشانگرهای نبض‌دار استاتوس بار، انیمیشن‌های نرم شناور و پاسخ‌های لمسی/هاور.
- **راست‌چین اصیل (Native RTL):** چیدمان کاملاً طبیعی برای زبان فارسی بدون هیچ‌گونه به هم ریختگی در فونت یا آیکون‌ها.

---

## ۲. مشخصات تایپوگرافی (Typography System)

در این دیزاین سیستم، تمامی متون UI، عناوین، و بخش‌های خوانداری بر پایه **فونت مدرن استعداد (Estedad)** با ویژگی متغیر (Variable Font) تنظیم شده‌اند. برای شناسه بارها، پلاک خودرو، مبالغ و کدها از فونت مونو (JetBrains Mono / Vazirmatn Mono) استفاده می‌شود.

### ۲.۱. جدول مقیاس فونت‌ها (Type Scale)

| عنصر | اندازه (Size) | وزن فونت (Weight) | ارتفاع خط (Leading) | فاصله حروف (Tracking) | توضیحات |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **عنوان اصلی هیرو (Hero Headline)** | `text-4xl` تا `text-6xl` | 800 (ExtraBold) | `leading-[1.15]` | `tracking-tight` | کلمه کلیدی دارای متن گرادینت. |
| **عناوین بخش‌ها (Section Titles)** | `text-2xl` تا `text-4xl` | 700 (Bold) | `leading-snug` | normal | ترکیب با انیمیشن ورود. |
| **عنوان کارت‌ها (Card Titles)** | `text-lg` تا `text-xl` | 600 (SemiBold) | `leading-normal` | normal | خوانایی سریع در لیست بارها. |
| **متن بدنه (Body Text)** | `text-base` | 400 (Regular) | `leading-relaxed` (1.7) | normal | متون توضیحی و جزئیات بار. |
| **برچسب‌ها و مبالغ (Badges & Rates)** | `text-xs` تا `text-sm` | 500 (Medium) / Mono | `leading-none` | normal | شماره بارنامه، پلاک و قیمت‌ها. |

---

## ۳. سیستم رنگ‌ها و گرادینت امضا (Color Tokens)

### ۳.۱. جدول توکن‌های رنگی (Color Palette)

| نام توکن | مقدار رنگ (Hex) | کاربرد و زمینه استفاده |
| :--- | :--- | :--- |
| `background` | `#FAFAFA` | بوم اصلی (سفید گرم متمایل به خاکستری بسیار روشن برای کاهش خستگی چشم). |
| `foreground` | `#0F172A` (Slate-900) | رنگ اصلی متن و زمینه بخش‌های معکوس (Inverted Dark Sections). |
| `muted` | `#F1F5F9` (Slate-100) | زمینه کارت‌های فرعی، فیلدها و سطوح غیرفعال. |
| `muted-foreground` | `#64748B` (Slate-500) | متون ثانویه، توضیحات بار و متادیتا. |
| `accent` | `#0052FF` (Electric Blue) | **رنگ اصلی اکشن‌ها.** دکمه‌های اصلی، هایلایت استاتوس، آیکون‌ها. |
| `accent-secondary` | `#4D7CFF` | نقطه پایانی گرادینت (آبی آسمانی روشن). |
| `card` | `#FFFFFF` | سطوح برجسته و کارت‌ها همراه با سایه نرم. |
| `border` | `#E2E8F0` (Slate-200) | خطوط جداکننده و کادر کارت‌ها. |
| `success` | `#10B981` (Emerald-500) | وضعیت "تحویل شد" یا "پرداخت موفق". |
| `warning` | `#F59E0B` (Amber-500) | وضعیت "در حال بارگیری" یا "در انتظار قیمت". |

### ۳.۲. گرادینت امضا (Signature Gradient)
```css
/* گرادینت اصلی آبی الکتریسیته برای دکمه‌ها و هایلایت‌ها */
background: linear-gradient(135deg, #0052FF 0%, #4D7CFF 100%);
```

---

## ۴. قواعد چیدمان راست‌چین و فاصله‌گذاری (RTL & Layout Principles)

1. **جهت‌دهی افقی (Horizontal Flow):**
   - تمامی کامپوننت‌ها به صورت راست‌چین (`dir="rtl"`) چیده می‌شوند.
   - عناوین و متون راست‌چین (`text-right`).
   - فلش‌های پیشروی و ادامه مسیر به سمت چپ اشاره می‌کنند (`<-` به جای `->`).

2. **فاصله‌گذاری (Spacing Grid):**
   - فاصله‌گذاری بخش‌ها: `py-16` تا `py-28` روی دسکتاپ.
   - فاصله‌گذاری درون کارت‌ها: `p-5` تا `p-8`.
   - فاصله شبکه (Grid Gaps): `gap-4` تا `gap-6`.

---

## ۵. استایل کامپوننت‌ها و تعاملات (Component Styling)

### ۵.۱. دکمه‌ها (Buttons)

#### دکمه اصلی (Primary Button):
- **زمینه:** گرادینت `from-[#0052FF] to-[#4D7CFF]`
- **متن:** سفید (`#FFFFFF`) با وزن Bold 700
- **شعاع شعاع انحنا:** `rounded-xl` (12px)
- **سایه:** سایه با رنگ آبی الکتریسیته (`shadow-[0_4px_14px_rgba(0,82,255,0.25)]`)
- **هاور:** صعود به بالا (`-translate-y-0.5`) + افزایش درخشش + جابه‌جایی آیکون فلش به سمت چپ.

```jsx
<button className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-[#0052FF] to-[#4D7CFF] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] active:scale-[0.98]">
  <span>ثبت بار جدید</span>
  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
</button>
```

#### دکمه ثانویه (Secondary Button):
- **زمینه:** شفاف یا `muted`
- **کادر:** `1px border-slate-200`
- **متن:** `text-slate-900`
- **هاور:** `bg-slate-100` + کادر آبی کم‌رنگ.

---

### ۵.۲. کارت‌های لیست بار (Load Cards)

- **زمینه:** سفید خالص (`#FFFFFF`)
- **کادر:** `border border-slate-200/80`
- **شعاع:** `rounded-2xl`
- **سایه:** `shadow-sm` در حالت عادی ➔ `shadow-xl` در حالت هاور
- **هایلایت وضعیت:** نوار عمودی رنگی در سمت راست کارت جهت مشخص کردن استاتوس بار (*در انتظار ➔ اساین شده ➔ در مسیر ➔ تحویل*).

```jsx
<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  {/* نوار وضعیت عمودی در سمت راست */}
  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0052FF] to-[#4D7CFF]" />
  {/* محتوای کارت */}
</div>
```

---

### ۵.۳. برچسب‌های بخش‌ها و استاتوس (Badges & Status Tags)

برچسب‌های بیضی‌شکل مجهز به نقطه نبض‌دار (Pulsing Dot) برای نشان دادن وضعیت زنده:

```jsx
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-[#0052FF]">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052FF] opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052FF]"></span>
  </span>
  <span>در حال حمل (در مسیر)</span>
</div>
```

---

## ۶. انیمیشن‌ها و عمق بصری (Motion & Texture)

1. **انیمیشن نبض زنده (Pulsing Indicators):** جهت نمایش بارگیری فعال یا موقعیت مکانی کامیون.
2. **بافت نقطه‌ای (Dot Matrix Texture):** استفاده از الگوی نقطه‌ای بسیار ملایم روی بخش‌های تیره معکوس (Inverted Dark Sections).
3. **افکت Glassmorphism:** استفاده از `backdrop-blur-md` و `bg-white/80` برای نوار ناوبری بالای صفحه (Navbar).
