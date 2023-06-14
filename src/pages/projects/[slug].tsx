import { getAllProjectSlugs, getProjectBySlug } from '@/data/projects';
import { Project } from '@/utils/types';
import DetailsSection from './DetailsSection';
import TitleSection from './TitleSection';

export interface IProjectProps {
  project: Project;
}

export async function getStaticPaths() {
  const slugs = await getAllProjectSlugs();
  return {
    paths: slugs.map((slug) => '/projects' + slug),
    fallback: false,
  };
}

interface IStaticProps {
  params: {
    slug: string;
  };
  locales: unknown;
  locale: unknown;
  defaultLocale: unknown;
}

export async function getStaticProps({ params }: IStaticProps) {
  const slug = params?.slug;
  const project = await getProjectBySlug(slug);
  return {
    props: {
      project,
    },
  };
}

const Project = ({ project }: IProjectProps) => {
  return (
    <>
      <TitleSection project={project} />
      <DetailsSection project={project} />
    </>
  );
};

export default Project;
