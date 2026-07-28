# Design System & UI Specification: Baaar Logistics Platform

> **Design Style:** Minimalist Modern (RTL-Native)  
> **Primary Font:** Estedad (فونت استعداد)  
> **Core Focus:** Operational Clarity, High Legibility, Premium Tech Aesthetic for Cargo & Logistics  

---

## 1. Design Philosophy

### 1.1. Core Principle
**Clarity through structure, character through bold detail.**  
This design system is built on a deliberate tension: **restraint in quantity, confidence in execution.** Every element present on the screen has earned its place; those elements are executed with deliberate flair, precision, and RTL-native alignment.

Whitespace is not empty space—it is a precision instrument to guide the user's attention through dense freight data. Motion is not frivolous decoration—it communicates live cargo updates and transit statuses. Colors are concentrated into an electrifying **Electric Blue** gradient that commands focus wherever it appears.

### 1.2. The Visual Vibe
**Professional yet design-forward. Confident, alive, and natively Persian (RTL).**

Imagine the intersection of a high-tech logistics SaaS dashboard with a sleek creative agency portfolio. This design evokes safety, trust, and high-efficiency freight operations.

**Emotional Keywords:**
- **Confident:** Boldly sizers components, vibrant action colors, and purposeful micro-animations.
- **Sophisticated:** Dual-layer shadows, glassmorphism overlays (`backdrop-blur`), and variable typography via the **Estedad** font family.
- **Alive:** Pulsing status indicators, smooth float animations, and responsive touch/hover feedback.
- **Native RTL:** Seamless right-to-left layout alignment for Persian UI without broken typography or misaligned icons.

---

## 2. Typography System

The typography system uses **Estedad (استعداد)** as its primary variable font for all Persian UI copy, headings, and body text. Technical badges, load tracking numbers, vehicle license plates, and monetary values utilize a complementary **Monospace font** (JetBrains Mono / Vazirmatn Mono).

### 2.1. Type Scale & Usage

| Element | Size | Weight | Line Height (Leading) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Headline** | `text-4xl` to `text-6xl` | 800 (ExtraBold) | `leading-[1.15]` | Key headline words feature signature gradient text effect. |
| **Section Headlines** | `text-2xl` to `text-4xl` | 700 (Bold) | `leading-snug` | Paired with entrance animations. |
| **Card Titles** | `text-lg` to `text-xl` | 600 (SemiBold) | `leading-normal` | Designed for high scannability in load feeds. |
| **Body Text** | `text-base` | 400 (Regular) | `leading-relaxed` (1.7) | Descriptions, cargo specifications, and notes. |
| **Badges & Rates** | `text-xs` to `text-sm` | 500 (Medium) / Mono | `leading-none` | Tracking IDs, plate numbers, prices, and status tags. |

---

## 3. Color Strategy & Design Tokens

### 3.1. Color Palette

| Token Name | Hex Value | Context & Usage |
| :--- | :--- | :--- |
| `background` | `#FAFAFA` | Main canvas (warm off-white reducing eye strain). |
| `foreground` | `#0F172A` (Slate-900) | Primary text and background for inverted dark sections. |
| `muted` | `#F1F5F9` (Slate-100) | Secondary surfaces, disabled inputs, and subtle card fills. |
| `muted-foreground` | `#64748B` (Slate-500) | Secondary body text, load metadata, and timestamps. |
| `accent` | `#0052FF` (Electric Blue) | **Primary Action Color.** CTAs, active highlights, icons. |
| `accent-secondary` | `#4D7CFF` | Gradient endpoint (sky blue accent). |
| `card` | `#FFFFFF` | Elevated surfaces and card containers. |
| `border` | `#E2E8F0` (Slate-200) | Structural card borders and dividers. |
| `success` | `#10B981` (Emerald-500) | "Delivered" state or successful payment. |
| `warning` | `#F59E0B` (Amber-500) | "Loading in progress" or "Awaiting Quote" state. |

### 3.2. Signature Gradient
```css
/* Electric Blue Gradient for Primary Actions & Text Highlights */
background: linear-gradient(135deg, #0052FF 0%, #4D7CFF 100%);
```

---

## 4. RTL Layout & Directional Guidelines

1. **Horizontal Direction (`dir="rtl"`):**
   - All main viewports and container trees use right-to-left orientation.
   - Text elements are right-aligned (`text-right`).
   - Progression and forward action icons point left (`ArrowLeft` instead of `ArrowRight`).

2. **Spacing Grid:**
   - Section padding: `py-16` to `py-28` on desktop.
   - Card internal padding: `p-5` to `p-8`.
   - Grid gaps: `gap-4` to `gap-6`.

---

## 5. Component Styling & Interactive Behaviors

### 5.1. Buttons

#### Primary Button:
- **Background:** Gradient `from-[#0052FF] to-[#4D7CFF]`
- **Typography:** White text, Bold 700 with **Estedad** font.
- **Border Radius:** `rounded-xl` (12px)
- **Shadow:** Electric blue accent glow (`shadow-[0_4px_14px_rgba(0,82,255,0.25)]`)
- **Hover Behavior:** Lifts upward (`-translate-y-0.5`), increases glow shadow, and translates the left-pointing arrow icon (`-translate-x-1`).

```jsx
<button className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-[#0052FF] to-[#4D7CFF] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] active:scale-[0.98]">
  <span>ثبت بار جدید</span>
  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
</button>
```

#### Secondary Button:
- **Background:** Transparent or `muted`
- **Border:** `1px border-slate-200`
- **Text:** `text-slate-900`
- **Hover:** `bg-slate-100` + subtle accent border stroke.

---

### 5.2. Load Feed Cards

- **Background:** Pure White (`#FFFFFF`)
- **Border:** `border border-slate-200/80`
- **Border Radius:** `rounded-2xl`
- **Shadow:** `shadow-sm` default ➔ `shadow-xl` on hover
- **RTL Vertical Status Bar:** A 6px vertical gradient bar attached to the **right edge** of the card indicating the lifecycle status (*Draft ➔ Approved ➔ Assigned ➔ In Transit ➔ Delivered*).

```jsx
<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  {/* Right-edge vertical status bar for RTL */}
  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0052FF] to-[#4D7CFF]" />
  {/* Card Content */}
</div>
```

---

### 5.3. Pulsing Live Status Badges

Pill badges featuring continuous scale/opacity keyframe animation for real-time cargo status tracking:

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

## 6. Motion & Texture Specification

1. **Pulsing Live Indicators:** Signals active cargo loading or real-time GPS truck movement.
2. **Subtle Dot Matrix Texture:** Radial dot pattern overlay at low opacity (`opacity: 0.03`) used on dark inverted contrast sections.
3. **Glassmorphism:** Navigation bar uses `backdrop-blur-md` and `bg-white/80` for elevated depth.
