// @ts-nocheck
import {notion} from "@/api/index";
import {NOTION_PAGES_ID} from "@/lib/consts/api";
import {homePageDataMap} from "@/api/mappers/homePageDataMap";

export const getHomeContent = async () => {
  try {
    const data = await notion.databases.query({
      database_id: NOTION_PAGES_ID
    })
    const homePageId = data.results.find((page) => page.properties['Name'].title[0].plain_text === 'Home')?.id;
    if (homePageId) {
      const response = await notion.blocks.children.list({
        block_id: homePageId,
      });
      return homePageDataMap(response);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }
  }
}