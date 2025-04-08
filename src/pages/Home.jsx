import './Home.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="home__overlay">
        <div className="home__hero-content">
        <h1>Bienvenido a un Futuro Ecológico</h1>
            <p>Juntos podemos construir un mundo más sostenible 🌱</p>
            <button className="home__btn">Saber más</button>
          </div>
        </div>
      </section>

      {/* Rentabilidad */}
      <section className="home__rentabilidad">
        <h2>Mejor rentabilidad para tu negocio</h2>
        <p>Incrementa la cantidad y la pureza del material seleccionado. Reduce las dificultades para la mano de obra y minimiza el gasto operativo.</p>
      </section>

      {/* IA */}
      <section className="home__ia">
        <h2>Soluciones basadas en IA</h2>
        <p>Robots con IA para la clasificación de residuos, adaptables, robustos y fiables.</p>
        <p><strong>Matías</strong> explica cómo la planta de RSU de Algimia, gestionada por Urbaser, automatizó la recuperación de reciclables en la línea de residuos.</p>
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
            <img src="https://images.unsplash.com/photo-1581091870620-fd1a1d0c9f0e" alt="Reciclaje automatizado 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1616627987399-7e94e03267c0" alt="Robots clasificadores" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1508595142481-3b4d57b85452" alt="Centro de reciclaje moderno" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Casos prácticos */}
      <section className="home__materiales">
        <h2>Casos prácticos por material</h2>
        <p>Clases ilimitadas de residuos. Resuelto.</p>
        <div className="materiales-grid">
          <div className="material-card">📦 Papel y cartón</div>
          <div className="material-card">🔩 Metales no ferrosos</div>
          <div className="material-card">♻️ Plástico</div>
          <div className="material-card">📦 Envases de cartón</div>
          <div className="material-card">💻 RAEE</div>
        </div>
      </section>

      {/* Logos de aliados */}
      <section className="home__logos">
        <h2>Trabajando con líderes e innovadores</h2>
        <div className="logos-grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Recycle001.svg/512px-Recycle001.svg.png" alt="Aliado 1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" alt="Aliado 2" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Logo_UNESCO.svg/512px-Logo_UNESCO.svg.png" alt="Aliado 3" />
        </div>
      </section>

      {/* CTA */}
      <section className="home__cta">
        <h2>¿Quieres explorar cómo la automatización podría optimizar tu planta?</h2>
        <button className="home__btn">Habla con un experto</button>
      </section>
    </div>
  );
}

export default Home;
