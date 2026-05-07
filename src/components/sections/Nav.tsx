'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
      <Link href="/" className="logo" aria-label="Doppel — home">
        Doppel<span className="dot" aria-hidden="true">.</span>
      </Link>
      <div className="nav-links">
        <a href="#how" className="nav-link">How it works</a>
        <a href="#beta" className="nav-link" style={{ color: 'var(--accent)' }}>
          Get access →
        </a>
      </div>
    </nav>
  );
}
