import {NOTION_KEY} from "@/lib/consts/api";

export const getEnv = (env: string | undefined) => {
  let retrievedEnv: string;
  if (env) {
    retrievedEnv = env;
  } else {
    retrievedEnv = 'ENV is undefined!';
    console.error(new Error('One of the ENVs is undefined!'))
  }
  return retrievedEnv
}
