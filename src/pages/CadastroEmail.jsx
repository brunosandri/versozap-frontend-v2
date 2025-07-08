import { useState } from "react";

export default function CadastroEmail() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro:", { email, senha });
    // Aqui você pode chamar sua API ou função de cadastro
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-sm w-full space-y-6">
        <h2 className="text-2xl font-bold text-center">Cadastrar com e-mail</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600 transition"
          >
            Criar conta
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Já tem uma conta?{" "}
          <a href="/login" className="text-emerald-600 hover:underline">
            Entrar
          </a>
        </div>
      </div>
    </div>
  );
}