import {notion} from "@/api/index";
import {NOTION_EXPERIENCE_ID, NOTION_PROJECTS_ID} from "@/lib/consts/api";
import {projectsMap} from "@/api/mappers/projectsMap";

export const getProjects = async () => {
  try {
    const data = await notion.databases.query({
      database_id: NOTION_PROJECTS_ID
    })
    const mapppedData = await projectsMap(data.results)
    return mapppedData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }
  }
}