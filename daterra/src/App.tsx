import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";

import Footer from "./components/estaticos/footer/Footer";

import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import About from "./paginas/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {

  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/about"  element={<About />}/>

        </Routes>
      </div>
      <Footer />
    </Router>
  );


}

export default App;
