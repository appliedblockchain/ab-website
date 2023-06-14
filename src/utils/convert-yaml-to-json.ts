import { join } from 'path';
import { YamlPaths } from './types';
import { readFileSync, readdirSync } from 'fs';
import yaml from 'js-yaml';

const paths = {
  projects: './src/data/projects',
} as Record<YamlPaths, string>;

export async function convertYamlDirToJson(path: YamlPaths) {
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

export async function convertYamlToJson(path: YamlPaths, fileName: string) {
  const file = readFileSync(
    join(process.cwd(), paths[path], `${fileName}.yaml`),
    'utf8',
  );
  const parsedFileToData = yaml.load(file);
  return parsedFileToData;
}
