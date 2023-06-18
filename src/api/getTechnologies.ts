import {notion} from "@/api/index";
import {NOTION_PROJECTS_ID, NOTION_TECHNOLOGIES_ID} from "@/lib/consts/api";
import {technologiesMap} from "@/api/mappers/technologiesMap";

export const getTechnologies = async () => {
  try {
    const data = await notion.databases.query({
      database_id: NOTION_TECHNOLOGIES_ID,
    })
   return technologiesMap(data.results);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }
  }
}