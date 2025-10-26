import { Section } from '@/components/section';

export default function About(): React.ReactElement {
  return (
    <Section className='grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
      <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
        <h4 className='text-left font-regular text-3xl tracking-tighter md:text-5xl'>
          Our Story
        </h4>
      </div>

      <div className='gap-4 px-6 py-10 md:py-14'>
        <div className='prose dark:prose-invert w-full space-y-4'>
          <p className='text-lg'>
            The DeFi options market on Solana needs better infrastructure,
            standards, and tools. We recognized the opportunity to build
            open-source solutions that would benefit the entire ecosystem.
            That's why we founded Epicentral Labs.
          </p>

          <p className='text-lg'>
            We're building the Solana Options Standard SDK and creating the
            foundational infrastructure for decentralized options trading. Our
            goal is to make options accessible, composable, and powerful for
            everyone building on Solana.
          </p>
        </div>
      </div>
    </Section>
  );
}
