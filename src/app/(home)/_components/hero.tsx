import ThemedBackground from '@/components/ThemedBackground';
import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import type { Page } from '@/lib/source';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

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
      <ThemedBackground />
      {/* Gradient overlay for better text contrast */}
    </motion.div>

    <div className='relative z-10 mx-auto flex flex-col items-center justify-center gap-8'>
      {/* Enhanced Announcement Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Badge
          variant='secondary'
          className='group gap-2 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 text-foreground transition-all duration-300 hover:border-primary/30'
          asChild
        >
          <Link
            href={`/blog/${posts?.[0]?.slugs?.join('/')}`}
            className='flex items-center gap-2'
          >
            <Sparkles className='h-3 w-3 text-primary' />
            Latest DAO Proposal
            <ArrowRight className='h-3 w-3 transition-transform group-hover:translate-x-1' />
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
        <h1 className='max-w-4xl text-center font-bold font-sans text-5xl text-foreground tracking-tight md:text-7xl lg:text-8xl'>
          Pioneering DeFi
          <br />
          <span className='text-foreground'>Options on Solana</span>
        </h1>
        <p className='max-w-3xl text-center font-sans text-lg text-foreground/90 leading-relaxed tracking-tight md:text-xl lg:text-2xl [text-shadow:0_2px_12px_rgba(255,255,255,0.5),0_4px_20px_rgba(255,255,255,0.3)] dark:[text-shadow:0_2px_12px_rgba(0,0,0,0.8),0_4px_20px_rgba(0,0,0,0.6)]'>
          Building the infrastructure for on-chain options trading
          <br />
          <span className='mt-2 block text-sm text-foreground/80 [text-shadow:0_1px_8px_rgba(255,255,255,0.4),0_2px_12px_rgba(255,255,255,0.2)] dark:[text-shadow:0_1px_8px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.5)]'>
            The next chapter of decentralized finance.
          </span>
        </p>
      </motion.div>

      {/* Enhanced CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='flex flex-col items-center gap-4 sm:flex-row'
      >
        <Button
          size='lg'
          className='group gap-3 bg-gradient-to-r from-primary to-primary/90 shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-primary hover:shadow-xl'
          asChild
        >
          <Link href={env.NEXT_PUBLIC_APP_URL || '/contact'}>
            <Zap className='h-4 w-4' />
            Trade Options
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </Button>
        <Button
          size='lg'
          variant='outline'
          className='group gap-3 border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5'
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
