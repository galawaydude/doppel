import { ReactNode } from 'react';

export default function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="sec-label">
      <span className="sec-label-num">{index}</span>
      <span className="sec-label-line" />
      <span className="sec-label-text">{children}</span>
    </div>
  );
}
