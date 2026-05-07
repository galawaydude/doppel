'use client';

import { FormEvent, useState } from 'react';
import Reveal from '@/components/Reveal';
import LineMask from '@/components/LineMask';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || submitted) return;
    setSubmitting(true);
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="beta" className="cta-section" aria-labelledby="cta-title">
      <h2 id="cta-title" className="cta-h">
        <LineMask>
          <span className="cta-h-line">Stop attending.</span>
        </LineMask>
        <LineMask delay={0.08}>
          <span className="cta-h-line">
            <em>Start sending.</em>
          </span>
        </LineMask>
      </h2>

      <Reveal delay={0.16}>
        <p className="cta-sub">
          Drop your email. We&apos;ll be in touch when it&apos;s your turn.
        </p>
      </Reveal>
      <Reveal delay={0.22}>
        <form className="email-form" onSubmit={onSubmit}>
          <input
            className="email-input"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitted}
          />
          <button className="email-submit" type="submit" disabled={submitting || submitted}>
            {submitted ? 'On the list ✓' : submitting ? 'Sending…' : 'Request access'}
          </button>
        </form>
      </Reveal>
    </section>
  );
}
