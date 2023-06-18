// @ts-nocheck
import {ListBlockChildrenResponse} from "@notionhq/client/build/src/api-endpoints";
import {IHomePageData} from "@/models/IHomePageData";

export const homePageDataMap = (data: ListBlockChildrenResponse): IHomePageData[] => {
  const mappedData = [];
  data.results.forEach((block, i) => {
    if (block.type === 'heading_1') {
      mappedData.push({
        title: block.heading_1.rich_text.map(item => item.plain_text).join('&#10;'),
        content: [],
      });
    } else if (block.type === 'paragraph') {
      mappedData[mappedData.length - 1].content.push(block.paragraph.rich_text.map(item => item.plain_text).join('&#10;'));
    }
  })
  return mappedData;
}