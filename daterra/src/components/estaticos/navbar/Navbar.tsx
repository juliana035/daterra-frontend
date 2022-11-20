import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Badge, Box, Button, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import CadastroUsuario from '../../../paginas/cadastroUsuario/CadastroUsuario';
import User from '../../../models/User';
import { buscaId } from '../../../service/Service';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            }
        },
    },
    )
);

function Navbar() {

    const classes = useStyles();
    const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
    const tipoUser = useSelector<TokenState, TokenState["tipoUser"]>(
      (state) => state.tipoUser
    );
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    const dispatch = useDispatch();

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

    function goLogout() {
        dispatch(addToken(""));
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            progress: undefined,
        });
        navigate("/login");
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent = (
            <AppBar position="static">
                <Toolbar variant="dense" className='corFundo'  >
                    <Box className={classes.title}>
                        <Box display="flex" justifyContent="space-between">
                            <Toolbar>
                                <Link to='/home' className='texto-decorator-none'><img src="https://i.imgur.com/vUHcakQ.png" alt="Logotipo" height={50} width={100} /></Link>
                            </Toolbar>
                        </Box>
                    </Box>
                    <Box className='navbarbox1'>
                    {usuario.tipoUser === "admin"?
                   (<><Link to="/categorias" className="text-decorator-none"><Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                    <Typography variant="h6" className="corTexto tamTexto">
                        Todas Categorias 
                    </Typography>
                </Box> 
                 </Link><Divider orientation="vertical" flexItem /></>):(<></>)}
                    {usuario.tipoUser ==='produtor'|| usuario.tipoUser === "admin"? 
                    (<><Link to="/formularioCategoria" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" className="corTexto tamTexto">
                                        Cadastrar Categoria
                                    </Typography>
                                </Box>
                            </Link><Divider orientation="vertical" flexItem />
                            <Link to="/formularioProduto" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className="corTexto tamTexto">
                                    Cadastrar Produto
                                </Typography>
                            </Box>
                        </Link>
                        <Divider orientation="vertical" flexItem />
                        </>
                        ):
                    (<>
                    </>)}
                    <Box mx={1} className='cursor'>
                            <Typography variant="h6" className="corTexto tamTexto">
                                <Link to='/about' className='text-decorator-none'>
                                    Quem Somos
                                </Link>
                            </Typography>
                        </Box>

                        <Divider orientation="vertical" flexItem />
                                              
                        <Box mx={1} className='cursor'>
                            <Typography className="corTexto tamTexto">
                                <Link to='/perfil' className='text-decorator-none'>
                                Meu Perfil
                                </Link>
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box mx={1} className='cursor'>
                            <Typography className="corTextoProdutos tamTexto">
                                <Link to='/produtos' className='text-decorator-none'>
                                    Todos Produtos
                                </Link>
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        {/* <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                    <Typography variant="h6" className="corTexto tamTexto">
                        Cadastrar Produto |
                    </Typography>
                </Box> */}

                        <Link to='/login' className='text-decorator-none'>
                            <Box display="flex" mx={1} className='cursor'>
                                <Typography className="corTexto tamTexto" onClick={goLogout}>
                                    Sair
                                </Typography>
                            </Box>
                        </Link>

                    </Box>
                    <Box className='cursor'>
                        <Toolbar>
                            <Badge showZero={true} badgeContent={0} color='primary' >
                                <img src="https://i.imgur.com/OQRGLtB.png" alt="sacola de compras" height={40} width={40} />
                            </Badge>
                        </Toolbar>
                    </Box>
                </Toolbar>
            </AppBar>
        );

    }

    return (
        <>
            {navbarComponent}
        </>
    );
}


export default Navbar;

