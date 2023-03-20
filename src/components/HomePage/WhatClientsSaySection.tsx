import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import React from 'react';
import { Grid, Typography, styled, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import clsx from 'clsx';
import { carousel } from '@/data/carouselTestimonials';
import Carousel from 'react-material-ui-carousel';
import Link from 'next/link';
import ReactPlayer from 'react-player';

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
      <Carousel
        navButtonsAlwaysInvisible={true}
        className={classes.carousel}
        indicatorIconButtonProps={{
          className: classes.indicatorIcon,
        }}
        indicatorContainerProps={{ style: { marginTop: '40px' } }}
        IndicatorIcon={carousel.map((el) => (
          <Image
            key={uuidv4()}
            src={el.logo.src}
            alt={el.logo.src}
            width={el.logo.width}
            height={el.logo.height}
          />
        ))}
      >
        {carousel.map((item) => (
          <Grid
            container
            item
            xs={12}
            key={uuidv4()}
            className={classes.carouselItem}
          >
            <Grid
              item
              xs={6}
              justifyContent="space-between"
              display="flex"
              flexDirection="column"
            >
              <Box display="flex" flexDirection="column">
                <Box display="flex" alignItems="center">
                  <Image
                    width={60}
                    height={60}
                    src={item.avatar}
                    alt={item.avatar}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    className={classes.author}
                  >
                    <Typography variant="h6" color="primary.contrastText">
                      {item.author}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.position} at{' '}
                      <Link href={item.linkToCaseStudy}>{item.company}</Link>
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="subtitle1"
                  color="primary.contrastText"
                  className={classes.quote}
                >
                  &quot;{item.quote}&quot;
                </Typography>
              </Box>
              <Link href={item.linkToCaseStudy}>
                <Typography variant="body2" color="primary">
                  Case study
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <ReactPlayer
                width="485px"
                height="336px"
                url={item.linkToVideo}
              />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </StyledSection>
  );
}

export default WhatClientsSaySection;
