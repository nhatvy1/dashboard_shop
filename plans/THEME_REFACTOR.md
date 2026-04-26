# 🎨 Theme Refactor Plan — Admin Dashboard
> Mục tiêu: Tách hoàn toàn theme (light/dark) ra CSS variables, không đụng logic JS/TS.  
> Tham khảo: ophim16.cc (ảnh chụp màn hình)

---

## 📋 Tổng quan vấn đề hiện tại

| Vấn đề | Mô tả |
|--------|-------|
| Màu hardcode | Màu viết thẳng vào component, khó đổi đồng bộ |
| Dark/light không đồng nhất | Mỗi component tự xử lý, thiếu source of truth |
| Tailwind không gợi ý biến theme | Chưa cấu hình `tailwind.config` đúng cách |
| Bảng, badge, tag bị vỡ theme | Không dùng chung token color |

---

## 🗂️ Cấu trúc file đề xuất

```
src/
├── styles/
│   ├── tokens.css          ← CSS variables (source of truth)
│   ├── themes/
│   │   ├── light.css       ← map token → light value
│   │   └── dark.css        ← map token → dark value
│   └── globals.css         ← import tất cả, tailwind directives
├── tailwind.config.ts      ← extend colors từ CSS var
```

---

## 🎨 Phần 1: CSS Variables (`tokens.css`)

### Nguyên tắc đặt tên token
```
--color-{layer}-{role}-{state?}
```

### File: `src/styles/tokens.css`

```css
/* ============================================
   DESIGN TOKENS — Admin Dashboard
   Tham khảo palette: ophim16.cc
   ============================================ */

:root {
  /* --- Radius --- */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  /* --- Spacing scale (optional nếu không dùng Tailwind default) --- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;

  /* --- Typography --- */
  --font-sans: 'Be Vietnam Pro', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* --- Transition --- */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

---

## ☀️ Phần 2: Light Theme (`themes/light.css`)

> Lấy từ ảnh 1 (nền trắng xám nhạt)

```css
/* src/styles/themes/light.css */
[data-theme="light"], :root {

  /* === Background layers === */
  --color-bg-base:        #f0f2f5;   /* nền tổng thể — xám nhạt */
  --color-bg-surface:     #ffffff;   /* card, panel */
  --color-bg-elevated:    #ffffff;   /* modal, dropdown */
  --color-bg-subtle:      #f7f8fa;   /* hover row, sidebar muted */
  --color-bg-inverse:     #1a1d2e;   /* badge tối trên nền sáng */

  /* === Border === */
  --color-border-base:    #e5e8ef;
  --color-border-strong:  #c8cdd8;
  --color-border-focus:   #6366f1;   /* indigo — focus ring */

  /* === Text === */
  --color-text-primary:   #111827;
  --color-text-secondary: #6b7280;
  --color-text-tertiary:  #9ca3af;
  --color-text-disabled:  #d1d5db;
  --color-text-inverse:   #ffffff;
  --color-text-link:      #6366f1;

  /* === Brand / Accent (từ logo ophim: cam-vàng) === */
  --color-brand-primary:        #f59e0b;   /* amber — logo color */
  --color-brand-primary-hover:  #d97706;
  --color-brand-secondary:      #6366f1;   /* indigo — CTA buttons */
  --color-brand-secondary-hover:#4f46e5;

  /* === Semantic Status === */
  --color-success:        #10b981;
  --color-success-bg:     #d1fae5;
  --color-success-text:   #065f46;

  --color-warning:        #f59e0b;
  --color-warning-bg:     #fef3c7;
  --color-warning-text:   #92400e;

  --color-error:          #ef4444;
  --color-error-bg:       #fee2e2;
  --color-error-text:     #991b1b;

  --color-info:           #6366f1;
  --color-info-bg:        #eef2ff;
  --color-info-text:      #3730a3;

  /* === Table === */
  --color-table-header-bg:    #f7f8fa;
  --color-table-row-bg:       #ffffff;
  --color-table-row-hover:    #f0f2f8;
  --color-table-row-stripe:   #f9fafb;
  --color-table-border:       #e5e8ef;

  /* === Sidebar === */
  --color-sidebar-bg:         #ffffff;
  --color-sidebar-item-hover: #f0f2f8;
  --color-sidebar-item-active:#eef2ff;
  --color-sidebar-text:       #374151;
  --color-sidebar-text-active:#6366f1;

  /* === Topbar / Navbar === */
  --color-topbar-bg:          #ffffff;
  --color-topbar-border:      #e5e8ef;
  --color-topbar-text:        #374151;

  /* === Badge / Tag (như Tập 2, Phim Bộ trên ophim) === */
  --color-badge-episode-bg:   #6366f1;
  --color-badge-episode-text: #ffffff;
  --color-badge-type-bg:      #f0f2f8;
  --color-badge-type-text:    #374151;
  --color-badge-tmdb-bg:      #032541;
  --color-badge-tmdb-text:    #01d277;
  --color-badge-imdb-bg:      #f5c518;
  --color-badge-imdb-text:    #000000;

  /* === Input / Form === */
  --color-input-bg:           #ffffff;
  --color-input-border:       #d1d5db;
  --color-input-border-focus: #6366f1;
  --color-input-text:         #111827;
  --color-input-placeholder:  #9ca3af;

  /* === Shadow === */
  --shadow-sm:  0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
  --shadow-md:  0 4px 16px rgba(0,0,0,.08);
  --shadow-lg:  0 8px 32px rgba(0,0,0,.10);
}
```

---

## 🌙 Phần 3: Dark Theme (`themes/dark.css`)

> Lấy từ ảnh 2 (nền xanh-đen đậm, giống ophim dark)

```css
/* src/styles/themes/dark.css */
[data-theme="dark"] {

  /* === Background layers === */
  --color-bg-base:        #0f1117;   /* nền tổng — xanh đen */
  --color-bg-surface:     #1a1d2e;   /* card, panel */
  --color-bg-elevated:    #21253a;   /* modal, dropdown */
  --color-bg-subtle:      #1e2235;   /* hover row, muted area */
  --color-bg-inverse:     #f9fafb;

  /* === Border === */
  --color-border-base:    #2a2f47;
  --color-border-strong:  #3d4460;
  --color-border-focus:   #818cf8;

  /* === Text === */
  --color-text-primary:   #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-tertiary:  #64748b;
  --color-text-disabled:  #334155;
  --color-text-inverse:   #111827;
  --color-text-link:      #818cf8;

  /* === Brand / Accent === */
  --color-brand-primary:        #f59e0b;
  --color-brand-primary-hover:  #fbbf24;
  --color-brand-secondary:      #818cf8;
  --color-brand-secondary-hover:#6366f1;

  /* === Semantic Status === */
  --color-success:        #34d399;
  --color-success-bg:     rgba(52,211,153,.12);
  --color-success-text:   #6ee7b7;

  --color-warning:        #fbbf24;
  --color-warning-bg:     rgba(251,191,36,.12);
  --color-warning-text:   #fde68a;

  --color-error:          #f87171;
  --color-error-bg:       rgba(248,113,113,.12);
  --color-error-text:     #fca5a5;

  --color-info:           #818cf8;
  --color-info-bg:        rgba(129,140,248,.12);
  --color-info-text:      #a5b4fc;

  /* === Table === */
  --color-table-header-bg:    #1e2235;
  --color-table-row-bg:       #1a1d2e;
  --color-table-row-hover:    #21253a;
  --color-table-row-stripe:   #1c1f30;
  --color-table-border:       #2a2f47;

  /* === Sidebar === */
  --color-sidebar-bg:         #13162a;
  --color-sidebar-item-hover: #1e2235;
  --color-sidebar-item-active:#21253a;
  --color-sidebar-text:       #94a3b8;
  --color-sidebar-text-active:#818cf8;

  /* === Topbar === */
  --color-topbar-bg:          #13162a;
  --color-topbar-border:      #2a2f47;
  --color-topbar-text:        #e2e8f0;

  /* === Badge / Tag === */
  --color-badge-episode-bg:   #4f46e5;
  --color-badge-episode-text: #e0e7ff;
  --color-badge-type-bg:      #1e2235;
  --color-badge-type-text:    #94a3b8;
  --color-badge-tmdb-bg:      #032541;
  --color-badge-tmdb-text:    #01d277;
  --color-badge-imdb-bg:      #f5c518;
  --color-badge-imdb-text:    #000000;

  /* === Input === */
  --color-input-bg:           #1e2235;
  --color-input-border:       #2a2f47;
  --color-input-border-focus: #818cf8;
  --color-input-text:         #f1f5f9;
  --color-input-placeholder:  #64748b;

  /* === Shadow === */
  --shadow-sm:  0 1px 3px rgba(0,0,0,.3), 0 1px 2px rgba(0,0,0,.2);
  --shadow-md:  0 4px 16px rgba(0,0,0,.4);
  --shadow-lg:  0 8px 32px rgba(0,0,0,.5);
}
```

---

## ⚙️ Phần 4: Tailwind Config — để IDE gợi ý đầy đủ

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  // ← Đây là chìa khóa để class-based toggle hoạt động
  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        // Background
        'bg-base':     'var(--color-bg-base)',
        'bg-surface':  'var(--color-bg-surface)',
        'bg-elevated': 'var(--color-bg-elevated)',
        'bg-subtle':   'var(--color-bg-subtle)',
        'bg-inverse':  'var(--color-bg-inverse)',

        // Border
        'border-base':   'var(--color-border-base)',
        'border-strong': 'var(--color-border-strong)',
        'border-focus':  'var(--color-border-focus)',

        // Text
        'text-primary':   'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary':  'var(--color-text-tertiary)',
        'text-disabled':  'var(--color-text-disabled)',
        'text-inverse':   'var(--color-text-inverse)',
        'text-link':      'var(--color-text-link)',

        // Brand
        'brand':          'var(--color-brand-primary)',
        'brand-hover':    'var(--color-brand-primary-hover)',
        'brand-accent':   'var(--color-brand-secondary)',
        'brand-accent-hover': 'var(--color-brand-secondary-hover)',

        // Status
        'success':        'var(--color-success)',
        'success-bg':     'var(--color-success-bg)',
        'success-text':   'var(--color-success-text)',
        'warning':        'var(--color-warning)',
        'warning-bg':     'var(--color-warning-bg)',
        'warning-text':   'var(--color-warning-text)',
        'error':          'var(--color-error)',
        'error-bg':       'var(--color-error-bg)',
        'error-text':     'var(--color-error-text)',
        'info':           'var(--color-info)',
        'info-bg':        'var(--color-info-bg)',
        'info-text':      'var(--color-info-text)',

        // Table
        'table-header':   'var(--color-table-header-bg)',
        'table-row':      'var(--color-table-row-bg)',
        'table-hover':    'var(--color-table-row-hover)',
        'table-stripe':   'var(--color-table-row-stripe)',
        'table-border':   'var(--color-table-border)',

        // Sidebar
        'sidebar':              'var(--color-sidebar-bg)',
        'sidebar-hover':        'var(--color-sidebar-item-hover)',
        'sidebar-active':       'var(--color-sidebar-item-active)',
        'sidebar-text':         'var(--color-sidebar-text)',
        'sidebar-text-active':  'var(--color-sidebar-text-active)',

        // Topbar
        'topbar':           'var(--color-topbar-bg)',
        'topbar-border':    'var(--color-topbar-border)',
        'topbar-text':      'var(--color-topbar-text)',

        // Badge
        'badge-episode':      'var(--color-badge-episode-bg)',
        'badge-episode-text': 'var(--color-badge-episode-text)',
        'badge-tmdb':         'var(--color-badge-tmdb-bg)',
        'badge-tmdb-text':    'var(--color-badge-tmdb-text)',
        'badge-imdb':         'var(--color-badge-imdb-bg)',
        'badge-imdb-text':    'var(--color-badge-imdb-text)',

        // Input
        'input-bg':          'var(--color-input-bg)',
        'input-border':      'var(--color-input-border)',
        'input-focus':       'var(--color-input-border-focus)',
        'input-text':        'var(--color-input-text)',
        'input-placeholder': 'var(--color-input-placeholder)',
      },

      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },

      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
    },
  },

  plugins: [],
}

export default config
```

---

## 🔧 Phần 5: globals.css — Gộp tất cả

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './tokens.css';
@import './themes/light.css';
@import './themes/dark.css';

/* Base reset áp dụng token */
@layer base {
  * {
    border-color: var(--color-border-base);
    transition-property: background-color, border-color, color;
    transition-duration: var(--transition-base);
    transition-timing-function: ease;
  }

  body {
    background-color: var(--color-bg-base);
    color: var(--color-text-primary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }

  /* Scrollbar theme */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--color-bg-base); }
  ::-webkit-scrollbar-thumb {
    background: var(--color-border-strong);
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-text-tertiary); }
}
```

---

## 🔄 Phần 6: Theme Toggle (JS — chỉ thêm attribute, không đụng logic)

```ts
// src/lib/theme.ts  ← utility thuần, không liên quan component logic
export type Theme = 'light' | 'dark'

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return (localStorage.getItem('theme') as Theme) ?? 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

export function toggleTheme() {
  const current = getTheme()
  applyTheme(current === 'dark' ? 'light' : 'dark')
}

// Gọi sớm nhất có thể (trước render) để tránh flash
export function initTheme() {
  applyTheme(getTheme())
}
```

**Thêm vào `<head>` hoặc layout root (trước render):**
```html
<script>
  const t = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
</script>
```

---

## 🗺️ Phần 7: Cách dùng trong component

### Trước (hardcode):
```tsx
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
  <span className="text-gray-900 dark:text-white">...</span>
</div>
```

### Sau (dùng token):
```tsx
<div className="bg-bg-surface border border-border-base">
  <span className="text-text-primary">...</span>
</div>
```

### Table row:
```tsx
<tr className="bg-table-row hover:bg-table-hover border-b border-table-border">
```

### Badge episode (như "Tập 2" trên ophim):
```tsx
<span className="bg-badge-episode text-badge-episode-text px-2 py-0.5 rounded-md text-xs font-semibold">
  Tập 2
</span>
```

---

## 📅 Lộ trình thực hiện

| Bước | Việc cần làm | Ưu tiên |
|------|-------------|---------|
| 1 | Tạo 3 file CSS (`tokens`, `light`, `dark`) | 🔴 Cao |
| 2 | Cập nhật `tailwind.config.ts` với color map | 🔴 Cao |
| 3 | Thêm `initTheme()` vào layout root (anti-flash) | 🔴 Cao |
| 4 | Thay màu hardcode trong component → token | 🟡 Vừa |
| 5 | Refactor table, badge, sidebar, topbar | 🟡 Vừa |
| 6 | Kiểm tra từng page ở cả 2 mode | 🟢 Thấp |
| 7 | Thêm transition cho smooth switch | 🟢 Thấp |

---

## ✅ Checklist không được quên

- [ ] `data-theme` attribute đặt trên `<html>` (không phải `<body>`)
- [ ] Script anti-flash nằm trong `<head>` trước mọi JS bundle
- [ ] Không dùng `dark:` prefix của Tailwind nếu đã dùng `[data-theme]` strategy
- [ ] Tất cả màu trong component phải qua token, không hardcode hex
- [ ] Badge TMDB/IMDB giữ màu cố định (brand identity, không đổi theo theme)
- [ ] Kiểm tra contrast ratio ≥ 4.5:1 (WCAG AA)

---

*Tài liệu này chỉ hướng dẫn phần styling. Logic nghiệp vụ không bị ảnh hưởng.*