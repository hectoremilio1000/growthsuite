/* Landings por tipo de restaurante (caso de uso / testimonio).
 * Cada entrada se renderiza en /tipo-restaurante/[slug].
 * Las imágenes con src: null muestran un placeholder hasta subir la imagen IA. */

export const restaurantTypes = {
  "dark-kitchen": {
    slug: "dark-kitchen",
    label: "Dark kitchen",
    caseName: "Bambuu",
    metaTitle: "GrowthSuite para Dark Kitchens | Caso Bambuu",
    metaDescription:
      "Controla tu dark kitchen desde WhatsApp: centraliza pedidos, ordena la cocina, controla inventario y toma decisiones en tiempo real con GrowthSuite.",
    hero: {
      pill: "Dark kitchen",
      title:
        "Controla tu dark kitchen desde WhatsApp, sin perder pedidos, tiempos ni costos",
      subtitle:
        "GrowthSuite conecta pedidos, cocina, inventario y reportes en una sola operación conversacional.",
      cta: "Ver cómo funciona",
      ctaHref: "#como-funciona",
      image: {
        src: "/tipos/dark-kitchen/hero.png",
        alt: "Dueño de dark kitchen viendo pedidos en pantalla con WhatsApp abierto y la cocina en operación atrás",
      },
    },
    problem: {
      title: "En una dark kitchen, el caos no se ve… hasta que cuesta dinero.",
      cards: [
        {
          title: "Pedidos dispersos",
          text: "Rappi, Uber, WhatsApp y llamadas sin control central.",
        },
        {
          title: "Cocina saturada",
          text: "No sabes qué pedido está atrasado hasta que el cliente reclama.",
        },
        {
          title: "Inventario invisible",
          text: "Se acaban insumos clave y sigues vendiendo productos que ya no puedes preparar.",
        },
        {
          title: "Dueño sin visibilidad",
          text: "Para saber qué pasó, tienes que revisar varias apps y preguntar al equipo.",
        },
      ],
    },
    how: {
      title: "Así trabaja GrowthSuite dentro de tu dark kitchen",
      steps: [
        {
          n: "1",
          title: "Entran los pedidos",
          text: "GrowthSuite centraliza pedidos de tus canales.",
        },
        {
          n: "2",
          title: "Cocina recibe instrucciones claras",
          text: "Cada pedido se manda a monitor o impresora por área.",
        },
        {
          n: "3",
          title: "El sistema mide tiempos y ventas",
          text: "Detecta productos top, retrasos, cancelaciones y tickets promedio.",
        },
        {
          n: "4",
          title: "El dueño pregunta por WhatsApp",
          text: "“¿Cuánto vendimos hoy?”, “¿Qué producto se está vendiendo más?”, “¿Qué insumo se está acabando?”",
        },
        {
          n: "5",
          title: "GrowthSuite recomienda acciones",
          text: "Te dice qué preparar, qué pausar, qué promover y dónde estás perdiendo dinero.",
        },
      ],
    },
    testimonial: {
      pill: "Caso real",
      quote:
        "Antes teníamos pedidos en muchas pantallas y el equipo reaccionaba tarde. Con GrowthSuite empezamos a ver la operación completa desde WhatsApp: ventas, retrasos, productos más vendidos e inventario. Lo más valioso fue dejar de operar a ciegas.",
      name: "Gonzalo Sandoval",
      role: "Socio operador de Bambuu Dark Kitchen",
      image: {
        src: "/tipos/dark-kitchen/testimonial.png",
        alt: "Retrato realista de socio de dark kitchen, 35-45 años, camisa negra, cocina industrial de fondo",
      },
    },
    benefits: {
      title: "Beneficios concretos",
      items: [
        {
          title: "Menos pedidos perdidos",
          text: "Todo entra a un flujo operativo claro.",
        },
        {
          title: "Mejor velocidad de cocina",
          text: "Cada área sabe qué preparar y en qué orden.",
        },
        {
          title: "Más control del inventario",
          text: "Detectas insumos críticos antes de que se vuelvan problema.",
        },
        {
          title: "Decisiones desde WhatsApp",
          text: "El dueño no necesita estar pegado al POS.",
        },
      ],
    },
    gallery: {
      title: "Así se ve GrowthSuite en Bambuu",
      images: [
        {
          src: "/tipos/dark-kitchen/gallery-1.png",
          alt: "Dashboard de pedidos en dark kitchen",
        },
        {
          src: "/tipos/dark-kitchen/gallery-2.png",
          alt: "Cocina con monitor de comandas",
        },
        {
          src: "/tipos/dark-kitchen/gallery-3.png",
          alt: "Dueño consultando ventas por WhatsApp",
        },
        {
          src: "/tipos/dark-kitchen/gallery-4.png",
          alt: "Equipo empacando pedidos con etiquetas",
        },
      ],
    },
    closing: {
      title:
        "Tu dark kitchen puede operar como una cadena, aunque todavía seas pequeño.",
      text: "GrowthSuite te ayuda a ordenar la operación, medir lo importante y tomar decisiones rápidas desde el canal que ya usas todos los días: WhatsApp.",
      cta: "Agendar demo para dark kitchen",
      ctaHref: "/contacto",
    },
  },

  "fast-casual": {
    slug: "fast-casual",
    label: "Fast casual",
    caseName: "La Llorona",
    metaTitle: "GrowthSuite para Fast Casual | Caso La Llorona",
    metaDescription:
      "Opera tu fast casual con varias sucursales como si fueran una sola: centraliza pedidos, cocina, inventario y ventas con GrowthSuite, desde WhatsApp.",
    hero: {
      pill: "Fast casual",
      title:
        "Opera tu fast casual con varias sucursales como si fueran una sola, desde WhatsApp",
      subtitle:
        "GrowthSuite conecta pedidos, cocina, inventario y ventas de todas tus sucursales en una sola operación conversacional.",
      cta: "Ver cómo funciona",
      ctaHref: "#como-funciona",
      image: {
        src: "/tipos/fast-casual/hero.png",
        alt: "Encargado de fast casual viendo ventas por sucursal en pantalla con WhatsApp abierto y el mostrador en operación",
      },
    },
    problem: {
      title: "En un fast casual, cada minuto y cada sucursal cuentan… y se te escapan.",
      cards: [
        {
          title: "Filas en hora pico",
          text: "Cuando se llena, los pedidos se acumulan y el servicio se vuelve lento.",
        },
        {
          title: "Sucursales descoordinadas",
          text: "Cada local opera distinto y no tienes una vista central de todas.",
        },
        {
          title: "Inventario por local",
          text: "Se acaban insumos en una sucursal mientras sobran en otra.",
        },
        {
          title: "Reportes tardíos",
          text: "Te enteras de cómo fue el día cuando ya pasó.",
        },
      ],
    },
    how: {
      title: "Así trabaja GrowthSuite en tu fast casual",
      steps: [
        {
          n: "1",
          title: "Entran los pedidos",
          text: "Mostrador, app y delivery entran a un mismo flujo, por sucursal.",
        },
        {
          n: "2",
          title: "Cocina recibe todo ordenado",
          text: "Cada pedido va al monitor o impresora del área correcta.",
        },
        {
          n: "3",
          title: "El sistema mide tiempos y ventas",
          text: "Detecta horas pico, productos top y tiempos de entrega por local.",
        },
        {
          n: "4",
          title: "Comparas sucursales por WhatsApp",
          text: "“¿Qué sucursal vendió más hoy?”, “¿Dónde se están tardando?”",
        },
        {
          n: "5",
          title: "GrowthSuite recomienda acciones",
          text: "Te dice qué reforzar, qué promover y dónde estás perdiendo ventas.",
        },
      ],
    },
    testimonial: {
      pill: "Caso real",
      quote:
        "Teníamos varias sucursales y cada una era un mundo. Con GrowthSuite por fin vemos todo junto: ventas por local, horas pico y qué se vende más. Ahora decidimos con datos, no con corazonadas.",
      name: "Mariana Ríos",
      role: "Gerente de operaciones de La Llorona",
      image: {
        src: "/tipos/fast-casual/testimonial.png",
        alt: "Retrato realista de gerente de operaciones de La Llorona, sucursal de fast casual de fondo",
      },
    },
    benefits: {
      title: "Beneficios concretos",
      items: [
        {
          title: "Servicio más rápido",
          text: "Los pedidos fluyen sin cuellos de botella en hora pico.",
        },
        {
          title: "Sucursales bajo control",
          text: "Una sola vista de todos tus locales.",
        },
        {
          title: "Inventario equilibrado",
          text: "Sabes qué falta y dónde, antes de que sea problema.",
        },
        {
          title: "Decisiones desde WhatsApp",
          text: "Comparas y actúas sin estar en cada local.",
        },
      ],
    },
    gallery: {
      title: "Así se ve GrowthSuite en La Llorona",
      images: [
        {
          src: "/tipos/fast-casual/gallery-1.png",
          alt: "Dashboard de ventas por sucursal",
        },
        {
          src: "/tipos/fast-casual/gallery-2.png",
          alt: "Mostrador tomando pedidos en hora pico",
        },
        {
          src: "/tipos/fast-casual/gallery-3.png",
          alt: "Monitor de comandas en cocina",
        },
        {
          src: "/tipos/fast-casual/gallery-4.png",
          alt: "Gerente comparando sucursales por WhatsApp",
        },
      ],
    },
    closing: {
      title: "Tu fast casual puede crecer en sucursales sin perder el control.",
      text: "GrowthSuite ordena la operación de todos tus locales y te da claridad para decidir rápido, desde WhatsApp.",
      cta: "Agendar demo para fast casual",
      ctaHref: "/contacto",
    },
  },

  "comida-rapida": {
    slug: "comida-rapida",
    label: "Comida rápida",
    caseName: "Mr. Lucho",
    metaTitle: "GrowthSuite para Comida Rápida | Caso Mr. Lucho",
    metaDescription:
      "Despacha más rápido y sin errores en tu comida rápida: centraliza pedidos, cocina, inventario y ventas con GrowthSuite, desde WhatsApp.",
    hero: {
      pill: "Comida rápida",
      title:
        "Despacha más rápido y sin errores en tu comida rápida, todo desde WhatsApp",
      subtitle:
        "GrowthSuite conecta pedidos, cocina, inventario y ventas en una sola operación conversacional.",
      cta: "Ver cómo funciona",
      ctaHref: "#como-funciona",
      image: {
        src: "/tipos/comida-rapida/hero.png",
        alt: "Dueño de comida rápida viendo ventas en vivo en el celular con la cocina despachando pedidos atrás",
      },
    },
    problem: {
      title: "En comida rápida, lo que te cuesta dinero es la lentitud y el error.",
      cards: [
        {
          title: "Pedidos que se traban",
          text: "En volumen alto se pierden o se confunden órdenes.",
        },
        {
          title: "Combos mal armados",
          text: "Errores en el pedido que terminan en reposiciones y quejas.",
        },
        {
          title: "Inventario que vuela",
          text: "Insumos clave se acaban en plena hora pico.",
        },
        {
          title: "Sin números al instante",
          text: "No sabes cuánto llevas vendido hasta el corte.",
        },
      ],
    },
    how: {
      title: "Así trabaja GrowthSuite en tu comida rápida",
      steps: [
        {
          n: "1",
          title: "Entran los pedidos",
          text: "Caja, app y delivery a un mismo flujo.",
        },
        {
          n: "2",
          title: "Cocina despacha ordenado",
          text: "Cada orden va clara al monitor o impresora por estación.",
        },
        {
          n: "3",
          title: "El sistema mide velocidad y ventas",
          text: "Tiempos de despacho, productos top y tickets promedio.",
        },
        {
          n: "4",
          title: "Consultas por WhatsApp",
          text: "“¿Cuánto llevamos hoy?”, “¿Qué combo se vende más?”",
        },
        {
          n: "5",
          title: "GrowthSuite recomienda acciones",
          text: "Qué promover, qué reforzar y dónde puedes acelerar.",
        },
      ],
    },
    testimonial: {
      pill: "Caso real",
      quote:
        "En hora pico vivíamos en caos. Con GrowthSuite los pedidos salen ordenados y rápido, y veo las ventas en vivo desde el celular. Bajamos errores y subimos velocidad.",
      name: "Diego Paredes",
      role: "Dueño de Mr. Lucho",
      image: {
        src: "/tipos/comida-rapida/testimonial.png",
        alt: "Retrato realista de dueño de comida rápida, cocina de despacho de fondo",
      },
    },
    benefits: {
      title: "Beneficios concretos",
      items: [
        {
          title: "Despacho más veloz",
          text: "Menos cuellos de botella en volumen alto.",
        },
        {
          title: "Menos errores",
          text: "Cada estación sabe exactamente qué preparar.",
        },
        {
          title: "Inventario al día",
          text: "Detectas faltantes antes de quedarte sin vender.",
        },
        {
          title: "Ventas en vivo",
          text: "Tus números en el celular, sin esperar el corte.",
        },
      ],
    },
    gallery: {
      title: "Así se ve GrowthSuite en Mr. Lucho",
      images: [
        {
          src: "/tipos/comida-rapida/gallery-1.png",
          alt: "Pantalla de caja con pedidos en hora pico",
        },
        {
          src: "/tipos/comida-rapida/gallery-2.png",
          alt: "Monitor de comandas por estación",
        },
        {
          src: "/tipos/comida-rapida/gallery-3.png",
          alt: "Dueño viendo ventas en vivo por WhatsApp",
        },
        {
          src: "/tipos/comida-rapida/gallery-4.png",
          alt: "Despacho de pedidos para llevar",
        },
      ],
    },
    closing: {
      title: "Tu comida rápida puede despachar más, más rápido y sin errores.",
      text: "GrowthSuite ordena la operación y te da los números en vivo para decidir al momento, desde WhatsApp.",
      cta: "Agendar demo para comida rápida",
      ctaHref: "/contacto",
    },
  },

  "casual-dining": {
    slug: "casual-dining",
    label: "Casual dining",
    caseName: "Fogo de Chão",
    metaTitle: "GrowthSuite para Casual Dining | Caso Fogo de Chão",
    metaDescription:
      "Eleva la experiencia en mesa y controla tu casual dining: pedidos, cocina, barra, inventario y ventas con GrowthSuite, desde WhatsApp.",
    hero: {
      pill: "Casual dining",
      title:
        "Eleva la experiencia en mesa y controla tu casual dining desde WhatsApp",
      subtitle:
        "GrowthSuite conecta pedidos, cocina, inventario y ventas en una sola operación conversacional.",
      cta: "Ver cómo funciona",
      ctaHref: "#como-funciona",
      image: {
        src: "/tipos/casual-dining/hero.png",
        alt: "Gerente de casual dining revisando ventas en el celular con el comedor y el servicio en mesa de fondo",
      },
    },
    problem: {
      title: "En casual dining, la experiencia y el ticket se cuidan en cada mesa.",
      cards: [
        {
          title: "Mesas mal coordinadas",
          text: "Tiempos entre cocina y servicio que enfrían la experiencia.",
        },
        {
          title: "Comandas confusas",
          text: "Errores entre meseros, cocina y barra.",
        },
        {
          title: "Inventario sin control",
          text: "Cortes, vinos o insumos premium que se agotan sin aviso.",
        },
        {
          title: "Poca visibilidad del negocio",
          text: "No sabes qué platillo deja más ni cómo va la noche.",
        },
      ],
    },
    how: {
      title: "Así trabaja GrowthSuite en tu casual dining",
      steps: [
        {
          n: "1",
          title: "Se toma la orden en mesa",
          text: "Los meseros capturan en tableta y envían a cocina y barra al instante.",
        },
        {
          n: "2",
          title: "Cocina y barra reciben claro",
          text: "Cada comanda va al área correcta, sin confusiones.",
        },
        {
          n: "3",
          title: "El sistema mide tiempos y ventas",
          text: "Rotación de mesas, platillos top y ticket promedio.",
        },
        {
          n: "4",
          title: "Consultas por WhatsApp",
          text: "“¿Cómo va la noche?”, “¿Qué platillo deja más?”",
        },
        {
          n: "5",
          title: "GrowthSuite recomienda acciones",
          text: "Qué impulsar, qué cuidar y dónde mejorar el ticket.",
        },
      ],
    },
    testimonial: {
      pill: "Caso real",
      quote:
        "Cuidamos mucho la experiencia en mesa y antes dependíamos de la memoria del equipo. Con GrowthSuite las comandas llegan claras, medimos tiempos y sé qué platillos dejan más. Subimos el ticket sin perder el servicio.",
      name: "Ricardo Almeida",
      role: "Gerente general de Fogo de Chão",
      image: {
        src: "/tipos/casual-dining/testimonial.png",
        alt: "Retrato realista de gerente general de casual dining, comedor elegante de fondo",
      },
    },
    benefits: {
      title: "Beneficios concretos",
      items: [
        {
          title: "Mejor experiencia en mesa",
          text: "Tiempos coordinados entre cocina, barra y servicio.",
        },
        {
          title: "Comandas sin errores",
          text: "Cada área recibe justo lo que debe preparar.",
        },
        {
          title: "Inventario premium controlado",
          text: "Cuidas cortes, vinos e insumos clave.",
        },
        {
          title: "Decisiones desde WhatsApp",
          text: "Sabes cómo va la noche sin dejar el piso.",
        },
      ],
    },
    gallery: {
      title: "Así se ve GrowthSuite en Fogo de Chão",
      images: [
        {
          src: "/tipos/casual-dining/gallery-1.png",
          alt: "Mesero tomando la orden en tableta",
        },
        {
          src: "/tipos/casual-dining/gallery-2.png",
          alt: "Monitor de comandas en cocina y barra",
        },
        {
          src: "/tipos/casual-dining/gallery-3.png",
          alt: "Gerente revisando ventas por WhatsApp",
        },
        {
          src: "/tipos/casual-dining/gallery-4.png",
          alt: "Mesa servida con experiencia premium",
        },
      ],
    },
    closing: {
      title: "Tu casual dining puede elevar la experiencia y el ticket, con control total.",
      text: "GrowthSuite ordena la operación de mesa, cocina y barra, y te da claridad para decidir desde WhatsApp.",
      cta: "Agendar demo para casual dining",
      ctaHref: "/contacto",
    },
  },
};
