import FloatingTabs from "@/components/FloatingTabs";
import { intro, navTabs, posts, research, siteMeta } from "@/data/siteContent";

export default function HomePage() {
  const recentPosts = posts.slice(0, 3);

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
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <a href={post.href}>
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
          <a href="#writing-index">View full writing index ↓</a>
        </p>
      </section>

      <section className="panel" id="writing-index">
        <h2>Writing Index</h2>
        <ul className="post-list archive-list">
          {posts.map((post) => (
            <li key={`${post.slug}-archive`}>
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

      <section className="panel" id="about-jump">
        <h2>About</h2>
        <p>
          I enjoy building rigorous frameworks, writing clear arguments, and connecting
          theory with real market behavior.
        </p>
        <p className="panel-link">
          <a href="/about">Read full profile →</a>
        </p>
      </section>
    </main>
  );
}
