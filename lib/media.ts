import { existsSync } from "node:fs";
import { join } from "node:path";

export type Media = { name: string; mp4: boolean; webm: boolean; poster: boolean };

// Runs at build time (server component), so dropping files into /public/media is enough. No code change.
export function media(name: string): Media {
  const has = (ext: string) => existsSync(join(process.cwd(), "public", "media", `${name}.${ext}`));
  return { name, mp4: has("mp4"), webm: has("webm"), poster: has("jpg") };
}
