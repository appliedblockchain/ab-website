import PageTitle from '@/components/PageTitle';
import { Resource } from '@/components/Resources';
import { getResources } from '@/data/resources';
import { TResource } from '@/utils/types';
import { Grid, TextField } from '@mui/material';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface IResourceProps {
  resources: TResource[];
}

export async function getStaticProps() {
  const resources = await getResources();
  return {
    props: {
      resources,
    },
  };
}

interface IFilterComponentProps {
  setFilter: (search: string, filter: string) => void;
}

function FilterComponent({ setFilter }: IFilterComponentProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilter(search, 'search');
  }, [search]);

  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <TextField
          variant="outlined"
          placeholder="Search for clients"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}

function ResourcesPage({ resources }: IResourceProps) {
  const [resourcesList, setResourcesList] = useState(resources);

  const handleFilter = () => {
    return null;
  };

  return (
    <Grid container>
      <PageTitle title="Our resources" subtitle="txt" />
      <Grid container item xs={12} className="resource-cards">
        <Grid>
          {_.chunk(resourcesList, 3).map((chunk, index) => (
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

export default ResourcesPage;
