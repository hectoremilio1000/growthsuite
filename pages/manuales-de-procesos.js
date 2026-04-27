import Head from "next/head";

const sections = [
  { id: "manual-1", num: "01", title: "Alta y configuración inicial" },
  { id: "manual-2", num: "02", title: "Usuarios, roles y permisos" },
  { id: "manual-3", num: "03", title: "Productos y catálogo" },
  { id: "manual-4", num: "04", title: "Apertura de turno de caja" },
  { id: "manual-5", num: "05", title: "Órdenes en comandero" },
  { id: "manual-6", num: "06", title: "Producción en cocina y barra" },
  { id: "manual-7", num: "07", title: "Cobro y cierre de cheque" },
  { id: "manual-8", num: "08", title: "Cancelaciones y descuentos" },
  { id: "manual-9", num: "09", title: "Corte X y cierre de turno" },
  { id: "manual-10", num: "10", title: "Reportes y consulta por WhatsApp" },
  { id: "manual-11", num: "11", title: "Inventario y recetas" },
  { id: "manual-12", num: "12", title: "Soporte e incidencias" },
  { id: "control-documental", num: "13", title: "Control documental" },
  { id: "resumen-ejecutivo", num: "14", title: "Resumen ejecutivo" },
];

export default function ManualesDeProcesos() {
  return (
    <div>
      <Head>
        <title>Manuales de procesos | Growthsuite POS</title>
        <meta
          name="description"
          content="Manuales de procesos operativos de Growthsuite POS para restaurantes."
        />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
      </Head>

      {/* Hero */}
      <section className="pp-hero">
        <div className="fb-container">
          <div className="pp-hero-inner">
            <span className="pp-badge">Documentación interna</span>
            <h1 className="pp-hero-title">Manuales de procesos</h1>
            <p className="pp-hero-sub">
              Procesos operativos para el uso de Growthsuite POS. Estos manuales
              estandarizan la operación diaria del restaurante, reducen errores,
              mejoran la trazabilidad y facilitan la capacitación del personal
              operativo, administrativo y gerencial.
            </p>
            <div className="pp-hero-meta">
              <span>Última actualización: abril de 2026</span>
              <span className="pp-hero-dot" aria-hidden="true" />
              <span>Versión 1.0</span>
              <span className="pp-hero-dot" aria-hidden="true" />
              <span>Growthsuite POS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="fb-section" style={{ paddingTop: "2rem" }}>
        <div className="fb-container">
          <div className="pp-layout">
            {/* Sidebar TOC */}
            <aside className="pp-sidebar">
              <nav className="pp-toc">
                <p className="pp-toc-label">Contenido</p>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="pp-toc-link">
                    <span className="pp-toc-num">{s.num}</span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div className="pp-content">
              <p className="pp-intro">
                Este documento reúne los principales manuales de procesos
                operativos para el uso de Growthsuite POS, una plataforma
                tecnológica diseñada para restaurantes que integra punto de
                venta, comandero, caja, monitoreo operativo, control de
                usuarios, reportes e inteligencia conectada a WhatsApp.
              </p>

              {/* 01 — Alta y configuración inicial */}
              <article id="manual-1" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">01</span>
                  <h2>Alta y configuración inicial del restaurante</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Configurar correctamente un restaurante dentro de
                    Growthsuite POS para que pueda operar con usuarios,
                    productos, áreas, cajas, comandero y reportes desde el
                    primer día.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>
                    Administrador de Growthsuite, dueño del restaurante o
                    gerente autorizado.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>1. Registro del restaurante</h3>
                  <ul>
                    <li>Ingresar al panel administrativo de Growthsuite.</li>
                    <li>Crear el perfil del restaurante.</li>
                    <li>
                      Capturar nombre comercial, razón social (cuando aplique),
                      sucursal, dirección, teléfono de contacto, correo
                      administrativo y zona horaria.
                    </li>
                    <li>Guardar la información.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Configuración de áreas operativas</h3>
                  <ul>
                    <li>
                      Crear las áreas: comedor, terraza, barra, cocina, para
                      llevar y delivery (si aplica).
                    </li>
                    <li>
                      Definir si cada área tendrá mesas, comandas o atención
                      directa.
                    </li>
                    <li>Asignar las áreas de impresión correspondientes.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Configuración de estaciones</h3>
                  <ul>
                    <li>
                      Registrar estaciones de trabajo: caja principal, caja
                      secundaria, comandero, monitor de cocina y monitor de
                      barra.
                    </li>
                    <li>Asignar cada estación a su área correspondiente.</li>
                    <li>
                      Activar o desactivar estaciones según la operación del
                      restaurante.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Validación final</h3>
                  <p>Antes de iniciar operación, validar que:</p>
                  <ul>
                    <li>El restaurante esté activo.</li>
                    <li>Existan usuarios configurados.</li>
                    <li>Existan productos cargados.</li>
                    <li>Las áreas estén asignadas.</li>
                    <li>La caja pueda abrir turno.</li>
                    <li>El comandero pueda crear órdenes.</li>
                    <li>Los monitores reciban productos correctamente.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      El restaurante queda listo para operar dentro del sistema
                      Growthsuite POS.
                    </p>
                  </div>
                </div>
              </article>

              {/* 02 — Usuarios, roles y permisos */}
              <article id="manual-2" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">02</span>
                  <h2>Alta de usuarios, roles y permisos</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Crear usuarios con permisos adecuados según su función
                    dentro del restaurante, garantizando control y seguridad
                    operativa.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Dueño, administrador o gerente autorizado.</p>
                </div>

                <div className="pp-data-section">
                  <h3>Roles principales</h3>
                  <ul>
                    <li>Dueño</li>
                    <li>Administrador</li>
                    <li>Gerente</li>
                    <li>Capitán</li>
                    <li>Cajero</li>
                    <li>Mesero</li>
                    <li>Bartender</li>
                    <li>Cocina</li>
                    <li>Monitor operativo</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>1. Ingreso al módulo de usuarios</h3>
                  <ul>
                    <li>Entrar al panel administrativo.</li>
                    <li>Seleccionar el módulo Usuarios.</li>
                    <li>Hacer clic en Nuevo usuario.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Selección de rol</h3>
                  <ul>
                    <li>Elegir el rol correspondiente.</li>
                    <li>
                      Validar que el rol coincida con las responsabilidades
                      reales del colaborador.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Captura de datos</h3>
                  <ul>
                    <li>Nombre completo.</li>
                    <li>Correo o identificador interno.</li>
                    <li>PIN o contraseña, según el tipo de usuario.</li>
                    <li>Restaurante asignado.</li>
                    <li>Estado del usuario: activo o inactivo.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Asignación de permisos</h3>
                  <ul>
                    <li>Acceso a comandero.</li>
                    <li>Acceso a caja.</li>
                    <li>Acceso a reportes.</li>
                    <li>Acceso a productos.</li>
                    <li>Permiso para cancelar productos.</li>
                    <li>Permiso para aplicar descuentos.</li>
                    <li>Permiso para cerrar turno.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>5. Guardado y validación</h3>
                  <ul>
                    <li>Guardar usuario.</li>
                    <li>Confirmar que pueda iniciar sesión.</li>
                    <li>
                      Validar que solo pueda acceder a los módulos permitidos.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>
                      Los usuarios operativos deben tener permisos limitados.
                    </li>
                    <li>
                      Las cancelaciones, descuentos y cortes deben estar
                      restringidos a perfiles autorizados.
                    </li>
                    <li>
                      Los usuarios inactivos no deben poder operar en el sistema.
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      Cada colaborador tiene acceso únicamente a las funciones
                      necesarias para su puesto.
                    </p>
                  </div>
                </div>
              </article>

              {/* 03 — Productos y catálogo */}
              <article id="manual-3" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">03</span>
                  <h2>Alta y administración de productos</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Registrar, organizar y mantener actualizado el catálogo de
                    productos del restaurante.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Administrador, gerente o encargado de catálogo.</p>
                </div>

                <div className="pp-data-section">
                  <h3>1. Crear categorías</h3>
                  <ul>
                    <li>Entrar al módulo Categorías.</li>
                    <li>
                      Crear categorías principales (alimentos, bebidas,
                      coctelería, postres, promociones).
                    </li>
                    <li>Definir orden de aparición.</li>
                    <li>Activar la categoría.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Crear grupos</h3>
                  <ul>
                    <li>Entrar al módulo Grupos.</li>
                    <li>
                      Crear grupos dentro de cada categoría (tacos, entradas,
                      cervezas, destilados, cocteles).
                    </li>
                    <li>Asignar código y categoría.</li>
                    <li>Guardar.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Crear subgrupos</h3>
                  <ul>
                    <li>Entrar al módulo Subgrupos.</li>
                    <li>
                      Crear subgrupos cuando sea necesario (tacos de carne,
                      tacos vegetarianos, margaritas, mezcales).
                    </li>
                    <li>
                      Asociar cada subgrupo con su grupo correspondiente.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Crear producto</h3>
                  <ul>
                    <li>Entrar al módulo Productos y hacer clic en Nuevo producto.</li>
                    <li>
                      Capturar nombre, categoría, grupo, subgrupo (si aplica),
                      precio de venta, impuestos, área de impresión y estado.
                    </li>
                    <li>Guardar producto.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>5. Configurar modificadores</h3>
                  <ul>
                    <li>Crear grupo de modificadores.</li>
                    <li>
                      Definir si el modificador es obligatorio u opcional.
                    </li>
                    <li>Definir cantidad máxima permitida.</li>
                    <li>Asociar productos modificadores.</li>
                    <li>Capturar precio adicional si aplica.</li>
                  </ul>
                  <p>
                    Ejemplos: hamburguesa con extras, bebida con mixer, término
                    de carne, tipo de salsa, acompañamiento.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>No duplicar productos.</li>
                    <li>Validar precios antes de activar.</li>
                    <li>
                      Verificar que el producto imprima en el área correcta.
                    </li>
                    <li>Revisar productos inactivos antes de eliminarlos.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      El restaurante cuenta con un catálogo ordenado, claro y
                      funcional para venta y operación.
                    </p>
                  </div>
                </div>
              </article>

              {/* 04 — Apertura de turno */}
              <article id="manual-4" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">04</span>
                  <h2>Apertura de turno de caja</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Iniciar correctamente la operación diaria de caja,
                    registrando saldo inicial y estación activa.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Cajero, gerente o encargado de turno.</p>
                </div>

                <div className="pp-data-section">
                  <h3>1. Ingreso a caja</h3>
                  <ul>
                    <li>Iniciar sesión en Growthsuite Caja.</li>
                    <li>Validar que el usuario tenga permiso de caja.</li>
                    <li>Seleccionar estación correspondiente.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Verificación de turno abierto</h3>
                  <ul>
                    <li>El sistema consulta si existe un turno abierto.</li>
                    <li>
                      Si no existe turno abierto, mostrar pantalla de apertura.
                    </li>
                    <li>Si ya existe turno abierto, continuar operación.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Captura de fondo inicial</h3>
                  <ul>
                    <li>Capturar el monto de efectivo inicial.</li>
                    <li>Confirmar responsable de apertura.</li>
                    <li>Agregar observaciones si aplica.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Apertura</h3>
                  <ul>
                    <li>Presionar Abrir turno.</li>
                    <li>
                      El sistema registra usuario, estación, fecha y hora,
                      saldo inicial y restaurante.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>No se debe operar caja sin turno abierto.</li>
                    <li>Solo usuarios autorizados pueden abrir turno.</li>
                    <li>
                      El saldo inicial debe coincidir con el efectivo físico
                      disponible.
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      La caja queda lista para recibir pagos, movimientos y
                      cierres.
                    </p>
                  </div>
                </div>
              </article>

              {/* 05 — Comandero */}
              <article id="manual-5" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">05</span>
                  <h2>Captura de órdenes en comandero</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Registrar correctamente los pedidos de los clientes desde
                    el comandero, enviando productos a las áreas
                    correspondientes.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Mesero, capitán o cajero autorizado.</p>
                </div>

                <div className="pp-data-section">
                  <h3>1. Selección de mesa o cheque</h3>
                  <ul>
                    <li>Ingresar al comandero.</li>
                    <li>Seleccionar área.</li>
                    <li>Elegir mesa disponible o abrir nuevo cheque.</li>
                    <li>Capturar número de personas si aplica.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Agregar productos</h3>
                  <ul>
                    <li>Abrir modal de captura de productos.</li>
                    <li>Buscar producto por categoría, grupo o nombre.</li>
                    <li>Seleccionar producto e indicar cantidad.</li>
                    <li>
                      Asignar tiempo: primer, segundo o tercer tiempo, bebidas
                      o postres.
                    </li>
                    <li>Agregar comentario si aplica.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Selección de modificadores</h3>
                  <ul>
                    <li>Seleccionar modificadores obligatorios.</li>
                    <li>Agregar modificadores opcionales.</li>
                    <li>Confirmar precio adicional.</li>
                    <li>Validar que el pedido esté completo.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Envío de orden</h3>
                  <ul>
                    <li>Revisar productos capturados.</li>
                    <li>Confirmar cantidades y comentarios.</li>
                    <li>Presionar Enviar orden.</li>
                    <li>
                      El sistema envía cada producto al área correspondiente
                      (cocina, barra, producción).
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>Revisar pedido antes de enviarlo.</li>
                    <li>No capturar productos en mesas incorrectas.</li>
                    <li>Usar comentarios claros y breves.</li>
                    <li>
                      Evitar cambios manuales de precio sin autorización.
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      La orden queda registrada y enviada correctamente para
                      producción.
                    </p>
                  </div>
                </div>
              </article>

              {/* 06 — Producción */}
              <article id="manual-6" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">06</span>
                  <h2>Producción en cocina y barra</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Gestionar la preparación de productos enviados desde el
                    comandero hacia las áreas de producción.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Cocina, barra y encargados de producción.</p>
                </div>

                <div className="pp-data-section">
                  <h3>1. Recepción de órdenes</h3>
                  <p>
                    El monitor recibe productos pendientes. Cada producto
                    aparece con mesa o cheque, producto, cantidad, tiempo,
                    comentarios y hora de envío.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>2. Preparación</h3>
                  <ul>
                    <li>El personal revisa la orden.</li>
                    <li>Inicia preparación.</li>
                    <li>Atiende comentarios especiales.</li>
                    <li>Respeta tiempos de servicio.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Cambio de estado</h3>
                  <p>
                    Según el flujo operativo, el producto puede pasar por:
                    pendiente, en preparación, listo, entregado.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>4. Comunicación operativa</h3>
                  <ul>
                    <li>Cocina o barra marca producto como listo.</li>
                    <li>
                      El mesero o capitán visualiza que el producto puede
                      entregarse.
                    </li>
                    <li>
                      Se reduce la necesidad de comunicación verbal y errores.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>
                      No marcar productos como listos si no han sido
                      terminados.
                    </li>
                    <li>Revisar comentarios antes de preparar.</li>
                    <li>
                      Priorizar productos por tiempo y orden de llegada.
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      Las áreas de producción trabajan con mayor orden,
                      trazabilidad y velocidad.
                    </p>
                  </div>
                </div>
              </article>

              {/* 07 — Cobro y cierre de cheque */}
              <article id="manual-7" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">07</span>
                  <h2>Cobro y cierre de cheque</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Cobrar correctamente una cuenta, registrar el método de
                    pago y cerrar el cheque en el sistema.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Cajero, mesero autorizado, capitán o gerente.</p>
                </div>

                <div className="pp-data-section">
                  <h3>1. Revisión del cheque</h3>
                  <ul>
                    <li>Buscar mesa o cheque abierto.</li>
                    <li>Revisar productos consumidos.</li>
                    <li>Validar cantidades, precios y descuentos.</li>
                    <li>Confirmar total.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Aplicación de descuentos</h3>
                  <ul>
                    <li>Solicitar autorización.</li>
                    <li>Seleccionar tipo de descuento.</li>
                    <li>Capturar motivo.</li>
                    <li>Registrar usuario que autoriza.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Registro de pago</h3>
                  <ul>
                    <li>
                      Seleccionar método de pago: efectivo, tarjeta,
                      transferencia, cortesía o mixto.
                    </li>
                    <li>Capturar monto recibido.</li>
                    <li>Confirmar cambio si aplica.</li>
                    <li>Guardar pago.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Cierre de cheque</h3>
                  <ul>
                    <li>
                      Confirmar que el total pagado cubre el total del cheque.
                    </li>
                    <li>Cerrar cheque.</li>
                    <li>Generar ticket.</li>
                    <li>Enviar impresión si aplica.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>No cerrar cheques con saldo pendiente.</li>
                    <li>Registrar correctamente métodos de pago mixtos.</li>
                    <li>Toda cortesía o descuento debe tener motivo.</li>
                    <li>El cierre debe quedar asociado a un turno de caja.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      El cheque queda pagado, cerrado y registrado dentro del
                      turno correspondiente.
                    </p>
                  </div>
                </div>
              </article>

              {/* 08 — Cancelaciones y descuentos */}
              <article id="manual-8" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">08</span>
                  <h2>Cancelaciones y descuentos</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Controlar cancelaciones y descuentos para evitar pérdidas,
                    errores operativos o mal uso del sistema.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Gerente, capitán, dueño o usuario autorizado.</p>
                </div>

                <div className="pp-data-section">
                  <h3>Proceso para cancelación</h3>
                  <ul>
                    <li>Seleccionar cheque abierto.</li>
                    <li>Elegir producto a cancelar.</li>
                    <li>Capturar motivo de cancelación.</li>
                    <li>
                      Solicitar autorización si el usuario no tiene permiso.
                    </li>
                    <li>Confirmar cancelación.</li>
                    <li>
                      El sistema registra producto cancelado, usuario que
                      solicitó, usuario que autorizó, motivo y fecha/hora.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Proceso para descuento</h3>
                  <ul>
                    <li>Seleccionar cheque.</li>
                    <li>Elegir tipo de descuento.</li>
                    <li>Capturar porcentaje o monto.</li>
                    <li>Registrar motivo.</li>
                    <li>Solicitar autorización.</li>
                    <li>Guardar descuento.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Motivos comunes</h3>
                  <ul>
                    <li>Error de captura.</li>
                    <li>Producto no disponible.</li>
                    <li>Queja del cliente.</li>
                    <li>Cortesía autorizada.</li>
                    <li>Promoción vigente.</li>
                    <li>Error de cocina o barra.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>Toda cancelación debe tener motivo.</li>
                    <li>
                      Todo descuento debe quedar ligado a un usuario
                      autorizado.
                    </li>
                    <li>
                      Los reportes deben permitir revisar cancelaciones por
                      usuario, producto y fecha.
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      La operación mantiene trazabilidad y control sobre
                      descuentos y cancelaciones.
                    </p>
                  </div>
                </div>
              </article>

              {/* 09 — Corte X y cierre de turno */}
              <article id="manual-9" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">09</span>
                  <h2>Corte X y cierre de turno</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Consultar ventas parciales, validar ingresos y cerrar
                    correctamente el turno de caja.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Cajero, gerente o dueño.</p>
                </div>

                <div className="pp-data-section">
                  <h3>Corte X</h3>
                  <p>
                    El corte X permite consultar el estado actual del turno sin
                    cerrarlo.
                  </p>
                  <ul>
                    <li>Ingresar al módulo de caja.</li>
                    <li>Seleccionar turno activo.</li>
                    <li>
                      Consultar resumen: saldo inicial, ventas en efectivo,
                      ventas con tarjeta, transferencias, egresos, ingresos
                      adicionales y total esperado.
                    </li>
                    <li>Imprimir o guardar reporte si aplica.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Cierre de turno</h3>
                  <ul>
                    <li>Contar efectivo físico.</li>
                    <li>Capturar efectivo declarado.</li>
                    <li>Validar ventas por método de pago.</li>
                    <li>Registrar observaciones.</li>
                    <li>Confirmar cierre.</li>
                    <li>
                      El sistema calcula la diferencia: saldo esperado vs.
                      saldo declarado.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>No cerrar turno sin contar efectivo.</li>
                    <li>Registrar diferencias y observaciones.</li>
                    <li>El cierre debe generar reporte de trazabilidad.</li>
                    <li>
                      Una vez cerrado, el turno no debe modificarse sin
                      autorización.
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      El turno queda cerrado con totales, diferencias y
                      responsables registrados.
                    </p>
                  </div>
                </div>
              </article>

              {/* 10 — Reportes y consulta por WhatsApp */}
              <article id="manual-10" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">10</span>
                  <h2>Reportes gerenciales y consulta por WhatsApp</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Permitir que dueños y gerentes consulten información clave
                    del restaurante desde el panel o desde WhatsApp.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>Dueño, gerente o administrador.</p>
                </div>

                <div className="pp-data-section">
                  <h3>Reportes principales</h3>
                  <ul>
                    <li>Ventas del día.</li>
                    <li>Ventas por periodo.</li>
                    <li>Ventas por producto.</li>
                    <li>Productos más vendidos.</li>
                    <li>Cancelaciones.</li>
                    <li>Descuentos.</li>
                    <li>Ventas por mesero.</li>
                    <li>Métodos de pago.</li>
                    <li>Cortes de caja.</li>
                    <li>Comparativos de ventas.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Consulta desde panel</h3>
                  <ul>
                    <li>Ingresar al dashboard.</li>
                    <li>Seleccionar rango de fechas.</li>
                    <li>Consultar indicadores.</li>
                    <li>Filtrar por área, usuario o producto.</li>
                    <li>Exportar o revisar detalle si aplica.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Consulta desde WhatsApp</h3>
                  <p>El usuario autorizado puede hacer preguntas como:</p>
                  <ul>
                    <li>¿Cuánto vendí hoy?</li>
                    <li>¿Cuánto vendí ayer?</li>
                    <li>¿Qué producto se vendió más?</li>
                    <li>¿Quién canceló más productos?</li>
                    <li>¿Cuánto tengo en descuentos hoy?</li>
                    <li>¿Cómo va la caja?</li>
                  </ul>
                  <p>
                    El sistema interpreta la pregunta, consulta la fuente de
                    datos correspondiente y responde con información resumida y
                    accionable.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>Solo usuarios autorizados pueden consultar reportes.</li>
                    <li>La información se filtra por restaurante.</li>
                    <li>
                      No se debe mostrar información de otros restaurantes.
                    </li>
                    <li>
                      Las consultas deben quedar registradas para auditoría.
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      El dueño o gerente puede tomar decisiones rápidas con
                      información actualizada.
                    </p>
                  </div>
                </div>
              </article>

              {/* 11 — Inventario y recetas */}
              <article id="manual-11" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">11</span>
                  <h2>Inventario y recetas</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Controlar insumos, recetas, consumos y existencias del
                    restaurante para mejorar costos y reducir mermas.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>
                    Administrador de inventario, gerente, cost controller o
                    encargado de compras.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>1. Alta de insumos</h3>
                  <ul>
                    <li>Crear insumo.</li>
                    <li>Capturar unidad de medida.</li>
                    <li>Definir costo unitario.</li>
                    <li>Asignar categoría.</li>
                    <li>Definir stock mínimo.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Alta de recetas</h3>
                  <ul>
                    <li>Seleccionar producto final.</li>
                    <li>Agregar insumos necesarios.</li>
                    <li>Capturar cantidad por porción.</li>
                    <li>Calcular costo teórico.</li>
                    <li>Guardar receta.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Registro de compras</h3>
                  <ul>
                    <li>Capturar proveedor.</li>
                    <li>Registrar insumos comprados.</li>
                    <li>Capturar cantidad, costo y fecha.</li>
                    <li>Actualizar existencias.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Consumo automático</h3>
                  <p>Cuando se vende un producto:</p>
                  <ul>
                    <li>El sistema identifica la receta.</li>
                    <li>Descuenta insumos correspondientes.</li>
                    <li>Actualiza inventario teórico.</li>
                    <li>Genera trazabilidad de consumo.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>5. Conteo físico</h3>
                  <ul>
                    <li>Realizar conteo físico por área.</li>
                    <li>Comparar contra inventario teórico.</li>
                    <li>Registrar diferencias.</li>
                    <li>Analizar posibles mermas, errores o robos.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Controles</h3>
                  <ul>
                    <li>
                      No vender productos sin receta cuando se requiera control
                      de inventario.
                    </li>
                    <li>
                      Revisar diferencias entre inventario físico y teórico.
                    </li>
                    <li>Registrar compras oportunamente.</li>
                    <li>Mantener costos actualizados.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      El restaurante obtiene mayor control sobre costos,
                      insumos y rentabilidad.
                    </p>
                  </div>
                </div>
              </article>

              {/* 12 — Soporte e incidencias */}
              <article id="manual-12" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">12</span>
                  <h2>Soporte, incidencias y mejora continua</h2>
                </div>

                <div className="pp-data-section">
                  <h3>Objetivo</h3>
                  <p>
                    Registrar, atender y dar seguimiento a errores, incidencias
                    o solicitudes de mejora dentro de Growthsuite POS.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Responsable</h3>
                  <p>
                    Equipo Growthsuite, administrador del restaurante o usuario
                    reportante.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Tipos de incidencias</h3>
                  <ul>
                    <li>Error de login.</li>
                    <li>Problema con comandero.</li>
                    <li>Producto no aparece.</li>
                    <li>Error en precio.</li>
                    <li>Impresión incorrecta.</li>
                    <li>Problema en caja.</li>
                    <li>Diferencia en reportes.</li>
                    <li>Error de permisos.</li>
                    <li>Solicitud de nueva funcionalidad.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>1. Registro de incidencia</h3>
                  <p>El usuario debe reportar:</p>
                  <ul>
                    <li>Restaurante.</li>
                    <li>Usuario afectado.</li>
                    <li>Módulo afectado.</li>
                    <li>Descripción del problema.</li>
                    <li>Captura de pantalla, si aplica.</li>
                    <li>Fecha y hora aproximada.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>2. Clasificación</h3>
                  <ul>
                    <li>Crítica: impide operar.</li>
                    <li>Alta: afecta una función importante.</li>
                    <li>Media: afecta parcialmente.</li>
                    <li>Baja: mejora o ajuste menor.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>3. Atención</h3>
                  <ul>
                    <li>Revisar logs.</li>
                    <li>Replicar el problema.</li>
                    <li>Identificar causa.</li>
                    <li>Corregir configuración o código.</li>
                    <li>Validar solución.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>4. Cierre</h3>
                  <ul>
                    <li>Confirmar con el usuario.</li>
                    <li>Documentar solución.</li>
                    <li>Registrar aprendizaje.</li>
                    <li>Agregar mejora al roadmap si aplica.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado esperado</strong>
                    <p>
                      Las incidencias se atienden de manera ordenada, medible y
                      documentada.
                    </p>
                  </div>
                </div>
              </article>

              {/* Control documental */}
              <article id="control-documental" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">13</span>
                  <h2>Control documental</h2>
                </div>

                <div className="pp-card-grid">
                  <div className="pp-info-card">
                    <span className="pp-info-label">Versión</span>
                    <span className="pp-info-value">1.0</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Responsable</span>
                    <span className="pp-info-value">Growthsuite</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Última actualización</span>
                    <span className="pp-info-value">Abril 2026</span>
                  </div>
                </div>

                <p>
                  Este documento puede publicarse como evidencia de manuales de
                  procesos dentro de un repositorio digital, página interna,
                  carpeta en la nube o sección documental de Growthsuite.
                </p>
              </article>

              {/* Resumen ejecutivo */}
              <article id="resumen-ejecutivo" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">14</span>
                  <h2>Resumen ejecutivo</h2>
                </div>

                <p>
                  Growthsuite cuenta con procesos documentados para la
                  configuración, operación y control de un sistema POS
                  especializado en restaurantes. Estos manuales cubren desde la
                  alta inicial del restaurante, usuarios y productos, hasta la
                  operación diaria de comandero, caja, producción, reportes,
                  inventario, control de cancelaciones, cierres e incidencias.
                </p>
                <p>
                  La existencia de estos manuales permite escalar la operación
                  a múltiples restaurantes, capacitar usuarios de forma
                  consistente y asegurar que la plataforma pueda replicarse de
                  manera ordenada en diferentes unidades de negocio.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
