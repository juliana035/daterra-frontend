import { AltRoute } from '@mui/icons-material';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';



function Home() {

    const items = [
        <img src="https://i.imgur.com/btCbj6o.png"
            alt='' className='carouselImage' />,

        <img src="https://i.imgur.com/n6718Fk.png"
            alt='' className='carouselImage' />,
    ]

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="color">
                <Grid alignItems='center' item xs={12}>
                    <Box>
                        <div className='carousel'>
                            <AliceCarousel
                                mouseTracking
                                items={items}
                                infinite
                                autoPlay
                                autoPlayInterval={2000}
                                animationDuration={900}
                            />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" className="imagem">

                        <img src="https://i.imgur.com/wuRwySy.png" alt="" />
                        <img src="https://i.imgur.com/ET9WKpN.png" alt="" />

                    </Box>

                </Grid>
            </Grid>


        </>
    );
}


export default Home;


