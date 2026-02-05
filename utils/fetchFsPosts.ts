import fsPostsMapping from "@/utils/fsPosts.json";
import path from "path";
import type { FsPostsMapping } from "@/types/blog";

export async function fetchFsPosts(): Promise<FsPostsMapping> {
  const fsPromises = require("fs").promises;

  const fsPosts: FsPostsMapping = Object.fromEntries(
    await Promise.all(
      Object.entries(fsPostsMapping).map(([slug, md]) => {
        return fsPromises
          .readFile(path.join(process.cwd(), "fsPosts", md), {
            encoding: "utf8",
          })
          .then((decoded: string) => [slug, decoded]);
      })
    )
  );

  return fsPosts;
}
