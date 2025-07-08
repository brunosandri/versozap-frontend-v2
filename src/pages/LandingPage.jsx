import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
     {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/versozap-frontend-v2.vercel.app/logoversozap.png" alt="VersoZap" className="h-6" />
          <span className="text-xl font-semibold">Versozap</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm hover:underline">Preços</a>
          <div className="flex gap-2">
            <a href="#" className="text-sm hover:underline">Entrar</a>
            <a href="#" className="px-4 py-1 rounded bg-gray-100 text-sm hover:bg-gray-200">Cadastrar</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-6 py-20 gap-16">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Receba <br />
            <span className="text-emerald-500">trechos da bíblia</span> <br />
            diariamente no seu Whatsapp
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Escolha a versão, o plano de leitura e o horário. A Palavra ao seu alcance todos os dias.
          </p>
          <a
            href="#"
            className="inline-block mt-8 px-6 py-3 bg-emerald-500 text-white font-medium rounded hover:bg-emerald-600 transition"
          >
            Conecte-se agora
          </a>
        </div>

        <div className="flex-1">
          <img
            src="/versozap-frontend-v2.vercel.app/imagemlanding.png"
            alt="Exemplo de conversa transcrita"
            className="w-full max-w-md mx-auto rounded shadow-2xl"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-sm text-gray-500 flex flex-col gap-2 sm:flex-row sm:justify-between px-6 max-w-6xl mx-auto">
        <p>© Versozap • 2025</p>
        <div className="flex gap-4 justify-center">
          <a href="#">Termos de uso</a>
          <a href="#">Política de privacidade</a>
          <a href="https://instagram.com/versozap" target="_blank" rel="noreferrer">@versozap</a>
        </div>
        <select className="bg-transparent outline-none">
          <option>PT-BR</option>
          <option>EN</option>
        </select>
      </footer>
    </div>
  );
}
