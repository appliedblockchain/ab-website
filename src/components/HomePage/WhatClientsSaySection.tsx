import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import { Grid, Typography, styled, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import clsx from 'clsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton, Button } from '@mui/material';
import React, { useState } from 'react';
import { CarouselItem } from './CarouselItem';
import { carousel } from '@/data/carouselTestimonials';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px',
}));

function WhatClientsSaySection() {
  const [activeIndex, setActiveIndex] = useState(carousel.length / 2);
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = carousel.length - 1;
    } else if (newIndex >= carousel.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <StyledSection item xs={12} className={clsx('flex-centered', 'column')}>
      <Typography variant="h4" color="primary">
        What our clients say?
      </Typography>
      <Typography variant="h2" color="text.secondary">
        Our testimonials
      </Typography>

      <div className={classes.carousel}>
        <div
          className={classes.inner}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {carousel.map((item) => {
            return <CarouselItem key={uuidv4()} item={item} />;
          })}
        </div>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="40px"
        >
          <IconButton
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <div className={classes.indicatorsWrapper}>
            <div
              className={classes.indicators}
              style={{
                transform: `translate(-${activeIndex * 180}px)`,
                marginRight: `-${carousel.length * 180 - 180}px`,
              }}
            >
              {carousel.map((item, index) => {
                return (
                  <Button
                    key={index}
                    className={clsx(
                      classes.indicatorContainer,
                      index === activeIndex ? classes.activeIndicator : '',
                    )}
                    onClick={() => {
                      updateIndex(index);
                    }}
                  >
                    <Image
                      key={uuidv4()}
                      src={item.logo.src}
                      alt={item.logo.src}
                      width={item.logo.width}
                      height={item.logo.height}
                    />
                  </Button>
                );
              })}
            </div>
          </div>
          <IconButton
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </div>
    </StyledSection>
  );
}

export default WhatClientsSaySection;
