import React, { useEffect, useState } from 'react';
import { IndexLayout } from '@/components/IndexLayout';
import { Filter } from '@/components/ProjectsPage';
import { projects } from '@/data/projects';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '@/components/ProjectCard';
import { Grid, Input, styled } from '@mui/material';
import { useRouter } from 'next/router';

const StyledSection = styled(Grid)(() => ({
  padding: '20px 120px',
  '@media screen and (max-width:900px)': {
    padding: '16px',
  },
}));

function ProjectsPage() {
  const router = useRouter();
  const [type, setType] = useState('all-projects');
  const [industry, setIndustry] = useState('all-industries');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const { type, industry } = router.query;
    setType((type as string) || 'all-projects');
    setIndustry((industry as string) || 'all-industries');
    // const tmp = window.location.href.substring(
    //   window.location.href.indexOf('?'),
    // );
    // router.replace(tmp, undefined, { shallow: true });
  }, []);

  return (
    <IndexLayout>
      <StyledSection item container xs={12}>
        <Grid item container xs={12}>
          <Input
            placeholder="Search for clients"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Filter variant="Type" value={type} handleChange={setType} />
          <Filter
            variant="Industry"
            value={industry}
            handleChange={setIndustry}
          />
        </Grid>
        {projects
          .filter((el) => {
            // problem: industries have spaces and uppercased letters
            if (industry.includes('all') && type.includes('all')) {
              return true;
            } else if (industry.includes('all')) {
              return el.type === type;
            } else if (type.includes('all')) {
              return el.industry === industry;
            } else {
              return el.industry === industry && el.type === type;
            }
          })
          .map((project) => (
            <Grid item xs={12} md={4} key={uuidv4()}>
              <ProjectCard project={project} />
            </Grid>
          ))}
      </StyledSection>
    </IndexLayout>
  );
}

export default ProjectsPage;
