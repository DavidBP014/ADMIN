import React from 'react';
import { Link } from 'react-router-dom';
import '../common/Cabecera.css';
import logo from '../images/logo.png';

const Header = () => (
  <header className="header">
    <div className="logo-container">
    <img src={logo} alt="Logo" className="logo" />
      <span className="brand-name">JARDINES INGLES</span>
    </div>
    <nav className="navigation">
      <Link to="/" className="nav-link">USUARIOS</Link>
      <Link to="/jardines" className="nav-link">JARDINES</Link>
      <Link to="/contacto" className="nav-link">CONTACTOS</Link>
      <Link to="/evento" className="nav-link">EVENTO</Link>
      <Link to="/blog" className="nav-link">BLOG</Link>
    </nav>
  </header>
);

export default Header;
