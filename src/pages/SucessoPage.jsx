export default function SucessoPage() {
  return (
    <div className="p-10 text-center min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-4 text-green-700">Cadastro concluído!</h2>
      <p className="text-lg text-gray-700 max-w-md">
        Você começará a receber os versículos diariamente no WhatsApp após parear seu número. Fique atento às mensagens!
      </p>

      <a
        href="http://localhost:3000"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg"
      >
        Conectar WhatsApp
      </a>
    </div>
  );
}
