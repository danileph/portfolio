// @ts-nocheck
import {ListBlockChildrenResponse} from "@notionhq/client/build/src/api-endpoints";
import {IHomePageData} from "@/models/IHomePageData";
import {IProjectPageData} from "@/models/IProjectPageData";

export const projectPageDataMap = (data: ListBlockChildrenResponse) => {
  const mappedData: IProjectPageData[] = [];
  data.results.forEach((block, i) => {
    if (block.type === 'heading_1') {
      mappedData.push({
        content: block.heading_1.rich_text.map(item => item.plain_text).join('&#10;'),
        type: block.type,
      });
    } else if (block.type === 'paragraph') {
      mappedData.push({
        content: block.paragraph.rich_text.map(item => item.plain_text).join('&#10;'),
        type: block.type,
      });
    }
  })
  return mappedData;
}