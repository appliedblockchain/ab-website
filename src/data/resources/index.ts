import { convertYamlToJson } from "@/utils/convert-yaml-to-json"
import { TResource } from "@/utils/types"

interface IGetResources {
    lookupField: 'type'
    value: string
}

export async function getResources (filter?: IGetResources) {
    let resources = await convertYamlToJson('resources', 'data') as Array<TResource>
    resources = resources.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    if (filter) {
        return resources.filter(resource => resource[filter.lookupField] === filter.value) 
    }
    return resources
}