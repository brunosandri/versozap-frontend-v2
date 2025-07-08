import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

export default function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <AppRoutes />
      </div>
    </Router>
  );
}