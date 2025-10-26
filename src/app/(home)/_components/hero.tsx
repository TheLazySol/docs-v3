import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { env } from '@/env';
import type { Page } from '@/lib/source';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import Beams from '@/components/Beams';

const Hero = ({ posts }: { posts: Page[] }) => (
  <Section className='hero-section relative w-full overflow-hidden px-4 py-16 sm:px-16 sm:py-24 md:py-32'>
    {/* Enhanced Background with Gradient Overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='-z-10 absolute inset-0 h-full w-full'
    >
      <Beams
        beamWidth={2}
        beamHeight={18}
        beamNumber={8}
        lightColor='#4a85ff'
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={35}
      />
      {/* Gradient overlay for better text contrast */}

    </motion.div>

    <div className='mx-auto flex flex-col items-center justify-center gap-8 relative z-10'>
      {/* Enhanced Announcement Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Badge
          variant='secondary'
          className='group gap-2 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 hover:border-primary/30 transition-all duration-300 text-white'
          asChild
        >
          <Link href={`/blog/${posts?.[0]?.slugs?.join('/')}`} className='flex items-center gap-2'>
            <Sparkles className='h-3 w-3 text-primary' />
            Latest DAO Proposal
            <ArrowRight className='h-3 w-3 group-hover:translate-x-1 transition-transform' />
          </Link>
        </Badge>
      </motion.div>

      {/* Enhanced Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='flex flex-col gap-6 text-center'
      >
        <h1 className='max-w-4xl text-center font-bold text-5xl tracking-tight md:text-7xl lg:text-8xl font-sans text-white'>
          Pioneering DeFi
          <br />
          <span className='text-white'>
            Options on Solana
          </span>
        </h1>
        <p className='max-w-3xl text-center text-lg leading-relaxed tracking-tight md:text-xl lg:text-2xl font-sans text-white/90'>
          Building the infrastructure for options trading on-chain
          <br />
          <span className='text-sm mt-2 block text-white/70'>
            The next chapter of decentralized finance.
          </span>
        </p>
      </motion.div>

      {/* Enhanced CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='flex flex-col sm:flex-row gap-4 items-center'
      >
        <Button
          size='lg'
          className='group gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300'
          asChild
        >
          <Link href={env.NEXT_PUBLIC_APP_URL || '/contact'}>
            <Zap className='h-4 w-4' />
            Trade Options
            <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
          </Link>
        </Button>
        <Button
          size='lg'
          variant='outline'
          className='group gap-3 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300'
          asChild
        >
          <Link href='/contact'>
            <Icons.discord className='h-4 w-4' />
            Join Discord

          </Link>
        </Button>
      </motion.div>
    </div>
  </Section>
);

export default Hero;
