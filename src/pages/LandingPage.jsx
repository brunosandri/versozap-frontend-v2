// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-green-700 mb-4">VersoZap</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Receba diariamente trechos da Bíblia direto no seu WhatsApp. Escolha a versão, o plano de leitura e o horário. A Palavra ao seu alcance todos os dias.
      </p>
      <Link to="/cadastro">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg shadow-md transition-all">
          Começar agora
        </button>
      </Link>
      <p className="text-sm text-gray-500 mt-4">100% gratuito no plano de leitura padrão</p>
    </div>
  );
}
