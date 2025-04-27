import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  NEXT_PUBLIC_PEXELS_ACCESS_KEY: str(),
});
