// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Cadastro';

export default function App() {
  return (
    /* ⛔️  NÃO coloque BrowserRouter aqui */
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registrar' element={<RegisterPage />} />
      {/* …outras rotas */}
    </Routes>
  );
}

