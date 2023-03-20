import classes from '@/styles/HomePage/GrowSection.module.css';
import React from 'react';
import { Grid, Typography, Button, styled } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import clsx from 'clsx';
import { logos } from '@/data/carouselLogos';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px 120px 50px 120px',
  backgroundImage: "url('/background.jpeg')",
  backgroundColor: theme.palette.primary.main,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

function GrowSection() {
  return (
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
        <Grid item xs={3} justifyContent="center" display="grid">
          <Typography variant="h3" color="primary.contrastText">
            2015
          </Typography>
          <Typography variant="body1" color="primary.contrastText">
            since
          </Typography>
        </Grid>
        <Grid item xs={3} justifyContent="center" display="grid">
          <Typography variant="h3" color="primary.contrastText">
            +100
          </Typography>
          <Typography variant="body1" color="primary.contrastText">
            projects delivered
          </Typography>
        </Grid>
        <Grid item xs={3} justifyContent="center" display="grid">
          <Typography variant="h3" color="primary.contrastText">
            +100
          </Typography>
          <Typography variant="body1" color="primary.contrastText">
            developers
          </Typography>
        </Grid>
        <Grid item xs={3} justifyContent="center" display="grid">
          <Typography variant="h3" color="primary.contrastText">
            5 star
          </Typography>
          <Typography variant="body1" color="primary.contrastText">
            clients reviews on Gartner
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={clsx('flex-centered', classes.button)}>
        <Button className="button" variant="contained" color="secondary">
          <Typography variant="button" textTransform="none" color="primary">
            Stay informed
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} className={clsx('flex-centered', 'column')}>
        <Typography variant="subtitle1" color="primary.contrastText">
          Trusted by global top companies like:
        </Typography>
        <div className={clsx('flex-centered')}>
          {logos.map((logo) => (
            <Image
              className={classes.logo}
              alt={logo.alt}
              src={logo.src}
              key={uuidv4()}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </Grid>
    </StyledSection>
  );
}

export default GrowSection;
