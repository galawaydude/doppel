export default function Footer() {
  return (
    <footer className="foot" aria-label="Site footer">
      <div>
        <div className="foot-tag">
          Doppel<span style={{ color: 'var(--accent)' }} aria-hidden="true">.</span>
        </div>
        <div style={{ marginTop: 8 }}>© 2026 · A humanoid that meets for you</div>
      </div>
      <nav className="foot-links" aria-label="Footer">
        <a href="/manifesto">Manifesto</a>
        <a href="/privacy">Privacy</a>
        <a
          href="https://twitter.com/doppel"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter / X
        </a>
        <a href="mailto:hi@doppel.ai">Contact</a>
      </nav>
    </footer>
  );
}
