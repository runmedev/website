import fsPostsMapping from "@/utils/fsPosts.json";
import path from "path";

export async function fetchFsPosts() {
  require("fs");
  const fsPromises = require("fs").promises;

  const fsPosts = Object.fromEntries(
    await Promise.all(
      Object.entries(fsPostsMapping).map(([slug, md]) => {
        return fsPromises
          .readFile(path.join(process.cwd(), "fsPosts", md), {
            encoding: "utf8",
          })
          .then((decoded) => [slug, decoded]);
      })
    )
  );

  return fsPosts;
}
