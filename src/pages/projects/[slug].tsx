import { getAllProjectSlugs, getProjectBySlug } from '@/data/projects';
import { Project, Related } from '@/utils/types';
import DetailsSection from '../../components/study-case/DetailsSection';
import TitleSection from '../../components/study-case/TitleSection';
import { RelatedSection } from '@/components/study-case/RelatedSection';

export interface IProjectProps {
  project: Project;
}

export interface IRelated extends Related {
  relatedItem: Project;
}

export interface IRelatedProjectProps {
  related: IRelated[];
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

const allRelated = (project: Project) => {
  if (!project.related) {
    return [];
  }
  return Promise.all(
    project.related.map(async (related) => {
      let relatedItem;
      if (related.type === 'project') {
        relatedItem = await getProjectBySlug(related.name);
      }
      return { ...related, relatedItem };
    }),
  );
};

export async function getStaticProps({ params }: IStaticProps) {
  const slug = params?.slug;
  const project = await getProjectBySlug(slug);
  const related = await allRelated(project);
  return {
    props: {
      project,
      related,
    },
  };
}

const Project = ({
  project,
  related,
}: IProjectProps & IRelatedProjectProps) => {
  return (
    <>
      <TitleSection project={project} />
      <DetailsSection project={project} />
      {related.length > 0 && (
        <RelatedSection project={project} related={related} />
      )}
    </>
  );
};

export default Project;
