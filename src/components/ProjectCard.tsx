import classes from '@/styles/components/ProjectCard.module.css';
import { Project } from '@/utils/types';
import { ArrowForward } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  project: Project;
  index?: number;
  variant?: string;
};

function ProjectCard({ project, index, variant = 'default' }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      className={clsx(
        classes.card,
        index === 4 && variant === 'home-page' ? classes.margined : '',
      )}
    >
      <Image
        width={130}
        height={38}
        src={project.logo.src}
        alt={project.logo.alt}
      />
      <div className={classes.industry}>
        <Typography variant="caption2" color="primary">
          {project.industry}
        </Typography>
      </div>
      <Typography variant="subtitle2">{project.subtitle}</Typography>
      <Link
        href={'projects' + project.viewCaseStudyLink || 'test'}
        className={classes.link}
      >
        <Typography color="primary">View case study</Typography>
        <ArrowForward color="primary" className={classes.arrow} />
      </Link>
    </Box>
  );
}

export default ProjectCard;
