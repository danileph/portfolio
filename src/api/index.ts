import {Client} from "@notionhq/client";
import {NOTION_KEY} from "@/lib/consts/api";

export const notion = new Client({ auth: NOTION_KEY })