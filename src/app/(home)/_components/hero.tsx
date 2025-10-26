import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import type { Page } from '@/lib/source';
import { MailIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../../../../public/images/WebPageBackground.png';

const Hero = ({ posts }: { posts: Page[] }) => (
  <Section className='relative w-full overflow-hidden bg-dashed px-4 py-16 sm:px-16 sm:py-24 md:py-32'>
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
      <Image
        src={heroImage}
        alt='Hero Background'
        fill
        className='pointer-events-none select-none object-cover opacity-80 dark:opacity-100'
        priority
      />
    </motion.div>
    <div className='mx-auto flex flex-col items-center justify-center gap-8'>
      <Button
        variant='outline'
        size='sm'
        className='group gap-4 bg-muted/70'
        asChild
      >
        <Link href={`/blog/${posts?.[0]?.slugs?.join('/')}`}>
          Latest DAO Proposal
          <Icons.arrowUpRight className='group-hover:-rotate-12 size-4 transition-transform' />
        </Link>
      </Button>
      <div className='flex flex-col gap-4'>
        <h1 className='max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl'>
          Pioneering DeFi
          <br />
          Options on Solana
        </h1>
        <p className='max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl'>
          Providing the framework to bring on-chain options trading natively to Solana.
        </p>
      </div>
      <div className='flex flex-row gap-3'>
        <Button
          size='lg'
          className='group gap-4 bg-muted/70 shadow-none'
          variant='outline'
          asChild
        >
          <Link href='/contact'>
            Discord{' '}
            <Icons.discord className='group-hover:-rotate-12 size-4 transition-transform' />
          </Link>
        </Button>
        <Button size='lg' className='group gap-4' asChild>
          <Link href={env.NEXT_PUBLIC_APP_URL || '/contact'}>
            Trade Options{' '}
            <Icons.arrowUpRight className='group-hover:-rotate-12 size-4 transition-transform' />
          </Link>
        </Button>
      </div>
    </div>
  </Section>
);

export default Hero;
