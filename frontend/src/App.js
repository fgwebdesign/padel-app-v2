// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import RegisterPlayerPage from './pages/RegisterPlayerPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RegisterSelectionPage from './pages/RegisterSelectionPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterSelectionPage />} />
        <Route path="/register-club" element={<RegisterPage />} />
        <Route path="/register-player" element={<RegisterPlayerPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;