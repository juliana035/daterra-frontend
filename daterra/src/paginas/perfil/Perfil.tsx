import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import User from '../../models/User';
import { buscaId } from '../../service/Service';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Perfil.css'

function Perfil (){
const userId = useSelector<TokenState,TokenState['id']>(
    (state) => state.id
)
const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
    (state) => state.tipoUser
  );

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: '',
    usuario: '',
    tipoUser: tipoUser,
    cep: '',
    cpf: '',
    cpnj: '',
    foto: '',
    senha: ''
  });

async function getUserById(id: number){
    await buscaId(`usuarios/${id}`,setUsuario,{
        headers: {
            Authorization: token,
          },
        });
      }

useEffect(()=>{
    getUserById(+userId)
},[]
)

var userDocumento

if(tipoUser !== 'cpnj'){
    userDocumento = (
        <>{usuario.cpf}</>
    );
}


    return(
        <>

        Meu perfil

        <div>
            {usuario.nome}
            {usuario.usuario}
            {/* {usuario.foto} */}
            {usuario.cep}
            {userDocumento}
            {/* if ({usuario.tipoUser} !== 'produtor'){
                {usuario.cpnj}
            }else{
                {usuario.cpf}
            } */}


        </div>
        {/* <Link to={`/cadastrousuario/${usuario.id}`} className="text-decorator-none"> MODIFICAR ENDPOINT*/}
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                {/* </Link> */}
        </>
    )
}

export default Perfil;