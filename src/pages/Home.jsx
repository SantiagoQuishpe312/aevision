import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import bin from '../assets/img/bin1.png';
import aiseLogo from '../assets/img/aise.png';
import asoLogo from '../assets/img/asociacion.png';
import laOfiLogo from '../assets/img/laofi.png';
import Alejandro from '../assets/img/foto1.jpg';
import fondo1 from '../assets/img/fondo1.png';
import fondo2 from '../assets/img/fondo2.png';
import fondo3 from '../assets/img/fondo3.png';
import fondo4 from '../assets/img/fondo4.png';
import fondo5 from '../assets/img/fondo5.png';
import fondo6 from '../assets/img/fondo6.png';
const imagenes = [fondo1, fondo2,
  fondo3, fondo4, fondo5,fondo6
];
import logo from '../assets/img/logo.png';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import SeccionPrincipal from '../components/SeccionPrincipal';

function Home() {

  const [imagenActual, setImagenActual] = useState(imagenes[0]);
  let index = 0;

  useEffect(() => {
    const intervalo = setInterval(() => {
      index = (index + 1) % imagenes.length;
      setImagenActual(imagenes[index]);
    }, 4000); // cambia cada 5 segundos



    return () => clearInterval(intervalo); // limpia el intervalo
  }, []);
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
  return (
    <div className="home">
      {/* Hero */}
      <SeccionPrincipal/>

      {/* Rentabilidad */}
      <section className="home__rentabilidad">
        <h2>Fusionamos tecnología y sostenibilidad para educar y empoderar hacia un futuro más consciente</h2>
        <h3>Valores que nos definen:</h3>
        <ul class="valores">
          <li>🌱 <strong>Sostenibilidad:</strong> Compromiso firme con el medio ambiente mediante tecnologías limpias.</li>
          <li>⚙️ <strong>Innovación:</strong> Creamos soluciones que redefinen la relación entre tecnología y entorno.</li>
          <li>🎨 <strong>Diseño funcional:</strong> Estética al servicio de la eficiencia y el impacto positivo.</li>
          <li>📚 <strong>Educación:</strong> Empoderamos comunidades a través del conocimiento ecológico.</li>
        </ul>
      </section>

      {/* IA */}
      <section className="home__ia">
        <div className="ia__content">
          <div className="ia__video">
            <div className="instagram-video">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/reel/DIgwkGhNVw-/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
              ></blockquote>
            </div>
          </div>

          <div className="ia__text">
            <h2>"BIN" El Contenedor Inteligente que clasifica los residuos con el sonido</h2>
            <p>Clasifica los residuos según el sonido que generan al caer. Una experiencia educativa y ecológica en tiempo real.</p>
            <div class="caracteristicas">
              <ul>
                <li>✅ Clasificación automática por audio</li>
                <li>✅ Tecnología sensorial integrada</li>
                <li>✅ Interfaz educativa para estudiantes y usuarios</li>
                <li>✅ Monitoreo en tiempo real de procesos de clasificación</li>
                <li>✅ Integración con plataformas de reciclaje y sostenibilidad</li>
                <li>✅ Algoritmos de aprendizaje automático para mejorar la precisión</li>
                <li>✅ Optimización de rutas para la recolección de residuos</li>
                <li>✅ Visualización de datos de impacto medioambiental en tiempo real</li>
                <li>✅ Diagnóstico predictivo para mantenimiento de equipos</li>
                <li>✅ Análisis de patrones de residuos para mejorar la clasificación</li>
                <li>✅ Automonitoreo y diagnóstico de errores en sistemas de IA</li>
                <li>✅ Plataformas de análisis para evaluar el impacto ecológico</li>
                <li>✅ Optimización de recursos energéticos en el proceso de reciclaje</li>
                <li>✅ Plataforma de capacitación y formación sobre reciclaje inteligente</li>
                <li>✅ Sistema de evaluación de la huella de carbono de cada material</li>
                <li>✅ Inteligencia artificial para detectar y clasificar residuos peligrosos</li>
                <li>✅ Plataforma interactiva para involucrar a la comunidad en la gestión de residuos</li>

              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Carrusel */}
      <section className="home__carrusel">
        <h2>Proyectos destacados</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img
              src={bin}
              alt="BIN"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Alejandro}
              alt="BIN"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={fondo2}
              alt="BIN"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="home__why">
        <div className="about__image">
          <img src={logo} alt="Clasificación de residuos" />
        </div>
        <div className="about__text">
          <h2>¿Por qué AE VISION? / Diferenciadores</h2>
          <h3>Comparación con otras soluciones</h3>
          <p>AE VISION ofrece soluciones avanzadas para la clasificación de residuos que superan las expectativas de otras tecnologías convencionales, mejorando la eficiencia, la sostenibilidad y la accesibilidad para los usuarios.</p>

          <blockquote>
            <p>“No solo recogemos basura. Escuchamos el futuro.”</p>
          </blockquote> </div>
      </section>
      {/* Casos prácticos */}
      <section className="home__materiales">
        <div className="materiales-grid">
          <div className="material-card">

            <h4>Tecnología limpia</h4>
            <i class="fa-solid fa-microchip"></i>          <p>Innovamos con soluciones que respetan el medio ambiente, utilizando tecnología limpia y sostenible.</p></div>
          <div className="material-card">

            <h4>Diseño funcional</h4>
            <i class="fa-solid fa-recycle"></i>

            <p>Diseños pensados para mejorar la experiencia del usuario, siendo fáciles de usar y altamente eficientes.</p></div>

          <div className="material-card">
            <h4>Aplicaciones educativas</h4>
            <i class="fa-solid fa-users"></i>
            <p>Contribuimos al aprendizaje mediante aplicaciones que educan sobre el reciclaje y la sostenibilidad.</p></div>
          <div className="material-card">
            <h4>Proyectos sostenibles</h4>
            <i class="fa-solid fa-diagram-project"></i>
            <p>Desarrollamos proyectos que no solo buscan la rentabilidad, sino también un impacto positivo en el planeta.</p></div>
        </div>
      </section>

      {/* Logos de aliados */}
      <section className="home__logos">
        <h2>Partnerships</h2>
        <div className="logos-grid">
          <a href='#'>
            <img
              src={aiseLogo}
              alt="Aliado 1 - AISE"
            />
          </a>
          <a href='https://ecuadoremprendedor.odoo.com/' target="_blank">
            <img
              src={asoLogo}
              alt="Aliado 2 - Asociación Ecuatoriana de Emprendedores"
            />
          </a>
          <a href='https://www.laofi.work/' target="_blank">
            <img
              src={laOfiLogo}
              alt="Aliado 3 - LaOfi"
            />
          </a>



        </div>


      </section>

      {/* CTA */}
      <section className="home__cta">
        <h2>¿Quieres explorar cómo la automatización podría mejorar el ambiente?</h2>
        <a href="https://wa.me/593990533966" target="_blank" rel="noopener noreferrer">
  <button className="home__btn">Habla con un experto</button>
</a>

      </section>
    </div>
  );
}

export default Home;
