var cart = [];
var selectedPayMethod = "stripe";

window.addEventListener('scroll', function () {
  var n = document.getElementById('navbar');
  n.style.background = window.scrollY > 10
    ? 'rgba(255,255,255,.95)'
    : 'rgba(255,255,255,.88)';
});

function money(v) {
  return '$' + Number(v || 0).toLocaleString('es-MX') + ' MXN';
}

function goCol() {
  document.getElementById('coleccion').scrollIntoView({ behavior: 'smooth' });
}

function renderProducts(lista) {
  var g = document.getElementById('product-grid');
  var count = document.getElementById('prod-count');
  if (count) count.textContent = lista.length + ' productos';
  g.innerHTML = '';
  if (!lista.length) {
    g.innerHTML = '<div style="grid-column:1/-1;padding:80px;text-align:center;color:#6E6E73;font-size:19px;font-weight:300;font-family:var(--fb);">No se encontraron productos.</div>';
    return;
  }
  lista.forEach(function (p) {
    var tagClass = 'nuevo';
    if (p.tag === 'Tendencia') tagClass = 'tendencia';
    else if (p.tag === 'Premium' || p.tag === 'Clásico') tagClass = 'premium';
    else if (p.tag === 'Destacado' || p.tag === 'Color') tagClass = 'destacado';
    var tag = p.tag ? '<span class="product-tag ' + tagClass + '">' + p.tag + '</span>' : '';
    var card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML =
      '<div class="product-img-wrap">' +
        tag +
        '<button class="product-wish" onclick="toggleWish(event,this)">&#9825;</button>' +
        '<img src="' + p.img + '" alt="' + p.n + '" loading="lazy">' +
        '<button class="product-quick" onclick="event.stopPropagation();addCart(' + p.id + ')">Agregar a la bolsa</button>' +
      '</div>' +
      '<div class="product-info">' +
        '<p class="product-sub">' + p.sub + '</p>' +
        '<p class="product-name">' + p.n + '</p>' +
        '<p class="product-desc-s">' + p.d.substring(0, 58) + '...</p>' +
        '<div class="product-footer">' +
          '<p class="product-price">' + money(p.p) + '</p>' +
          '<button class="pa-more" onclick="event.stopPropagation();openModal(' + p.id + ')">Ver más</button>' +
        '</div>' +
      '</div>';
    card.onclick = function () { openModal(p.id); };
    g.appendChild(card);
  });
}

function filterProducts(cat) {
  var lista = cat === 'all' ? productos : productos.filter(function (p) { return p.c === cat; });
  renderProducts(lista);
}
function setCatActive(el) {
  document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
  el.classList.add('active');
}
function setNavActive(el) {
  document.querySelectorAll('.nav-links a').forEach(function (a) { a.classList.remove('active'); });
  el.classList.add('active');
}

function toggleSearch() {
  var sb = document.getElementById('search-bar');
  sb.classList.toggle('open');
  if (sb.classList.contains('open')) {
    document.getElementById('search-input').focus();
  } else {
    document.getElementById('search-input').value = '';
    renderProducts(productos);
  }
}
function searchProds(q) {
  q = q.toLowerCase().trim();
  if (!q) { renderProducts(productos); return; }
  renderProducts(productos.filter(function (p) {
    return p.n.toLowerCase().includes(q) ||
           p.c.toLowerCase().includes(q) ||
           p.d.toLowerCase().includes(q);
  }));
}

function toggleWish(e, btn) {
  e.stopPropagation();
  btn.classList.toggle('on');
  btn.innerHTML = btn.classList.contains('on') ? '&#9829;' : '&#9825;';
}

function openModal(id) {
  var p = productos.find(function (x) { return x.id === id; });
  if (!p) return;
  document.getElementById('modal-cat').textContent = p.c.charAt(0).toUpperCase() + p.c.slice(1);
  document.getElementById('modal-name').textContent = p.n;
  document.getElementById('modal-desc').textContent = p.d;
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-price').textContent = money(p.p);
  var msg = 'Hola BB! Me interesa: ' + p.n + ' (' + money(p.p) + '). ¿Disponibilidad?';
  document.getElementById('modal-wh-btn').onclick = function () {
    window.open('https://wa.me/' + contacto.whatsapp + '?text=' + encodeURIComponent(msg), '_blank');
  };
  document.getElementById('modal-add-btn').onclick = function () {
    addCart(p.id);
    closeModal();
  };
  document.querySelectorAll('.size-btn').forEach(function (b, i) { b.classList.toggle('active', i === 2); });
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}
function selSize(btn) {
  btn.closest('.modal-sizes').querySelectorAll('.size-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
}

function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('open');
}

function addCart(id) {
  var p = productos.find(function (x) { return x.id === id; });
  if (!p) return;
  cart.push({ id: p.id, n: p.n, img: p.img, p: p.p });
  renderCart();
  document.getElementById('cart-drawer').classList.add('open');
}

function removeFromCart(i) { cart.splice(i, 1); renderCart(); }

function cartTotals() {
  var subtotal = cart.reduce(function (sum, item) { return sum + item.p; }, 0);
  var shipping = subtotal >= 1500 || subtotal === 0 ? 0 : 149;
  return { subtotal: subtotal, shipping: shipping, total: subtotal + shipping };
}

function renderCart() {
  var el = document.getElementById('cart-items');
  var footer = document.getElementById('cart-footer');
  document.getElementById('cart-badge').textContent = cart.length;
  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty"><p>Tu bolsa está vacía</p><small>Agrega prendas para comenzar</small></div>';
    footer.style.display = 'none';
    renderCheckoutSummary();
    return;
  }
  footer.style.display = 'block';
  var totals = cartTotals();
  var html = '';
  cart.forEach(function (item, i) {
    html +=
      '<div class="cart-item">' +
        '<img src="' + item.img + '" alt="' + item.n + '">' +
        '<div><p class="ci-name">' + item.n + '</p><p class="ci-price">' + money(item.p) + '</p><p class="ci-details">Talla M</p></div>' +
        '<button class="ci-remove" onclick="removeFromCart(' + i + ')">&#x2715;</button>' +
      '</div>';
  });
  el.innerHTML = html;
  document.getElementById('cart-total-val').textContent = money(totals.total);
  document.getElementById('cart-wh-btn').onclick = function () {
    sendCheckoutByWhatsApp();
  };
  renderCheckoutSummary();
}

function openCheckout() {
  if (!cart.length) {
    alert('Agrega al menos un producto a la bolsa para continuar.');
    return;
  }
  renderCheckoutSummary();
  document.getElementById('checkout-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout(e) {
  if (!e || e.target === document.getElementById('checkout-overlay')) {
    document.getElementById('checkout-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderCheckoutSummary() {
  var wrap = document.getElementById('checkout-items');
  if (!wrap) return;
  var totals = cartTotals();
  document.getElementById('checkout-item-count').textContent = cart.length + (cart.length === 1 ? ' artículo' : ' artículos');
  if (!cart.length) {
    wrap.innerHTML = '<div class="checkout-empty">Tu carrito está vacío.</div>';
  } else {
    wrap.innerHTML = cart.map(function(item){
      return '<div class="checkout-item-row"><img src="' + item.img + '" alt="' + item.n + '"><div><p>' + item.n + '</p><small>Talla M</small></div><strong>' + money(item.p) + '</strong></div>';
    }).join('');
  }
  document.getElementById('checkout-subtotal').textContent = money(totals.subtotal);
  document.getElementById('checkout-shipping').textContent = totals.shipping ? money(totals.shipping) : 'Gratis';
  document.getElementById('checkout-total').textContent = money(totals.total);
  updateMethodUI();
}

function selectPayMethod(method, el) {
  selectedPayMethod = method;
  document.querySelectorAll('.method-card').forEach(function(card){ card.classList.remove('active'); });
  if (el) el.classList.add('active');
  updateMethodUI();
}

function updateMethodUI() {
  var btn = document.getElementById('checkout-pay-btn');
  var note = document.getElementById('checkout-method-note');
  if (!btn || !note) return;

  if (selectedPayMethod === 'whatsapp') {
    btn.textContent = 'Confirmar por WhatsApp';
    note.textContent = 'Este método envía el pedido por WhatsApp para confirmar stock, envío y pago manual.';
    return;
  }

  var cfg = paymentConfig && paymentConfig[selectedPayMethod] ? paymentConfig[selectedPayMethod] : null;
  btn.textContent = cfg ? cfg.label : 'Pagar ahora';
  note.textContent = cfg ? cfg.note : 'Conecta aquí tu método de pago.';
}

function buildOrderMessage() {
  var totals = cartTotals();
  var name = (document.getElementById('co-name') || {}).value || '';
  var email = (document.getElementById('co-email') || {}).value || '';
  var phone = (document.getElementById('co-phone') || {}).value || '';
  var address = (document.getElementById('co-address') || {}).value || '';
  var city = (document.getElementById('co-city') || {}).value || '';
  var state = (document.getElementById('co-state') || {}).value || '';

  var msg = 'Hola BB! Quiero finalizar mi compra.%0A%0A';
  if (name || email || phone) {
    msg += 'Cliente:%0A';
    if (name) msg += '• Nombre: ' + encodeURIComponent(name) + '%0A';
    if (email) msg += '• Correo: ' + encodeURIComponent(email) + '%0A';
    if (phone) msg += '• Teléfono: ' + encodeURIComponent(phone) + '%0A';
    if (address || city || state) msg += '• Envío: ' + encodeURIComponent([address, city, state].filter(Boolean).join(', ')) + '%0A';
    msg += '%0A';
  }
  msg += 'Pedido:%0A';
  cart.forEach(function(item){
    msg += '• ' + encodeURIComponent(item.n + ' - ' + money(item.p)) + '%0A';
  });
  msg += '%0ASubtotal: ' + encodeURIComponent(money(totals.subtotal)) + '%0A';
  msg += 'Envío: ' + encodeURIComponent(totals.shipping ? money(totals.shipping) : 'Gratis') + '%0A';
  msg += 'Total: ' + encodeURIComponent(money(totals.total)) + '%0A';
  return msg;
}

function sendCheckoutByWhatsApp() {
  if (!cart.length) {
    alert('Tu bolsa está vacía.');
    return;
  }
  window.open('https://wa.me/' + contacto.whatsapp + '?text=' + buildOrderMessage(), '_blank');
}

function proceedPayment() {
  if (!cart.length) {
    alert('Tu bolsa está vacía.');
    return;
  }
  if (selectedPayMethod === 'whatsapp') {
    sendCheckoutByWhatsApp();
    return;
  }
  var cfg = paymentConfig && paymentConfig[selectedPayMethod] ? paymentConfig[selectedPayMethod] : null;
  if (cfg && cfg.url) {
    window.open(cfg.url, '_blank');
    return;
  }
  alert('La interfaz ya quedó lista. Solo falta conectar tu enlace real de ' + (selectedPayMethod === 'mercadopago' ? 'Mercado Pago' : selectedPayMethod === 'paypal' ? 'PayPal' : 'Stripe') + ' en data.js para cobrar en vivo.');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
    closeCheckout();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  renderProducts(productos);
  renderCart();
  renderCheckoutSummary();
  var firstMethod = document.querySelector('.method-card[data-method="stripe"]');
  if (firstMethod) firstMethod.classList.add('active');
});
