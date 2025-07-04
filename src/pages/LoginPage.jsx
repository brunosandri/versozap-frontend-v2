import { useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({ telefone: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sucesso');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Entrar</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
        <input
          name="telefone"
          placeholder="Telefone (com DDD)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <button type="submit" className="bg-green-600 text-white py-3 rounded-lg">
          Acessar conta
        </button>
      </form>

      {status === 'sucesso' && (
        <p className="text-green-600 mt-4">Login simulado com sucesso!</p>
      )}
    </div>
  );
}
