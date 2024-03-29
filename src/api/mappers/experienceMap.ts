//@ts-nocheck
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { IHomePageData } from "@/models/IHomePageData";
import { IExperience } from "@/models/IExperience";
import dayjs from "dayjs";
import { getProjects } from "@/api/getProjects";
import { DATE_FORMAT } from "@/lib/consts/date-format";

export const experienceMap = async (data: Record<string, any>[]) => {
  const mappedData: IExperience[] = [];
  const projects = await getProjects();
  data.forEach((experience, i) => {
    const properties = experience.properties;
    const mappedExperience: IExperience = {
      id: experience.id,
      company:
        "Company" in properties
          ? properties["Company"].title
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      position:
        "Position" in properties
          ? properties["Position"].rich_text
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      achievements:
        "Achievements" in properties
          ? properties["Achievements"].rich_text
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      projects:
        "Projects" in properties && properties["Projects"].relation.length !== 0
          ? projects.filter((item) =>
              properties["Projects"].relation.find((rel) => item.id === rel.id)
            )
          : null,
      images:
        "Preview" in properties && properties["Preview"].files.length !== 0
          ? properties["Preview"].files.map((file) => file.file.url)
          : null,
      city:
        "City" in properties
          ? properties["City"].rich_text
              .map((item) => item.plain_text)
              .join("&#10;")
          : null,
      site: "Site" in properties ? properties["Site"].url : null,
      period:
        "Work period" in properties
          ? {
              start: dayjs(properties["Work period"].date.start),
              end: dayjs(properties["Work period"].date.end),
            }
          : null,
    };
    mappedData.push(mappedExperience);
  });
  return mappedData.sort((a, b) => {
    if (a.period?.start?.isValid() && b.period?.start?.isValid()) {
      const aStart = a.period?.start;
      const bStart = b.period?.start;
      if (aStart?.isBefore(bStart)) {
        return 1;
      } else if (aStart?.isAfter(bStart)) {
        return -1;
      } else {
        return 0;
      }
    }
  });
};
