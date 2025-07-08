export default function CadastroFacebook() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <img src="/imagens/facebook-icon.png" alt="Facebook" className="w-12 mx-auto" />
        <h2 className="text-2xl font-bold">Conectar com Facebook</h2>
        <p className="text-gray-600 text-sm">
          Você será redirecionado para autenticar com sua conta do Facebook.
        </p>
        <button
          onClick={() => alert("Simulando autenticação com Facebook...")}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Conectar com Facebook
        </button>
      </div>
    </div>
  );
}
