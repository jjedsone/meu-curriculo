import React from 'react';
import LinhaDoTempo from './LinhaDoTempo';
<LinhaDoTempo />


const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-blue-700">
      <h1 className="text-4xl font-extrabold mb-4">Jedson Fernandes</h1>
      <h2 className="text-xl text-gray-600 mb-6">Profissional de TI | Ex-eletricista com transição para tecnologia</h2>

      <p className="text-gray-800 mb-8">
        Bem-vindo ao meu currículo! Tenho uma trajetória sólida que começou na área elétrica, onde atuei por vários anos, e migrei para o setor de tecnologia.
        Hoje, sou apaixonado por suporte técnico, desenvolvimento web e automações com Python. Busco crescimento contínuo, combinando minha bagagem técnica com inovação e foco em resultados.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">💼 Experiência Profissional</h3>
          <ul className="text-gray-600 mt-2 list-disc list-inside">
            <li>Suporte Técnico – 1 ano e 6 meses</li>
            <li>Desenvolvimento Web – React, Tailwind, Next.js</li>
            <li>Automação com Python e APIs</li>
            <li>Eletricista – +8 anos em obras e instalações industriais e prediais</li>
            <li>Auxiliar de Escritório – Lojas Eskala</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">🎯 Objetivo</h3>
          <p className="text-gray-600 mt-2">
            Alcançar R$ 5.000/mês em até 12 meses, unindo evolução profissional com geração de renda extra em TI. 
            Estou sempre em busca de oportunidades para aplicar soluções criativas, especialmente em ambientes desafiadores.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
