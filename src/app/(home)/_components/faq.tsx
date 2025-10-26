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
      'Epicentral Labs is building the future of decentralized options trading on Solana. We provide open-source tools and standards for creating, executing, and managing option contracts on the blockchain.',
  },
  {
    question: 'How secure is the platform?',
    answer:
      'We implement enterprise-grade security measures, including end-to-end encryption, regular security audits, and compliance with industry standards. Your data security is our top priority.',
  },
  {
    question: 'How do I get started?',
    answer:
      'You can start by exploring our open-source Solana Options Standard SDK on GitHub. Join our Discord community for support, documentation, and to connect with other developers building on Solana.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'We have an active Discord community where you can get help from our team and other developers. We also provide extensive documentation, examples, and resources to help you build with our SDK.',
  },
];

export const FAQ = () => (
  <Section className='grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
    <div className='flex flex-col gap-2 px-6 py-10 md:py-14'>
      <h4 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
        Frequently Asked Questions
      </h4>
      <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
        Still have questions?{' '}
        <InlineLink href='/contact' className='no-underline'>
          Contact Us
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
