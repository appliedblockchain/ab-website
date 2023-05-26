import convertYamlToJson from '@/utils/convert-yaml-to-json';
import { Project } from '@/utils/types';

export async function getProjects(): Promise<Project[]> {
  const projects = await convertYamlToJson('projects');
  return projects.sort(
    (a, b) => (a as Project).position - (b as Project).position,
  ) as Project[];
}
