import classes from '@/styles/HomePage/WhatMakesUsDifferentSection.module.css';
import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';

import { useLottie, useLottieInteractivity } from 'lottie-react';
import robotAnimation from './lottie.json';

const style = {
  height: 720,
  border: 3,
  borderStyle: 'solid',
  borderRadius: 7,
};

const options = {
  animationData: robotAnimation,
};

const StyledSection = styled(Grid)(() => ({
  padding: '60px 60px 60px 120px',
  backgroundColor: '#1E2126',
  borderTopLeftRadius: '750px 122px',
  borderTopRightRadius: '750px 122px',
  '@media screen and (max-width:900px)': {
    padding: '70px 16px 0 16px',
    textAlign: 'center',
  },
}));

function WhatMakesUsDifferentSection() {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1],
        type: 'seek',
        frames: [0, 240],
      },
    ],
  });

  return (
      <StyledSection item container xs={12}>
        <Grid item xs={12} className={clsx('flex-centered', 'column')}>
          <Typography variant="h4" color="secondary">
            What makes us different?
          </Typography>
          <Typography variant="h2" color="primary.contrastText">
            Our Core technologies
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={clsx('flex-centered', 'column', classes.texts)}
        >
          <Typography
            variant="h5"
            color="primary.contrastText"
            className={classes.title}
          >
            Blockchain based solutions
          </Typography>
          <Typography variant="subtitle1" color="grey.500">
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          </Typography>
        </Grid>
        <Grid item xs={6}>{Animation}</Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={clsx('flex-centered', 'column', classes.texts)}
        >
          <Typography
            variant="h5"
            color="primary.contrastText"
            className={classes.title}
          >
            Zero-Knowledge Technology
          </Typography>
          <Typography variant="subtitle1" color="grey.500">
            We use ZK Proofs cryptographic techniques to privately verify
            transactions without revealing the underlying information.
            Blockchain technology combined with ZKP algorithms is a powerful
            combination for security enabled protocols.
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={clsx('flex-centered', 'column', classes.texts)}
        >
          <Typography
            variant="h5"
            color="primary.contrastText"
            className={classes.title}
          >
            Secure Hardware Enclaves
          </Typography>
          <Typography variant="subtitle1" color="grey.500">
            In addition, we use Intel SGX hardware-based memory encryption to
            isolate specific application code and data in memory. Intel SGX
            allows Applied Blockchain to allocate private regions of memory,
            called enclaves, which are designed to be protected from processes
            running at higher privilege levels.
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </StyledSection>
  );
}

export default WhatMakesUsDifferentSection;
