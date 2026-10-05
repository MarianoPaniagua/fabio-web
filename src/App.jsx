import { useState } from 'react';

const navigation = [
  ['inicio', 'Inicio'],
  ['acerca', 'Acerca de mí'],
  ['servicios', 'Servicios'],
  ['modalidad', 'Modalidad de trabajo'],
  ['contacto', 'Contacto'],
];

const consultingServices = [
  'Diagnóstico organizacional y definición de prioridades.',
  'Revisión de la estructura, los roles y las responsabilidades.',
  'Ordenamiento de procesos y formas de trabajo.',
  'Acompañamiento en cambios, crecimiento o reorganización.',
  'Desarrollo de líderes y mejora de la gestión del desempeño.',
  'Detección de necesidades y diseño de acciones de capacitación.',
  'Abordaje de conflictos y mejora de la comunicación.',
  'Encuestas de clima y elaboración de planes de mejora.',
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <aside id="header" className={menuOpen ? 'menu-open' : ''}>
      <header className="brand-header">
        <img
          className="brand-logo"
          src="./images/tyc-mark-round.png"
          alt="Símbolo TYC"
        />
        <div className="brand-copy">
          <h1 className="brand-title">Talento y Conocimiento</h1>
        </div>
      </header>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {menuOpen ? 'Cerrar menú' : 'Menú'}
      </button>
      <nav id="site-navigation" aria-label="Navegación principal">
        <ul>
          {navigation.map(([id, label], index) => (
            <li key={id}>
              <a className={index === 0 ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={className}>
      <div className="container">{children}</div>
    </section>
  );
}

function ServiceCard({ id, title, wide = false, isOpen, onToggle, children }) {
  const panelId = `service-panel-${id}`;

  return (
    <article className={`service-card${wide ? ' service-card-wide' : ''}${isOpen ? ' service-card-open' : ''}`}>
      <h4>
        <button
          className="service-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {title}
        </button>
      </h4>
      <div id={panelId} className={`service-content${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="service-content-inner">{children}</div>
      </div>
    </article>
  );
}

function App() {
  const [openService, setOpenService] = useState(null);

  function toggleService(serviceId) {
    setOpenService((currentService) => currentService === serviceId ? null : serviceId);
  }

  return (
    <>
      <Header />
      <div id="wrapper">
        <main id="main">
          <section id="inicio" className="hero-section">
            <div className="container hero-content">
              <h2>Acompañamiento para decidir y avanzar</h2>
              <p>Acompaño a propietarios, gerentes y líderes de pymes, emprendimientos y empresas familiares en los desafíos de organizar, conducir y hacer crecer sus equipos.</p>
              <p>Integro la mirada de la psicología laboral con una perspectiva de gestión para ayudar a comprender qué está pasando, tomar decisiones y llevar adelante cambios posibles en la realidad de cada organización.</p>
              <p>Trabajo junto a las personas y los equipos, en la empresa o de manera remota, con atención a los desafíos cotidianos y a la incertidumbre del contexto.</p>
            </div>
          </section>

          <Section id="acerca">
            <p className="eyebrow">Experiencia y enfoque</p>
            <h3>Una mirada que integra personas y gestión</h3>
            <p>Soy psicólogo laboral, Magíster en Administración y docente en Psicosociología Organizacional. Cuento con más de 30 años de experiencia como asesor de empresas privadas, emprendimientos y organizaciones de distintos tamaños y actividades.</p>
            <p>A lo largo de mi trayectoria trabajé con empresas comerciales, industriales, de servicios y de la cadena agroindustrial, entre ellas negocios familiares, distribuidoras, comercios, empresas de logística, producción y servicios profesionales.</p>
            <p>Mi trabajo combina dos aportes: participar en las decisiones del negocio desde una mirada estratégica y acompañar a las personas para que los cambios puedan ponerse en práctica.</p>
          </Section>

          <Section id="servicios" className="services-section">
            <p className="eyebrow">En qué puedo acompañarte</p>
            <h3>Servicios</h3>
            <div className="service-grid">
              <ServiceCard id="consultoria" title="Consultoría organizacional" wide isOpen={openService === 'consultoria'} onToggle={() => toggleService('consultoria')}>
                <p>Trabajo con propietarios, gerentes y equipos para comprender sus desafíos y encontrar formas concretas de mejorar la organización y la gestión.</p>
                <ul>{consultingServices.map((service) => <li key={service}>{service}</li>)}</ul>
                <p>Cada intervención se adapta a la situación, los recursos y los objetivos de la empresa.</p>
              </ServiceCard>

              <ServiceCard id="empresas-familiares" title="Empresas familiares" isOpen={openService === 'empresas-familiares'} onToggle={() => toggleService('empresas-familiares')}>
                <p>Acompaño a empresas familiares en los desafíos que surgen cuando se entrelazan los vínculos familiares y las decisiones del negocio.</p>
                <p>Podemos trabajar sobre la claridad de roles, la delegación, la comunicación, los acuerdos entre familiares y la preparación de cambios en la conducción o en la organización.</p>
              </ServiceCard>

              <ServiceCard id="seleccion-personal" title="Búsqueda y selección de personal" isOpen={openService === 'seleccion-personal'} onToggle={() => toggleService('seleccion-personal')}>
                <p>Ayudo a las empresas a definir qué perfil necesitan y a encontrar personas que puedan desempeñarse en el puesto y adaptarse a la organización.</p>
                <p>El proceso puede incluir el relevamiento del perfil, la búsqueda de candidatos, entrevistas, evaluación y acompañamiento en la decisión de incorporación. Trabajo en búsquedas de profesionales, especialistas, responsables de área, mandos medios y posiciones gerenciales.</p>
              </ServiceCard>

              <ServiceCard id="asesoria-individual" title="Asesoría profesional individual" wide isOpen={openService === 'asesoria-individual'} onToggle={() => toggleService('asesoria-individual')}>
                <p>Ofrezco sesiones de asesoría profesional, con enfoque de coaching, para quienes quieren desarrollar sus habilidades de gestión y liderazgo.</p>
                <p>Están dirigidas a propietarios, gerentes, líderes, supervisores y jóvenes profesionales que buscan revisar situaciones de trabajo, preparar conversaciones importantes, fortalecer su rol o pensar próximos pasos profesionales.</p>
              </ServiceCard>
            </div>
          </Section>

          <Section id="modalidad" className="work-section">
            <p className="eyebrow">Un proceso adecuado a cada necesidad</p>
            <h3>Modalidad de trabajo</h3>
            <div className="work-grid">
              <article>
                <h4>Un primer recorrido para ordenar prioridades</h4>
                <p>Podemos comenzar con un proceso de <strong>4 u 8 encuentros</strong>, según la necesidad. Revisamos una situación concreta, identificamos prioridades y acordamos acciones posibles. Durante el recorrido, acompaño la puesta en práctica y, al cierre, evaluamos próximos pasos. La continuidad queda a elección del cliente.</p>
              </article>
              <article>
                <h4>Asesoría mensual</h4>
                <p>Acompañamiento periódico para conversar sobre decisiones, situaciones del equipo y cambios que van surgiendo en la organización.</p>
              </article>
              <article>
                <h4>Proyecto concreto</h4>
                <p>Intervención con un objetivo y un alcance acordados, como un diagnóstico, una revisión de roles o el ordenamiento de un proceso de trabajo.</p>
              </article>
              <article>
                <h4>Presencial y remoto</h4>
                <p>Trabajo presencialmente en las instalaciones del cliente y puedo combinar los encuentros con reuniones remotas. También ofrezco asesoría individual por videollamada. La modalidad se define según el servicio, la ubicación y las necesidades de cada persona u organización.</p>
              </article>
            </div>
          </Section>

          <Section id="contacto" className="contact-section">
            <div className="contact-grid">
              <div className="contact-brand">
                <img src="./images/tyc-mark-round.png" alt="" />
                <h3>Talento y Conocimiento</h3>
                <p>Acompañamiento cercano para tomar decisiones y llevar adelante cambios en tu organización.</p>
              </div>

              <div className="contact-info">
                <p className="eyebrow">Contacto</p>
                <p>Podés comunicarte por teléfono, email o LinkedIn.</p>
                <ul className="contact-methods">
                  <li className="contact-method--details">
                    <span className="contact-icon" aria-hidden="true"><i className="fas fa-phone" /></span>
                    <div>
                      <a className="phone-placeholder" href="tel:2915652394">2915652394</a>
                      <p className="contact-detail">Lunes a Viernes de 9:00hs a 18:00hs</p>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon" aria-hidden="true"><i className="fas fa-envelope" /></span>
                    <div><a href="mailto:tyc@talentoyconocimiento.com">tyc@talentoyconocimiento.com</a></div>
                  </li>
                  <li className="contact-method--details">
                    <span className="contact-icon" aria-hidden="true"><i className="fab fa-whatsapp" /></span>
                    <div>
                      <a href="https://wa.me/2915652394" target="_blank" rel="noreferrer">2915652394</a>
                      <p className="contact-detail">Respuesta lo antes posible dentro de horario laboral</p>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon" aria-hidden="true"><i className="fab fa-linkedin-in" /></span>
                    <div><a href="https://www.linkedin.com/company/talento-y-conocimiento" target="_blank" rel="noreferrer">Talento y Conocimiento</a></div>
                  </li>
                </ul>
              </div>

              <div className="contact-coverage">
                <img className="argentina-map-watermark" src="./images/argentina-relief.png" alt="" />
                <h4>Modalidad de atención</h4>
                <div>
                  <strong>Presencial</strong>
                  <p>Bahía Blanca y la región</p>
                </div>
                <div>
                  <strong>Remota</strong>
                  <p>Atención en todo el país</p>
                </div>
              </div>
            </div>
            <a className="contact-mark-link" href="#inicio" aria-label="Volver al inicio">
              <img className="contact-mark-end" src="./images/tyc-y-round.png" alt="" />
            </a>
          </Section>
        </main>

        <footer id="footer">
          <div className="container footer-content">
            <ul className="copyright">
              <li>© 2026 Talento y Conocimiento. Todos los derechos reservados.</li>
            </ul>
            <p className="job-search">¿Estás buscando trabajo? Conocé las búsquedas laborales vigentes en <a href="https://www.linkedin.com/company/talento-y-conocimiento" target="_blank" rel="noreferrer">LinkedIn de Talento y Conocimiento</a>.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
