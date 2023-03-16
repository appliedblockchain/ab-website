import classes from '@/styles/HomePage/WhatWeHaveBeenDoingSection.module.css';
import React from 'react';
import { Grid, Typography, styled, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { projects } from '@/data/projects';

const StyledSection = styled(Grid)(({ theme }) => ({
  padding: '120px',
  
}));

function WhatWeHaveBeenDoingSection() {
  return (
    <StyledSection item container xs={12}>
      <Grid
        item
        xs={5}
        className={clsx('flex-centered', 'column', classes.texts)}
      >
        <Typography variant="h4" color="primary">
          {'What we`ve been doing?'}
        </Typography>
        <Typography variant="h2" color="text.secondary">
          Commodities
        </Typography>
        <Typography variant="subtitle1" color="text.disabled">
          {
            'Here`s a collection of our prime projects, challenges faced, and final outcomes.'
          }
        </Typography>
        <Button className="button" variant="contained" color="primary">
          <Typography variant="button" textTransform="none" color="white">
            Explore all projects
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={7} container>
        {projects.map((project) => (
          <Grid item xs={6} key={uuidv4()}>
            {project.title}
          </Grid>
        ))}
      </Grid>
    </StyledSection>
  );
}

export default WhatWeHaveBeenDoingSection;
