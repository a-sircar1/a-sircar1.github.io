import { promises as fs } from "fs";
import path from "path";
import { posts } from "@/data/siteContent";

function getLegacyFilePath(segments) {
  return path.join(process.cwd(), ...segments, "index.html");
}

function extractArticleHtml(rawHtml) {
  const articleMatch = rawHtml.match(/<article class="post"[\s\S]*?<\/article>/i);
  if (articleMatch) return articleMatch[0];

  const mainMatch = rawHtml.match(/<main[\s\S]*?<\/main>/i);
  if (mainMatch) return mainMatch[0];

  return "<article><p>Post content could not be parsed.</p></article>";
}

export async function getPostContentByPath(segments) {
  const filePath = getLegacyFilePath(segments);
  const rawHtml = await fs.readFile(filePath, "utf8");
  return extractArticleHtml(rawHtml);
}

export function findPostByPath(segments) {
  return posts.find((post) => post.path.join("/") === segments.join("/"));
}
