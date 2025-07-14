import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Profissoes from "./page/Profissoes";
import Jornada from "./page/Jornada";
import Contato from "./page/Contato";
import Footer from "./page/footer"; // Certifique-se de que o arquivo é Footer.jsx ou Footer.js

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 flex flex-col">
      {/* Navbar estilo LinkedIn */}
      <Navbar />

      {/* Conteúdo principal que cresce para preencher o espaço */}
      <main className="container max-w-4xl mx-auto px-4 py-6 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profissoes" element={<Profissoes />} />
          <Route path="/jornada" element={<Jornada />} />
          <Route path="/contato" element={<Contato />} />
          {/* Rota fallback opcional */}
          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
      </main>

      {/* Footer visível em todas as páginas */}
      <Footer />
    </div>
  );
}

export default App;
