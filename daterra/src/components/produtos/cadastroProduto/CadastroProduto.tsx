import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Menu,
} from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { busca, buscaId, post, put } from "../../../service/Service";
import User from "../../../models/User";

function CadastroProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
    (state) => state.tipoUser
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    foto: "", 
    quantidade: 0,
    categoria: null,
    usuario: null
  });

  const [usuario, setUsuario] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    tipoUser: tipoUser,
    cep: '',
    cpf: '',
    cpnj: '',
    foto: '',
    senha: ''
  });

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
      usuario: usuario //adicionar o usuário dentro da postagem
    });
  }, [categoria]);

  useEffect(() => {
    getCategorias();
    if (id !== undefined) {
      findByIdProduto(id);
    }
  }, [id]);

  async function getCategorias() {
    await busca("/categoria/all", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdProduto(id: string) {
    await buscaId(`produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updateProduto(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
    });
  }

  async function cadastrarProduto(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      put(`/produtos`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Produto atualizado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
    } else {
      post(`/produtos`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Produto cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/produtos");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={cadastrarProduto}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro de produto
        </Typography>
        <TextField
          id="nome"
          value={produto.nome}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateProduto(event)
          }
          label="Nome"
          variant="outlined"
          name="nome"
          margin="normal"
          placeholder="Máximo 255 caracteres"
          fullWidth
        />
        <TextField
          id="descricao"
          value={produto.descricao}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateProduto(event)
          }
          label="Descrição"
          name="descricao"
          variant="outlined"
          margin="normal"
          placeholder="Máximo 1000 caracteres"
          multiline
          required
          minRows={4}
          fullWidth
        />
        <TextField
          id="preco"
          value={produto.preco}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateProduto(event)
          }
          label="Preço"
          variant="outlined"
          name="preco"
          margin="normal"
          fullWidth
        />
        <TextField
          id="foto"
          value={produto.foto}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateProduto(event)
          }
          label="URL da foto"
          variant="outlined"
          name="foto"
          margin="normal"
          fullWidth
        />
                <TextField
          id="quantidade"
          value={produto.quantidade}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateProduto(event)
          }
          label="Quantidade"
          variant="outlined"
          name="quantidade"
          margin="normal"
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="categoriaSelect">Categoria</InputLabel>
          <Select
            labelId="categoriaSelect"
            id="categoria"
            onChange={(event) =>
              buscaId(`/categoria/${event.target.value}`, setCategoria, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {categorias.map((categorias) => (
              <MenuItem value={categorias.id}>{categorias.tipo}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
          <Button type="submit" variant="contained" color="primary" disabled={categoria.id===0}>
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroProduto;