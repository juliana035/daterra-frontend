
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

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

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='corFundo'  >
                    <Box className={classes.title}>
                        <Box display="flex" justifyContent="space-between">
                            <Toolbar>
                              <Link to='/home' className='texto-decorator-none'><img src="https://i.imgur.com/vUHcakQ.png" alt="Logotipo" height={50} width={100} /></Link>
                                
                            </Toolbar>
                        </Box>
                        
                    </Box>
                    <Box display="flex" alignItems="center"> 
                        
                        <Box mx={1} className='cursor' display="flex" justifyContent="start" >
                            <Typography variant="h6" className="corTexto tamTexto">
                                <Link to='/about' className='text-decorator-none'>Quem Somos |</Link>
                            </Typography>
                        </Box>
                        {/* <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                            <Typography variant="h6" className="corTexto tamTexto">
                                Como Comprar |
                            </Typography>
                        </Box> */}
                        <Box mx={1} className='cursor'  display="flex" justifyContent="start">
                            <Typography variant="h6" className="corTexto tamTexto">
                                Meu Perfil  |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' display="flex" justifyContent="start">
                            <Typography variant="h6" className="corTextoProdutos tamTexto">
                                Todos Produtos |
                            </Typography>
                        </Box>
                        {/* <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                            <Typography variant="h6" className="corTexto tamTexto">
                                Cadastrar Produto |
                            </Typography>
                        </Box> */}
                        <Link to='/login' className='text-decorator-none'>
                            <Box display="flex" mx={1} className='cursor'   justifyContent="start">
                                <Typography variant="h6" className="corTexto tamTexto">
                                    Sair
                                </Typography>
                            </Box>
                        </Link>
                        <Box display="flex" className='cursor' justifyContent="start">
                            <Toolbar>
                                <img src="https://i.imgur.com/OQRGLtB.png" alt="sacola de compras" height={60} width={60} />
                            </Toolbar>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;

