const productos = [
  // VESTIDOS
  {
    id: 1,
    nombre: "Vestido Midi de Lino con Cinturón",
    categoria: "vestidos",
    precio: 1299,
    descripcion: "Vestido de corte midi confeccionado en mezcla de lino con cinturón ajustable en la cintura. Ideal para ocasiones elegantes o salidas durante el día.",
    imagen: "assets/img/Vestido midi de lino con cinturón.webp",
    tag: "Nuevo"
  },
  {
    id: 2,
    nombre: "Vestido Midi Fluido",
    categoria: "vestidos",
    precio: 999,
    descripcion: "Vestido de corte midi con tela ligera y caída suave, perfecto para un look elegante y cómodo para el día o la oficina.",
    imagen: "assets/img/Vestido midi fluido.jpg",
    tag: ""
  },
  {
    id: 3,
    nombre: "Vestido Midi con Lazadas",
    categoria: "vestidos",
    precio: 1099,
    descripcion: "Vestido midi con detalle de lazadas decorativas que aportan un estilo moderno y femenino. Ideal para ocasiones especiales.",
    imagen: "assets/img/Vestido midi con lazadas.jpg",
    tag: ""
  },
  {
    id: 4,
    nombre: "Vestido Halter Elegante",
    categoria: "vestidos",
    precio: 1399,
    descripcion: "Vestido midi con escote halter que deja los hombros descubiertos, diseño elegante ideal para fiestas o eventos.",
    imagen: "assets/img/Vestido halter fluido.jpg",
    tag: "Destacado"
  },
  // TOPS
  {
    id: 5,
    nombre: "Camisa Oversize de Algodón",
    categoria: "tops",
    precio: 549,
    descripcion: "Camisa de corte oversize con cuello clásico y botones frontales, ideal para un estilo casual y cómodo.",
    imagen: "assets/img/Camisa oversize de algodón.webp",
    tag: "Nuevo"
  },
  {
    id: 6,
    nombre: "Camisa Cropped de Lino",
    categoria: "tops",
    precio: 699,
    descripcion: "Camisa corta confeccionada en mezcla de lino ligera, perfecta para looks frescos de verano.",
    imagen: "assets/img/Camisa cropped de lino.jpg",
    tag: ""
  },
  {
    id: 7,
    nombre: "Blusa Satinada",
    categoria: "tops",
    precio: 849,
    descripcion: "Blusa de efecto satinado con caída elegante, ideal para outfits formales o salidas nocturnas.",
    imagen: "assets/img/Blusa satinada.jpg",
    tag: "Destacado"
  },
  {
    id: 8,
    nombre: "Top Floral Tejido",
    categoria: "tops",
    precio: 599,
    descripcion: "Top con estampado floral y diseño ligero, perfecto para looks casuales de primavera o verano.",
    imagen: "assets/img/Top floral tejido.jpg",
    tag: ""
  },
  // BLAZERS
  {
    id: 9,
    nombre: "Blazer Doble Botonadura",
    categoria: "blazers",
    precio: 1199,
    descripcion: "Blazer estructurado de doble botonadura con solapas marcadas. Pieza esencial para looks de oficina o eventos formales.",
    imagen: "assets/img/Blazer doble botonadura.jpg",
    tag: "Nuevo"
  },
  {
    id: 10,
    nombre: "Blazer Entallado",
    categoria: "blazers",
    precio: 1099,
    descripcion: "Blazer de corte entallado que resalta la figura, ideal para outfits sofisticados de día o noche.",
    imagen: "assets/img/Blazer entallado.webp",
    tag: ""
  },
  {
    id: 11,
    nombre: "Blazer Estructurado Azul",
    categoria: "blazers",
    precio: 1299,
    descripcion: "Blazer en tono azul con estructura marcada y botones dorados, perfecta combinación de elegancia y color.",
    imagen: "assets/img/Blazer estructurado azul.jpg",
    tag: "Color"
  },
  {
    id: 12,
    nombre: "Blazer Oversize",
    categoria: "blazers",
    precio: 999,
    descripcion: "Blazer de corte oversize con caída relajada, ideal para looks casuales con un toque sofisticado.",
    imagen: "assets/img/Blazer oversize.webp",
    tag: ""
  },
  // JEANS
  {
    id: 13,
    nombre: "Jeans Skinny Tiro Alto",
    categoria: "jeans",
    precio: 899,
    descripcion: "Jeans skinny de tiro alto que estilizan la figura, confeccionados en denim de alta calidad.",
    imagen: "assets/img/Jeans skinny de tiro alto.jpg",
    tag: "Nuevo"
  },
  {
    id: 14,
    nombre: "Jeans Straight Leg",
    categoria: "jeans",
    precio: 849,
    descripcion: "Jeans de corte recto clásico con acabado limpio, versátiles para cualquier ocasión casual o semi-formal.",
    imagen: "assets/img/Jeans straight leg.webp",
    tag: ""
  },
  {
    id: 15,
    nombre: "Pantalón Plisado",
    categoria: "jeans",
    precio: 799,
    descripcion: "Pantalón de corte plisado con caída elegante, ideal para looks de oficina o eventos semi-formales.",
    imagen: "assets/img/Pantalón plisado.webp",
    tag: ""
  },
  {
    id: 16,
    nombre: "Pantalón Wide Leg",
    categoria: "jeans",
    precio: 949,
    descripcion: "Pantalón de pierna ancha con corte moderno y cómodo, perfecto para un look casual-chic.",
    imagen: "assets/img/Pantalón wide leg.jpg",
    tag: "Tendencia"
  },
  // ABRIGOS
  {
    id: 17,
    nombre: "Bomber",
    categoria: "abrigos",
    precio: 499,
    descripcion: "Chaqueta bomber de corte moderno con cierre frontal y puños elásticos, ideal para looks casuales y urbanos.",
    imagen: "assets/img/Bomber.webp",
    tag: ""
  },
  {
    id: 18,
    nombre: "Chaqueta Acolchada con Capucha",
    categoria: "abrigos",
    precio: 1099,
    descripcion: "Chaqueta acolchada con capucha y diseño ligero, perfecta para climas fríos y uso diario.",
    imagen: "assets/img/Chaqueta acolchada con capucha.webp",
    tag: "Nuevo"
  },
  {
    id: 19,
    nombre: "Trench Coat con Cinturón",
    categoria: "abrigos",
    precio: 1599,
    descripcion: "Abrigo tipo gabardina con cinturón ajustable y diseño elegante, ideal para outfits formales o de oficina.",
    imagen: "assets/img/Trench coat con cinturón.webp",
    tag: "Clásico"
  },
  {
    id: 20,
    nombre: "Abrigo Borreguillo",
    categoria: "abrigos",
    precio: 2199,
    descripcion: "Abrigo con textura tipo borrego que brinda calidez y estilo, perfecto para temporada de invierno.",
    imagen: "assets/img/Abrigo borreguillo.webp",
    tag: "Premium"
  }
];

const contacto = {
  whatsapp: "+522381479365",
  facebook: "https://www.facebook.com/profile.php?id=61575818279014",
  instagram: "https://www.instagram.com/odonteckconsulting/",
  email: "odontckconsul@gmail.com"
};
