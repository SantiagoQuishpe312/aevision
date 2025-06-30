// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import './Navbar.scss'; // Asegúrate de tener el CSS en este archivo
import Logo from '../assets/img/logo.png'
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [hidden, setHidden] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > scrollPos && currentScroll > 50) {
        setHidden(true); // Ocultar navbar
      } else {
        setHidden(false); // Mostrar navbar
      }
      setScrollPos(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
   <header className={`navbar ${hidden ? 'hidden' : ''}`}>
  <div className="navbar-container">
    <button className="menu-toggle" onClick={toggleSidebar}>☰</button>

    <div className="logo-wrapper">
      <img src={Logo} alt="Logo" className="logo" />
    </div>

    <div className="right-icons">
      <a href="mailto:contacto@empresa.com" className="mail-icon" title="Contáctanos">
        📧
      </a>
    </div>

    <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>✖</button>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Puertas Abiertas</a></li>
        <li><a href="#">Receta del Futuro</a></li>
        <li><a href="#">Relación con Inversores</a></li>
        <li><a href="#">Prensa</a></li>
        <li><a href="#">Transformación Digital</a></li>
        <li><a href="#">Franquicias</a></li>
        <li><a href="#">Contáctanos</a></li>
      </ul>
    </nav>
  </div>
</header>

  );
}
