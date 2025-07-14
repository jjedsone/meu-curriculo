import React from 'react';

const LinhaDoTempo = () => {
  const experiencias = [
    {
      ano: '2023 - Atual',
      cargo: 'Técnico de Suporte e Desenvolvedor Web',
      detalhes: 'Atuação com React, Tailwind, Next.js, Python e APIs.',
    },
    {
      ano: '2019 - 2021',
      cargo: 'Eletricista – Omnes Serviços Elétricos',
      detalhes: 'Instalações elétricas em cenários e ambientes comerciais.',
    },
    {
      ano: '2017 - 2019',
      cargo: 'Eletricista – Consórcio Adtranz TSEA (Linha 13 - Jade)',
      detalhes: 'Projetos de infraestrutura elétrica de grande porte.',
    },
    {
      ano: '2015 - 2017',
      cargo: 'Eletricista – Omnes Serviços Elétricos',
      detalhes: 'Trabalho com foco em instalações prediais e industriais.',
    },
    {
      ano: '2013 - 2015',
      cargo: 'Eletricista – Construmag',
      detalhes: 'Atuação em projetos de construção civil com instalações elétricas.',
    },
    {
      ano: '2012 - 2013',
      cargo: 'Eletricista – Seleta Subempreiteira',
      detalhes: 'Experiência prática em obras e serviços terceirizados.',
    },
    {
      ano: '2011 - 2012',
      cargo: 'Eletricista – Seleta Recursos Humanos',
      detalhes: 'Primeiras experiências com instalação elétrica profissional.',
    },
    {
      ano: '2007 - 2010',
      cargo: 'Auxiliar de Escritório – Lojas Eskala',
      detalhes: 'Atendimento, organização e suporte administrativo.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">🕒 Linha do Tempo Profissional</h2>
      <div className="relative border-l-4 border-blue-600 ml-4">
        {experiencias.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1.5"></div>
            <time className="text-sm text-gray-500">{exp.ano}</time>
            <h3 className="text-lg font-semibold text-blue-800">{exp.cargo}</h3>
            <p className="text-gray-700">{exp.detalhes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinhaDoTempo;
