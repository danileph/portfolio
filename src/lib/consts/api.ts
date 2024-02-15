import { getEnv } from "@/lib/helpers/getEnv";
export const NOTION_KEY = getEnv(process.env.NOTION_KEY);
export const NOTION_PAGES_ID = getEnv(process.env.NOTION_PAGES_ID);
export const NOTION_EXPERIENCE_ID = getEnv(process.env.NOTION_EXPERIENCE_ID);
export const NOTION_PROJECTS_ID = getEnv(process.env.NOTION_PROJECTS_ID);
export const NOTION_TECHNOLOGIES_ID = getEnv(
  process.env.NOTION_TECHNOLOGIES_ID
);
export const NOTION_SPHERES_ID = getEnv(process.env.NOTION_SPHERES_ID);
