import PageTitle from '@/components/PageTitle';
import { Resource } from '@/components/Resources';
import { getResources } from '@/data/resources';
import { TResource } from '@/utils/types';
import { Grid } from '@mui/material';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';

interface IResourceProps {
  resources: TResource[];
}

export async function getStaticProps() {
  const resources = await getResources({
    lookupField: 'type',
    value: 'podcast',
  });
  return {
    props: {
      resources,
    },
  };
}
function Podcasts({ resources }: IResourceProps) {
  return (
    <Grid container>
      <PageTitle title="Podcasts" subtitle="txt" />
      <Grid container item xs={12} className="resource-cards">
        <Grid>
          {_.chunk(resources, 3).map((chunk, index) => (
            <Grid container key={index}>
              {chunk.map((resource) => (
                <Resource resource={resource} key={uuid()} />
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Podcasts;
