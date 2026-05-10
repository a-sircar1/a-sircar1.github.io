export const siteMeta = {
  name: "Arnab Sircar",
  title: "Arnab Sircar",
  description:
    "Essays and research on AI economics, financial systems, and statistical machine learning."
};

export const navTabs = [
  { href: "#recent-writing", label: "Recent Writing" },
  { href: "#research", label: "Research / Projects" },
  { href: "/about", label: "About" }
];

export const intro = [
  "I work at the intersection of financial economics, machine learning, and market design, with an emphasis on rigorous models and real implementation constraints.",
  "I care about building strong frameworks, writing clearly, and connecting technical work to decisions in real markets."
];

export const posts = [
  {
    slug: "downsampling-dataset",
    title:
      "Hard Problems in Disguise: Distribution-Preserving Subsampling via Multiscale Trees, and a Brief Introduction to Optimal Transport",
    date: "January 29, 2026",
    category: "statistics",
    excerpt:
      "A technical essay on distribution-preserving subsampling, multiscale partition methods, and optimal transport intuition.",
    href: "https://a-sircar1.github.io/2026/01/29/Downsampling-Dataset/"
  },
  {
    slug: "ai-firms",
    title: "The Economics of AI Inference Capacity",
    date: "December 23, 2025",
    category: "economics",
    excerpt:
      "A framework for understanding inference capacity, congestion rents, and competition in AI service markets.",
    href: "https://a-sircar1.github.io/2025/12/23/AI-Firms/"
  },
  {
    slug: "cat-bonds",
    title: "Catastrophe Bond Pricing and Risk",
    date: "July 14, 2025",
    category: "finance",
    excerpt:
      "A structured study of catastrophe bond pricing, risk channels, and implications for market participants.",
    href: "https://a-sircar1.github.io/2025/07/14/25-Cat-Bonds/"
  }
];

export const research = [
  {
    title: "ETFs and Junk-Bond Liquidity",
    note:
      "Empirical work on ETF flow pressure, liquidity transmission, and credit spread dynamics."
  },
  {
    title: "Online Learning the Stochastic Discount Factor",
    note:
      "A regime-adaptive SDF framework using online convex optimization and distribution-free guarantees."
  },
  {
    title:
      "Online Click-through Rate Prediction and Welfare Optimization for Autobidders in Advertising Auctions",
    note:
      "Algorithmic bidding design with theoretical guarantees for welfare and revenue dynamics."
  },
  {
    title: "On Provable Guarantees of Adversarial Robustness of Mixture of Experts",
    note:
      "Theoretical analysis of robustness properties in MoE models under adversarial perturbations."
  }
];

