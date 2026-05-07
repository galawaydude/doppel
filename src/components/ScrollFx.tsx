'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function ScrollFx() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero visual: scrub a parallax + fade as user scrolls past the hero
      gsap.to('.hero-visual', {
        yPercent: -28,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
      gsap.to('.hero-visual', {
        opacity: 0.35,
        scale: 0.94,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom 30%',
          scrub: 0.6,
        },
      });

      // How-rows: stagger from the left as a batch
      gsap.set('.how-row', { opacity: 0, x: -48 });
      ScrollTrigger.batch('.how-row', {
        start: 'top 85%',
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            x: 0,
            stagger: 0.15,
            duration: 1.05,
            ease: 'expo.out',
            overwrite: true,
          }),
      });

      // Section label underline: draws on enter
      gsap.utils.toArray<HTMLElement>('.sec-label-line').forEach((el) => {
        gsap.fromTo(
          el,
          { width: 0 },
          {
            width: 50,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        );
      });

      // Top scroll-progress bar (scrubbed)
      const bar = document.querySelector<HTMLElement>('.scroll-progress');
      if (bar) {
        gsap.set(bar, { scaleX: 0, transformOrigin: '0 50%' });
        gsap.to(bar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: 'max',
            scrub: 0,
          },
        });
      }
    },
    { scope: ref }
  );

  return <div ref={ref} aria-hidden style={{ display: 'none' }} />;
}
