import React from "react";
import { FaLaptopCode, FaBolt, FaBuilding, FaTools, FaStore } from "react-icons/fa";

const Profissoes = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8">
        💼 Experiências Profissionais
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-800">

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaLaptopCode /> Técnico de Informática
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            1 ano e 6 meses prestando suporte, manutenção, formatação e redes.
            Atendimento a clientes e usuários finais.
          </p>
          <span className="block text-sm text-gray-500 mt-2">
            Jan 2023 – Atual
          </span>
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaBolt /> Eletricista – Consórcio Adtranz TSEA
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Atuação na Linha 13 – Jade. Instalações e manutenção elétrica.
          </p>
          <span className="block text-sm text-gray-500 mt-2">Nov 2017 – Fev 2019</span>
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaBolt /> Eletricista – Omnes Serviços Elétricos
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Serviços em instalações elétricas diversas. Experiência em duas passagens pela empresa.
          </p>
          <span className="block text-sm text-gray-500 mt-2">Set 2015 – Out 2017 / Ago 2019 – Out 2019</span>
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaBuilding /> Eletricista – Construmag Projetos
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Instalações em obras civis, leitura de projetos e execução conforme normas.
          </p>
          <span className="block text-sm text-gray-500 mt-2">Mai 2013 – Ago 2015</span>
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaTools /> Eletricista – Seleta Subempreiteira
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Serviços elétricos gerais em construção civil.
          </p>
          <span className="block text-sm text-gray-500 mt-2">Fev 2012 – Mai 2013</span>
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaTools /> Eletricista – Seleta RH
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Instalações elétricas em geral, trabalhando como terceirizado.
          </p>
          <span className="block text-sm text-gray-500 mt-2">Ago 2011 – Fev 2012</span>
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaStore /> Auxiliar de Escritório – Lojas Eskala
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Atendimento administrativo, controle de documentos e suporte ao setor de vendas.
          </p>
          <span className="block text-sm text-gray-500 mt-2">Jul 2007 – Out 2010</span>
        </div>

      </div>
    </div>
  );
};

export default Profissoes;
