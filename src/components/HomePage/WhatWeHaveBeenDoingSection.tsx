import ProjectCard from '@/components/ProjectCard';
import classes from '@/styles/HomePage/WhatWeHaveBeenDoingSection.module.css';
import { Project } from '@/utils/types';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import _ from 'lodash';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { v4 as uuidv4 } from 'uuid';
import ProjectsCarousel from './ProjectsCarousel';

const StyledSection = styled(Grid)(() => ({
  padding: '120px',
  placeItems: 'unset !important',
  '@media screen and (max-width:900px)': {
    padding: '60px 16px',
  },
}));

const ExploreProjectsButton = ({ ...props }) => {
  return (
    <Button variant="contained" color="primary" {...props} href="/projects">
      <Typography
        variant="button"
        textTransform="none"
        color="primary.contrastText"
      >
        Explore all projects
      </Typography>
    </Button>
  );
};

interface Props {
  projects: Project[];
}

function WhatWeHaveBeenDoingDetails() {
  return (
    <Grid
      item
      xs={12}
      md={3}
      lg={4}
      className={clsx(classes.overrideFloatingTop, classes.detailsContainer)}
    >
      <Typography variant="h4" color="primary">
        {"What we've been doing?"}
      </Typography>
      <Typography
        variant="h2"
        color="text.secondary"
        className={classes.writer}
      >
        <Typewriter
          options={{
            strings: [
              'Energy',
              'Finance',
              'Commodities',
              'Transports',
              'Supply-Chain',
              'DeFi',
              'Telecoms',
              "NFT's",
              'Web3',
            ],
            autoStart: true,
            loop: true,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            pauseFor: 250,
          }}
        />
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.disabled"
        className={classes.subtitle}
      >
        {
          "Here's a collection of our prime projects, challenges faced, and final outcomes."
        }
      </Typography>
      <ExploreProjectsButton className={clsx('button', 'onlyDesktop')} />
    </Grid>
  );
}

function WhatWeHaveBeenDoingImage() {
  return (
    <Grid className={clsx(classes.background, 'onlyDesktop')}>
      <Grid className={classes.divBackground} />
    </Grid>
  );
}

function WhatWeHaveBeenDoingProjects({ projects }: Props) {
  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '220px',
      }}
      className={clsx('onlyDesktop')}
    >
      {_.chunk(projects, Math.ceil(projects.length / 2)).map((chunk, index) => (
        <Grid item key={uuidv4()} className={clsx('marginNotLastItem')}>
          {chunk.map((project) => (
            <ProjectCard project={project} key={uuidv4()} variant="home-page" />
          ))}
        </Grid>
      ))}
    </Grid>
  );
}

function WhatWeHaveBeenDoingSection({ projects }: Props) {
  const importantProjects = projects.filter((el) => el.important);

  return (
    <Grid
      container
      direction={'row'}
      className={clsx('flex-centered', classes.mainContainer)}
    >
      <WhatWeHaveBeenDoingDetails />
      <WhatWeHaveBeenDoingImage />
      <WhatWeHaveBeenDoingProjects projects={importantProjects} />
      <Grid container className={clsx('flex-centered', 'onlyMobile')}>
        <ProjectsCarousel projects={importantProjects} />
      </Grid>
      <ExploreProjectsButton
        className={clsx('button', 'onlyMobile', classes.button)}
      />
    </Grid>
  );
}

export default WhatWeHaveBeenDoingSection;
