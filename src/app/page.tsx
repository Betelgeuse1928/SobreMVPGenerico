import { Nav } from '@/components/landing/Nav';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { EventTypes } from '@/components/landing/EventTypes';
import { Process } from '@/components/landing/Process';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <EventTypes />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
