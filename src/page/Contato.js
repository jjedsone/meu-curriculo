import React from 'react';

const Contato = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8">
        📞 Contato
      </h2>

      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 space-y-4 text-gray-700 text-base leading-relaxed">
       
        <p>
          <strong>WhatsApp:</strong> (11) 96839-6789
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:jedsonmede@gmail.com" className="text-blue-600 underline">jedsonmede@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/-jedsonfernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            linkedin.com/in/-jedsonfernandes
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contato;
