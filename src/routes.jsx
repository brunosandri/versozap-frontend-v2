import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CadastroEscolha from './pages/CadastroEscolha';
import CadastroPage from './pages/CadastroPage';
import SucessoPage from './pages/SucessoPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/registrar" element={<CadastroEscolha />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/sucesso" element={<SucessoPage />} />
    </Routes>
  );
}
