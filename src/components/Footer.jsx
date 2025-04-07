import { Link } from 'react-router-dom';
import './Footer.scss';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo o nombre */}
        <div className="footer__logo">
          <h2>AeVision</h2>
        </div>

        {/* Navegación */}
        <ul className="footer__nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>

        {/* Redes sociales */}
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} AeVision. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
