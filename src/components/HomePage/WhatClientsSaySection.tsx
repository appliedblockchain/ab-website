import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import { Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import Carousel from './Carousel';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px',
}));

function WhatClientsSaySection() {
  return (
    <StyledSection item xs={12} className={clsx('flex-centered', 'column')}>
      <Typography variant="h4" color="primary">
        What our clients say?
      </Typography>
      <Typography variant="h2" color="text.secondary">
        Our testimonials
      </Typography>
      <Carousel />
    </StyledSection>
  );
}

export default WhatClientsSaySection;
