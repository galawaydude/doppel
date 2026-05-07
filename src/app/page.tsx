import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import ScrollFx from '@/components/ScrollFx';

export default function Home() {
  return (
    <div className="page">
      <div className="scroll-progress" aria-hidden />
      <Nav />
      <main id="main">
        <Hero />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <ScrollFx />
    </div>
  );
}
