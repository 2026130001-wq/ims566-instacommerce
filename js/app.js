/**
 * IMS566 Advanced Web Design Development and Content Management
 * E-Commerce Store & Inventory Management System ("InstaCommerce")
 * Author: Aiman (Student ID: 2026130001)
 * Description: Simulated authentication, structured e-commerce datasets,
 *              interactive filtering, and Chart.js visualisations.
 */

// ============================================================================
// 1. SIMULATED AUTHENTICATION CREDENTIALS & SESSION GUARD
// ============================================================================
const DEMO_USERS = [
  { username: "admin", password: "password123", name: "Aiman (Store Admin)", role: "Administrator" },
  { username: "manager", password: "ims566", name: "Operations Manager", role: "Inventory Lead" }
];

function checkAuth() {
  const isLoginPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/");
  const currentUser = JSON.parse(sessionStorage.getItem("ims566_user"));

  if (!currentUser && !isLoginPage) {
    window.location.href = "index.html";
    return null;
  }
  return currentUser;
}

function logoutUser() {
  sessionStorage.removeItem("ims566_user");
  window.location.href = "index.html";
}

// ============================================================================
// 2. STRUCTURED E-COMMERCE DATASETS (PRODUCTS & CUSTOMER ORDERS)
// ============================================================================
const PRODUCTS_DATA = [
  {
    id: "PRD-101",
    sku: "FRG-AFN-9PM",
    name: "Afnan 9PM Eau De Parfum (100ml)",
    category: "Fragrances",
    price: 135.00,
    stock: 42,
    status: "In Stock",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #312e81, #4f46e5)",
    icon: "bi-droplet-fill",
    description: "Warm vanilla, tonka bean, and apple evening scent with 10+ hour longevity."
  },
  {
    id: "PRD-102",
    sku: "FRG-LAT-KHM",
    name: "Lattafa Khamrah Qahwa EDP (100ml)",
    category: "Fragrances",
    price: 149.00,
    stock: 8,
    status: "Low Stock",
    rating: 4.8,
    gradient: "linear-gradient(135deg, #78350f, #b45309)",
    icon: "bi-cup-hot-fill",
    description: "Rich roasted Arabica coffee blended with cinnamon, cardamom, and praline."
  },
  {
    id: "PRD-103",
    sku: "APP-STR-OVR",
    name: "Heavyweight Boxy Streetwear Tee (Black)",
    category: "Apparel",
    price: 69.00,
    stock: 65,
    status: "In Stock",
    rating: 4.7,
    gradient: "linear-gradient(135deg, #0f172a, #334155)",
    icon: "bi-bag-check-fill",
    description: "260gsm combed cotton oversized drop-shoulder t-shirt in matte onyx black."
  },
  {
    id: "PRD-104",
    sku: "APP-ATH-HZP",
    name: "Monochrome Athleisure Half-Zip Pullover",
    category: "Apparel",
    price: 119.00,
    stock: 19,
    status: "In Stock",
    rating: 4.6,
    gradient: "linear-gradient(135deg, #1e293b, #475569)",
    icon: "bi-layers-fill",
    description: "Breathable French terry half-zip sweater tailored for daily casual wear."
  },
  {
    id: "PRD-105",
    sku: "TCH-KBD-75M",
    name: "75% Wireless Mechanical Keyboard (RGB)",
    category: "Tech Accessories",
    price: 249.00,
    stock: 6,
    status: "Low Stock",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #065f46, #10b981)",
    icon: "bi-keyboard-fill",
    description: "Hot-swappable tactile switches with aluminum rotary knob and tri-mode connection."
  },
  {
    id: "PRD-106",
    sku: "TCH-STD-VRT",
    name: "Aluminum Vertical Laptop Clamshell Dock",
    category: "Tech Accessories",
    price: 89.00,
    stock: 31,
    status: "In Stock",
    rating: 4.8,
    gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
    icon: "bi-laptop-fill",
    description: "Anodized dual-slot adjustable stand for clean external monitor desk setups."
  },
  {
    id: "PRD-107",
    sku: "FRG-DEC-5ML",
    name: "Travel Atomizer Decant Set (3 x 5ml)",
    category: "Fragrances",
    price: 45.00,
    stock: 0,
    status: "Out of Stock",
    rating: 4.5,
    gradient: "linear-gradient(135deg, #881337, #e11d48)",
    icon: "bi-stars",
    description: "Refillable glass pocket sprayers with anodized matte black casing."
  },
  {
    id: "PRD-108",
    sku: "TCH-HUB-USC",
    name: "7-in-1 USB-C 4K HDMI Multiport Hub",
    category: "Tech Accessories",
    price: 115.00,
    stock: 27,
    status: "In Stock",
    rating: 4.7,
    gradient: "linear-gradient(135deg, #4c1d95, #7c3aed)",
    icon: "bi-usb-symbol",
    description: "100W PD pass-through charging, Gigabit Ethernet, and dual USB 3.2 ports."
  }
];

const ORDERS_DATA = [
  { orderId: "#ORD-8841", date: "2026-11-15", customer: "Aiman Hakim", city: "Kajang, Selangor", items: "Afnan 9PM EDP (100ml)", total: 135.00, payment: "FPX Online", status: "Delivered" },
  { orderId: "#ORD-8842", date: "2026-11-15", customer: "Nurul Izzah", city: "Shah Alam, Selangor", items: "Lattafa Khamrah Qahwa, Decant Set", total: 194.00, payment: "Touch 'n Go eWallet", status: "Shipped" },
  { orderId: "#ORD-8843", date: "2026-11-14", customer: "Daniel Tan", city: "Georgetown, Penang", items: "75% Wireless Mechanical Keyboard", total: 249.00, payment: "Credit Card", status: "Processing" },
  { orderId: "#ORD-8844", date: "2026-11-14", customer: "Siti Aminah", city: "Kuala Terengganu", items: "Heavyweight Boxy Tee (x2)", total: 138.00, payment: "GrabPay", status: "Delivered" },
  { orderId: "#ORD-8845", date: "2026-11-13", customer: "Harith Iskandar", city: "Johor Bahru, Johor", items: "Vertical Laptop Dock, USB-C Hub", total: 204.00, payment: "FPX Online", status: "Delivered" },
  { orderId: "#ORD-8846", date: "2026-11-13", customer: "Farah Nabila", city: "Alor Setar, Kedah", items: "Monochrome Half-Zip Pullover", total: 119.00, payment: "Touch 'n Go eWallet", status: "Shipped" },
  { orderId: "#ORD-8847", date: "2026-11-12", customer: "Kevin Chong", city: "Subang Jaya, Selangor", items: "Afnan 9PM EDP, Boxy Streetwear Tee", total: 204.00, payment: "Credit Card", status: "Cancelled" },
  { orderId: "#ORD-8848", date: "2026-11-12", customer: "Amirul Mukminin", city: "Bangi, Selangor", items: "Lattafa Khamrah Qahwa EDP", total: 149.00, payment: "FPX Online", status: "Delivered" }
];

// ============================================================================
// 3. PAGE INITIALIZATION ROUTER
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const user = checkAuth();

  // Populate logged-in user badge in navbar if present
  const userBadge = document.getElementById("navUserName");
  if (user && userBadge) {
    userBadge.textContent = user.name;
  }

  // Bind logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logoutUser();
    });
  }

  // Page-specific initializers
  if (document.getElementById("loginForm")) {
    initAuthPage();
  }
  if (document.getElementById("salesTrendChart")) {
    initDashboardPage();
  }
  if (document.getElementById("productGrid")) {
    initProductsPage();
  }
  if (document.getElementById("ordersTableBody")) {
    initOrdersPage();
  }
});

// ============================================================================
// 4. AUTHENTICATION PAGE LOGIC (LOGIN & REGISTER TABS WITH VALIDATION)
// ============================================================================
function initAuthPage() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const authAlert = document.getElementById("authAlert");

  function showAlert(message, type = "danger") {
    authAlert.className = `alert alert-${type} py-2 small`;
    authAlert.innerHTML = `<i class="bi ${type === 'danger' ? 'bi-exclamation-triangle-fill' : 'bi-check-circle-fill'} me-2"></i>${message}`;
    authAlert.classList.remove("d-none");
  }

  // Quick fill demo button
  const fillDemoBtn = document.getElementById("fillDemoBtn");
  if (fillDemoBtn) {
    fillDemoBtn.addEventListener("click", () => {
      document.getElementById("loginUsername").value = "admin";
      document.getElementById("loginPassword").value = "password123";
      authAlert.classList.add("d-none");
    });
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
      showAlert("Please enter both your username and password.");
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem("ims566_registered") || "[]");
    const allUsers = [...DEMO_USERS, ...registeredUsers];

    const matchedUser = allUsers.find(
      (u) => u.username.toLowerCase() === username && u.password === password
    );

    if (matchedUser) {
      sessionStorage.setItem("ims566_user", JSON.stringify(matchedUser));
      showAlert("Login successful! Redirecting to InstaCommerce Dashboard...", "success");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 650);
    } else {
      showAlert("Invalid username or password. Try <strong>admin</strong> / <strong>password123</strong>.");
    }
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("regName").value.trim();
    const username = document.getElementById("regUsername").value.trim().toLowerCase();
    const password = document.getElementById("regPassword").value;

    if (fullName.length < 3) {
      showAlert("Full name must be at least 3 characters long.");
      return;
    }
    if (username.length < 3) {
      showAlert("Username must be at least 3 characters long.");
      return;
    }
    if (password.length < 6) {
      showAlert("Password must be at least 6 characters for security.");
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem("ims566_registered") || "[]");
    if (DEMO_USERS.some(u => u.username === username) || registeredUsers.some(u => u.username === username)) {
      showAlert("That username is already taken. Please choose another.");
      return;
    }

    const newUser = { username, password, name: fullName, role: "Store Staff" };
    registeredUsers.push(newUser);
    localStorage.setItem("ims566_registered", JSON.stringify(registeredUsers));

    showAlert("Account created! You can now sign in with your new credentials.", "success");
    registerForm.reset();
    document.getElementById("login-tab").click();
    document.getElementById("loginUsername").value = username;
  });
}

// ============================================================================
// 5. DASHBOARD PAGE LOGIC & CHART.JS VISUALISATIONS
// ============================================================================
function initDashboardPage() {
  // Chart 1: Monthly E-Commerce Revenue vs Target (Line/Bar Combo)
  const salesCtx = document.getElementById("salesTrendChart").getContext("2d");
  new Chart(salesCtx, {
    type: "bar",
    data: {
      labels: ["Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026", "Oct 2026", "Nov 2026"],
      datasets: [
        {
          label: "Monthly Revenue (RM)",
          data: [14200, 16850, 15900, 19400, 22650, 26480],
          backgroundColor: "#4f46e5",
          borderRadius: 6
        },
        {
          label: "Sales Target (RM)",
          data: [15000, 16000, 17000, 18500, 21000, 24000],
          type: "line",
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.15)",
          borderWidth: 2.5,
          tension: 0.35,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: RM ${ctx.parsed.y.toLocaleString()}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => "RM " + value.toLocaleString()
          }
        }
      }
    }
  });

  // Chart 2: Revenue Share by Product Category (Doughnut)
  const catCtx = document.getElementById("categoryMixChart").getContext("2d");
  new Chart(catCtx, {
    type: "doughnut",
    data: {
      labels: ["Fragrances", "Tech Accessories", "Apparel"],
      datasets: [
        {
          data: [48, 32, 20],
          backgroundColor: ["#4f46e5", "#0ea5e9", "#f59e0b"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "65%",
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed}% of Total Sales`
          }
        }
      }
    }
  });
}

// ============================================================================
// 6. DATA VIEW 1: PRODUCT CATALOG & INVENTORY PAGE
// ============================================================================
function initProductsPage() {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("productSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const statusFilter = document.getElementById("stockFilter");
  const resultCount = document.getElementById("productCount");

  function getBadgeClass(status) {
    if (status === "In Stock") return "bg-success-subtle text-success border border-success-subtle";
    if (status === "Low Stock") return "bg-warning-subtle text-warning-emphasis border border-warning-subtle";
    return "bg-danger-subtle text-danger border border-danger-subtle";
  }

  function renderProducts() {
    const query = searchInput.value.toLowerCase().trim();
    const cat = categoryFilter.value;
    const st = statusFilter.value;

    const filtered = PRODUCTS_DATA.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);
      const matchesCat = cat === "All" || item.category === cat;
      const matchesStatus = st === "All" || item.status === st;
      return matchesSearch && matchesCat && matchesStatus;
    });

    resultCount.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-12">
          <div class="alert alert-light border text-center py-5">
            <i class="bi bi-search fs-2 text-muted d-block mb-2"></i>
            <h6 class="fw-semibold">No matching products found</h6>
            <p class="text-muted small mb-0">Try adjusting your search keywords or category/stock filters.</p>
          </div>
        </div>`;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (p) => `
      <div class="col-sm-6 col-lg-3">
        <article class="card product-card h-100 bg-white">
          <div class="product-img-placeholder" style="background: ${p.gradient};">
            <i class="bi ${p.icon}"></i>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-light text-dark border">${p.category}</span>
              <span class="badge ${getBadgeClass(p.status)}">${p.status}</span>
            </div>
            <small class="text-muted font-monospace mb-1">SKU: ${p.sku}</small>
            <h2 class="h6 fw-bold mb-2">${p.name}</h2>
            <p class="text-muted small flex-grow-1">${p.description}</p>
            <div class="d-flex justify-content-between align-items-center pt-2 border-top mt-2">
              <span class="fw-bold text-primary fs-6">RM ${p.price.toFixed(2)}</span>
              <span class="small text-muted"><i class="bi bi-box-seam me-1"></i>${p.stock} units</span>
            </div>
          </div>
        </article>
      </div>`
      )
      .join("");
  }

  searchInput.addEventListener("input", renderProducts);
  categoryFilter.addEventListener("change", renderProducts);
  statusFilter.addEventListener("change", renderProducts);

  renderProducts();
}

// ============================================================================
// 7. DATA VIEW 2: CUSTOMER ORDERS & TRANSACTIONS TABLE
// ============================================================================
function initOrdersPage() {
  const tbody = document.getElementById("ordersTableBody");
  const searchInput = document.getElementById("orderSearch");
  const statusSelect = document.getElementById("orderStatusFilter");
  const summaryLabel = document.getElementById("ordersSummaryLabel");

  function getStatusBadge(status) {
    switch (status) {
      case "Delivered":
        return '<span class="badge bg-success-subtle text-success border border-success-subtle"><i class="bi bi-check-circle me-1"></i>Delivered</span>';
      case "Shipped":
        return '<span class="badge bg-info-subtle text-info-emphasis border border-info-subtle"><i class="bi bi-truck me-1"></i>Shipped</span>';
      case "Processing":
        return '<span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle"><i class="bi bi-hourglass-split me-1"></i>Processing</span>';
      default:
        return '<span class="badge bg-danger-subtle text-danger border border-danger-subtle"><i class="bi bi-x-circle me-1"></i>Cancelled</span>';
    }
  }

  function renderOrders() {
    const query = searchInput.value.toLowerCase().trim();
    const st = statusSelect.value;

    const filtered = ORDERS_DATA.filter((o) => {
      const matchesText =
        o.orderId.toLowerCase().includes(query) ||
        o.customer.toLowerCase().includes(query) ||
        o.items.toLowerCase().includes(query) ||
        o.city.toLowerCase().includes(query);
      const matchesStatus = st === "All" || o.status === st;
      return matchesText && matchesStatus;
    });

    const totalRevenue = filtered
      .filter((o) => o.status !== "Cancelled")
      .reduce((sum, o) => sum + o.total, 0);

    summaryLabel.textContent = `Displaying ${filtered.length} orders (Net Value: RM ${totalRevenue.toFixed(2)})`;

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-4 text-muted">
            No orders match the selected filter criteria.
          </td>
        </tr>`;
      return;
    }

    tbody.innerHTML = filtered
      .map(
        (o) => `
      <tr>
        <td class="fw-semibold font-monospace text-primary">${o.orderId}</td>
        <td>${o.date}</td>
        <td>
          <div class="fw-medium">${o.customer}</div>
          <small class="text-muted">${o.city}</small>
        </td>
        <td>${o.items}</td>
        <td><span class="badge bg-light text-dark border">${o.payment}</span></td>
        <td class="fw-semibold text-end">RM ${o.total.toFixed(2)}</td>
        <td class="text-center">${getStatusBadge(o.status)}</td>
      </tr>`
      )
      .join("");
  }

  searchInput.addEventListener("input", renderOrders);
  statusSelect.addEventListener("change", renderOrders);

  renderOrders();
}
