import FloatingTabs from "@/components/FloatingTabs";
import { intro, navTabs, posts, research, siteMeta } from "@/data/siteContent";

export default function HomePage() {
  return (
    <main className="site-shell">
      <FloatingTabs tabs={navTabs} />

      <section className="landing" id="top">
        <h1>{siteMeta.name}</h1>
        <div className="orb" aria-hidden="true" />
      </section>

      <section className="intro">
        {intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="panel" id="recent-writing">
        <h2>Recent Writing</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={post.href} target="_blank" rel="noopener noreferrer">
                <h3>{post.title}</h3>
              </a>
              <p>{post.excerpt}</p>
              <span>
                {post.date} · {post.category}
              </span>
            </li>
          ))}
        </ul>
        <p className="panel-link">
          <a href="/archives">View writing index →</a>
        </p>
      </section>

      <section className="panel" id="research">
        <h2>Research / Projects / Other Extended Works</h2>
        <ul className="research-list">
          {research.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
