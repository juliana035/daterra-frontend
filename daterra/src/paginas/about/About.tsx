

import { Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react"
import './About.css'

function About(){
    return (
        <>
       
       <Box display="center" justifyContent="center">
            <Typography className= "titleAbout" ><h1>Quem somos nós</h1></Typography>
       </Box>
       <Box display="flex" justifyContent="center" gap={2}>
            <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/cecilianakamura/" title="https://www.linkedin.com/in/cecilianakamura/" target="_blank">
                <img className='imagemPerfil' src="https://i.imgur.com/YjE9HW5.jpg" alt="" width="200px" height="200px"/>
                </a>
            </Typography>

            <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/delfinavicente/" title="https://www.linkedin.com/in/delfinavicente/" target="_blank">
                <img className='imagemPerfil' src="https://media-exp1.licdn.com/dms/image/C4D03AQF0lNlyixHfZg/profile-displayphoto-shrink_200_200/0/1660229053717?e=1672876800&v=beta&t=tG8eHsArBSjfn5nx2SPvq_bsqguJMMr--fnzqZMOsAw" alt="" width="200px" height="200px" />
                </a>
            </Typography>

            <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/anapaulatoledo/" title="https://www.linkedin.com/in/anapaulatoledo/" target="_blank">
                <img className='imagemPerfil' src="https://media-exp1.licdn.com/dms/image/C4D03AQHRvU3ae_UWKw/profile-displayphoto-shrink_200_200/0/1525801430851?e=1672876800&v=beta&t=FAaSZQ1CLaYGC9Bfp7Xep2NezXABBd2D--Om48NGOek" alt="" width="200px" height="200px" />
                </a>
            </Typography>

            <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/brunaluz5/" title="https://www.linkedin.com/in/brunaluz5/" target="_blank">
                <img className='imagemPerfil' src="https://media-exp1.licdn.com/dms/image/D4D35AQEjlU0VW71Rtw/profile-framedphoto-shrink_200_200/0/1664228440547?e=1668099600&v=beta&t=FfW_1o4brTXiYezTiCoiGz9ekNSyyQzU-p4QFrz633A" alt="" width="200px" height="200px" />
                </a>
            </Typography>
          
           
       </Box>
       <Box display="flex" justifyContent="center" gap={2}>
       <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/isabella-amantino-908520175/" title="https://www.linkedin.com/in/isabella-amantino-908520175/" target="_blank">
                <img  className='imagemPerfil' src="https://media-exp1.licdn.com/dms/image/D4D35AQH7FfahRoPwHQ/profile-framedphoto-shrink_200_200/0/1666651075485?e=1668099600&v=beta&t=_QoEf5kn9_xzL4Yl_XQsNXJBe3XnAcOMHyKn_T_cJD8" alt="" width="200px" height="200px" />
                </a>
            </Typography>
       <Typography className="cursorAbout">
                <a href= "https://www.linkedin.com/in/ju-cruz/" title="https://www.linkedin.com/in/ju-cruz/" target="_blank">
                <img className='imagemPerfil' src="https://media-exp1.licdn.com/dms/image/D4D03AQEPPF6m7j9SaA/profile-displayphoto-shrink_100_100/0/1667318537049?e=1672876800&v=beta&t=0psmKBG4HbdGHI32k4ZuXCAkWzoxjP2Wjmi9X4vHB9Q" alt="" width="200px" height="200px" />
                </a>
            </Typography>
       <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/julia-gali-barroso/" title="https://www.linkedin.com/in/julia-gali-barroso/" target="_blank">
                <img className='imagemPerfil' src="https://media-exp1.licdn.com/dms/image/D4D35AQGky88DRwshpg/profile-framedphoto-shrink_800_800/0/1666665411297?e=1668099600&v=beta&t=y3VUwp49A1NUG6vd3dspwHyehz3PhdeHoHwxCT6SgZI" alt="" width="200px" height="200px" />
                </a>
            </Typography>
       <Typography className="cursorAbout">
                <a href="https://www.linkedin.com/in/ncarvalhosilva/" title="https://www.linkedin.com/in/ncarvalhosilva/" target="_blank">
                <img className='imagemPerfil' src="https://media-exp1.licdn.com/dms/image/D4D35AQFHIbZE-qjEJg/profile-framedphoto-shrink_800_800/0/1663700761135?e=1668099600&v=beta&t=4X5KUT6A9GUWWDq83l8qGwi_xUfqXYOdY40Hi9-5vkA" alt="" width="200px" height="200px" />
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
        </>
    )
}

export default About;

