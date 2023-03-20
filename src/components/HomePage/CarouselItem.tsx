import classes from '@/styles/HomePage/WhatClientsSaySection.module.css';
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

export const CarouselItem = ({ item }: { item: any }) => {
  return (
    <div className={classes.carouselItem}>
      <Grid container item xs={12} key={uuidv4()}>
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
            <Box className={classes.quote}>
              <Typography variant="subtitle1" color="primary.contrastText">
                &quot;{item.quote}&quot;
              </Typography>
            </Box>
          </Box>
          <Link href={item.linkToCaseStudy}>
            <Typography variant="body2" color="primary">
              Case study
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Box width="485px" height="336px">
            <ReactPlayer width="485px" height="336px" url={item.linkToVideo} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
