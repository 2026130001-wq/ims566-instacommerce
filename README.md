# InstaCommerce — E-Commerce Store & Inventory Management Portal

**Course:** IMS566 — Advanced Web Design Development and Content Management  
**Institution:** Universiti Teknologi MARA (UiTM)  
**Author:** Aiman  
**Student ID:** 2026130001

---

## 1. Project Description
**InstaCommerce** is a responsive e-commerce merchant and inventory management web application prototype. It enables store administrators and operations staff to authenticate into a protected workspace, monitor monthly sales performance against revenue targets, inspect product stock levels across multiple categories, and track customer order fulfillment.

---

## 2. Features Included
- **Simulated Authentication (`index.html`):**
  - Dual-tab **Sign In** and **Register** interface with form validation, fluid ambient mesh animations, and clear alert feedback.
  - Session-based route protection (`sessionStorage`) and quick demo credential auto-fill.
- **Responsive Navigation Menu & Structured Footer:**
  - Frosted sticky Bootstrap 5 collapsible navigation bar consistent across all internal views, complete with active page highlighting and user session display.
  - Structured semantic footer with quick links and student metadata.
- **Executive Dashboard (`dashboard.html`):**
  - Real-time KPI summary cards (Monthly Revenue, Total Orders, Active SKUs, Average Order Value) with hover shimmer effects.
  - Restock alert feed and recent fulfillment summary.
- **Interactive Data Visualisations (`Chart.js`):**
  - **6-Month Revenue Performance vs Target:** Combined bar and line chart comparing actual monthly MYR revenue against targets.
  - **Sales Share by Category:** Doughnut chart illustrating revenue distribution across *Fragrances*, *Tech Accessories*, and *Apparel*.
- **Data View 1 — Product Catalog & Inventory (`products.html`):**
  - Responsive 4-column card grid with staggered entrance animations displaying product SKUs, categories, pricing (RM), stock counts, and availability badges.
  - Live keyword search and dual dropdown filters (Category & Stock Status).
- **Data View 2 — Customer Orders & Transactions (`orders.html`):**
  - Structured responsive data table listing Order IDs, dates, customer locations across Malaysia, purchased items, payment methods (FPX, TnG eWallet, GrabPay, Card), totals, and fulfillment statuses with live filtering.

---

## 3. Instructions to Test Login
1. Open `index.html` in Google Chrome (or visit the deployed GitHub Pages URL).
2. Enter the following hardcoded credentials (or click the **Auto-fill** button on the login card):
   - **Username:** `admin`
   - **Password:** `password123`
   *(Alternative account: `manager` / `ims566`)*
3. Click **Access Store Dashboard** to enter `dashboard.html`.
4. You may also switch to the **Register** tab to create a new local staff account and sign in with it.

---

## 4. Frameworks & Libraries Used
- **HTML5 & CSS3:** Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), glassmorphism, and fluid keyframe animations.
- **Bootstrap 5.3.3 (CDN):** Responsive grid system, cards, tables, forms, navbars, and utility classes.
- **Bootstrap Icons 1.11.3 (CDN):** Crisp vector iconography across KPI cards, navigation, and product placeholders.
- **Chart.js 4.4.3 (CDN):** Interactive, responsive HTML5 canvas data visualisations.
- **Vanilla JavaScript (ES6+):** Client-side authentication simulation, DOM rendering, and multi-criteria search/filtering.
