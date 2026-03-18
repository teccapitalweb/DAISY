const productos = [
  { id:1,  n:"Vestido Midi de Lino",        c:"vestidos", p:1299, tag:"Nuevo",    sub:"Mezcla de lino · Cinturón ajustable",   img:"assets/img/Vestido midi de lino con cinturón.webp", d:"Vestido de corte midi confeccionado en mezcla de lino con cinturón ajustable en la cintura. Ideal para ocasiones elegantes o salidas durante el día." },
  { id:2,  n:"Vestido Midi Fluido",          c:"vestidos", p:999,  tag:"",         sub:"Tela ligera · Caída suave",              img:"assets/img/Vestido midi fluido.jpg",                d:"Vestido de corte midi con tela ligera y caída suave, perfecto para un look elegante y cómodo para el día o la oficina." },
  { id:3,  n:"Vestido Midi con Lazadas",     c:"vestidos", p:1099, tag:"",         sub:"Lazadas decorativas · Femenino",         img:"assets/img/Vestido midi con lazadas.jpg",           d:"Vestido midi con detalle de lazadas decorativas. Estilo moderno y femenino para ocasiones especiales." },
  { id:4,  n:"Vestido Halter Elegante",      c:"vestidos", p:1399, tag:"Destacado",sub:"Escote halter · Eventos",                img:"assets/img/Vestido halter fluido.jpg",              d:"Vestido midi con escote halter, diseño elegante ideal para fiestas o eventos." },
  { id:5,  n:"Camisa Oversize Algodón",      c:"tops",     p:549,  tag:"Nuevo",    sub:"100% Algodón · Corte oversize",         img:"assets/img/Camisa oversize de algodón.webp",        d:"Camisa de corte oversize con cuello clásico y botones frontales, ideal para un estilo casual y cómodo." },
  { id:6,  n:"Camisa Cropped de Lino",       c:"tops",     p:699,  tag:"",         sub:"Mezcla de lino · Cropped",              img:"assets/img/Camisa cropped de lino.jpg",             d:"Camisa corta en mezcla de lino ligera, perfecta para looks frescos de verano." },
  { id:7,  n:"Blusa Satinada",               c:"tops",     p:849,  tag:"Destacado",sub:"Efecto satinado · Elegante",            img:"assets/img/Blusa satinada.jpg",                     d:"Blusa de efecto satinado con caída elegante, ideal para outfits formales o salidas nocturnas." },
  { id:8,  n:"Top Floral Tejido",            c:"tops",     p:599,  tag:"",         sub:"Estampado floral · Ligero",             img:"assets/img/Top floral tejido.jpg",                  d:"Top con estampado floral y diseño ligero, perfecto para looks casuales de primavera." },
  { id:9,  n:"Blazer Doble Botonadura",      c:"blazers",  p:1199, tag:"Nuevo",    sub:"Doble botonadura · Formal",             img:"assets/img/Blazer doble botonadura.jpg",            d:"Blazer estructurado de doble botonadura. Pieza esencial para looks de oficina o eventos formales." },
  { id:10, n:"Blazer Entallado",             c:"blazers",  p:1099, tag:"",         sub:"Corte entallado · Sofisticado",         img:"assets/img/Blazer entallado.webp",                  d:"Blazer de corte entallado que resalta la figura, ideal para outfits sofisticados." },
  { id:11, n:"Blazer Estructurado Azul",     c:"blazers",  p:1299, tag:"Color",    sub:"Tono azul · Botones dorados",           img:"assets/img/Blazer estructurado azul.jpg",           d:"Blazer en tono azul con estructura marcada y botones dorados. Elegancia y color." },
  { id:12, n:"Blazer Oversize",              c:"blazers",  p:999,  tag:"",         sub:"Corte oversize · Relajado",             img:"assets/img/Blazer oversize.webp",                   d:"Blazer de corte oversize con caída relajada, ideal para looks casuales sofisticados." },
  { id:13, n:"Jeans Skinny Tiro Alto",       c:"jeans",    p:899,  tag:"Nuevo",    sub:"Tiro alto · Denim premium",             img:"assets/img/Jeans skinny de tiro alto.jpg",          d:"Jeans skinny de tiro alto que estilizan la figura, en denim de alta calidad." },
  { id:14, n:"Jeans Straight Leg",           c:"jeans",    p:849,  tag:"",         sub:"Corte recto · Versátil",               img:"assets/img/Jeans straight leg.webp",                d:"Jeans de corte recto clásico, versátiles para cualquier ocasión casual o semi-formal." },
  { id:15, n:"Pantalón Plisado",             c:"jeans",    p:799,  tag:"",         sub:"Plisado · Semi-formal",                img:"assets/img/Pantalón plisado.webp",                  d:"Pantalón de corte plisado con caída elegante, ideal para la oficina o eventos." },
  { id:16, n:"Pantalón Wide Leg",            c:"jeans",    p:949,  tag:"Tendencia",sub:"Pierna ancha · Casual-chic",           img:"assets/img/Pantalón wide leg.jpg",                  d:"Pantalón de pierna ancha con corte moderno y cómodo, look casual-chic." },
  { id:17, n:"Bomber",                       c:"abrigos",  p:499,  tag:"",         sub:"Cierre frontal · Casual",              img:"assets/img/Bomber.webp",                            d:"Chaqueta bomber de corte moderno con cierre frontal y puños elásticos." },
  { id:18, n:"Chaqueta Acolchada",           c:"abrigos",  p:1099, tag:"Nuevo",    sub:"Con capucha · Climas fríos",           img:"assets/img/Chaqueta acolchada con capucha.webp",    d:"Chaqueta acolchada con capucha, perfecta para climas fríos y uso diario." },
  { id:19, n:"Trench Coat con Cinturón",     c:"abrigos",  p:1599, tag:"Clásico",  sub:"Gabardina · Cinturón ajustable",       img:"assets/img/Trench coat con cinturón.webp",          d:"Abrigo tipo gabardina con cinturón ajustable, ideal para looks formales o de oficina." },
  { id:20, n:"Abrigo Borreguillo",           c:"abrigos",  p:2199, tag:"Premium",  sub:"Textura borrego · Calidez",            img:"assets/img/Abrigo borreguillo.webp",                d:"Abrigo con textura tipo borrego, calidez y estilo para temporada de invierno." }
];

const contacto = {
  whatsapp: "522381479365",
  facebook: "https://www.facebook.com/profile.php?id=61575818279014",
  instagram: "https://www.instagram.com/odonteckconsulting/",
  email: "odontckconsul@gmail.com"
};


const paymentConfig = {
  stripe: {
    label: "Pagar con Stripe",
    note: "Se abrirá tu checkout de Stripe cuando conectes tu enlace o integración.",
    url: ""
  },
  paypal: {
    label: "Pagar con PayPal",
    note: "Puedes conectar aquí tu link o botón oficial de PayPal.",
    url: ""
  },
  mercadopago: {
    label: "Pagar con Mercado Pago",
    note: "Mercado Pago es una gran opción si venderás principalmente en México.",
    url: ""
  }
};
