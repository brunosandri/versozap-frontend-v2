import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Cadastro from './pages/Cadastro';
import CadastroEmail from "./pages/CadastroEmail";
import CadastroGoogle from "./pages/CadastroGoogle";
import CadastroFacebook from "./pages/CadastroFacebook";
import CadastroEscolha from './pages/CadastroEscolha';
import CadastroPage from './pages/CadastroPage';
import SucessoPage from './pages/SucessoPage';
import LoginPage from './pages/LoginPage';
import AssinaturaPage from './pages/AssinaturaPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastro-email" element={<CadastroEmail />} />
      <Route path="/cadastro-google" element={<CadastroGoogle />} />
      <Route path="/cadastro-facebook" element={<CadastroFacebook />} />
      <Route path="/registrar" element={<CadastroEscolha />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/sucesso" element={<SucessoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/assinatura" element={<AssinaturaPage />} />
    </Routes>
  );
}
