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
    question: 'What is Epicentral Labs?',
    answer:
      'Epicentral Labs is a community-governed DAO that is building the infrastructure for options trading on-chain on Solana. Expanding on the core infrastructure, we are building the next chapter of DeFi, governed by $LABS Token Holders.',
  },
  {
    question: 'What is OPX?',
    answer:
      'Our core infrastructure is built on Solana, a high-performance blockchain platform that is secure and scalable. We implement enterprise-grade security measures, including end-to-end encryption, regular security audits, and compliance with industry standards. Your data security is our top priority.',
  },
  {
    question: 'Can I join the DAO?',
    answer:
      'Yes, you can join the DAO by holding $LABS Tokens, and staking them into our EpicentralDAO. You can withdraw at any time! Join our Discord community for support, documentation, and to connect with others in the Epicentral Community.',
  },
  {
    question: 'Can I join the Core Team?',
    answer:
      'we are always welcome to voluntary contributions.  We allocate the contributor role to these members and keep them first in mind for discussions, alpha, and testing - in short: intangible value. Beyond that, we have a few priorities before us that require capital.  I will have to reluctantly agree that we do not have a budget to onboard new members at this time.',
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
