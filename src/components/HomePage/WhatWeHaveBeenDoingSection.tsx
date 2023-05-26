import ProjectCard from '@/components/ProjectCard';
import classes from '@/styles/HomePage/WhatWeHaveBeenDoingSection.module.css';
import { Project } from '@/utils/types';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { v4 as uuidv4 } from 'uuid';

const StyledSection = styled(Grid)(() => ({
  padding: '120px',
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

function WhatWeHaveBeenDoingSection({ projects }: Props) {
  const importantProjects = projects.filter((el) => el.important);

  return (
    <Grid container className={clsx('flex-centered')}>
      <StyledSection item container xs={12} className={clsx('flex-centered')}>
        <Grid
          item
          xs={12}
          md={5}
          className={clsx('flex-centered', 'column', classes.texts)}
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
          className={clsx(classes.projects)}
        >
          {importantProjects.map((project, index) => (
            <ProjectCard
              project={project}
              key={uuidv4()}
              index={index}
              variant="home-page"
            />
          ))}
        </Box>
      </StyledSection>
      <StyledSection item container xs={12} className={clsx('flex-centered')}>
        <ExploreProjectsButton
          className={clsx('button', 'onlyMobile', classes.button)}
        />
      </StyledSection>
    </Grid>
  );
}

export default WhatWeHaveBeenDoingSection;
