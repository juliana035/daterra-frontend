

import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react"
import './About.css'

function About() {
    return (
        <Grid className='aboutgrid'>

            <Box display="center" justifyContent="center">
                <Typography className="titleAbout" ><h1>Quem somos nós</h1></Typography>
            </Box>
            <Box display="flex" justifyContent="center" gap={2}>
                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/cecilianakamura/" title="https://www.linkedin.com/in/cecilianakamura/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/pqdp4zh.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>

                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/delfinavicente/" title="https://www.linkedin.com/in/delfinavicente/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/VXyG7VC.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>

                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/anapaulatoledo/" title="https://www.linkedin.com/in/anapaulatoledo/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/FDMSxlu.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>

                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/brunaluz5/" title="https://www.linkedin.com/in/brunaluz5/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/VvB5I2x.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>


            </Box>
            <Box display="flex" justifyContent="center" gap={2}>
                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/isabella-amantino-908520175/" title="https://www.linkedin.com/in/isabella-amantino-908520175/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/ElKpmEl.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>
                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/ju-cruz/" title="https://www.linkedin.com/in/ju-cruz/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/N78yBIK.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>
                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/julia-gali-barroso/" title="https://www.linkedin.com/in/julia-gali-barroso/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/qXgryjy.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>
                <Typography className="cursorAbout">
                    <a href="https://www.linkedin.com/in/ncarvalhosilva/" title="https://www.linkedin.com/in/ncarvalhosilva/" target="_blank">
                        <img className='imagemPerfil' src="https://i.imgur.com/FCFumGj.png" alt="" width="200px" height="200px" />
                    </a>
                </Typography>

            </Box>
            <br />
            <br />
            <Box display="center" justifyContent="center" className="textoAboutBox">

                <Typography className="textAbout">O projeto Da terra surgiu para unir pequenos produtores com grandes empresas e para mostrar que todos têm espaço na sociedade! Esse projeto despertou no coração de 8 desevolvedoras na qual enxergaram a necessidade de incentivar pequenos produtores ganhar espaço no mercado no  mundo do e-commerce.            </Typography>
                <Typography className="textAbout">Da terra surgiu como forma de auxiliar na resolução da ODS 2 (Fome Zero e Agricultura Sustentável) da ONU. Pensando nisso, desenvolvemos um e-commerce que visa gerar renda para pequenos produtores de agricultura familiar sustentável através da conexão com grandes empresas e a população em geral, proporcionando assim, visibilidade e incentivo à esse meio de cultivo, além de facilitar o acesso à alimentos de alta qualidade nutricional. Como medida social, disponibilizamos na nossa aplicação, vouchers para doações como ações contra a fome.</Typography>
                <Typography className="textAbout">Clique nas fotos e conheça mais sobre nós!</Typography>
                               
            </Box>
            <Box className='videoAbout'>
            <iframe width="504" height="284" src="https://www.youtube.com/embed/gfz8uq0oBxc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow-fullscreen className='videoLogin'></iframe>
            </Box>
        </Grid>
    )
}

export default About;


