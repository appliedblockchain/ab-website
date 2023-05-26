import classes from '@/styles/HomePage/GrowSection.module.css';
import React from 'react';
import { Grid, Typography, Button, styled } from '@mui/material';
import clsx from 'clsx';
import TrustedCarousel from './TrustedCarousel';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px 120px 50px 120px',
  // backgroundImage: "url('/background.jpeg')",
  // backgroundColor: theme.palette.primary.main,
  // backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  zIndex: 2,
  marginTop: '-900px',
  '@media screen and (max-width:900px)': {
    padding: '16px',
  },
}));

const StyledVideo = styled('video')(() => ({
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  top: 0,
  zIndex: '1',
}));

function GrowSection() {
  return (
    <>
      <StyledVideo autoPlay muted loop>
        <source src="videos/video-effect.mp4" type="video/mp4" />
      </StyledVideo>
      <StyledSection item container xs={12}>
        <Grid item xs={12} className={clsx('flex-centered')}>
          <Typography
            variant="h1"
            color="primary.contrastText"
            textAlign="center"
            width="800px"
          >
            Grow your business with web 3
          </Typography>
        </Grid>
        <Grid item container xs={12} className={classes.numbers}>
          <Grid item xs={6} md={3} justifyContent="center" display="grid">
            <Typography variant="h3" color="primary.contrastText">
              2015
            </Typography>
            <Typography variant="body1" color="primary.contrastText">
              since
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} justifyContent="center" display="grid">
            <Typography variant="h3" color="primary.contrastText">
              +100
            </Typography>
            <Typography variant="body1" color="primary.contrastText">
              projects delivered
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} justifyContent="center" display="grid">
            <Typography variant="h3" color="primary.contrastText">
              +100
            </Typography>
            <Typography variant="body1" color="primary.contrastText">
              developers
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} justifyContent="center" display="grid">
            <Typography variant="h3" color="primary.contrastText">
              5 star
            </Typography>
            <Typography variant="body1" color="primary.contrastText">
              clients reviews on Gartner
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={clsx('flex-centered', classes.button)}>
          <Button
            className="button"
            variant="contained"
            style={{ backgroundColor: '#ffff' }}
          >
            <Typography variant="button" textTransform="none" color="primary">
              Stay informed
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} className={clsx('flex-centered', 'column')}>
          <Typography variant="subtitle1" color="primary.contrastText">
            Trusted by global top companies like:
          </Typography>
          <TrustedCarousel />
        </Grid>
      </StyledSection>
    </>
  );
}

export default GrowSection;