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
      justifyContent="space-between"
      className={clsx(
        classes.card,
        variant === 'home-page' ? '' : classes.wideCard,
        index === 4 && variant === 'home-page' ? classes.margined : '',
      )}
    >
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Image
          width={240}
          height={70}
          src={project.logo.src}
          alt={project.logo.alt}
        />
        <div className={classes.industry}>
          <Typography
            variant="caption2"
            color="primary"
            className={classes.industryText}
          >
            {project.industry}
          </Typography>
        </div>
        <Typography variant="subtitle2">{project.subtitle}</Typography>
      </Box>
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
