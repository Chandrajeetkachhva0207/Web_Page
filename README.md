# AURA — Creative AI Design & Development Studio

A premium, highly responsive landing page template crafted using modern visual aesthetics and clean web technologies. Built with pure **HTML5**, **Vanilla CSS**, and **ES6+ JavaScript**.

---

## 🌟 Key Features

- **🌓 Automatic & Manual Dark/Light Themes**: Includes a theme switcher button that shifts styling tokens dynamically and remembers user preferences via `localStorage`.
- **📱 Fully Responsive Grid & Flex Layout**: Optimized for seamless navigation on mobile viewports ($375\text{px}$), tablets ($768\text{px}$), and large desktop displays ($1200\text{px}+$ ).
- **✨ Glassmorphic Layouts**: Leverages modern CSS capabilities like `backdrop-filter` and deep translucent color grids for a sleek, premium SaaS-like aesthetic.
- **📝 Interactive Contact Form**: Features custom floating labels, inline blur/submit validation messages, and visual loading states.
- **👁️ Reveal on Scroll**: Smooth scroll animations utilizing the browser's native `IntersectionObserver` API to lazy-animate sections as they enter the screen.
- **📍 Active Section Tracker**: Highlights corresponding links in the navigation bar automatically as you scroll past sections.
- **⚡ Performance First**: Utilizes direct inline SVG assets for icons and loaders—reducing external request overhead and ensuring instantaneous load times.

---

## 📂 File Structure

- **`index.html`**: Structured semantic markup, search engine optimization tags, and all custom vector SVG layouts.
- **`style.css`**: Color system definitions, grid tokens, dark/light variations, custom typography declarations (`Outfit` & `Inter`), hover states, and media query breakpoints.
- **`script.js`**: Core client side handler (theme toggles, active link observers, lazy triggers, and validation handlers).

---

## 🚀 Quick Start / Local Setup

Since this is a static webpage, you can launch it in a few different ways:

### 1. Directly in the Browser
Simply double-click the `index.html` file to open it directly.

### 2. Using Python
If you have Python installed, open your command terminal in this directory and run:
```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

### 3. Using Node.js (npm)
If you have Node.js installed, execute:
```bash
npx serve
```
This serves the project locally and opens it automatically.
