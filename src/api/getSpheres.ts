import { notion } from "@/api/index";
import { NOTION_SPHERES_ID, NOTION_TECHNOLOGIES_ID } from "@/lib/consts/api";
import { spheresMap } from "@/api/mappers/spheresMap";

export const getSpheres = async () => {
  try {
    const data = await notion.databases.query({
      database_id: NOTION_SPHERES_ID,
    });
    return spheresMap(data.results);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
};
