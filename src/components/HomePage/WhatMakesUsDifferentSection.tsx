import classes from '@/styles/HomePage/WhatMakesUsDifferentSection.module.css';
import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '60px 60px 60px 120px',
  backgroundColor: '#1E2126',
  borderTopLeftRadius: '750px 122px',
  borderTopRightRadius: '750px 122px',
}));

function WhatMakesUsDifferentSection() {
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
        xs={6}
        className={clsx('flex-centered', 'column', classes.texts)}
      >
        <Typography variant="h5" color="primary.contrastText">
          Title: tokenization?
        </Typography>
        <Typography variant="subtitle1" color="grey.500">
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph
        </Typography>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid
        item
        xs={6}
        className={clsx('flex-centered', 'column', classes.texts)}
      >
        <Typography variant="h5" color="primary.contrastText">
          Zero-Knowledge Technology
        </Typography>
        <Typography variant="subtitle1" color="grey.500">
          We use ZK Proofs cryptographic techniques to privately verify
          transactions without revealing the underlying information. Blockchain
          technology combined with ZKP algorithms is a powerful combination for
          security enabled protocols.
        </Typography>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid
        item
        xs={6}
        className={clsx('flex-centered', 'column', classes.texts)}
      >
        <Typography variant="h5" color="primary.contrastText">
          Secure Hardware Enclaves
        </Typography>
        <Typography variant="subtitle1" color="grey.500">
          In addition, we use Intel SGX hardware-based memory encryption to
          isolate specific application code and data in memory. Intel SGX allows
          Applied Blockchain to allocate private regions of memory, called
          enclaves, which are designed to be protected from processes running at
          higher privilege levels.
        </Typography>
      </Grid>
      <Grid item xs={6}></Grid>
    </StyledSection>
  );
}

export default WhatMakesUsDifferentSection;
