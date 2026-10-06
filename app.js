// ==========================================================================
// DUBAI ESSENCE - ARABIAN PERFUMES E-COMMERCE ENGINE
// Venta directa a WhatsApp & Arbitraje Chile -> Colombia
// ==========================================================================

// Estado global de la aplicación
const AppState = {
  products: [...INITIAL_PRODUCTS],
  filteredProducts: [...INITIAL_PRODUCTS],
  cart: [],
  config: { ...DEFAULT_STORE_CONFIG },
  activeFilter: 'all',
  searchQuery: '',
  sortBy: 'popular',
  selectedProduct: null
};

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  initEventListeners();
  renderProducts();
  updateCartUI();
  initArbitrageCalculator();
  initCustomRequestsSection();
});

// Cargar configuración guardada de localStorage si existe
function loadSavedState() {
  const savedConfig = localStorage.getItem('scentia_store_config') || localStorage.getItem('dubai_store_config');
  if (savedConfig) {
    try {
      const parsed = JSON.parse(savedConfig);
      if (parsed.storeName === 'DUBAI ESSENCE') {
        parsed.storeName = 'SCENTIA';
        parsed.storeFullName = 'SCENTIA FINE FRAGRANCES';
        parsed.storeSlogan = 'Porque en un mundo donde todo es réplica, yo elijo ser original.';
      }
      if (parsed.whatsappNumber === '573123456789' || !parsed.whatsappNumber) {
        parsed.whatsappNumber = '573127455474';
      }
      AppState.config = { ...AppState.config, ...parsed };
    } catch (e) {
      console.error('Error parsing saved config:', e);
    }
  }

  const savedCart = localStorage.getItem('scentia_cart') || localStorage.getItem('dubai_cart');
  if (savedCart) {
    try {
      AppState.cart = JSON.parse(savedCart);
    } catch (e) {
      console.error('Error parsing cart:', e);
    }
  }

  // Actualizar textos dinámicos con la configuración
  updateStoreBranding();
}

function updateStoreBranding() {
  const brandNameEls = document.querySelectorAll('.dynamic-store-name');
  brandNameEls.forEach(el => el.textContent = AppState.config.storeName);

  const brandFullEls = document.querySelectorAll('.dynamic-store-fullname');
  brandFullEls.forEach(el => el.textContent = AppState.config.storeFullName || 'SCENTIA FINE FRAGRANCES');

  const sloganEls = document.querySelectorAll('.dynamic-store-slogan');
  sloganEls.forEach(el => el.textContent = AppState.config.storeSlogan);

  const phoneEls = document.querySelectorAll('.dynamic-whatsapp-display');
  phoneEls.forEach(el => el.textContent = `+${AppState.config.whatsappNumber}`);
}

// Guardar configuración
function saveStoreConfig(newConfig) {
  AppState.config = { ...AppState.config, ...newConfig };
  localStorage.setItem('scentia_store_config', JSON.stringify(AppState.config));
  updateStoreBranding();
  showToast('✅ Configuración de SCENTIA guardada');
}

// ==========================================================================
// RENDERIZADO DE PRODUCTOS
// ==========================================================================
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  filterAndSortProducts();

  if (AppState.filteredProducts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.3rem; margin-bottom: 0.5rem; color: #fff;">No encontramos perfumes con ese criterio.</p>
        <p>Prueba buscando por marca ("Lattafa"), nota ("Vainilla", "Piña") o inspiración ("Sauvage", "Kilian").</p>
        <button onclick="resetFilters()" class="btn-primary-gold" style="margin-top: 1.5rem;">Ver Todos los Perfumes</button>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.filteredProducts.map(p => `
    <article class="product-card" data-id="${p.id}">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <div class="product-img-wrap" onclick="openProductModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='assets/images/perfumes/asad.jpg'">
        <button class="quick-view-overlay-btn" type="button">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Ver Detalles y Notas
        </button>
      </div>
      <div class="product-content">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-name" onclick="openProductModal('${p.id}')">${p.name}</h3>
        <span class="product-subtitle">${p.subtitle}</span>

        ${p.inspiration ? `
          <div class="product-inspiration-tag">
            <span>🎯 Inspirado en:</span> ${p.inspiration}
          </div>
        ` : ''}

        <p class="product-notes-preview">
          <strong>Notas:</strong> ${p.pyramid.top} • ${p.pyramid.base}
        </p>

        <div class="product-price-row">
          <div class="current-price">$ ${formatCOP(p.priceCOP)}</div>
          ${p.originalPriceCOP ? `
            <div class="original-price">$ ${formatCOP(p.originalPriceCOP)}</div>
            <div class="discount-tag">-${Math.round((1 - p.priceCOP / p.originalPriceCOP) * 100)}%</div>
          ` : ''}
        </div>

        <div class="product-actions">
          <button class="btn-whatsapp-buy" onclick="buyViaWhatsAppSingle('${p.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Pedir por WhatsApp
          </button>
          <button class="btn-cart-secondary" onclick="addToCart('${p.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Agregar al Carrito
          </button>
        </div>

        <div class="product-decant-cta">
          <button class="btn-decant-quick" type="button" onclick="orderDecantDirect('${p.id}')" title="Pedir muestra atomizadora de 5ml de este perfume">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0"></path></svg>
            <span>🧪 ¿Probar en piel? <strong>Pedir Decant 5ml ($25.000)</strong></span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Filtros y ordenamiento
function filterAndSortProducts() {
  let list = [...AppState.products];

  // Filtro de categoría / tag / género
  if (AppState.activeFilter !== 'all') {
    if (AppState.activeFilter === 'bestseller') {
      list = list.filter(p => p.tags.includes('bestseller'));
    } else if (AppState.activeFilter === 'mujer') {
      list = list.filter(p => p.gender === 'mujer' || p.tags.includes('mujer'));
    } else if (AppState.activeFilter === 'hombre') {
      list = list.filter(p => p.gender === 'hombre' || p.tags.includes('hombre'));
    } else {
      list = list.filter(p => p.category === AppState.activeFilter || p.tags.includes(AppState.activeFilter));
    }
  }

  // Filtro de búsqueda
  if (AppState.searchQuery.trim() !== '') {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      (p.inspiration && p.inspiration.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q) ||
      p.pyramid.top.toLowerCase().includes(q) ||
      p.pyramid.heart.toLowerCase().includes(q) ||
      p.pyramid.base.toLowerCase().includes(q)
    );
  }

  // Ordenamiento
  if (AppState.sortBy === 'price-asc') {
    list.sort((a, b) => a.priceCOP - b.priceCOP);
  } else if (AppState.sortBy === 'price-desc') {
    list.sort((a, b) => b.priceCOP - a.priceCOP);
  } else if (AppState.sortBy === 'popular') {
    list.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
  }

  AppState.filteredProducts = list;
}

function resetFilters() {
  AppState.activeFilter = 'all';
  AppState.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });

  renderProducts();
}

function setGenderFilter(gender) {
  AppState.activeFilter = gender;
  AppState.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === gender);
  });

  renderProducts();

  const catalogEl = document.getElementById('catalogo');
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================================
// CARRITO DE COMPRAS Y PEDIDO INTERACTIVO
// ==========================================================================
function addToCart(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = AppState.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      priceCOP: product.priceCOP,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`🛒 ${product.name} agregado al pedido`);
}

function updateCartQty(productId, delta) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('scentia_cart', JSON.stringify(AppState.cart));
}

function updateCartUI() {
  // Conteo en Navbar
  const totalItems = AppState.cart.reduce((acc, item) => acc + item.qty, 0);
  const cartBadge = document.getElementById('cart-count-badge');
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  // Lista de items en Drawer
  const itemsContainer = document.getElementById('cart-items-list');
  const emptyState = document.getElementById('cart-empty-state');
  const checkoutSection = document.getElementById('cart-checkout-section');

  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    itemsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (checkoutSection) checkoutSection.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (checkoutSection) checkoutSection.style.display = 'block';

  // Subtotal
  const subtotalCOP = AppState.cart.reduce((acc, item) => acc + (item.priceCOP * item.qty), 0);
  const isFreeShipping = subtotalCOP >= AppState.config.freeShippingThreshold;
  const shippingCOP = isFreeShipping ? 0 : AppState.config.colombiaShippingCost;
  const totalCOP = subtotalCOP + shippingCOP;

  // Render items
  itemsContainer.innerHTML = AppState.cart.map(item => `
    <div class="cart-item-card">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">$ ${formatCOP(item.priceCOP)}</div>
        <div class="cart-item-stepper">
          <button class="stepper-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button class="stepper-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')">Eliminar</button>
        </div>
      </div>
    </div>
  `).join('');

  // Free shipping progress bar
  const progressPercent = Math.min(100, Math.round((subtotalCOP / AppState.config.freeShippingThreshold) * 100));
  const shippingMsgEl = document.getElementById('shipping-status-msg');
  const shippingBarFill = document.getElementById('shipping-bar-fill');

  if (shippingBarFill) {
    shippingBarFill.style.width = `${progressPercent}%`;
  }

  if (shippingMsgEl) {
    if (isFreeShipping) {
      shippingMsgEl.innerHTML = '🎉 <strong>¡Tienes ENVÍO GRATIS a Colombia!</strong>';
      shippingMsgEl.style.color = '#4ade80';
    } else {
      const remaining = AppState.config.freeShippingThreshold - subtotalCOP;
      shippingMsgEl.innerHTML = `Agrega <strong>$ ${formatCOP(remaining)} COP</strong> más para <strong>Envío Gratis</strong>`;
      shippingMsgEl.style.color = '#dfdfe6';
    }
  }

  // Totales
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const shippingEl = document.getElementById('cart-shipping-val');
  const totalEl = document.getElementById('cart-total-val');

  if (subtotalEl) subtotalEl.textContent = `$ ${formatCOP(subtotalCOP)} COP`;
  if (shippingEl) shippingEl.textContent = isFreeShipping ? 'GRATIS' : `$ ${formatCOP(shippingCOP)} COP`;
  if (totalEl) totalEl.textContent = `$ ${formatCOP(totalCOP)} COP`;
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer-backdrop');
  if (drawer) drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer-backdrop');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// GENERACIÓN DE PEDIDO POR WHATSAPP
// ==========================================================================

// Compra directa de un solo perfume (Botón en tarjeta)
function buyViaWhatsAppSingle(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  const msg = [
    `¡Hola *SCENTIA*! 👋 Vengo de la tienda web y quiero pedir este perfume árabe:`,
    ``,
    `💎 *${product.name.toUpperCase()}*`,
    `📌 *Presentación:* ${product.subtitle}`,
    `🎯 *Inspirado en:* ${product.inspiration || 'Aroma Árabe Exclusivo'}`,
    `💰 *Precio:* $${formatCOP(product.priceCOP)} COP`,
    `🛡️ *Garantía:* Incluye Certificado de Autenticidad SCENTIA (Batch Code)`,
    ``,
    `¿Tienen disponibilidad para despacho inmediato a mi ciudad en Colombia? 🇨🇴`
  ].join('\n');

  sendWhatsAppMessage(msg);
}

// Envío del carrito completo por WhatsApp con datos de despacho
function submitCartOrderViaWhatsApp(event) {
  if (event) event.preventDefault();

  if (AppState.cart.length === 0) {
    showToast('⚠️ Tu carrito está vacío');
    return;
  }

  const nameInput = document.getElementById('checkout-customer-name');
  const phoneInput = document.getElementById('checkout-customer-phone');
  const cityInput = document.getElementById('checkout-customer-city');
  const addressInput = document.getElementById('checkout-customer-address');
  const paymentSelect = document.getElementById('checkout-payment-method');
  const notesInput = document.getElementById('checkout-order-notes');

  const customerName = nameInput ? nameInput.value.trim() : '';
  const customerPhone = phoneInput ? phoneInput.value.trim() : '';
  const city = cityInput ? cityInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const paymentMethod = paymentSelect ? paymentSelect.value : 'Pago Contra Entrega';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!customerName || !city || !address) {
    alert('Por favor completa tu Nombre, Ciudad y Dirección para coordinar el envío.');
    return;
  }

  // Cálculos
  const subtotalCOP = AppState.cart.reduce((acc, item) => acc + (item.priceCOP * item.qty), 0);
  const isFreeShipping = subtotalCOP >= AppState.config.freeShippingThreshold;
  const shippingCOP = isFreeShipping ? 0 : AppState.config.colombiaShippingCost;
  const totalCOP = subtotalCOP + shippingCOP;

  // Formato del mensaje
  const lines = [
    `👑 *NUEVO PEDIDO - SCENTIA FINE FRAGRANCES*`,
    `✨ _"Porque en un mundo donde todo es réplica, yo elijo ser original."_`,
    `----------------------------------------`,
    `👤 *Cliente:* ${customerName}`,
    `📱 *WhatsApp:* ${customerPhone || 'El de este chat'}`,
    `📍 *Ciudad / Municipio:* ${city}`,
    `🏠 *Dirección:* ${address}`,
    `💳 *Método de Pago:* ${paymentMethod}`,
    `🛡️ *Garantía:* Con Certificado Físico de Autenticidad (100% Original)`,
    notes ? `📝 *Instrucciones:* ${notes}` : null,
    `----------------------------------------`,
    `📦 *DETALLE DE PRODUCTOS:*`
  ].filter(Boolean);

  AppState.cart.forEach((item, idx) => {
    lines.push(`${idx + 1}. *${item.name}* (x${item.qty}) -> $${formatCOP(item.priceCOP * item.qty)} COP`);
  });

  lines.push(`----------------------------------------`);
  lines.push(`Subtotal: $${formatCOP(subtotalCOP)} COP`);
  lines.push(`Envío a Colombia: ${isFreeShipping ? '¡GRATIS! 🚚' : '$' + formatCOP(shippingCOP) + ' COP'}`);
  lines.push(`💰 *TOTAL A PAGAR: $${formatCOP(totalCOP)} COP*`);
  lines.push(`----------------------------------------`);
  lines.push(`Por favor confírmenme el pedido para coordinar el despacho. ¡Muchas gracias! 🙏`);

  const fullMessage = lines.join('\n');
  sendWhatsAppMessage(fullMessage);
}

// Envío directo a API de WhatsApp
function sendWhatsAppMessage(messageText) {
  const cleanPhone = AppState.config.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(messageText);
  const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMsg}`;
  window.open(url, '_blank');
}

// ==========================================================================
// MODAL DE DETALLE DEL PERFUME (Quick View)
// ==========================================================================
function openProductModal(productId) {
  const p = AppState.products.find(item => item.id === productId);
  if (!p) return;

  AppState.selectedProduct = p;

  const modal = document.getElementById('product-modal-backdrop');
  const modalContent = document.getElementById('modal-dynamic-content');

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-content-grid">
      <div class="modal-img-col">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='assets/images/perfumes/asad.jpg'">
        <div style="margin-top: 1.5rem; text-align: center; width: 100%;">
          <img src="assets/images/certificado-autenticidad.jpg" alt="Certificado de Autenticidad SCENTIA" style="max-height: 80px; width: auto; border-radius: 6px; border: 1px solid var(--border-gold); box-shadow: 0 4px 15px rgba(0,0,0,0.6); margin: 0 auto;">
          <p style="font-size: 0.72rem; color: var(--gold-light); margin-top: 0.45rem; font-weight: 700; letter-spacing: 0.05em;">🛡️ INCLUYE CERTIFICADO DE AUTENTICIDAD SCENTIA</p>
        </div>
      </div>
      <div class="modal-info-col">
        <span class="modal-brand">${p.brand}</span>
        <h2 class="modal-title">${p.name}</h2>
        <div class="modal-subtitle">${p.subtitle}</div>

        ${p.inspiration ? `
          <div class="modal-inspiration-box">
            🎯 <strong>Equivalencia / Inspiración:</strong> ${p.inspiration}
          </div>
        ` : ''}

        <p class="modal-desc">${p.description}</p>

        <div class="modal-pyramid">
          <h5>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 22h20L12 2z"></path></svg>
            Pirámide Olfativa (Notas Oficiales)
          </h5>
          <div class="pyramid-note-row">
            <span class="pyramid-label">🌿 Salida:</span>
            <span class="pyramid-val">${p.pyramid.top}</span>
          </div>
          <div class="pyramid-note-row">
            <span class="pyramid-label">❤️ Corazón:</span>
            <span class="pyramid-val">${p.pyramid.heart}</span>
          </div>
          <div class="pyramid-note-row">
            <span class="pyramid-label">🪵 Fondo:</span>
            <span class="pyramid-val">${p.pyramid.base}</span>
          </div>
        </div>

        <div class="modal-performance-grid">
          <div class="perf-box">
            <div class="perf-box-title">⏱️ Fijación / Duración</div>
            <div class="perf-box-val">${p.performance.longevity}</div>
          </div>
          <div class="perf-box">
            <div class="perf-box-title">💨 Estela / Proyección</div>
            <div class="perf-box-val">${p.performance.sillage}</div>
          </div>
          <div class="perf-box">
            <div class="perf-box-title">🎯 Ocasión Ideal</div>
            <div class="perf-box-val">${p.performance.occasion}</div>
          </div>
          <div class="perf-box">
            <div class="perf-box-title">⛅ Clima / Temporada</div>
            <div class="perf-box-val">${p.performance.season}</div>
          </div>
        </div>

        <div class="product-price-row" style="margin-bottom: 1.5rem;">
          <div class="current-price" style="font-size: 1.8rem;">$ ${formatCOP(p.priceCOP)} COP</div>
          ${p.originalPriceCOP ? `<div class="original-price" style="font-size: 1.1rem;">$ ${formatCOP(p.originalPriceCOP)}</div>` : ''}
        </div>

        <div class="modal-decant-promo">
          <div class="mdp-text">
            <span class="mdp-badge">🧪 DECANT DE 5 ML DISPONIBLE</span>
            <p>¿Quieres probar la fijación y estela en tu piel antes de comprar el frasco grande? Pide una muestra de 5 ml por <strong>$25.000 COP</strong>.</p>
          </div>
          <button class="btn-modal-decant" type="button" onclick="orderDecantDirect('${p.id}')">
            Pedir Decant 5ml
          </button>
        </div>

        <div class="modal-actions">
          <button class="btn-whatsapp-buy" style="flex: 1;" onclick="buyViaWhatsAppSingle('${p.id}')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Pedir por WhatsApp Ahora
          </button>
          <button class="btn-cart-secondary" onclick="addToCart('${p.id}')">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-modal-backdrop');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// CALCULADORA DE ARBITRAJE Y GANANCIAS (Chile 🇨🇱 ➡️ Colombia 🇨🇴)
// ==========================================================================
function initArbitrageCalculator() {
  const selectPerfume = document.getElementById('calc-select-perfume');
  const inputCostCLP = document.getElementById('calc-cost-clp');
  const inputShippingCLP = document.getElementById('calc-shipping-clp');
  const inputRate = document.getElementById('calc-exchange-rate');
  const inputSaleCOP = document.getElementById('calc-sale-cop');
  const inputQuantity = document.getElementById('calc-units-quantity');

  if (!selectPerfume) return;

  // Llenar selector de perfumes con grupos Mujer y Hombre
  const womenOptions = AppState.products.filter(p => p.gender === 'mujer').map(p => `
    <option value="${p.id}">${p.name} (Compra aprox: $${formatCOP(p.costCLP)} CLP)</option>
  `).join('');

  const menOptions = AppState.products.filter(p => p.gender === 'hombre').map(p => `
    <option value="${p.id}">${p.name} (Compra aprox: $${formatCOP(p.costCLP)} CLP)</option>
  `).join('');

  selectPerfume.innerHTML = `
    <option value="custom">-- Seleccionar Perfume o Ingreso Manual --</option>
    <optgroup label="👑 Colección Femenina (Top Mujer)">
      ${womenOptions}
    </optgroup>
    <optgroup label="👔 Colección Masculina (Top Hombre)">
      ${menOptions}
    </optgroup>
  `;

  // Defaults
  if (inputShippingCLP) inputShippingCLP.value = AppState.config.clpShippingPerUnit;
  if (inputRate) inputRate.value = AppState.config.exchangeRateCLPtoCOP;

  // Al cambiar el perfume del selector
  selectPerfume.addEventListener('change', (e) => {
    const pId = e.target.value;
    const p = AppState.products.find(item => item.id === pId);
    if (p) {
      if (inputCostCLP) inputCostCLP.value = p.costCLP;
      if (inputSaleCOP) inputSaleCOP.value = p.priceCOP;
    }
    recalculateArbitrage();
  });

  // Inputs en tiempo real
  [inputCostCLP, inputShippingCLP, inputRate, inputSaleCOP, inputQuantity].forEach(input => {
    if (input) {
      input.addEventListener('input', recalculateArbitrage);
    }
  });

  // Ejecución inicial
  recalculateArbitrage();
}

function recalculateArbitrage() {
  const inputCostCLP = document.getElementById('calc-cost-clp');
  const inputShippingCLP = document.getElementById('calc-shipping-clp');
  const inputRate = document.getElementById('calc-exchange-rate');
  const inputSaleCOP = document.getElementById('calc-sale-cop');
  const inputQuantity = document.getElementById('calc-units-quantity');

  const costCLP = parseFloat(inputCostCLP?.value) || 22000;
  const shippingCLP = parseFloat(inputShippingCLP?.value) || 4500;
  const rate = parseFloat(inputRate?.value) || 4.15; // 1 CLP = ~4.15 COP
  const saleCOP = parseFloat(inputSaleCOP?.value) || 195000;
  const units = parseInt(inputQuantity?.value) || 10;

  // Costo total por frasco puesto en Colombia en COP
  const totalCostCLP = costCLP + shippingCLP;
  const totalCostCOP = totalCostCLP * rate;

  // Ganancia neta por unidad
  const netProfitUnitCOP = saleCOP - totalCostCOP;
  const marginPercent = saleCOP > 0 ? (netProfitUnitCOP / saleCOP) * 100 : 0;
  const totalBatchProfitCOP = netProfitUnitCOP * units;

  // Actualizar DOM
  const resCostCOP = document.getElementById('calc-res-cost-cop');
  const resProfitUnit = document.getElementById('calc-res-profit-unit');
  const resMargin = document.getElementById('calc-res-margin');
  const resBatchProfit = document.getElementById('calc-res-batch-profit');
  const resBatchUnitsLabel = document.getElementById('calc-res-batch-units-label');

  if (resCostCOP) resCostCOP.textContent = `$ ${formatCOP(Math.round(totalCostCOP))} COP`;
  if (resProfitUnit) resProfitUnit.textContent = `$ ${formatCOP(Math.round(netProfitUnitCOP))} COP`;
  if (resMargin) resMargin.textContent = `${marginPercent.toFixed(1)}%`;
  if (resBatchProfit) resBatchProfit.textContent = `$ ${formatCOP(Math.round(totalBatchProfitCOP))} COP`;
  if (resBatchUnitsLabel) resBatchUnitsLabel.textContent = `(${units} frascos)`;
}

// ==========================================================================
// EVENT LISTENERS GENERALES
// ==========================================================================
function initEventListeners() {
  // Filtros por Pills
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  // Búsqueda en vivo
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Ordenamiento
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Acordeón FAQ
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // Guardar configuración del negocio
  const saveConfigBtn = document.getElementById('save-store-settings-btn');
  if (saveConfigBtn) {
    saveConfigBtn.addEventListener('click', () => {
      const phoneInput = document.getElementById('config-whatsapp-number');
      const storeNameInput = document.getElementById('config-store-name');

      const newSettings = {};
      if (phoneInput && phoneInput.value.trim()) {
        newSettings.whatsappNumber = phoneInput.value.trim().replace(/[^0-9]/g, '');
      }
      if (storeNameInput && storeNameInput.value.trim()) {
        newSettings.storeName = storeNameInput.value.trim();
      }

      saveStoreConfig(newSettings);
    });
  }

  // Cerrar modales con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
    }
  });
}

// Helpers
function formatCOP(amount) {
  if (isNaN(amount)) return '0';
  return new Intl.NumberFormat('es-CO').format(amount);
}

function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// SECCIÓN DE ENCARGOS ESPECIALES & DECANTS DE 5 ML
// ==========================================================================

function initCustomRequestsSection() {
  populateDecantsDropdown();
}

// Llenar el selector de perfumes en el tab de Decants
function populateDecantsDropdown() {
  const select = document.getElementById('decant-perfume-select');
  if (!select) return;

  const womenProds = AppState.products.filter(p => p.gender === 'mujer');
  const menProds = AppState.products.filter(p => p.gender === 'hombre');

  let html = `<option value="" disabled selected>-- Elige una fragancia del catálogo --</option>`;

  html += `<optgroup label="👑 Perfumes de Mujer (Colección Femenina)">`;
  womenProds.forEach(p => {
    html += `<option value="${p.name}">🌸 ${p.name} - ${p.inspiration || 'Original'}</option>`;
  });
  html += `</optgroup>`;

  html += `<optgroup label="👔 Perfumes de Hombre (Colección Masculina)">`;
  menProds.forEach(p => {
    html += `<option value="${p.name}">🎩 ${p.name} - ${p.inspiration || 'Original'}</option>`;
  });
  html += `</optgroup>`;

  html += `<optgroup label="⭐ Perfumes No Listados">`;
  html += `<option value="custom">⭐ Quiero un perfume que NO está en la página...</option>`;
  html += `</optgroup>`;

  select.innerHTML = html;
}

// Alternar entre pestañas (Encargo Especial vs Decants)
function switchCustomRequestTab(tabName) {
  const btnEncargo = document.getElementById('tab-btn-encargo');
  const btnDecants = document.getElementById('tab-btn-decants');
  const panelEncargo = document.getElementById('panel-encargo');
  const panelDecants = document.getElementById('panel-decants');

  if (tabName === 'encargo') {
    if (btnEncargo) btnEncargo.classList.add('active');
    if (btnDecants) btnDecants.classList.remove('active');
    if (panelEncargo) panelEncargo.classList.add('active');
    if (panelDecants) panelDecants.classList.remove('active');
  } else {
    if (btnEncargo) btnEncargo.classList.remove('active');
    if (btnDecants) btnDecants.classList.add('active');
    if (panelEncargo) panelEncargo.classList.remove('active');
    if (panelDecants) panelDecants.classList.add('active');
  }
}

// Seleccionar promoción de Decants desde las tarjetas de precio
function selectDecantPack(packValue) {
  const packSelect = document.getElementById('decant-pack-choice');
  if (packSelect) {
    packSelect.value = packValue;
    updateDecantFormInputs();
  }

  // Destacar visualmente la tarjeta seleccionada
  document.querySelectorAll('.decant-price-card').forEach(card => {
    const amountText = card.querySelector('.dpc-amount')?.textContent || '';
    if (packValue.includes(amountText.trim())) {
      card.style.borderColor = 'var(--gold-primary)';
      card.style.boxShadow = '0 0 20px rgba(210,171,103,0.3)';
    } else {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    }
  });

  showToast(`🧪 Seleccionaste: ${packValue.split('-')[0].trim()}`);
}

function updateDecantFormInputs() {
  const packSelect = document.getElementById('decant-pack-choice');
  const packNotesWrap = document.getElementById('decant-pack-notes-wrap');
  if (!packSelect || !packNotesWrap) return;

  const isMultiPack = packSelect.value.includes('Pack');
  packNotesWrap.style.display = isMultiPack ? 'block' : 'none';
}

function handleDecantSelectChange() {
  const select = document.getElementById('decant-perfume-select');
  const customWrap = document.getElementById('decant-custom-name-wrap');
  const customInput = document.getElementById('decant-custom-name');

  if (!select || !customWrap) return;

  if (select.value === 'custom') {
    customWrap.style.display = 'block';
    if (customInput) {
      customInput.required = true;
      customInput.focus();
    }
  } else {
    customWrap.style.display = 'none';
    if (customInput) customInput.required = false;
  }
}

// 1. Envío de Formulario: Encargo de Perfume No Listado a WhatsApp
function submitCustomPerfumeRequest(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('custom-perfume-name');
  const brandInput = document.getElementById('custom-perfume-brand');
  const genderSelect = document.getElementById('custom-perfume-gender');
  const sizeSelect = document.getElementById('custom-perfume-size');
  const customerNameInput = document.getElementById('custom-customer-name');
  const customerCityInput = document.getElementById('custom-customer-city');
  const customerPhoneInput = document.getElementById('custom-customer-phone');
  const notesInput = document.getElementById('custom-perfume-notes');

  const perfumeName = nameInput ? nameInput.value.trim() : '';
  const brand = brandInput ? brandInput.value.trim() : '';
  const gender = genderSelect ? genderSelect.value : 'No especificado';
  const size = sizeSelect ? sizeSelect.value : '100 ML';
  const customerName = customerNameInput ? customerNameInput.value.trim() : '';
  const city = customerCityInput ? customerCityInput.value.trim() : '';
  const phone = customerPhoneInput ? customerPhoneInput.value.trim() : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!perfumeName || !customerName || !city) {
    alert('Por favor indica el nombre del perfume, tu nombre y tu ciudad.');
    return;
  }

  const lines = [
    `👑 *COTIZACIÓN DE PERFUME A PEDIDO - SCENTIA*`,
    `✨ _"Porque en un mundo donde todo es réplica, yo elijo ser original."_`,
    `----------------------------------------`,
    `💎 *Perfume Solicitado:* ${perfumeName.toUpperCase()}`,
    `🏷️ *Casa / Marca:* ${brand || 'Árabe / No especificada'}`,
    `👔 *Colección / Género:* ${gender}`,
    `📦 *Presentación buscada:* ${size}`,
    `----------------------------------------`,
    `👤 *Cliente:* ${customerName}`,
    `📍 *Ciudad de Entrega:* ${city}`,
    phone ? `📱 *Teléfono de Contacto:* ${phone}` : null,
    notes ? `📝 *Detalles o Dudas:* ${notes}` : null,
    `----------------------------------------`,
    `¿Me podrían confirmar si lo pueden importar para mí y cuál sería el precio total puesto en Colombia? 🇨🇴 Muchas gracias. 🙏`
  ].filter(Boolean);

  sendWhatsAppMessage(lines.join('\n'));
}

// 2. Envío de Formulario: Solicitud de Decants de 5 ML a WhatsApp
function submitDecantRequest(event) {
  if (event) event.preventDefault();

  const packSelect = document.getElementById('decant-pack-choice');
  const perfumeSelect = document.getElementById('decant-perfume-select');
  const customNameInput = document.getElementById('decant-custom-name');
  const packListInput = document.getElementById('decant-pack-perfumes-list');
  const customerNameInput = document.getElementById('decant-customer-name');
  const customerCityInput = document.getElementById('decant-customer-city');

  const packChoice = packSelect ? packSelect.value : '1 Decant 5ml';
  let primaryPerfume = perfumeSelect ? perfumeSelect.value : '';
  if (primaryPerfume === 'custom') {
    primaryPerfume = customNameInput ? customNameInput.value.trim() : 'Perfume especial a consultar';
  }

  const extraPerfumes = packListInput ? packListInput.value.trim() : '';
  const customerName = customerNameInput ? customerNameInput.value.trim() : '';
  const city = customerCityInput ? customerCityInput.value.trim() : '';

  if (!primaryPerfume || !customerName || !city) {
    alert('Por favor selecciona o escribe el perfume en decant, tu nombre y tu ciudad.');
    return;
  }

  const lines = [
    `🧪 *SOLICITUD DE DECANTS 5ML - SCENTIA FINE FRAGRANCES*`,
    `✨ _"Porque en un mundo donde todo es réplica, yo elijo ser original."_`,
    `----------------------------------------`,
    `📦 *Formato / Promoción:* ${packChoice}`,
    `💎 *Perfume Principal:* ${primaryPerfume}`,
    extraPerfumes ? `✨ *Otros Perfumes en el Pack:* ${extraPerfumes}` : null,
    `🛡️ *Garantía:* Atomizador de vidrio de 5 ML (~75-80 sprays), 100% puro extraído del frasco original.`,
    `----------------------------------------`,
    `👤 *Cliente:* ${customerName}`,
    `📍 *Ciudad de Entrega:* ${city}`,
    `----------------------------------------`,
    `¿Tienen disponibilidad de estos decants para despacho inmediato a mi ciudad en Colombia? 🇨🇴 Muchas gracias. 🙏`
  ].filter(Boolean);

  sendWhatsAppMessage(lines.join('\n'));
}

// 3. Acción directa: Pedir Decant de 5ml de un perfume específico desde su tarjeta o modal
function orderDecantDirect(productId) {
  const p = AppState.products.find(item => item.id === productId);
  if (!p) return;

  const lines = [
    `🧪 *PEDIDO DE DECANT 5ML - SCENTIA FINE FRAGRANCES*`,
    `✨ _"Porque en un mundo donde todo es réplica, yo elijo ser original."_`,
    `----------------------------------------`,
    `¡Hola *SCENTIA*! Deseo probar este perfume en muestra atomizadora de 5 ML antes de comprar la botella grande:`,
    ``,
    `💎 *Perfume:* ${p.name.toUpperCase()} (${p.gender === 'mujer' ? 'Dama' : 'Caballero'})`,
    `🎯 *Inspirado en:* ${p.inspiration || 'Aroma Árabe Exclusivo'}`,
    `💰 *Valor Decant de 5 ML:* $25.000 COP`,
    `🛡️ *Garantía:* 100% Original extraído con jeringa hermética (75 a 80 sprays)`,
    `----------------------------------------`,
    `¿Tienen decants listos para despacho inmediato en Colombia? 🇨🇴`
  ];

  sendWhatsAppMessage(lines.join('\n'));
}
