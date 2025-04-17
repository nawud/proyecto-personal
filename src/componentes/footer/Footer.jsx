import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/avisolegal" className="footer-link">
            Aviso Legal
          </Link>
          <Link to="/privacidad" className="footer-link">
            Política de Privacidad
          </Link>
          <Link to="/cookies" className="footer-link">
            Política de Cookies
          </Link>
        </div>

        <div className="contact-section">
          <address>
            Contacto:{" "}
            <a href="mailto:duwan17@gmail.com" className="contact-email">
              duwan17@gmail.com
            </a>
          </address>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/nawud"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/miller-duwan/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top"
          aria-label="Volver arriba"
        >
          <svg 
            className="arrow-up"
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
