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
        src: null,
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
      name: "Andrés Molina",
      role: "Socio operador de Bambuu Dark Kitchen",
      image: {
        src: null,
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
      title: "Así se ve GrowthSuite en una dark kitchen",
      images: [
        { src: null, alt: "Dashboard de pedidos en dark kitchen" },
        { src: null, alt: "Cocina con monitor de comandas" },
        { src: null, alt: "Dueño consultando ventas por WhatsApp" },
        { src: null, alt: "Equipo empacando pedidos con etiquetas" },
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
};
