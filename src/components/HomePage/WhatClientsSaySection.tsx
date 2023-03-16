import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import clsx from 'clsx';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px',
}));

function WhatClientsSaySection() {
  
  return (
    <StyledSection item container xs={12}>
      <Grid item xs={12} className={clsx('flex-centered', 'column')}>
        <Typography variant="h4" color="primary">
          What our clients say?
        </Typography>
        <Typography variant="h2" color="text.secondary">
          Our testimonials
        </Typography>
      </Grid>
    </StyledSection>
  );
}

export default WhatClientsSaySection;
