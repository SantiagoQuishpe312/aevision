// src/components/SeccionPrincipal.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SeccionPrincipal.scss';

import fondo1 from '../assets/img/fondo1.png';
import fondo2 from '../assets/img/fondo2.png';
import fondo3 from '../assets/img/fondo3.png';
import fondo4 from '../assets/img/fondo4.png';
import fondo5 from '../assets/img/fondo5.png';
import fondo6 from '../assets/img/fondo6.png';

const imagenes = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6];

export default function SeccionPrincipal() {
  const [imagenActual, setImagenActual] = useState(imagenes[0]);

  useEffect(() => {
    let index = 0;
    const intervalo = setInterval(() => {
      index = (index + 1) % imagenes.length;
      setImagenActual(imagenes[index]);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="seccion-principal">
      <div className="seccion-principal__overlay">

        <p className="seccion-principal__titulo">
          Somos apasionados de la tecnología que <span className="seccion-principal__resaltado">inspira</span> un futuro <span className="seccion-principal__resaltado">sostenible</span>.
        </p>

        {/* Imagen visible que cambia */}
        <img src={imagenActual} alt="Tecnología ecológica" className="seccion-principal__imagen-dinamica" />

        <div className="seccion-principal__botones">
          <Link to="/dashboards">
            <button className="seccion-principal__boton">Descubre nuestro impacto</button>
          </Link>
          <Link to="/donations">
            <button className="seccion-principal__boton">Donaciones</button>
          </Link>
        </div>

        <p className="seccion-principal__pie-texto">
          <span className="seccion-principal__resaltado">Innovamos</span>, <span className="seccion-principal__resaltado">transformamos</span> y <span className="seccion-principal__resaltado">actuamos</span>. Empresa tecnológica.
        </p>

      </div>
    </section>
  );
}
