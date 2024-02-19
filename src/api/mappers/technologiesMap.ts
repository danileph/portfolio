//@ts-nocheck
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ITechnology } from "@/models/ITechnology";
import { getTechnologies } from "@/api/getTechnologies";
import { getSpheres } from "@/api/getSpheres";
import { spheresMap } from "@/api/mappers/spheresMap";

export const technologiesMap = async (
  data: (PageObjectResponse | PartialPageObjectResponse)[]
) => {
  const mappedData: ITechnology[] = [];
  const _spheres = getSpheres();
  const [spheres] = await Promise.all([_spheres]);

  data.forEach((experience, i) => {
    const properties = experience.properties;
    const mappedTechnologies: ITechnology = {
      id: experience.id,
      name:
        "Name" in properties
          ? properties["Name"].title
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      grade: "Grade" in properties ? properties["Grade"].select?.name : null,
      type: "Type" in properties ? properties["Type"].select?.name : null,
      ref: "Ref" in properties ? properties["Ref"].url : null,
      images:
        "Preview" in properties && properties["Preview"].files.length !== 0
          ? properties["Preview"].files.map((file) => file.file.url)
          : null,
      technologies:
        "Related Technologies" in properties &&
        properties["Related Technologies"].relation.length !== 0
          ? technologiesMap(
              data.filter((item) =>
                properties["Related Technologies"].relation.find(
                  (rel) => item.id === rel.id
                )
              )
            )
          : null,
      spheres:
        "Spheres" in properties && properties["Spheres"].relation.length !== 0
          ? spheres?.filter((item) =>
              properties["Spheres"].relation.find((rel) => item.id === rel.id)
            )
          : null,
    };
    mappedData.push(mappedTechnologies);
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
