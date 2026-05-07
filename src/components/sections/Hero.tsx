'use client';

import dynamic from 'next/dynamic';
import Reveal from '@/components/Reveal';
import LineMask from '@/components/LineMask';
import MagneticButton from '@/components/MagneticButton';
import { useParallax } from '@/lib/useParallax';

const HumanoidMesh = dynamic(() => import('@/components/HumanoidMesh'), {
  ssr: false,
  loading: () => <div className="hero-visual-placeholder" aria-hidden />,
});

export default function Hero() {
  const parallax = useParallax();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <h1 id="hero-title" className="hero-h1">
          <LineMask>
            <span className="hero-h1-line">
              Send your <em>double.</em>
            </span>
          </LineMask>
          <LineMask delay={0.08}>
            <span className="hero-h1-line">Skip the meeting.</span>
          </LineMask>
        </h1>

        <Reveal delay={0.18}>
          <p className="hero-sub">
            Doppel is a humanoid version of you. When you can&apos;t make a meeting,
            it joins on your behalf — with your context and your voice — and brings
            back a complete recap.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="hero-actions">
            <MagneticButton primary onClick={() => scrollTo('beta')}>
              Request access →
            </MagneticButton>
            <MagneticButton onClick={() => scrollTo('how')}>
              How it works
            </MagneticButton>
          </div>
        </Reveal>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <HumanoidMesh parallax={parallax} />
      </div>
    </section>
  );
}
