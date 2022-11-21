import { Button, Grid, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import React, { useState, ChangeEvent, useEffect } from "react";
import { login } from "../../service/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addId, addTipoUser, addToken } from "../../store/tokens/actions";
import User from "../../models/User";


function Login() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    tipoUser: '',
    senha: '',
    token: ''
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    tipoUser: '',
    senha: '',
    token: ''
  });

  const [usuario,setUsuario] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    tipoUser: '',
    senha: '',
    cep:'',
    cpnj:'',
    cpf:''
  });

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token));
      navigate('/home')
      console.log(token)
    }
  },[token]);

  useEffect(() => {
    if (respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()));
      navigate('/home')
      console.log(token)
    }
  },[respUserLogin.token]);

  async function logarUsuario(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin);
      toast.success("Usuário logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistentes. Erro ao autenticar.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
      console.log(error)
    }
  }


  return (
    <Grid container className="loginFundo">
      <Box className="loginCard">
        <form onSubmit={logarUsuario}>
          <Box className='loginbox1'>
          <LoginIcon className="loginIcone"/>
            <Typography className='loginTitulo' variant="h4">
              Login
            </Typography>
          </Box>
          <TextField 
          value={userLogin.usuario} 
          onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} 
          id='usuario'
          label="Usuário (e-mail)" 
          name="usuario" />
          
          <TextField 
          value={userLogin.senha} 
          onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} 
          id='senha'
          label="Senha" 
          name="senha" 
          type="password" />

          <Box >  
              <Button type="submit" variant="outlined" className="loginBotaoEntrar">
                Entrar
              </Button>
              
          </Box>
          <Typography className='loginTexto'>
          Não tem uma conta? Cadastre-se <Link to='/cadastrousuario' className='loginLinkCadastro'>aqui</Link>!
        </Typography>
        </form>

        <Box>
        <iframe width="504" height="283,5" src="https://www.youtube.com/embed/gfz8uq0oBxc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow-fullscreen className='videoLogin'></iframe>
        </Box>
      </Box>

    </Grid>
  );


};

export default Login;

