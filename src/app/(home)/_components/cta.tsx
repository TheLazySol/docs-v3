import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import Link from 'next/link';
import type React from 'react';

export default function CTA(): React.ReactElement {
  return (
    <Section className='relative grid gap-8 px-4 py-10 sm:grid-cols-2 md:py-14 lg:px-6 lg:py-16'>
      <h2 className='max-w-xl font-regular text-3xl md:text-5xl'>
        Build the Future of DeFi Options
      </h2>

      <div className='flex w-full items-center'>
        <div className='max-w-xl space-y-4'>
          <p className='text-muted-foreground text-sm md:text-base'>
            Join the Solana options ecosystem. Explore our open-source SDK and
            tools to create, execute, and manage decentralized option contracts.
          </p>
          <div className='flex flex-row gap-3'>
            <Button size='lg' className='group gap-4' asChild>
              <Link href={env.NEXT_PUBLIC_APP_URL || '/contact'}>
                Get started for free{' '}
                <Icons.arrowUpRight className='group-hover:-rotate-12 size-4 transition-transform' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
