

import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react"
import './About.css'

function About(){
    return (
        <Grid className='aboutgrid'>
       
       <Box display="center" justifyContent="center">
            <Typography className= "titleAbout" ><h1>Quem somos nós</h1></Typography>
       </Box>
       <Box display="flex" justifyContent="center" gap={2}>
            <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/cecilianakamura/" title="https://www.linkedin.com/in/cecilianakamura/" target="_blank">
                <img className='imagemPerfil' src="https://i.imgur.com/pqdp4zh.png" alt="" width="200px" height="200px"/>
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
                <img  className='imagemPerfil' src="https://i.imgur.com/ElKpmEl.png" alt="" width="200px" height="200px" />
                </a>
            </Typography>
       <Typography className="cursorAbout">
                <a href= "https://www.linkedin.com/in/ju-cruz/" title="https://www.linkedin.com/in/ju-cruz/" target="_blank">
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
       <br/>
       <br/>
       <Box display="center" justifyContent="center" className="textoAbout">
        <Typography className="textAbout">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repellat placeat hic ipsa laborum eos dignissimos deserunt tempore? Consequatur modi a consequuntur tenetur sit rem libero debitis vero perspiciatis blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime! Ipsam quidem est eveniet doloremque modi nemo maiores excepturi deleniti odio, quos neque eaque laudantium aspernatur molestias odit atque ex?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, qui eos? Veritatis quos alias pariatur officia natus recusandae corporis eveniet velit sed repellendus iure, illum reiciendis vel harum expedita fuga?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi adipisci tempore in asperiores temporibus magni, quasi blanditiis, a delectus officiis amet incidunt vero ad repellendus, dignissimos animi similique officia ex.
        </Typography>
       </Box>
        </Grid>
    )
}

export default About;


