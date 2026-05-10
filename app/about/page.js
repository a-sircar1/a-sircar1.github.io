import FloatingTabs from "@/components/FloatingTabs";

const aboutTabs = [
  { href: "/", label: "Home" },
  { href: "/#recent-writing", label: "Recent Writing" },
  { href: "/#research", label: "Research / Projects" }
];

export const metadata = {
  title: "About · Arnab Sircar"
};

export default function AboutPage() {
  return (
    <main className="site-shell page-simple">
      <FloatingTabs tabs={aboutTabs} />
      <section className="panel prose">
        <h1>About</h1>
        <p>My name is Arnab Sircar, and I’m a student at the University of Pennsylvania.</p>
        <p>
          I love solving problems that sit at the intersection of data, economics, and
          real-world market behavior and this often leads me to enjoy exciting and thoughtful
          discussions in macro-finance, macroeconomics, and the geopolitical landscape. I’m also
          always open to interesting debates ranging from history, philosophy, and comparative
          literature (I ran a podcast in a past life covering a wide array of topics). You can
          find me writing and reading commentary and prose, playing tennis, and hiking. I also
          enjoy learning all sorts of geography trivia and am an avid map collector :)
        </p>
      </section>
    </main>
  );
}
