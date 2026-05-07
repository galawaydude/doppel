'use client';

import { ReactNode, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
};

export default function MagneticButton({ children, primary, onClick }: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [m, setM] = useState({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setM({
          x: ((e.clientX - r.left) / r.width - 0.5) * 14,
          y: ((e.clientY - r.top) / r.height - 0.5) * 14,
        });
      }}
      onMouseLeave={() => setM({ x: 0, y: 0 })}
      className="cta"
      data-variant={primary ? 'primary' : 'ghost'}
      style={{ transform: `translate(${m.x}px, ${m.y}px)` }}
    >
      <span
        style={{
          display: 'inline-block',
          transform: `translate(${m.x * 0.4}px, ${m.y * 0.4}px)`,
        }}
      >
        {children}
      </span>
    </button>
  );
}
