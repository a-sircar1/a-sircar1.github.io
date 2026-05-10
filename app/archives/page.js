import FloatingTabs from "@/components/FloatingTabs";
import { posts } from "@/data/siteContent";

const writingTabs = [
  { href: "/", label: "Home" },
  { href: "/#research", label: "Research / Projects" },
  { href: "/about", label: "About" }
];

export const metadata = {
  title: "Writing · Arnab Sircar"
};

export default function ArchivesPage() {
  return (
    <main className="site-shell page-simple">
      <FloatingTabs tabs={writingTabs} />
      <section className="panel">
        <h1>Writing</h1>
        <ul className="post-list archive-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={post.href}>
                <h3>{post.title}</h3>
              </a>
              <span>
                {post.date} · {post.category}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
