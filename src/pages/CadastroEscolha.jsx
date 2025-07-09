import { Link } from 'react-router-dom';
import { Mail, Facebook, Globe } from 'lucide-react';

export default function CadastroEscolha() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-green-700">VersoZap</h1>
      </div>

      <h2 className="text-2xl font-bold mb-6">Cadastrar</h2>

      <div className="w-full max-w-sm flex flex-col gap-4">
        <Link to="/cadastro/email" className="bg-green-600 text-white py-3 rounded-lg flex justify-center items-center gap-2">
          <span>Continuar com e-mail</span>
          <span>📧</span>
        </Link>

        <Link to="/cadastro/google" className="bg-gray-100 py-3 rounded-lg flex justify-center items-center gap-2">
          <span>Continuar com Google</span>
          <span>🌐</span>
        </Link>

        <Link to="/cadastro/facebook" className="bg-gray-100 py-3 rounded-lg flex justify-center items-center gap-2">
          <span>Continuar com Facebook</span>
          <span>📘</span>
        </Link>

        <Link to="/login" className="text-green-600 text-sm mt-2">
          Já tenho uma conta →
        </Link>
      </div>

      <div className="text-xs text-gray-500 mt-10 space-y-1">
        <p>Termos de uso</p>
        <p>Política de privacidade</p>
      </div>
    </div>
  );
}