export default function CadastroGoogle() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <img src="/imagens/google-icon.png" alt="Google" className="w-12 mx-auto" />
        <h2 className="text-2xl font-bold">Conectar com Google</h2>
        <p className="text-gray-600 text-sm">
          Você será redirecionado para autenticar com sua conta Google.
        </p>
        <button
          onClick={() => alert("Simulando autenticação com Google...")}
          className="w-full py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
        >
          Conectar com Google
        </button>
      </div>
    </div>
  );
}
