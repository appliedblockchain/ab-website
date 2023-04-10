import classes from '@/styles/HomePage/WhatWeHaveBeenDoingSection.module.css';
import React from 'react';
import { Grid, Typography, styled, Button, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { projects } from '@/data/projects';
import Typewriter from 'typewriter-effect';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

const StyledSection = styled(Grid)(() => ({
  padding: '120px',
  '@media screen and (max-width:900px)': {
    padding: '60px 16px',
  },
}));

function WhatWeHaveBeenDoingSection() {
  const importantProjects = projects.filter((el) => el.important);

  return (
    <StyledSection item container xs={12}>
      <Grid
        item
        xs={12}
        md={5}
        className={clsx('flex-centered', 'column', classes.texts)}
      >
        <Typography variant="h4" color="primary">
          {"What we've been doing?"}
        </Typography>
        <Typography variant="h2" color="text.secondary">
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
        <Typography variant="subtitle1" color="text.disabled">
          {
            'Here`s a collection of our prime projects, challenges faced, and final outcomes.'
          }
        </Typography>
        <Button className="button" variant="contained" color="primary">
          <Typography
            variant="button"
            textTransform="none"
            color="primary.contrastText"
          >
            Explore all projects
          </Typography>
        </Button>
      </Grid>
      <Image
        src="/mask-group.svg"
        alt="mask-group"
        width={815}
        height={619}
        className={classes.blueBackground}
      />
      <Box
        display="flex"
        flexDirection="column"
        className={clsx('onlyDesktop', classes.projects)}
      >
        {importantProjects.map((project, index) => (
          <ProjectCard project={project} key={uuidv4()} index={index} variant='home-page'/>
        ))}
      </Box>
    </StyledSection>
  );
}

export default WhatWeHaveBeenDoingSection;
