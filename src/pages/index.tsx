import {
  GrowSection,
  OurVisionAndValuesSection,
  WhatClientsSaySection,
  WhatMakesUsDifferentSection,
  WhatWeHaveBeenDoingSection,
} from '@/components/HomePage';
import StayUpdatedSection from '@/components/HomePage/StayUpdatedSection';
import { getProjects } from '@/data/projects';
import { Project } from '@/utils/types';
import { Grid } from '@mui/material';

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

interface Props {
  projects: Project[];
}

export default function HomePage({ projects }: Props) {
  return (
    <>
      <Grid container>
        <GrowSection />
        <WhatClientsSaySection />
        <WhatWeHaveBeenDoingSection projects={projects} />

        <WhatMakesUsDifferentSection />
        <StayUpdatedSection />

      </Grid>
    </>
  );
}
