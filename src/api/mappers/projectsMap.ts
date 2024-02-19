//@ts-nocheck
import { ITechnology } from "@/models/ITechnology";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { IProject } from "@/models/IProject";
import { getTechnologies } from "@/api/getTechnologies";
import { getExperience } from "@/api/getExperience";

export const projectsMap = async (data: Record<string, any>[]) => {
  const mappedData: IProject[] = [];
  const _technologies = getTechnologies();
  const [technologies, experience] = await Promise.all([_technologies]);

  data.forEach((project, i) => {
    const properties = project.properties;
    const mappedTechnologies: IProject = {
      id: project.id,
      name:
        "Name" in properties
          ? properties["Name"].title
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      description:
        "Description" in properties
          ? properties["Description"].rich_text
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      type: "Type" in properties ? properties["Type"].select?.name : null,
      myTechnologies:
        "My technologies" in properties &&
        properties["My technologies"].relation.length !== 0
          ? technologies.filter((item) =>
              properties["My technologies"].relation.find(
                (rel) => item.id === rel.id
              )
            )
          : null,
      otherTechnologies:
        "Other technologies" in properties &&
        properties["Other technologies"].relation.length !== 0
          ? technologies.filter((item) =>
              properties["Other technologies"].relation.find(
                (rel) => item.id === rel.id
              )
            )
          : null,
      images:
        "Preview" in properties && properties["Preview"].files.length !== 0
          ? properties["Preview"].files.map((file) => file.file.url)
          : null,
    };
    mappedData.push(mappedTechnologies);
  });
  return mappedData;
};
