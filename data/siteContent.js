export const siteMeta = {
  name: "Arnab Sircar",
  title: "Arnab Sircar",
  description:
    "Essays and research on AI economics, financial systems, and statistical machine learning."
};

export const navTabs = [
  { href: "#recent-writing", label: "Recent Writing" },
  { href: "#research", label: "Research / Projects" },
  { href: "#about-jump", label: "About" }
];

export const intro = [
  "I work at the intersection of financial economics, machine learning, and market design, with an emphasis on rigorous models and real implementation constraints.",
  "I care about building strong frameworks, writing clearly, and connecting technical work to decisions in real markets."
];

export const posts = [
  {
    slug: "downsampling-dataset",
    path: ["2026", "01", "29", "Downsampling-Dataset"],
    title:
      "Hard Problems in Disguise: Distribution-Preserving Subsampling via Multiscale Trees, and a Brief Introduction to Optimal Transport",
    date: "January 29, 2026",
    category: "statistics",
    excerpt:
      "A technical essay on distribution-preserving subsampling, multiscale partition methods, and optimal transport intuition.",
    href: "/2026/01/29/Downsampling-Dataset"
  },
  {
    slug: "ai-firms",
    path: ["2025", "12", "23", "AI-Firms"],
    title: "The Economics of AI Inference Capacity",
    date: "December 23, 2025",
    category: "economics",
    excerpt:
      "A framework for understanding inference capacity, congestion rents, and competition in AI service markets.",
    href: "/2025/12/23/AI-Firms"
  },
  {
    slug: "cat-bonds",
    path: ["2025", "07", "14", "25-Cat-Bonds"],
    title: "Catastrophe Bond Pricing and Risk",
    date: "July 14, 2025",
    category: "finance",
    excerpt:
      "A structured study of catastrophe bond pricing, risk channels, and implications for market participants.",
    href: "/2025/07/14/25-Cat-Bonds"
  },
  {
    slug: "ihms-setarma",
    path: ["2024", "12", "30", "24-IHMS-SETARMA"],
    title: "Regimes of Return Smoothing",
    date: "December 30, 2024",
    category: "finance, statistics",
    excerpt:
      "A statistical framework for regime recovery and analysis in smoothed financial return series.",
    href: "/2024/12/30/24-IHMS-SETARMA"
  },
  {
    slug: "rl-optimizers-part2",
    path: ["2024", "07", "25", "24-RL-optimizers-part2"],
    title:
      "The Sample Complexity of RL-based Optimizers for Financial Applications (Part II): EM FX Carry Trade Control Problem",
    date: "July 25, 2024",
    category: "optimization, finance",
    excerpt:
      "Part II on reinforcement learning optimizer complexity in a foreign exchange carry trade control setting.",
    href: "/2024/07/25/24-RL-optimizers-part2"
  },
  {
    slug: "rl-optimizers-part1",
    path: ["2024", "06", "06", "24-RL-optimizers"],
    title:
      "The Sample Complexity of RL-based Optimizers for Financial Applications (Part I)",
    date: "June 6, 2024",
    category: "optimization, machine-learning",
    excerpt:
      "Part I introducing sample complexity considerations for RL-based optimization in finance.",
    href: "/2024/06/06/24-RL-optimizers"
  },
  {
    slug: "moe-robustness",
    path: ["2024", "05", "25", "24-MoE-Robustness"],
    title:
      "On Provable Guarantees of Adversarial Robustness of Mixture of Experts",
    date: "May 25, 2024",
    category: "artificial-intelligence",
    excerpt:
      "Theory and empirical analysis of adversarial robustness guarantees in mixture-of-experts architectures.",
    href: "/2024/05/25/24-MoE-Robustness"
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
  },
  {
    title:
      "Why is Common Sense Uncommon? A Network Model for Simulating Identity-dependent Shared Beliefs",
    note:
      "Network modeling work presented at IC2S2 2024 on consensus, awareness, and identity-driven social structure."
  },
  {
    title:
      "Characterization of Emotional Contagion in Collaborative Decision Support Systems",
    note:
      "Award-winning work on toxicity contagion and platform structure in online collaborative decision environments."
  },
  {
    title: "Composite Indices for Adoption of Electric Vehicles (EVs)",
    note:
      "Early work on fuzzy composite indices for adoption dynamics in EV ecosystems."
  }
];

