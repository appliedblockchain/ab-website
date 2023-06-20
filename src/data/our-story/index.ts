import { convertYamlToJson } from '@/utils/convert-yaml-to-json';

export async function getOurStoryData() {
  const ourStoryData = await convertYamlToJson('our-story', 'data');
  return ourStoryData;
}
