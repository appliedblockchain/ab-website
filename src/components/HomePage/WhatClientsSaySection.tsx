import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import { Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';
import React, { useState } from 'react';
import { carousel } from '@/data/carouselTestimonials';
import Carousel from './Carousel';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px',
}));

function WhatClientsSaySection() {
  const [activeIndex, setActiveIndex] = useState(carousel.length / 2);
  const updateIndex = (newIndex: number | undefined) => {
    if (newIndex) {
      if (newIndex < 0) {
        newIndex = carousel.length - 1;
      } else if (newIndex >= carousel.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }
  };

  console.log(activeIndex);

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
