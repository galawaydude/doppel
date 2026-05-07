'use client';

import { ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function LineMask({
  children,
  delay = 0,
  duration = 1.15,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const inner = ref.current?.querySelector('.lm-inner');
      if (!inner) return;
      gsap.fromTo(
        inner,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration,
          delay,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={`line-mask ${className}`}>
      <span className="lm-inner">{children}</span>
    </span>
  );
}
