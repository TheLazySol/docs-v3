import { InlineLink } from '@/components/inline-link';
import { Section } from '@/components/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = [
  {
    question: 'What are LABS Tokens?',
    answer:
      '$LABS are the native tokens used for governing the EpicentralDAO. Active participants can stake their $LABS to vote on DAO proposals and earn rewards from the protocol revenue¹.',
  },
  {
    question: 'What are xLABS Tokens?',
    answer:
      '$xLABS are the redeemable reward tokens that are minted autonomously proportional to the amount of $LABS tokens staked via the "The Staking Lab" ~ our native staking platform for reward distribution and eligibility. ',
  },
  {
    question: 'When will OPX release for Mainnet?',
    answer:
      'OPX is currently available on devnet and will be released for Mainnet either late Q4, 2025 or early Q1, 2026.',
  },
  {
    question: 'How do I join the DAO?',
    answer:
      'Joining EpicentralDAO is easy! Simply swap for $LABS and "deposit" them into the DAO through Realms. You can withdraw at any time.',
  },
  {
    question: 'Can I join the Core Team?',
    answer:
      'We welcome new voluntary contributions.  We allocate the contributor role to these members and keep them first in mind for discussions, alpha, and testing - in short: intangible value. Beyond that, we have a few priorities before us that require capital.  I will have to reluctantly agree that we do not have a budget to onboard new members at this time.',
  },
];

export const FAQ = () => (
  <Section className='grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
    <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
      <h4 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
        Frequently Asked <span style={{ color: '#4a85ff' }}>Questions</span>
      </h4>
      <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
        Still have questions?{' '}
        <InlineLink href='https://discord.gg/5asAuY2sR8' className='underline' blank>
          Join the Discord!
        </InlineLink>
      </p>
    </div>

    <Accordion
      type='single'
      collapsible
      className='w-full divide-dashed divide-border'
    >
      {faq.map((item, index) => (
        <AccordionItem
          key={`${item.question}-${index}`}
          value={`index-${index}`}
        >
          <AccordionTrigger className='rounded-none px-4 hover:bg-card hover:no-underline data-[state=open]:bg-card'>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className='p-4'>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Section>
);
