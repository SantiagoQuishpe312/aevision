import './Home.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="home__overlay">
          <div className="home__hero-content">
            <h1>Bienvenido a un Futuro Ecológico</h1>
            <p>Juntos podemos construir un mundo más sostenible 🌱</p>
            <Link to="/dashboards"><button className="home__btn">Descubre nuestro impacto</button></Link>
            <Link to="/donations"><button className="home__btn">Donaciones</button></Link>

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
            <img
              src="https://cdn-icons-png.flaticon.com/512/3553/3553549.png"
              alt="Reciclaje de PET"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4022/4022065.png"
              alt="Reciclaje de Papel/Cartón"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2329/2329853.png"
              alt="Reciclaje de Aluminio"
            />
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
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046755.png"
            alt="Aliado 1 - Reciclaje"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Google_2015_logo.svg"
            alt="Aliado 2 - Google"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Logo_UNESCO.svg"
            alt="Aliado 3 - UNESCO"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/World_Wildlife_Fund_logo_2016.svg"
            alt="Aliado 4 - WWF"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg"
            alt="Aliado 5 - Apple"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Nike_logo.svg"
            alt="Aliado 6 - Nike"
          />
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
