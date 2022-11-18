import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './UnicoCategoria.css'

function UnicoCategoria(){
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        produtos: null
      })
    
      const { id } = useParams<{ id: string }>();
    
      const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
      async function findById(id: string) {
        await buscaId(`/categoria/${id}`, setCategoria, {
          headers: {
            Authorization: token
          }
        })
      }
    
      useEffect(() => {
        if (id !== undefined) {
          findById(id);
        }
      }, [id])
    
    
      return (
        <>
        <p>Home {' > '} {categoria.tipo}</p>
        <div style= {{display:"flex"}}> 
        {categoria.produtos?.map((produto) =>(
          <><div className="container">
            <div className="imageContainer"><img src={produto.foto} alt="" /></div>
            <div className="nomeProduto"> {produto.nome} </div>
            <div className="valores"> 
            <div className="Produtoestoquepreco"> 
              <span>{produto.descricao}</span> 
              <span>{produto.quantidade}</span> 
              <span>{produto.preco}</span>
            </div>
            <button className ="button"> <span> - </span> <span> 0 </span> <span> + </span>
            </button>
            </div>
                </div>
                {/* <Box m={2}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Produtos
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {produto.nome}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {produto.descricao}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {produto.categoria?.tipo}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none">
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
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size="small" color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box> */}
            </>
        ))}
        </div>
      </>
      ) 
    }
    
export default UnicoCategoria