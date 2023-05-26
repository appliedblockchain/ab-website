import { IndexLayout } from '@/components/IndexLayout';
import PageTitle from '@/components/PageTitle';
import ProjectCard from '@/components/ProjectCard';
import { Filter } from '@/components/ProjectsPage';
import { getProjects } from '@/data/projects';
import classes from '@/styles/ProjectsPage.module.css';
import { Project } from '@/utils/types';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField, styled } from '@mui/material';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const StyledSection = styled('div')(() => ({
  padding: '20px 120px',
  '@media screen and (max-width:900px)': {
    padding: '16px',
  },
}));

interface Props {
  projects: Project[];
}

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

function ProjectsPage({ projects }: Props) {
  const router = useRouter();
  const [type, setType] = useState('all-projects');
  const [industry, setIndustry] = useState('all-industries');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const { type, industry } = router.query;
    setType((type as string) || 'all-projects');
    setIndustry((industry as string) || 'all-industries');
  }, [router.query]);

  const filteredProjects = projects.filter((el) => {
    const reg = /\s/g;
    const trimedType = el.type.toLowerCase();
    const trimedIndustry = el.industry.toLowerCase().replace(reg, '-');
    const allIndustries = industry.includes('all');
    const allTypes = type.includes('all');
    if (search) {
      return el.title.toLowerCase().includes(search.toLowerCase());
    }

    if (allIndustries && allTypes) {
      return true;
    } else if (allIndustries) {
      if (type.includes('case')) {
        return trimedType.includes('case');
      }
      return trimedType.includes('testimonials');
    } else if (allTypes) {
      return trimedIndustry === industry;
    } else {
      if (type.includes('case')) {
        return trimedIndustry === industry && trimedType.includes('case');
      }
      return trimedIndustry === industry && trimedType.includes('testimonials');
    }
  });

  return (
    <IndexLayout>
      <PageTitle
        title="Projects"
        subtitle="We develop applications for startups and enterprises using blockchain, advanced cryptography and secure enclaves"
      />
      <StyledSection>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          className={clsx('onlyDesktop', classes.filters)}
        >
          <TextField
            variant="outlined"
            placeholder="Search for clients"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              className: classes.input,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex">
            <Filter variant="Type" value={type} handleChange={setType} />
            <Filter
              variant="Industry"
              value={industry}
              handleChange={setIndustry}
            />
          </Box>
        </Box>
        {filteredProjects.length > 0 ? (
          <Box display="flex" flexWrap="wrap" columnGap="39px" rowGap="39px">
            {filteredProjects.map((project) => (
              <Box key={uuidv4()} className={classes.project}>
                <ProjectCard project={project} />
              </Box>
            ))}
          </Box>
        ) : (
          <div>No projects matches parameters of your request</div>
        )}
      </StyledSection>
    </IndexLayout>
  );
}

export default ProjectsPage;
