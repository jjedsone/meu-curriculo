import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // Remove as classes antigas
    document.documentElement.classList.remove("light", "dark");

    if (theme !== "system") {
      document.documentElement.classList.add(theme);
    }
    // Se for system, remove todas as classes para respeitar o sistema
  }, [theme]);

  return (
    <footer className="footer">
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/profissoes">Profissões</Link>
        <Link to="/jornada">Jornada</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <div className="statusTheme">
        <span>● All systems normal</span>
        <label htmlFor="themeSelect" style={{ display: 'none' }}>Select theme</label>
        <select
          id="themeSelect"
          name="theme"
          value={theme}
          onChange={e => setTheme(e.target.value)}
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="copy">
        © 2025, Jedson Inc.
      </div>
    </footer>
  );
};

export default Footer;
