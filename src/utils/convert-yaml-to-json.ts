import { join } from 'path';
import { YamlPaths } from './types';
import { readFileSync, readdirSync } from 'fs';
import yaml from 'js-yaml';

const paths = {
  projects: './src/data/projects',
} as Record<YamlPaths, string>;

export default async function convertYamlToJson(path: YamlPaths) {
  const directory = join(process.cwd(), paths[path]);
  const files = await readdirSync(directory)
    .filter((file) => file.endsWith('.yaml'))
    .map((file) => {
      return readFileSync(join(directory, file), 'utf8');
    });

  const parsedFilesToData = files.map((file) => {
    return yaml.load(file);
  });

  return parsedFilesToData;
}
