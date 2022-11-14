import { AltRoute } from "@mui/icons-material";
import React from "react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css";
import { ButtonBase, Grid, withWidth } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Home.css";

function Home() {
  const items = [

    <img
      src="https://i.imgur.com/zfvhpM5.png"
      alt=""
      className="carouselImage"
    />,

    <img
      src="https://i.imgur.com/3u2DLWU.png"
      alt=""
      className="carouselImage"
    />,

    <img
      src="https://i.imgur.com/A6Lzsow.png"
      alt=""
      className="carouselImage"
    />,

    <img
      src="https://i.imgur.com/rmZ5cVY.png"
      alt=""
      className="carouselImage"
    />,
  ];

  const imagensProdutos = [
    {
      url: "https://i.imgur.com/EE10Xvu.jpg",
      title: "Todos os produtos",
      width: "25%",
    },
    {
      url: "https://i.imgur.com/7cpPXMt.jpg",
      title: "Frutas",
      width: "25%",
    },
    {
      url: "https://i.imgur.com/RpuboTX.jpg",
      title: "Legumes",
      width: "25%",
    },
    {
      url: "https://imgur.com/WPL0CxG",
      title: "Verduras",
      width: "25%",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "80% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="color"
      >
        <Grid alignItems="center" item xs={12}>
          <Box>
            <div className="carousel">
              <AliceCarousel
                mouseTracking
                items={items}
                infinite
                autoPlay
                autoPlayInterval={3000}
                animationDuration={1000}
              />
            </div>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className='homeMotivos'>
            <Box className='homeMotivosBox'>
              <img src='https://i.imgur.com/9wWGF5i.png' alt='ramo com folhas' className='homeMotivosImagens'/>
              <Typography className='homeMotivosTexto' variant='h5'>
                consuma produtos orgânicos
              </Typography>
           </Box>
            <Box className='homeMotivosBox'>
              <img src='https://i.imgur.com/SC8IWob.png' alt='pá de jardinagem' className='homeMotivosImagens'/>
              <Typography className='homeMotivosTexto' variant='h5'>
                incentive a agricultura familiar
              </Typography>
            </Box>

            <Box className='homeMotivosBox'>
              <img src='https://i.imgur.com/2maflsV.png' alt='símbolo de reciclagem' className='homeMotivosImagens' />
              <Typography className='homeMotivosTexto' variant='h5'>
                fortaleça a economia local
              </Typography>
            </Box>

            <Box className='homeMotivosBox'>
              <img src='https://i.imgur.com/PRprlxU.png' alt='saco de papel pardo' className='homeMotivosImagens' />
              <Typography className='homeMotivosTexto' variant='h5'>
                doe alimento de qualidade a quem precisa
              </Typography>
            </Box>
          </Box>


          <Box className='homeComprePorCategoria'>
            <img src='https://i.imgur.com/HBK3pHv.png' alt='desenho de uma sacola de compras' className='homeSacola1' />
            <Typography className='homeComprePorCategoriaTexto' variant='h3'>COMPRE POR CATEGORIA</Typography>
            <img src='https://i.imgur.com/HBK3pHv.png' alt='desenho de uma sacola de compras' className='homeSacola2' />
          </Box>
        </Grid>
      </Grid>

      <Box className='homeBotoesCategorias'>
        {imagensProdutos.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="h4"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme: { spacing: (arg0: number) => any }) =>
                    `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </>
  );
}

export default Home;
