import './Home.scss';

function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__overlay">
          <div className="home__content">
            <h1>Bienvenido a un Futuro Ecológico</h1>
            <p>Juntos podemos construir un mundo más sostenible 🌱</p>
            <button className="home__btn">Saber más</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
