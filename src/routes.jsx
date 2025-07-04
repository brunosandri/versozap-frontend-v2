import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CadastroEscolha from './pages/CadastroEscolha';
import CadastroPage from './pages/CadastroPage';
import SucessoPage from './pages/SucessoPage';
import LoginPage from './pages/LoginPage';
import AssinaturaPage from './pages/AssinaturaPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/registrar" element={<CadastroEscolha />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/sucesso" element={<SucessoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/assinatura" element={<AssinaturaPage />} />
    </Routes>
  );
}
