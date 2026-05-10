export default function FloatingTabs({ tabs }) {
  return (
    <nav className="floating-tabs" aria-label="Primary">
      {tabs.map((tab) => (
        <a key={tab.label} href={tab.href}>
          {tab.label}
        </a>
      ))}
    </nav>
  );
}
