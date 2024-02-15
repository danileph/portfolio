//@ts-nocheck
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ISphere } from "@/models/ISphere";

export const spheresMap = (
  data: (PageObjectResponse | PartialPageObjectResponse)[]
) => {
  const mappedData: ISphere[] = [];
  data.forEach((sphere, i) => {
    const properties = sphere.properties;
    const mappedSphere: ISphere = {
      id: sphere.id,
      name:
        "Name" in properties
          ? properties["Name"].title
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      grade: "Grade" in properties ? properties["Grade"].select?.name : null,
      order: "Order" in properties ? properties["Order"]["number"] : null,
      images:
        "Preview" in properties && properties["Preview"].files.length !== 0
          ? properties["Preview"].files.map((file) => file.file.url)
          : null,
    };
    mappedData.push(mappedSphere);
  });
  return mappedData.sort((a, b) => {
    if (!a.grade) {
      return -1;
    } else if (!b.grade) {
      return 1;
    }

    if (Number(a.grade) < Number(b.grade)) {
      return 1;
    } else if (Number(a.grade) > Number(b.grade)) {
      return -1;
    } else {
      return 0;
    }
  });
};
