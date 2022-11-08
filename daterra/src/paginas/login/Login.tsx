
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

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (token != '') {
      navigate('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
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
        <form onSubmit={onSubmit}>
          <Typography variant="h3">
            <LoginIcon className="loginIcone" />
            Login
          </Typography>
          <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label="Usuário (e-mail)" name="usuario" />
          <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label="Senha" name="senha" type="password" />

          <Box className="loginBotaoEntrar">
            <Link to='/home' className="text-decorator-none">
              <Button type="submit" variant="outlined">
                Entrar
              </Button>
            </Link>
          </Box>
        </form>
        <Typography>
          Não tem uma conta? Cadastre-se <Link to='/cadastrousuario' className='loginLinkCadastro'>aqui</Link>!
        </Typography>
      </Box>
    </Grid>
  );


};

export default Login;

