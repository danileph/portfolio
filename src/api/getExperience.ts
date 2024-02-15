import { notion } from "@/api/index";
import { NOTION_EXPERIENCE_ID, NOTION_PAGES_ID } from "@/lib/consts/api";
import { experienceMap } from "@/api/mappers/experienceMap";

export const getExperience = async () => {
  try {
    const data = await notion.databases.query({
      database_id: NOTION_EXPERIENCE_ID,
    });
    console.dir(data.results);
    const mappedData = await experienceMap(data.results);
    return mappedData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};
