import './About.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about">
      <header className="about__hero">
        <div className="about__hero-content" data-aos="fade-up">
          <h1>Convertir los residuos del mundo en recursos</h1>
          <p>
            Tradicionalmente, el coste de clasificar los recursos preciosos ha sido mayor que el valor obtenido de venderlos.
            Esto cambia hoy en día, gracias a la tecnología innovadora, basada en datos, que realiza la tarea de clasificar flujos de residuos – de forma más rápida, más inteligente y más fiable.
          </p>
        </div>
      </header>

      <main className="about__content">
        <section className="about__section" data-aos="fade-up">
          <p>
            Ya nos hemos instalado en diferentes ubicaciones por toda Europa y Estados Unidos.
            Trabaje con nosotros y añada valor a sus operaciones de clasificación de residuos a través de una mayor pureza y producción – obteniendo resultados reveladores.
          </p>
        </section>

        <section className="about__section" data-aos="fade-up">
          <h2>Nuestra misión</h2>
          <p>
            Ofrecer una recuperación de materiales más rentable gracias a una tecnología de clasificación robusta, fiable y efectiva.
          </p>
        </section>

        <section className="about__section" data-aos="fade-up">
          <h2>Partner de confianza. Resuelta.</h2>
          <p>
            En combinación con un apoyo continuo de principio a fin, le ayudaremos a beneficiarse de las soluciones correctas para sus necesidades.
          </p>
        </section>

        <section className="about__section" data-aos="fade-up">
          <h2>Tecnología de vanguardia</h2>
          <p>
            Recycleye en WasteNet ayuda a modernizar y a optimizar las operaciones de su planta de reciclaje de materiales.
            Es rápida, fácil de renovar y con una buena relación coste-eficacia.
          </p>
        </section>

        <section className="about__section" data-aos="fade-up">
          <h2>Asociaciones con líderes de la industria</h2>
          <p><strong>FANUC y Recycleye:</strong> Innovamos juntos para ofrecer las mejores soluciones a la clasificación de residuos.</p>
          <p><strong>Nuestros socios</strong></p>
          <p><strong>Nuestros inversores</strong></p>
          <p><strong>Nuestros premios</strong></p>
          <p><em>¿Quiere explorar cómo la automatización podría optimizar su planta?</em></p>
        </section>
      </main>
    </div>
  );
}

export default About;
