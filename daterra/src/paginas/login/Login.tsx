import { Button, Grid, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import {Link} from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import React from "react";
import "./Login.css";

function Login (){
    return(
      <Grid container className="loginFundo">
      <Box className="loginCard">
        <form>
          <Typography variant="h3">
          <LoginIcon className="loginIcone"/>
            Login
          </Typography>
          <TextField label="Usuário (e-mail)" name="usuario" />
          <TextField label="Senha" name="senha" type="password" />
          <Box className="loginBotaoEntrar">
            <Link to='/home' className="text-decorator-none">
            <Button type="submit" variant="outlined">
                Entrar
            </Button>
            </Link>
          </Box>
        </form>
  
        <Typography>
          Não tem uma conta? Cadastre-se <Link to='/cadastro' className='loginLinkCadastro'>aqui</Link>!
          </Typography>
      </Box>
    </Grid>
    );
   

};

export default Login;