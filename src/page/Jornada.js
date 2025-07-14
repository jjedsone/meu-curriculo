import React from "react";

const Jornada = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8">
        🚀 Minha Jornada Profissional
      </h2>

      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
        <ul className="list-disc pl-5 space-y-4 text-gray-700 text-base leading-relaxed">
          <li>
            Iniciei minha carreira como <strong>Auxiliar de Escritório</strong> nas Lojas Eskala, onde aprendi organização, atendimento ao público e trabalho em equipe.
          </li>
          <li>
            Transitei para a área de elétrica, atuando como <strong>Eletricista de Instalações</strong> em obras, indústrias e grandes projetos como a Linha 13 da CPTM. Aprimorei minha disciplina, leitura de projetos, segurança e execução técnica.
          </li>
         
          <li>
            Decidi migrar para a tecnologia e hoje atuo como <strong>Técnico de Informática</strong>, com experiência sólida em suporte técnico, montagem de computadores e redes.
          </li>
          <li>
            Estou me formando em <strong>Análise e Desenvolvimento de Sistemas</strong> e desenvolvo projetos com <strong>React, Tailwind, Next.js e automações com Python</strong>.
          </li>
          <li>
            Minha missão é unir essa bagagem técnica e criativa para entregar soluções reais, funcionais e inovadoras no mundo da tecnologia.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Jornada;
