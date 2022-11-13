import { Button, Grid, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import React, { useState, ChangeEvent, useEffect } from "react";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../service/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";


function Login() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    token: ''
  })

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (token != '') {
      navigate('/home')
    }
  }, [token])

  async function logarUsuario(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken)

      alert('Usuário logado com sucesso!');
    } catch (error) {
      alert('Dados do usuário inconsistentes. Erro ao logar!');
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
          <TextField value={userLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} label="Usuário (e-mail)" name="usuario" />
          <TextField value={userLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} label="Senha" name="senha" type="password" />

          <Box >
            <Link to='/home' className="text-decorator-none">
              <Button type="submit" variant="outlined" className="loginBotaoEntrar">
                Entrar
              </Button>
            </Link>
          </Box>
        </form>
        <Typography className='loginTexto'>
          Não tem uma conta? Cadastre-se <Link to='/cadastrousuario' className='loginLinkCadastro'>aqui</Link>!
        </Typography>
      </Box>
    </Grid>
  );


};

export default Login;

