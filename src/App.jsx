
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

function LandingPage() {
  return (
    <div className="p-10 text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">VersoZap</h1>
      <p className="mb-4">Receba trechos da Bíblia todos os dias direto no seu WhatsApp.</p>
      <Link to="/cadastro">
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg">Quero receber</button>
      </Link>
    </div>
  );
}

function CadastroPage() {
  const [form, setForm] = useState({
    nome: '', telefone: '', versao_biblia: 'ARA', plano_leitura: 'anual', tipo_ordem: 'normal', horario_envio: '08:00'
  });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://versozap-backend.onrender.com/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('sucesso');
      } else {
        setStatus('erro');
      }
    } catch {
      setStatus('erro');
    }
  };

  if (status === 'sucesso') return <Navigate to="/sucesso" />;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Cadastro no VersoZap</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nome" placeholder="Nome" className="w-full border p-2 rounded" onChange={handleChange} required />
        <input name="telefone" placeholder="Telefone (com DDD)" className="w-full border p-2 rounded" onChange={handleChange} required />

        <select name="versao_biblia" className="w-full border p-2 rounded" onChange={handleChange}>
          <option value="ARA">Almeida RA</option>
          <option value="NVI">NVI</option>
          <option value="ACF">ACF</option>
          <option value="NTLH">NTLH</option>
        </select>

        <select name="plano_leitura" className="w-full border p-2 rounded" onChange={handleChange}>
          <option value="anual">Anual</option>
          <option value="misto">Misto (VT + NT)</option>
          <option value="cronologico">Cronológico</option>
        </select>

        <select name="tipo_ordem" className="w-full border p-2 rounded" onChange={handleChange}>
          <option value="normal">Ordem tradicional</option>
          <option value="cronologico">Ordem cronológica</option>
        </select>

        <input name="horario_envio" type="time" className="w-full border p-2 rounded" onChange={handleChange} required />

        <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded w-full">Cadastrar</button>
      </form>
      {status === 'erro' && <p className="text-red-600 mt-3">Erro ao cadastrar. Tente novamente.</p>}
    </div>
  );
}

function SucessoPage() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Cadastro concluído!</h2>
      <p>Você começará a receber os versículos diariamente no WhatsApp após parear seu número.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/sucesso" element={<SucessoPage />} />
      </Routes>
    </Router>
  );
}
