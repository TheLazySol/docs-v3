import { cn } from '@/lib/utils';
import { Section } from './section';

const Separator = ({ className }: { className?: string }) => (
  <Section>
    <div className={cn('h-2 bg-dashed', className)} />
  </Section>
);

export default Separator;
