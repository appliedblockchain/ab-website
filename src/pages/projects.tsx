import React, { useEffect, useState } from 'react';
import { IndexLayout } from '@/components/IndexLayout';
import { Filter } from '@/components/ProjectsPage';
import { projects } from '@/data/projects';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '@/components/ProjectCard';
import { Grid, Input, styled } from '@mui/material';
import { useRouter } from 'next/router';
import PageTitle from '@/components/PageTitle';

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

  const filteredProjects = projects.filter((el) => {
    const reg = /\s/g;
    const trimedType = el.type.toLowerCase().replace(reg, '-');
    const trimedIndustry = el.industry.toLowerCase().replace(reg, '-');
    const allIndustries = industry.includes('all');
    const allTypes = type.includes('all');

    if (search) {
      return el.title.toLowerCase().includes(search.toLowerCase());
    }

    if (allIndustries && allTypes) {
      return true;
    } else if (allIndustries) {
      return trimedType === type;
    } else if (allTypes) {
      return trimedIndustry === industry;
    } else {
      return trimedIndustry === industry && trimedType === type;
    }
  });

  return (
    <IndexLayout>
      <PageTitle
        title="Projects"
        subtitle="We develop applications for startups and enterprises using blockchain, advanced cryptography and secure enclaves"
      />
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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Grid item xs={12} md={4} key={uuidv4()}>
              <ProjectCard project={project} />
            </Grid>
          ))
        ) : (
          <div>No project matches parameters of your request</div>
        )}
      </StyledSection>
    </IndexLayout>
  );
}

export default ProjectsPage;
