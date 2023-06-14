import {
  convertYamlDirToJson,
  convertYamlToJson,
} from '@/utils/convert-yaml-to-json';
import { Project } from '@/utils/types';

export async function getProjects(): Promise<Project[]> {
  const projects = await convertYamlDirToJson('projects');
  return projects.sort(
    (a, b) => (a as Project).position - (b as Project).position,
  ) as Project[];
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await convertYamlDirToJson('projects');
  return projects
    .filter((project) => (project as Project).viewCaseStudyLink)
    .map((project) => (project as Project).viewCaseStudyLink!);
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const project = await convertYamlToJson('projects', slug);
  return project as Project;
}
