import { IProjectProps, IRelatedProjectProps } from '@/pages/projects/[slug]';
import { Project } from '@/utils/types';
import { Grid, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ExploreProjectsButton } from '../HomePage/WhatWeHaveBeenDoingSection';
import ProjectCard from '../ProjectCard';

const parseItemToComponent = {
  project: (relatedProject: Project) => (
    <ProjectCard
      project={relatedProject}
      key={uuidv4()}
      className="study-case-related-auto-grow-cards"
    />
  ),
};

export function RelatedSection({
  project,
  related,
}: IProjectProps & IRelatedProjectProps) {
  return (
    <>
      <Grid container className="study-case-related-main-container">
        <Grid item xs={12}>
          <Typography className="study-case-related-base-title" variant="h4">
            Related projects / resources (media)
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          className="study-case-related-cards-container"
        >
          {related.map(({ type, relatedItem }, index) =>
            parseItemToComponent[type](relatedItem as Project),
          )}
          <ExploreProjectsButton />
        </Grid>
      </Grid>
    </>
  );
}
