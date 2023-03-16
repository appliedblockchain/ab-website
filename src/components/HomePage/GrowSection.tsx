import classes from '@/styles/HomePage/GrowSection.module.css';
import React from 'react';
import { Grid, Typography, Button, styled } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import clsx from 'clsx';

const StyledSection = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '120px 120px 50px 120px',
}));

function GrowSection() {
  const logos = [
    {
      src: '/carousel-logos/shell.svg',
      alt: 'Logo Shell',
      width: 49,
      height: 45,
    },
    {
      src: '/carousel-logos/vodafone.svg',
      alt: 'Logo Vodafone',
      width: 65,
      height: 53,
    },
    {
      src: '/carousel-logos/united-nations.svg',
      alt: 'Logo United Nations',
      width: 58,
      height: 47,
    },
    {
      src: '/carousel-logos/algorand.svg',
      alt: 'Logo Algorand',
      width: 114,
      height: 31,
    },
    {
      src: '/carousel-logos/uppfirst.svg',
      alt: 'Logo Uppfirst',
      width: 98,
      height: 26,
    },
    {
      src: '/carousel-logos/klm.svg',
      alt: 'Logo KLM',
      width: 65,
      height: 38,
    },
    {
      src: '/carousel-logos/aorist.svg',
      alt: 'Logo Aorist',
      width: 97,
      height: 25,
    },
    {
      src: '/carousel-logos/opuluos.svg',
      alt: 'Logo Opuluos',
      width: 143,
      height: 39,
    },
  ];

  return (
    <StyledSection item container xs={12}>
      <Grid item xs={12} className={clsx('flex-centered', 'column')}>
        <Typography variant="h1" color="white">
          Grow your business with
          <Typography variant="h1" color="secondary">
            web 3
          </Typography>
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={3}>
          <Typography variant="h3" color="white">
            2015
          </Typography>
          <Typography variant="body1" color="white">
            since
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h3" color="white">
            +100
          </Typography>
          <Typography variant="body1" color="white">
            projects delivered
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h3" color="white">
            +100
          </Typography>
          <Typography variant="body1" color="white">
            developers
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h3" color="white">
            5 star
          </Typography>
          <Typography variant="body1" color="white">
            clients reviews on Gartner
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className="flex-centered">
        <Button className="button" variant="outlined">
          <Typography variant="button" textTransform="none" color="primary">
            Stay informed
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} className={clsx('flex-centered', 'column')}>
        <Typography variant="subtitle1" color="white">
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
