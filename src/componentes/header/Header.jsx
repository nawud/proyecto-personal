import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/img/logo.png';

function Header() {
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
  };

  return (
    <header className="header-bg">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
      <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="THEWAN Logo" 
            className="logo-img hover:opacity-90 transition-opacity duration-300" 
          />
        </Link>

        <button
          className={`hamburguesa ${menuActivo ? 'activo' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span className="barra"></span>
          <span className="barra"></span>
          <span className="barra"></span>
        </button>

        <ul className={`menu ${menuActivo ? 'activo' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuActivo(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/servicios" onClick={() => setMenuActivo(false)}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/quien-soy" onClick={() => setMenuActivo(false)}>
              Quien soy
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setMenuActivo(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;