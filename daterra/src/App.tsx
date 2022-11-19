import React from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import About from "./paginas/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ListaCategoria from "./components/categorias/listacategoria/ListaCategoria";
import { Provider } from 'react-redux';
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ListaProduto from "./components/produtos/listaproduto/ListaProduto";
import CadastroCategoria from "./components/categorias/cadastroCategoria/CadastroCategoria";
import CadastroProduto from "./components/produtos/cadastroProduto/CadastroProduto";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import UnicoCategoria from "./components/categorias/unicoCategoria/UnicoCategoria";
import Perfil from "./paginas/perfil/Perfil";

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/about"  element={<About />}/>
          <Route path="/produtos"  element={<ListaProduto />}/>
          <Route path="/categorias"  element={<ListaCategoria />}/>
          <Route path="/formularioProduto/"  element={<CadastroProduto/>}/>
          <Route path="/formularioCategoria/"  element={<CadastroCategoria/>}/>
          <Route path="/formularioProduto/:id"  element={<CadastroProduto/>}/>
          <Route path="/formularioCategorias/:id"  element={<CadastroCategoria/>}/>
          <Route path="/deletarCategoria/:id"  element={<DeletarCategoria />}/>
          <Route path="/deletarProduto/:id"  element={<DeletarProduto />}/>
          <Route path="/categoria/:id"  element={<UnicoCategoria />}/>
          <Route path="/perfil"  element={<Perfil />}/>
          

        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );


}

export default App;
