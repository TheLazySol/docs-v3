import Separator from '@/components/separator';
import { getSortedByDatePosts } from '@/lib/source';
import CTA from '../_components/cta';
import About from './_components/how-it-works';
import CoreTeam from './_components/core-team';
import Hero from './_components/hero';
import Team from './_components/token-holders';
import Updates from './_components/updates';
import GradualBlur from '@/components/GradualBlur';

export default function AboutPage() {
  const posts = getSortedByDatePosts();

  return (
    <>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Team />
      <Separator />
      <CoreTeam />
      <Separator />
      <Updates posts={posts} />
      <CTA />
      <GradualBlur
        target="page"
        position="bottom"
        height="10rem"
        strength={2.5}
        divCount={4}
        curve="bezier"
        exponential={true}
        opacity={0.8}
      />
    </>
  );
}
