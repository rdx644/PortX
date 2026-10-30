import { Hero } from '@/components/hero/Hero';
import { Projects } from '@/components/projects/Projects';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { Experience } from '@/components/sections/Experience';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Contact } from '@/components/sections/Contact';
export const metadata = { alternates: { canonical: '/' } };
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Projects />
      <About />
      <Expertise />
      <Experience />
      <GitHubActivity />
      <Contact />
    </main>
  );
}
