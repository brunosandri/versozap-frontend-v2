// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Cadastro from './pages/Cadastro';
import CadastroEmail from './pages/CadastroEmail';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/cadastro-email' element={<CadastroEmail />} />
      {/* …outras rotas */}
    </Routes>
  );
}

