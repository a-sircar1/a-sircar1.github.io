import { notFound } from "next/navigation";
import FloatingTabs from "@/components/FloatingTabs";
import { posts, siteMeta } from "@/data/siteContent";
import { findPostByPath, getPostContentByPath } from "@/lib/postContent";

const postTabs = [
  { href: "/", label: "Home" },
  { href: "/archives", label: "Writing" },
  { href: "/about", label: "About" }
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    year: post.path[0],
    month: post.path[1],
    day: post.path[2],
    slug: post.path[3]
  }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const segments = [p.year, p.month, p.day, p.slug];
  const post = findPostByPath(segments);
  if (!post) return { title: siteMeta.title };

  return {
    title: `${post.title} · ${siteMeta.name}`,
    description: post.excerpt
  };
}

export default async function LegacyPostPage({ params }) {
  const p = await params;
  const segments = [p.year, p.month, p.day, p.slug];
  const post = findPostByPath(segments);
  if (!post) notFound();

  let legacyPostHtml = "";
  try {
    legacyPostHtml = await getPostContentByPath(segments);
  } catch (error) {
    notFound();
  }

  return (
    <main className="site-shell page-simple">
      <FloatingTabs tabs={postTabs} />
      <section className="panel legacy-panel">
        <div
          className="legacy-post-content"
          dangerouslySetInnerHTML={{ __html: legacyPostHtml }}
        />
      </section>
    </main>
  );
}
