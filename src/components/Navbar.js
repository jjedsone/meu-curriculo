import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Route, Mail } from 'lucide-react'; // Importa os ícones

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="text-xl font-bold">Jedson Fernandes</h1>
      <div className="flex gap-4 items-center">
        <Link to="/" className="nav-link flex items-center gap-1">
          <Home size={18} />
          Início
        </Link>
        <Link to="/profissoes" className="nav-link flex items-center gap-1">
          <Briefcase size={18} />
          Profissões
        </Link>
        <Link to="/jornada" className="nav-link flex items-center gap-1">
          <Route size={18} />
          Jornada
        </Link>
        <Link to="/contato" className="nav-link flex items-center gap-1">
          <Mail size={18} />
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
