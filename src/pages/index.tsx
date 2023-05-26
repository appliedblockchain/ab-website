import {
  GrowSection,
  OurVisionAndValuesSection,
  WhatClientsSaySection,
  WhatMakesUsDifferentSection,
  WhatWeHaveBeenDoingSection,
} from '@/components/HomePage';
import { IndexLayout } from '@/components/IndexLayout';
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
    <IndexLayout>
      <Grid container>
        <GrowSection />
        <WhatClientsSaySection />
        <WhatWeHaveBeenDoingSection projects={projects} />
        <WhatMakesUsDifferentSection />
        <OurVisionAndValuesSection />
      </Grid>
    </IndexLayout>
  );
}
