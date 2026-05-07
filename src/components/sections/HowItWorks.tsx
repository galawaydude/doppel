import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';

const steps = [
  {
    n: '01',
    title: (
      <>
        Build your <em>double.</em>
      </>
    ),
    body: 'Upload your bio, your decks, your past meetings. Doppel learns how you speak, what you share, and where you draw the line.',
  },
  {
    n: '02',
    title: (
      <>
        It joins. <em>You don&apos;t.</em>
      </>
    ),
    body: 'Forward the invite. Doppel enters the call with explicit consent, presents your materials, and answers questions from your knowledge base.',
  },
  {
    n: '03',
    title: (
      <>
        Get the <em>download.</em>
      </>
    ),
    body: 'A full recap in your inbox: decisions made, action items assigned, what was promised, by whom — before the meeting room is cold.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="01">How it works</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="problem-quote" style={{ marginBottom: 0 }}>
            Three steps. <em>One you</em>, two places.
          </h2>
        </Reveal>

        <div className="how-grid">
          {steps.map((step) => (
            <div key={step.n} className="how-row">
              <div className="how-num">{step.n}</div>
              <h3 className="how-title">{step.title}</h3>
              <p className="how-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
