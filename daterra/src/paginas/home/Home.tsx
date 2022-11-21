import { AltRoute } from "@mui/icons-material";
import React from "react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css";
import { ButtonBase, Grid, withWidth } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Home.css";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";



function Home() {

  const banner = [

    <Link to="/produtos">
      <img
        src="https://i.imgur.com/zfvhpM5.png"
        alt="fortaleça o movimento de agricultura familiar sustentável"
        className="carouselImage homeCursor"
      /></Link>,

    <Link to="/categoria/7">
      <img
        src="https://i.imgur.com/3u2DLWU.png"
        alt="Da terra direto pra mesa de quem precisa"
        className="carouselImage homeCursor"
      /></Link>,

    <Link to="/about">
      <img
        src="https://i.imgur.com/A6Lzsow.png"
        alt="quem somos nós"
        className="carouselImage"
      /></Link>,

    <img
      src="https://i.imgur.com/rmZ5cVY.png"
      alt="Movimento Da terra: desembale menos, descasque mais"
      className="carouselImage"
    />,
  ];

  const imagensProdutos = [
    {
      url: "https://i.imgur.com/EE10Xvu.jpg",
      title: "Todos os produtos",
      width: "100%",
      link: '/produtos'
    },
    {
      url: "https://i.imgur.com/7cpPXMt.jpg",
      title: "Frutas",
      width: "100%",
      link: '/categoria/3'
    },
    {
      url: "https://i.imgur.com/RpuboTX.jpg",
      title: "Legumes",
      width: "100%",
      link: '/categoria/4'
    },
    {
      url: "https://i.imgur.com/WPL0CxG.jpg",
      title: "Verduras",
      width: "100%",
      link: '/categoria/1'
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
    opacity: 0.3,
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

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = [


    <img
      src="https://i.imgur.com/MQ90zHw.png"
      alt="logo Lazyrit"
      className="carouselImageEmpresas"
      data-value="1" />,

    <img
      src="https://i.imgur.com/w4Uogoe.png"
      alt="Logo Beef Steak"
      className="carouselImageEmpresas"
      data-value="2"
    />,

    <img
      src="https://i.imgur.com/ShL1Ru4.png"
      alt="Logo Crococo"
      className="carouselImageEmpresas"
      data-value="3"
    />,

    <img
      src="https://i.imgur.com/gTwetPS.png"
      alt="Logo High Technology"
      className="carouselImageEmpresas"
      data-value="4"
    />,

    <img
      src="https://i.imgur.com/S3WbX5G.png"
      alt="Logo Pelican"
      className="carouselImageEmpresas"
      data-value="5"
    />,

    <img
      src="https://i.imgur.com/2Hrp36j.jpg"
      alt="Logo Air Down"
      className="carouselImageEmpresas"
      data-value="6"
    />,

  ];

  function irParaoTopo() {
    window.scroll(0, 0)
  };

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
                items={banner}
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
              <img src='https://i.imgur.com/9wWGF5i.png' alt='ramo com folhas' className='homeMotivosImagens' />
              <Typography className='homeMotivosTexto' variant='h5'>
                consuma produtos orgânicos
              </Typography>
            </Box>
            <Box className='homeMotivosBox'>
              <img src='https://i.imgur.com/SC8IWob.png' alt='pá de jardinagem' className='homeMotivosImagens' />
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

      <Box className="backgroundBotoes ">
        <Box className='homeBotoesCategorias '>
          {imagensProdutos.map((image) => (
            <Link to={image.link} className='homeBotoesCategoriasLink homeBordaCategoria'>
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width
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
            </Link>
          ))}
        </Box>
        <Box>
          <Box className="homeComoComprar1">
            COMO{" "}
            <img
              src="https://i.imgur.com/U7Qe7QW.png"
              alt="desenho de pegadas de pé" className="homeComoComprarImg"
            />{" "}
            COMPRAR:
          </Box>
          <div className='homeComoComprarStepper'>
            <img className='homeComoComprarStepperIMG' src="https://i.imgur.com/uPanCPo.png" alt="1.Você faz seu pedido até quarta-feira, 2.O produtor colhe e prepara tudo fresquinho, 3.Você recebe sua feirinha em casa quinta-feira" />
          </div>

          {/* <Box className='homeComoComprar2'>
            <Box className="homeComoComprarTexto">Você faz seu pedido até quarta-feira</Box>
            <Box className="homeComoComprarTexto">Os produtores colhem e preparam tudo fresquinho</Box>
            <Box className="homeComoComprarTexto">Você recebe sua feirinha em casa quinta-feira</Box>
          </Box> */}
        </Box>

        <Link to='/categoria/7' className='homeLinkDoacao'>
          <Box className='comoDoar-img'>
            <img src='https://i.imgur.com/D4tqIzM.png' alt='como doar' />
          </Box>
        </Link>

        <Box className="homeEmpresas">
          <img
            src="https://i.imgur.com/X0A7QVz.png"
            className="homePlanetaVerde"
            alt="Desenho do planeta Terra verde"
          />

          <Typography className='homeComprePorCategoriaTexto' variant='h3'>Empresas que consomem produtos Da terra</Typography>
          <img
            src="https://i.imgur.com/X0A7QVz.png"
            className="homePlanetaVerde"
            alt="Desenho do planeta Terra verde"
          />
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="color"

        >
          <Grid alignItems="center" item xs={12}>
            <Box>
              <div className="carouselEmpresas">
                <AliceCarousel
                  mouseTracking
                  items={items}
                  responsive={responsive}
                  infinite
                  autoPlay
                  autoPlayInterval={3000}
                  animationDuration={1000}
                />
              </div>
            </Box>
          </Grid>
        </Grid>

        <button id="back-to-top" onClick={irParaoTopo}>Topo</button>

      </Box>

    </>
  );
}

export default Home;
