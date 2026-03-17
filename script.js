// ── CART STATE ──
var cart = [];

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', function () {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── RENDER PRODUCTS ──
function renderProducts(lista) {
  var grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  lista.forEach(function (p) {
    var tagHtml = p.tag
      ? '<span class="product-tag' + (p.tag === 'Nuevo' ? ' nuevo' : '') + '">' + p.tag + '</span>'
      : '';
    var precioFmt = '$' + p.precio.toLocaleString('es-MX') + ' MXN';
    var card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.cat = p.categoria;
    card.innerHTML =
      '<div class="product-img-wrap">' +
        tagHtml +
        '<button class="product-wish" onclick="toggleWish(event,this)" title="Guardar">&#9825;</button>' +
        '<img src="' + p.imagen + '" alt="' + p.nombre + '" loading="lazy">' +
      '</div>' +
      '<div class="product-info">' +
        '<p class="product-name">' + p.nombre + '</p>' +
        '<p class="product-desc-short">' + p.descripcion.substring(0, 55) + '...</p>' +
        '<p class="product-price">' + precioFmt + '</p>' +
        '<div class="product-actions">' +
          '<button class="pa-btn" onclick="event.stopPropagation();openModal(' + p.id + ')">Ver tallas</button>' +
          '<button class="pa-btn primary" onclick="event.stopPropagation();addCart(' + p.id + ')">Agregar</button>' +
        '</div>' +
      '</div>';
    card.onclick = function () { openModal(p.id); };
    grid.appendChild(card);
  });
}

// ── FILTER BY CATEGORY ──
function filterProducts(cat) {
  var lista = cat === 'all' ? productos : productos.filter(function (p) { return p.categoria === cat; });
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

// ── SEARCH ──
function toggleSearch() {
  var sb = document.getElementById('search-bar');
  sb.classList.toggle('open');
  if (sb.classList.contains('open')) document.getElementById('search-input').focus();
}

function searchProducts(q) {
  q = q.toLowerCase().trim();
  if (!q) { renderProducts(productos); return; }
  var res = productos.filter(function (p) {
    return p.nombre.toLowerCase().includes(q) || p.descripcion.toLowerCase().includes(q) || p.categoria.toLowerCase().includes(q);
  });
  renderProducts(res);
}

// ── WISHLIST ──
function toggleWish(e, btn) {
  e.stopPropagation();
  btn.classList.toggle('on');
  btn.innerHTML = btn.classList.contains('on') ? '&#9829;' : '&#9825;';
}

// ── MODAL ──
function openModal(id) {
  var p = productos.find(function (x) { return x.id === id; });
  if (!p) return;
  var precioFmt = '$' + p.precio.toLocaleString('es-MX') + ' MXN';
  document.getElementById('modal-cat').textContent = p.categoria.charAt(0).toUpperCase() + p.categoria.slice(1);
  document.getElementById('modal-name').textContent = p.nombre;
  document.getElementById('modal-desc').textContent = p.descripcion;
  document.getElementById('modal-img').src = p.imagen;
  document.getElementById('modal-price').textContent = precioFmt;
  var msg = 'Hola BB! Me interesa: ' + p.nombre + ' (' + precioFmt + '). ¿Tienen disponibilidad?';
  document.getElementById('modal-wh-btn').onclick = function () {
    window.open('https://wa.me/' + contacto.whatsapp.replace('+','') + '?text=' + encodeURIComponent(msg), '_blank');
  };
  // Reset sizes
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

function selectSize(btn) {
  btn.closest('.modal-sizes').querySelectorAll('.size-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
}

document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

// ── CART ──
function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('open');
}

function addCart(id) {
  var p = productos.find(function (x) { return x.id === id; });
  if (!p) return;
  cart.push({ id: p.id, nombre: p.nombre, imagen: p.imagen, precio: p.precio });
  renderCart();
  document.getElementById('cart-drawer').classList.add('open');
}

function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

function renderCart() {
  var el = document.getElementById('cart-items');
  var footer = document.getElementById('cart-footer');
  document.getElementById('cart-badge').textContent = cart.length;
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty"><p>Tu bolsa está vacía</p></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  var total = 0;
  var html = '';
  cart.forEach(function (item, i) {
    total += item.precio;
    var pFmt = '$' + item.precio.toLocaleString('es-MX') + ' MXN';
    html +=
      '<div class="cart-item">' +
        '<img src="' + item.imagen + '" alt="' + item.nombre + '">' +
        '<div>' +
          '<p class="ci-name">' + item.nombre + '</p>' +
          '<p class="ci-price">' + pFmt + '</p>' +
          '<p class="ci-details">Talla M</p>' +
        '</div>' +
        '<button class="ci-remove" onclick="removeFromCart(' + i + ')">&#x2715;</button>' +
      '</div>';
  });
  el.innerHTML = html;
  document.getElementById('cart-total-val').textContent = '$' + total.toLocaleString('es-MX') + ' MXN';
  var msg = 'Hola BB! Me gustaría ordenar:\n';
  cart.forEach(function (item) {
    msg += '• ' + item.nombre + ' - $' + item.precio.toLocaleString('es-MX') + ' MXN\n';
  });
  msg += 'Total: $' + total.toLocaleString('es-MX') + ' MXN';
  document.getElementById('cart-wh-btn').onclick = function () {
    window.open('https://wa.me/' + contacto.whatsapp.replace('+','') + '?text=' + encodeURIComponent(msg), '_blank');
  };
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', function () {
  renderProducts(productos);
});
