import { alpha, Box, Button, Card, CardActions, CardContent, InputBase, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { busca, buscaId } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './UnicoCategoria.css'
import SearchIcon from '@mui/icons-material/Search';
import Produto from '../../../models/Produto';


function UnicoCategoria() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  let navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: '',
    produtos: null
  })

  async function getProduto() {
    await busca("/produtos/all", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function getCategorias() {
    await busca('/categoria/all', setCategorias, {
      headers: {
        Authorization: token,
      },
    })

  }

  useEffect(() => {
    getProduto();
    getCategorias()
  }, [produtos.length]);

  


  const { id } = useParams<{ id: string }>();
  // const [categorias, setCategorias] = useState<Categoria[]>([]);

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

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  return (
    <>
      <ul className="marcadorLista">
        <li className="btMesmaLinha"><button className="btnEstilo">TODOS OS PRODUTOS</button></li>
        {categorias.map((categoria) => (
          <li className='btMesmaLinha'> <Link to={`/categoria/${categoria.id}`}><button className='btnEstilo'>{categoria.tipo}</button></Link> </li>
          ))}

        <li className="btMesmaLinha"><button className="btnEstilo">QUERO DOAR</button></li>
        <li className="btMesmaLinha">
          <button className="btnEstilo">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </button>
        </li>

      </ul>
      <p>Home {' > '} {categoria.tipo}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {categoria.produtos?.map((produto) => (
          <><div className="container">
            <div className="imageContainer"><img src={produto.foto} alt="" /></div>
            <div className="nomeProduto"> {produto.nome} </div>
            <div className="valores">
              <div className="Produtoestoquepreco">
                <span>{produto.preco}</span>
                <span>{produto.descricao}</span>
              </div>
              <button className="button"> <span> -  </span> <span> 0  </span> <span>  + </span>
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

export default UnicoCategoria;