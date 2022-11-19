import { Grid, TextField } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import User from "../../models/User";
import { buscaId } from "../../service/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import "./Perfil.css";

function Perfil() {
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
  const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
    (state) => state.tipoUser
  );

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    tipoUser: tipoUser,
    cep: "",
    cpf: "",
    cpnj: "",
    foto: "",
    senha: "",
  });

  async function getUserById(id: number) {
    await buscaId(`usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }


  useEffect(() => {
    getUserById(+userId);
  });

  return (

    
    <Grid container className="perfilFundo">
      <Grid item xs={6} className="perfilFotoGrid">
        <img className="perfilFoto" src={usuario.foto} alt="" />
      </Grid>

      <Grid item xs={6} className="perfilDadosGrid">
        
        <h1>Meu perfil</h1>
        <div className="perfilDados">
          <TextField
            className="perfilTextfield"
            id="filled-read-only-input"
            label="Nome completo"
            value={usuario.nome}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />

          <TextField
            id="filled-read-only-input"
            label="Usuário (e-mail)"
            value={usuario.usuario}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="CEP"
            value={usuario.cep}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          {usuario.tipoUser === "cpf" ? (
            <TextField
              id="filled-read-only-input"
              label="CPF"
              value={usuario.cpf}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
          ) : (
            <TextField
              id="filled-read-only-input"
              label="CNPJ"
              value={usuario.cpnj}
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
          )}
        </div>
        {/* <Link to={`/cadastrousuario/${usuario.id}`} className="text-decorator-none"> MODIFICAR ENDPOINT*/}
        <Box mx={1}>
          <Button
            className="perfilBotaoEntrar"
            variant="contained"
            size="small"
            color="primary"
          >
            atualizar
          </Button>
        </Box>
        {/* </Link> */}
      </Grid>
    </Grid>
  );
}

export default Perfil;
