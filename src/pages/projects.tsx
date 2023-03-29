import React from 'react';
import { IndexLayout } from '@/components/IndexLayout';
import { Filter } from '@/components/ProjectsPage';
import { projects } from '@/data/projects';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '@/components/ProjectCard';
import { Grid, styled } from '@mui/material';

const StyledSection = styled(Grid)(() => ({
  padding: '20px 120px',
  '@media screen and (max-width:900px)': {
    padding: '16px',
  },
}));

function ProjectsPage() {
  return (
    <IndexLayout>
      <StyledSection container>
        <Filter />
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={uuidv4()}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </StyledSection>
    </IndexLayout>
  );
}

export default ProjectsPage;
