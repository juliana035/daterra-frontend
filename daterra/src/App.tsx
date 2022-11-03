import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
/*import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/*  <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastro" element={<CadastroUsuario />}
    <Footer /> />*/

function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    
    </Routes>
    </div>
    
    </Router>
    )
}

export default App;
