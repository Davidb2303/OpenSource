import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormularioMaestro from './components/FormularioMaestro.jsx';
import ListarRegistros from './components/ListarRegistros.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>🎓 Sistema de Gestión Académica</h1>
          <nav>
            <Link to="/" className="nav-link">📝 Nuevo Registro</Link>
            <Link to="/registros" className="nav-link">📋 Ver Registros</Link>
          </nav>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<FormularioMaestro />} />
            <Route path="/registros" element={<ListarRegistros />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;