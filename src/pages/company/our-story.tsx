import PageTitle from '@/components/PageTitle';
import TimelineComponent from '@/components/Timeline';
import { getOurStoryData } from '@/data/our-story';
import { TOurStory } from '@/utils/types';
import { Grid } from '@mui/material';

export async function getStaticProps() {
  const story = await getOurStoryData();
  return {
    props: { story },
  };
}

interface IOurStoryProps {
  story: TOurStory[];
}

function OurStory({ story }: IOurStoryProps) {
  return (
    <Grid container>
      <PageTitle title="Our Story" subtitle="Description" />
      <Grid container>
        <TimelineComponent story={story} />
      </Grid>
    </Grid>
  );
}

export default OurStory;
