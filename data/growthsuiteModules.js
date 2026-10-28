import {
  TALENTO_ANUNCIOS,
  TALENTO_BUSQUEDAS,
  talentoPlanTexto,
} from "./talentoPrecios";

export const growthsuiteModules = [
  {
    id: "punto-de-venta",
    slug: "punto-de-venta",
    plan: "basico",
    title: "Punto de Venta",
    kicker: "¡El corazón de la gestión de tu restaurante 💚 !",
    description:
      "Nuestro Punto de Venta cloudbase, no solo tiene todas las funcionalidades que tu restaurante necesita, también esta diseñado para que puedas identificar a cada uno de tus clientes.",
    chips: ["Menús", "Precios", "Disponibilidad"],
    visualImage: "/imagen_3.png",
    detail:
      "El Punto de Venta de GrowthSuite vive en la nube, así que operas desde cualquier dispositivo y tu información está siempre segura y respaldada. Maneja menús, precios y disponibilidad en tiempo real, cobra con múltiples formas de pago y reconoce a cada cliente para darle un mejor servicio y vender más.",
    features: [
      {
        title: "Menús y precios al instante",
        text: "Actualiza productos, precios y disponibilidad y se refleja en todos tus canales.",
      },
      {
        title: "Identifica a tus clientes",
        text: "Registra quién compra y qué consume para personalizar y fidelizar.",
      },
      {
        title: "Cobros y cortes claros",
        text: "Múltiples formas de pago y cortes de caja sin enredos.",
      },
      {
        title: "100% en la nube",
        text: "Opera desde cualquier dispositivo, con tu información segura y respaldada.",
      },
    ],
    benefits: [
      "Operación más ordenada",
      "Más control del dinero",
      "Mejor experiencia para el cliente",
    ],
  },
  {
    id: "control-asistente-whatsapp",
    slug: "control-asistente-whatsapp",
    plan: "basico",
    title: "Control + Asistente por WhatsApp",
    kicker: "Gestiona y decide más rápido desde un solo chat",
    description:
      "Controla inventarios, cancelaciones y reportes en tiempo real, mientras tu asistente te ayuda con marketing, RRHH y respuestas para clientes desde WhatsApp.",
    chips: ["Inventarios", "Cancelaciones", "Asistente IA"],
    visualImage: "/cliente_whatsapp.png",
    visualAlt:
      "Control y asistente por WhatsApp para la operación diaria del restaurante",
    detail:
      "Lleva el control de tu restaurante desde el chat que ya usas todos los días. Consulta inventarios, autoriza cancelaciones y revisa reportes en tiempo real, mientras tu asistente con IA te ayuda con marketing, recursos humanos y respuestas para tus clientes.",
    features: [
      {
        title: "Control en tiempo real",
        text: "Inventarios, cancelaciones y ventas, siempre a la mano.",
      },
      {
        title: "Asistente con IA",
        text: "Te apoya en marketing, RRHH y atención a clientes.",
      },
      {
        title: "Reportes cuando los pides",
        text: "“¿Cuánto vendí hoy?”, “¿Qué se vendió más?” y te responde al instante.",
      },
      {
        title: "Sin instalar nada",
        text: "Todo desde WhatsApp, sin apps extra ni curva de aprendizaje.",
      },
    ],
    benefits: [
      "Decides más rápido",
      "Menos tiempo en reportes",
      "Operación bajo control desde el celular",
    ],
  },
  {
    id: "central-de-pedidos",
    slug: "central-de-pedidos",
    plan: "basico",
    title: "Delivery propio",
    kicker: "Tu marca. Tu dominio. Tus clientes.",
    description:
      "Monta tu propio delivery —con tus motos y GPS en tiempo real— en lugar de depender de agregadores. Sin comisiones de terceros.",
    chips: ["Marca propia", "GPS en tiempo real", "Sin comisiones"],
    visualImage: "/delivery-propio.png",
    visualAlt:
      "Centro de control de delivery propio de Growthsuite con seguimiento GPS en tiempo real",
    detail:
      "Tus clientes piden desde tu propio dominio (pedidos.turestaurante.com), tú despachas con tus repartidores y rastreas cada entrega por GPS en tiempo real. Sin comisiones de terceros y con la base de datos de clientes 100% tuya.",
    features: [
      {
        title: "Tu marca, tu dominio",
        text: "Pedidos desde pedidos.turestaurante.com, sin competencia en la misma app.",
      },
      {
        title: "GPS en tiempo real",
        text: "Rastrea cada entrega y a cada repartidor al instante.",
      },
      {
        title: "Reparto propio",
        text: "Gestiona tus motos y zonas de entrega desde un tablero.",
      },
      {
        title: "Clientes tuyos",
        text: "Base de datos 100% tuya, con notificaciones por SMS y WhatsApp.",
      },
    ],
    benefits: [
      "Sin comisiones de terceros",
      "Clientes y datos 100% tuyos",
      "Control total de cada entrega",
    ],
  },
  {
    id: "Monitor-de-comandas",
    slug: "monitor-de-comandas",
    plan: "basico",
    title: "Monitor de comandas",
    kicker: "Adiós papel, hola velocidad",
    description:
      "Recibe comandas en tiempo real en cocina o barra. Prioriza por tiempo, reduce errores y acelera la salida de platillos y bebidas.",
    chips: ["Monitor", "Cocina/Barra", "Tiempo real"],
    visualImage: "/imagen7.png",
    detail:
      "Cambia el papel por pantallas en cocina y barra. Cada comanda llega en tiempo real, ordenada por prioridad y tiempo, para que tu equipo sepa qué preparar primero y los platillos salgan más rápido y sin errores.",
    features: [
      {
        title: "Comandas en tiempo real",
        text: "Llegan al instante a cocina o barra.",
      },
      {
        title: "Prioriza por tiempo",
        text: "Identifica qué pedido lleva más esperando.",
      },
      {
        title: "Por áreas",
        text: "Cada estación ve solo lo que le toca preparar.",
      },
      {
        title: "Menos errores",
        text: "Adiós a los tickets de papel perdidos o ilegibles.",
      },
    ],
    benefits: ["Cocina más veloz", "Menos reclamos", "Equipo coordinado"],
  },
  {
    id: "tableta-de-órdenes",
    slug: "tableta-de-ordenes",
    plan: "basico",
    title: "Tableta de órdenes",
    kicker: "Pedidos claros, equipos ágiles",
    description:
      "Los meseros capturan órdenes desde una tableta táctil. Envía a cocina al instante, reduce errores y acelera el servicio.",
    chips: ["Comandero", "Meseros", "Envío a cocina"],
    visualImage: "/imagen8.png",
    detail:
      "Tus meseros toman la orden en una tableta táctil y la envían a cocina y barra al instante. Menos viajes, menos errores y un servicio más rápido en cada mesa.",
    features: [
      {
        title: "Captura en mesa",
        text: "El mesero registra el pedido sin papel.",
      },
      {
        title: "Envío instantáneo",
        text: "Va directo a cocina y barra al confirmar.",
      },
      {
        title: "Menos errores",
        text: "El pedido queda claro desde el inicio.",
      },
      {
        title: "Servicio más ágil",
        text: "Más rotación de mesas y mejor experiencia.",
      },
    ],
    benefits: [
      "Servicio más rápido",
      "Menos errores de comanda",
      "Meseros más productivos",
    ],
  },
  {
    id: "agente-ai-whatsapp",
    slug: "pedidos-automaticos-ia",
    plan: "basico",
    title: "Pedidos automáticos con IA",
    kicker: "Del WhatsApp a la cocina, sin fricción",
    description:
      "Tus clientes ordenan por WhatsApp y el pedido entra solo al Punto de Venta e imprime en cocina. Sin errores y sin papel.",
    chips: ["WhatsApp", "Automático", "Impresión en cocina"],
    visualImage: "/imagen_2.png",
    visualAlt:
      "Flujo de pedidos: el cliente ordena por WhatsApp, entra al Punto de Venta y se imprime la comanda en cocina",
    detail:
      "Tus clientes ordenan por WhatsApp y una IA entiende el pedido, lo registra solo en el Punto de Venta y lo manda a imprimir en cocina. Vendes por el canal que tus clientes ya usan, sin que tu equipo capture nada a mano.",
    features: [
      {
        title: "Pide por WhatsApp",
        text: "El cliente ordena en el chat, como con una persona.",
      },
      {
        title: "Entra solo al POS",
        text: "El pedido se registra automáticamente, sin recaptura.",
      },
      {
        title: "Imprime en cocina",
        text: "La comanda sale en tus impresoras conectadas.",
      },
      {
        title: "Sin errores ni papel manual",
        text: "Menos fricción y menos equivocaciones.",
      },
    ],
    benefits: [
      "Vendes 24/7 por WhatsApp",
      "Menos carga para tu equipo",
      "Pedidos sin errores",
    ],
  },
  {
    id: "rewards",
    slug: "rewards",
    plan: "basico",
    title: "Rewards",
    kicker: "Lealtad personalizada",
    description:
      "Diseña programas de recompensas con cashback, cumpleaños y referidos para aumentar recurrencia.",
    chips: ["Cashback", "Cumpleaños", "Referidos"],
    visualImage: "/reward.png",
    detail:
      "Crea programas de lealtad a la medida de tu restaurante. Premia a tus clientes con cashback, sorpréndelos en su cumpleaños y haz que te recomienden con referidos, para que vuelvan más seguido y gasten más.",
    features: [
      {
        title: "Cashback",
        text: "Devuelve un % de cada compra para la siguiente visita.",
      },
      {
        title: "Cumpleaños",
        text: "Premios automáticos en el día de tu cliente.",
      },
      {
        title: "Referidos",
        text: "Tus clientes te traen nuevos clientes.",
      },
      {
        title: "Personalizado",
        text: "Diseña las reglas según tu negocio.",
      },
    ],
    benefits: [
      "Más recurrencia",
      "Más recomendaciones",
      "Clientes más fieles",
    ],
  },
  {
    id: "qr-en-ticket",
    slug: "qr-en-la-cuenta",
    plan: "basico",
    title: "QR en la cuenta",
    kicker: "Ver tu consumo y calificar, al instante",
    description:
      "En el ticket de la cuenta llegan dos QR: uno para ver el detalle de la orden y cuánto consumió, y otro para calificar la atención. Todo desde el celular, sin apps.",
    chips: ["Ver la orden", "Consumo", "Calificar atención"],
    visualImage: "/imagen10.png",
    fullWidthImage: true,
    visualAlt:
      "Ticket de la cuenta con dos códigos QR: uno para ver el detalle de la orden y el total, y otro para calificar la atención",
    detail:
      "En el ticket de la cuenta llegan dos códigos QR. Con uno, el cliente ve el detalle de su orden y cuánto consumió; con el otro, califica la atención. Todo desde su celular, sin descargar nada.",
    features: [
      {
        title: "Ver la orden",
        text: "El cliente revisa su consumo y el total al instante.",
      },
      {
        title: "Calificar atención",
        text: "Una encuesta rápida para medir el servicio.",
      },
      {
        title: "Sin apps",
        text: "Solo escanear con la cámara del celular.",
      },
      {
        title: "Opiniones que sirven",
        text: "Convierte el feedback en mejoras reales.",
      },
    ],
    benefits: [
      "Más transparencia",
      "Más reseñas y feedback",
      "Mejor servicio",
    ],
  },
  {
    id: "factura-inteligente",
    slug: "facturacion-electronica",
    plan: "basico",
    title: "Facturación electrónica",
    kicker: "Factura a tus clientes en minutos",
    description:
      "Emite facturas electrónicas (CFDI) a tus clientes directo desde la plataforma, con tus ventas ya cargadas. Sin sistemas aparte ni complicaciones.",
    chips: ["Facturas CFDI", "Para tus clientes", "Automático"],
    visualImage: "/factura.png",
    detail:
      "Emite facturas electrónicas (CFDI) a tus clientes directo desde GrowthSuite, con tus ventas ya cargadas. Sin pasar datos a otro sistema ni complicarte: facturas en minutos y cumples con el SAT.",
    features: [
      {
        title: "CFDI en minutos",
        text: "Genera y timbra la factura desde la plataforma.",
      },
      {
        title: "Ventas ya cargadas",
        text: "No recapturas nada, todo viene de tu operación.",
      },
      {
        title: "Para tus clientes",
        text: "Envío automático de la factura por correo.",
      },
      {
        title: "Cumple con el SAT",
        text: "Factura válida, timbrada y segura.",
      },
    ],
    benefits: [
      "Menos trabajo administrativo",
      "Clientes felices",
      "Cumplimiento sin estrés",
    ],
  },
  {
    id: "pagina-web",
    slug: "pagina-web",
    plan: "impulso",
    title: "Página web",
    kicker: "Tu restaurante, encontrable y con tu propia dirección",
    description:
      "Un sitio hecho para restaurantes: menú siempre al día, botón de pedido y reserva, y las fotos que dan hambre. Con tu dominio, no en el perfil de un tercero.",
    chips: ["Tu dominio", "Menú al día", "Pedidos directos"],
    visualImage: "/pagina-web-modulo.png",
    visualAlt:
      "Sitio web del restaurante con menú, botón de ordenar y de reservar, visto en computadora y celular",
    detail:
      "Tu sitio se conecta al mismo menú del Punto de Venta: cambias un precio adentro y se actualiza afuera, sin llamar a nadie. Lleva botón de pedido directo y de reserva, se ve bien en celular —que es donde te buscan— y está preparado para que Google te encuentre cuando alguien busca dónde comer cerca.",
    features: [
      {
        title: "Tu menú, sin doble captura",
        text: "El mismo menú del POS se publica en la web. Un cambio, un lugar.",
      },
      {
        title: "Pedidos que no pagan comisión",
        text: "El botón de ordenar lleva a tu canal, no al de una app de reparto.",
      },
      {
        title: "Aparece en Google",
        text: "Estructura pensada para búsquedas locales: 'restaurante cerca de mí'.",
      },
      {
        title: "Se ve bien en celular",
        text: "Ahí te buscan. El sitio se arma primero para esa pantalla.",
      },
    ],
    benefits: [
      "Clientes que llegan solos",
      "Menos comisiones a terceros",
      "Una dirección que es tuya",
    ],
  },
  {
    id: "reservaciones",
    slug: "reservaciones",
    plan: "impulso",
    title: "Reservaciones",
    kicker: "Llena las mesas antes de que abran",
    description:
      "Tus clientes reservan solos, a la hora que quieran, sin llamar. Tú ves la noche completa antes de que llegue el primero.",
    chips: ["Sin llamadas", "Confirmación sola", "Menos mesas vacías"],
    visualImage: "/reservaciones-modulo.png",
    visualAlt:
      "Widget de reservaciones incrustado en la web del restaurante y el panel de POS Admin donde se administran",
    detail:
      "La reserva entra desde tu página, tu WhatsApp o tu perfil, y cae directo en la agenda del restaurante. El cliente recibe su confirmación y su recordatorio sin que nadie los mande a mano, y el anfitrión abre el turno sabiendo cuántas mesas están comprometidas y a qué hora.",
    features: [
      {
        title: "Reserva sin llamar",
        text: "El cliente elige día, hora y personas desde su teléfono.",
      },
      {
        title: "Confirmación y recordatorio",
        text: "Se mandan solos. Menos gente que reserva y no llega.",
      },
      {
        title: "La noche, de un vistazo",
        text: "El anfitrión ve las mesas comprometidas antes de abrir.",
      },
      {
        title: "Conectado a tus mesas",
        text: "La reserva sabe qué mesas existen y cuántas personas caben.",
      },
    ],
    benefits: [
      "Menos mesas vacías",
      "Menos llamadas en hora pico",
      "Servicio preparado de antemano",
    ],
  },
  {
    id: "marketing",
    slug: "marketing",
    plan: "impulso",
    title: "Marketing",
    kicker: "Que te conozcan los que están a la vuelta",
    description:
      "Campañas, redes y promociones pensadas para llenar tu restaurante — no para juntar likes. Con el número de ventas al lado, para saber si funcionó.",
    chips: ["Campañas", "Redes", "Promos que venden"],
    visualImage: "/marketing-modulo.png",
    visualAlt:
      "Campañas de marketing para restaurante conectadas a las ventas del punto de venta",
    detail:
      "Nos encargamos de la publicidad que trae gente a la mesa: anuncios a quienes viven o trabajan cerca, contenido para tus redes, y promociones armadas con lo que ya sabemos de tus ventas. Como el POS y el marketing viven en el mismo lugar, se puede ver qué campaña movió el ticket promedio y cuál no.",
    features: [
      {
        title: "Anuncios a quien está cerca",
        text: "Se le habla a quien puede llegar caminando o en 10 minutos.",
      },
      {
        title: "Tus redes, atendidas",
        text: "Contenido constante, sin que tú tengas que inventarlo cada semana.",
      },
      {
        title: "Promos con cabeza",
        text: "Se arman con tus productos y tus horas flojas, no al azar.",
      },
      {
        title: "Se mide contra ventas",
        text: "La campaña se juzga con el ticket y las cuentas, no con likes.",
      },
    ],
    benefits: [
      "Más gente en horas flojas",
      "Promociones que sí dejan",
      "Saber qué publicidad sirvió",
    ],
  },
  {
    id: "reclutamiento",
    slug: "reclutamiento",
    plan: "talento",
    title: "Reclutamiento",
    kicker: "Buscamos candidatos, tú eliges a quién contratar",
    description:
      "Nuestro equipo arma y difunde tus vacantes, atiende a los candidatos y te agenda entrevistas en tu restaurante. Tú entrevistas y decides.",
    chips: ["Vacantes", "Candidatos", "Entrevistas"],
    visualImage: "/talento/reclutamiento-hero.webp",
    visualImageMobile: "/talento/reclutamiento-hero-m.webp",
    visualAlt:
      "Recorrido de una búsqueda de personal: vacante, candidatos, entrevista y decisión del restaurante",
    detail:
      "Conseguir un mesero o un ayudante de cocina se come horas del gerente: publicar, contestar mensajes, explicar el sueldo diez veces y esperar a gente que no llega. Nosotros hacemos esa parte. Definimos la vacante contigo, preparamos la difusión, atendemos a los candidatos, revisamos que cumplan lo que acordamos y coordinamos las entrevistas. Tú solo entrevistas a quien ya sabe el sueldo, el horario y dónde queda el restaurante.",
    problema:
      "La rotación en piso y cocina es constante, y cada vacante abierta significa turnos cubiertos a medias. El gerente acaba reclutando entre comandas, y la mitad de los citados no conocía las condiciones o no llega.",
    recorrido: [
      { paso: "Definimos la vacante", texto: "Puesto, sueldo, propinas, horario, días y ubicación, contigo.", quien: "equipo" },
      { paso: "Preparamos la difusión", texto: "Imágenes y textos de la vacante; los publicamos en los canales que acordemos.", quien: "equipo" },
      { paso: "Recibimos candidatos", texto: "Solicitud en línea con datos, disponibilidad, experiencia y referencias.", quien: "sistema" },
      { paso: "Revisamos requisitos", texto: "Confirmamos que conocen las condiciones y cumplen lo acordado. El examen por puesto es una herramienta de apoyo.", quien: "ambos" },
      { paso: "Coordinamos entrevistas", texto: "Les mandamos ubicación, confirmamos asistencia y enviamos recordatorio.", quien: "equipo" },
      { paso: "El restaurante decide", texto: "Tú entrevistas y eliges a quién contratar. Nadie decide por ti.", quien: "restaurante" },
      { paso: "Damos seguimiento", texto: "Registramos quién asistió, quién te interesó y a quién contrataste.", quien: "equipo" },
    ],
    ejemplo: {
      titulo: "Ejemplo: buscan un ayudante de cocina",
      pasos: [
        "Lunes: acordamos la vacante — turno de 15:00 a 23:30, un día de descanso entre semana, sueldo y propinas.",
        "Martes: sale la difusión con la información completa; las solicitudes llegan con disponibilidad y experiencia.",
        "Miércoles y jueves: hablamos con los candidatos, descartamos a quien no puede el horario y agendamos entrevistas.",
        "Viernes: el chef entrevista a los candidatos confirmados y decide. Nosotros registramos el resultado.",
      ],
      nota: "Ejemplo ilustrativo con datos ficticios. Los tiempos dependen de la vacante y de la zona.",
    },
    features: [
      {
        title: "Vacantes bien definidas",
        text: "Sueldo, propinas, horario y ubicación claros desde el primer mensaje.",
      },
      {
        title: "Difusión preparada por nuestro equipo",
        text: `Imágenes y textos de la vacante. ${TALENTO_ANUNCIOS}`,
      },
      {
        title: "Solicitud en línea",
        text: "Datos, disponibilidad, experiencia y referencias en un mismo formulario.",
      },
      {
        title: "Entrevistas coordinadas",
        text: "Ubicación, confirmación y recordatorio para cada candidato citado.",
      },
    ],
    restaurante: [
      "Nos dices qué puesto necesitas y en qué condiciones.",
      "Apartas horarios para entrevistar en tu restaurante.",
      "Entrevistas, decides y nos avisas a quién contrataste.",
    ],
    planTexto: talentoPlanTexto,
    limites: [
      TALENTO_BUSQUEDAS,
      "Cada búsqueda dura hasta 30 días.",
      "Gerentes, puestos especializados y sucursales adicionales se cotizan aparte.",
      TALENTO_ANUNCIOS,
      "No garantizamos contrataciones ni que los candidatos asistan a la entrevista.",
    ],
    faq: [
      {
        q: "¿Ustedes contratan por mí?",
        a: "No. Te presentamos candidatos que ya conocen las condiciones y coordinamos las entrevistas. La entrevista y la decisión son tuyas.",
      },
      {
        q: "¿El sistema publica los anuncios solo?",
        a: "No. La difusión la prepara y gestiona nuestro equipo. El sistema recibe las solicitudes y ordena la información de cada candidato.",
      },
      {
        q: "¿Qué pasa con el examen por puesto?",
        a: "Es una herramienta de apoyo que estamos poniendo a prueba con restaurantes piloto. Sirve para ordenar información; no reemplaza tu criterio en la entrevista.",
      },
      {
        q: "¿Y si no llega nadie a la entrevista?",
        a: "Seguimos dentro de la misma búsqueda de hasta 30 días: confirmamos asistencia y citamos a más candidatos.",
      },
    ],
    galeria: [
      {
        src: "/talento/reclutamiento-captura.webp",
        srcSm: "/talento/reclutamiento-captura-800.webp",
        alt: "Solicitud de empleo en línea en tres pasos: datos y referencias, psicométrico y práctico",
        caption: "Lo que llena el candidato: datos, disponibilidad, experiencia y referencias. Herramienta en piloto.",
      },
      {
        src: "/talento/reclutamiento-panel.webp",
        srcSm: "/talento/reclutamiento-panel-800.webp",
        alt: "Panel del restaurante con la ficha de un candidato ficticio: etapa Recibido, datos de contacto, sueldo deseado, disponibilidad y permanencia en su último empleo",
        caption: "Lo que recibe y revisa tu restaurante: la ficha de cada candidato, con su etapa, lo que pide y cuándo puede trabajar. Herramienta en piloto.",
      },
    ],
    benefits: [
      "Menos horas del gerente reclutando",
      "Candidatos que conocen las condiciones",
      "Tú decides a quién contratar",
    ],
  },
  {
    id: "checklist-operativo",
    slug: "checklist-operativo",
    plan: "talento",
    title: "Checklist operativo",
    kicker: "Que la apertura y el cierre salgan igual todos los días",
    description:
      "Las tareas de apertura, servicio y cierre de cada puesto, con hora límite. El equipo las marca y tú ves qué se hizo, qué falta y qué se venció.",
    chips: ["Apertura", "Servicio", "Cierre"],
    visualImage: "/talento/checklist-hero.webp",
    visualImageMobile: "/talento/checklist-hero-m.webp",
    visualAlt:
      "Checklist del día en el panel del restaurante: tareas de apertura, servicio y cierre con responsable y hora límite",
    detail:
      "Armamos contigo las listas de apertura, durante el servicio y cierre, y asignamos cada tarea a un puesto, los días que toca y con su hora límite. El equipo marca lo que hizo —con evidencia cuando la tarea la pide— y tú ves en el tablero de supervisión qué se cumplió, qué se marcó como no aplica y qué se venció sin hacerse.",
    problema:
      "Cuando el gerente no está, la apertura depende de la memoria de cada quien. Te enteras de que no se revisó la cámara o no se hizo el corte cuando ya es tarde.",
    recorrido: [
      { paso: "Armamos tus listas", texto: "Apertura, servicio y cierre, con las tareas reales de tu operación.", quien: "equipo" },
      { paso: "Cada tarea tiene dueño", texto: "Por puesto, los días que toca y con hora límite.", quien: "sistema" },
      { paso: "El equipo las marca", texto: "Desde el panel o la tableta; con evidencia si la tarea la pide.", quien: "restaurante" },
      { paso: "Tú supervisas", texto: "Avance del día, tareas vencidas y quién ha hecho qué.", quien: "sistema" },
    ],
    ejemplo: {
      titulo: "Ejemplo: domingo en un steakhouse",
      pasos: [
        "12:18 · El parrillero marca «Encender parrilla y revisar el fuego de los espetos».",
        "15:41 · El barman marca los insumos de barra con una nota: «Falta jarabe natural; se pidió al proveedor».",
        "19:35 · La gerente marca «Reponer la barra de ensaladas» como no aplica: se cerró por bajo aforo.",
        "22:42 · El tablero muestra 2 tareas vencidas: la ronda de temperaturas de las 19:00 y el corte parcial de las 20:00.",
      ],
      nota: "Restaurante demo con datos ficticios. Así se veía el tablero ese día.",
    },
    features: [
      {
        title: "Listas por momento del día",
        text: "Apertura, durante el servicio y cierre, cada una con sus tareas.",
      },
      {
        title: "Responsable y hora límite",
        text: "Cada tarea va a un puesto, solo los días que toca.",
      },
      {
        title: "Notas y evidencia",
        text: "El equipo deja una nota o, si la tarea lo pide, una foto.",
      },
      {
        title: "Lo vencido salta a la vista",
        text: "El tablero de supervisión separa lo hecho, lo pendiente y lo vencido, por puesto.",
      },
    ],
    restaurante: [
      "Nos dices qué se revisa en tu apertura, servicio y cierre.",
      "Tu equipo marca sus tareas durante el turno.",
      "El gerente revisa el tablero y atiende lo vencido.",
    ],
    planTexto: `${talentoPlanTexto} Si tu restaurante ya lo tiene activo, lo conservas.`,
    limites: [
      "Las alertas de tareas vencidas se ven en el tablero de supervisión; todavía no llegan por WhatsApp.",
      "La evidencia con foto aplica solo en las tareas que la piden.",
    ],
    faq: [
      {
        q: "¿Quién arma las listas?",
        a: "Las armamos contigo durante la puesta en marcha, con las tareas reales de tu operación. Después las ajustamos cuando cambie tu operación.",
      },
      {
        q: "¿Qué pasa si una tarea no aplica hoy?",
        a: "Se marca como «no aplica» con una nota que explica por qué, y así se ve en el tablero.",
      },
      {
        q: "¿Dónde marca el equipo sus tareas?",
        a: "En el panel del restaurante o en la tableta de órdenes. Cada quien ve las tareas de su puesto.",
      },
    ],
    galeria: [
      {
        src: "/talento/checklist-captura.webp",
        srcSm: "/talento/checklist-captura-800.webp",
        alt: "Supervisión del checklist: avance del día, alertas de tareas vencidas y avance por puesto",
        caption: "Supervisión: avance del día, alertas de lo vencido y cómo va cada puesto.",
      },
      {
        src: "/talento/checklist-detalle.webp",
        srcSm: "/talento/checklist-detalle-800.webp",
        alt: "Tareas del servicio con responsable, hora límite, una tarea vencida y otra marcada como no aplica",
        caption: "Cada tarea dice quién la hizo, a qué hora vencía y por qué no aplicó.",
      },
    ],
    benefits: [
      "Aperturas y cierres parejos",
      "Menos pendientes olvidados",
      "Saber quién cumplió",
    ],
  },
  {
    id: "control-de-asistencia",
    slug: "control-de-asistencia",
    plan: "talento",
    title: "Control de asistencia",
    kicker: "Quién llegó, quién llegó tarde y quién está en turno",
    description:
      "El equipo registra su entrada y salida con PIN. Tú ves quién está en turno, los retardos y las horas trabajadas de la semana.",
    chips: ["Entradas con PIN", "Retardos", "Horarios"],
    visualImage: "/talento/asistencia-hero.webp",
    visualImageMobile: "/talento/asistencia-hero-m.webp",
    visualAlt:
      "Panel de asistencia con el personal en turno, su hora de entrada y su estado: a tiempo o con retardo",
    detail:
      "Cada persona checa su entrada y salida con su PIN de 6 dígitos. Tú armas los horarios de la semana y defines la tolerancia. El sistema registra cada entrada y salida, calcula los retardos y las horas trabajadas, y te muestra en vivo quién está en turno. Las incidencias —una salida anticipada, una falta— quedan registradas y se pueden marcar como justificadas.",
    problema:
      "Con hoja de papel o de memoria, los retardos se discuten, las horas no cuadran y no sabes quién está en el restaurante hasta que preguntas.",
    recorrido: [
      { paso: "Armas los horarios", texto: "Semana por semana, por persona, con sus descansos.", quien: "restaurante" },
      { paso: "El equipo checa con PIN", texto: "Entrada y salida en el checador del restaurante.", quien: "sistema" },
      { paso: "Se calculan retardos y horas", texto: "Con la tolerancia que tú definiste.", quien: "sistema" },
      { paso: "Revisas la semana", texto: "Quién está en turno, retardos, faltas e incidencias justificadas.", quien: "restaurante" },
    ],
    ejemplo: {
      titulo: "Ejemplo: una semana con 12 personas",
      pasos: [
        "Tolerancia de 10 minutos: quien llega a las 15:17 a un turno de 15:00 queda con 7 minutos de retardo.",
        "El sábado un ayudante no se presentó: el reporte lo marca como ausente.",
        "El miércoles una cocinera salió antes a una cita médica: la incidencia se marcó como justificada.",
        "Domingo 22:41 · un ayudante checa su entrada con PIN para el turno de cierre de las 23:00: queda a tiempo.",
      ],
      nota: "Restaurante demo con datos ficticios. Las pantallas son del sistema real.",
    },
    features: [
      {
        title: "Entrada y salida con PIN",
        text: "Cada quien checa con el suyo en el checador del restaurante.",
      },
      {
        title: "Horarios de la semana",
        text: "Turnos y descansos por persona, en una sola vista.",
      },
      {
        title: "¿Quién está ahora?",
        text: "El personal en turno, desde qué hora y si llegó a tiempo.",
      },
      {
        title: "Reporte e incidencias",
        text: "Horas programadas contra trabajadas, retardos, faltas y justificaciones.",
      },
    ],
    restaurante: [
      "Defines horarios, descansos y tolerancia.",
      "Le das a cada persona su PIN.",
      "Revisas el reporte y justificas lo que corresponda.",
    ],
    planTexto: `${talentoPlanTexto} Si tu restaurante ya lo tiene activo, lo conservas.`,
    limites: [
      "El checador funciona con PIN de 6 dígitos.",
      "No calcula ni paga nómina: te da las horas para que tú o tu contador la hagan.",
      "Los turnos se programan dentro del mismo día: no cruzan la medianoche.",
    ],
    faq: [
      {
        q: "¿Necesito un aparato especial?",
        a: "No para empezar. El checador abre en una tableta o computadora del restaurante y cada persona usa su PIN.",
      },
      {
        q: "¿Cómo se cuenta un retardo?",
        a: "A partir de la tolerancia que defines. Con 10 minutos, llegar a las 15:17 a un turno de 15:00 cuenta como 7 minutos de retardo.",
      },
      {
        q: "¿Se puede justificar una falta o una salida temprano?",
        a: "Sí. La incidencia queda registrada y el gerente la marca como justificada con una nota.",
      },
    ],
    galeria: [
      {
        src: "/talento/asistencia-captura.webp",
        srcSm: "/talento/asistencia-captura-800.webp",
        alt: "Reporte de asistencia de la semana con horas programadas, trabajadas, retardos y una falta",
        caption: "El reporte de la semana: programado contra trabajado, retardos y la falta del sábado.",
      },
      {
        src: "/talento/asistencia-detalle.webp",
        srcSm: "/talento/asistencia-detalle-800.webp",
        alt: "Checador con teclado numérico para registrar la entrada o salida con un PIN de 6 dígitos",
        caption: "El checador: cada persona registra su entrada y salida con su PIN.",
      },
    ],
    benefits: [
      "Retardos sin discusión",
      "Horas trabajadas a la mano",
      "Adiós a la hoja de papel",
    ],
  },
];
