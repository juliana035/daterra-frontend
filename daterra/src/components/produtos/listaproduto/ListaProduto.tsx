import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import "./ListaProduto.css";
import { busca, buscaId } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Produto from "../../../models/Produto";
import { alpha, Box, InputBase, styled } from "@mui/material";
import Categoria from "../../../models/Categoria";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../../models/User";

function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
    (state) => state.id
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getProduto() {
    await busca("/produtos/all", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function getCategorias() {
    await busca("/categoria/all", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProduto();
    getCategorias();
  }, [produtos.length]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

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
    <Grid container className="listaprodutosFundo">
      
      <ul className="marcadorLista">
        <li className="btMesmaLinha">
          <Link to="/produtos">
            <button className="btnEstilo">TODOS OS PRODUTOS</button>
          </Link>
        </li>

     {produtos.length === 0 && (
        <div className='containerLista'>

<span className="loader"></span>
      </div>
      )} 
      

        {categorias.map((categoria) => (
          <li className="btMesmaLinha">
            {" "}
            <Link to={`/categoria/${categoria.id}`}>
              <button className="btnEstilo">{categoria.tipo}</button>
            </Link>{" "}
          </li>
        ))}

        {/* <li className="btMesmaLinha"><button className="btnEstilo">QUERO DOAR</button></li> */}
        <li className="btMesmaLinha">
          <button className="btnEstilo">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </button>
        </li>
      </ul>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {produtos.map((produto) => (
          <div className="container">
            <div className="imageContainer1">
              <img src={produto.foto} alt="" />
            </div>
            <div className="nomeProduto"> {produto.nome} </div>
            <div className="valores">
              <div className="Produtoestoquepreco">
                <span>R$ {produto.preco}</span>
                <span>{produto.descricao}</span>
              </div>
              <button className="button">
                {" "}
                <span> - </span> <span> 0 </span> <span> + </span>
              </button>
            </div>
            {usuario.tipoUser === "produtor" || usuario.tipoUser === "admin" ? (
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioProduto/${produto.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="botãoAtualiza"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarProduto/${produto.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      className="botãoDeletar"
                    >
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </Grid>
  );
}

export default ListaProduto;
