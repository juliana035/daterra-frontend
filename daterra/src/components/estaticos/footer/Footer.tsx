import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid, Button } from '@material-ui/core';
import {Box} from '@mui/material';

import "./Footer.css";

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box>

                    {/* <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography> */}
                        </Box>
                        <Box className='box1'>
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className='redes'/>
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className='redes'/>
                            </a>
                            <Button type='submit' variant='contained' className='bt-feira'>
                                    IR PARA FEIRINHA
                                </Button>
                        </Box>

                            
                        
                     
                    <Box className='box2'>
                        <Box>
                        <Typography variant="subtitle2" align='center' >© 2022 Todos os Direitos Reservados  </Typography>
                        </Box>
                    </Box>


                </Grid>
            </Grid>
        </>
    )
}

export default Footer;