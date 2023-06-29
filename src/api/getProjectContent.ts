import {notion} from "@/api/index";
import {projectPageDataMap} from "@/api/mappers/projectPageDataMap";

export const getProjectContent = async (projectId: string) => {
  try {
    if (projectId) {
      const response = await notion.blocks.children.list({
        block_id: projectId,
      });
      return projectPageDataMap(response);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }
  }
}