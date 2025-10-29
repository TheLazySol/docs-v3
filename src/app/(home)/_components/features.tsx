'use client';

import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import SpotlightCard from '@/components/ui/spotlight-card';
import { cva } from 'class-variance-authority';
import {
  BarChart3 as BarChartIcon,
  Code,
  HandCoins as HandCoinsIcon,
  Boxes as IntegrationsIcon,
  Landmark,
  Shield,
  TrendingUp,
  Users as UsersIcon,
  ChartCandlestick,
  Zap,
} from 'lucide-react';
import * as motion from 'motion/react-client';

// Create a variant for feature items
const featureItemVariants = cva(
  'group relative overflow-hidden',
  {
    variants: {
      size: {
        sm: '',
        lg: 'lg:col-span-2',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

const features = [
  {
    id: 1,
    Icon: Landmark,
    title: 'Community Governed',
    description:
      'Epicentral Labs is a decentralized autonomous organization (DAO), limited liability company (LLC), that is governed by LABS Token Holders (Voters). Voters have on-chain, legally-binding, authoritative power in how the DAO is operated and executed by The Core Team.',
    size: 'lg',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-[#4a85ff]',
    spotlightColor: 'rgba(34, 197, 94, 0.2)' as const,
  },
  {
    id: 2,
    Icon: ChartCandlestick,
    title: 'OPX',
    description:
      'The first, truly decentralized, option trading platform on the Solana blockchain. Allowing for users to trade traditional, American-style Options on any token¹.',
    size: 'sm',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-[#4a85ff]',
    spotlightColor: 'rgba(59, 130, 246, 0.2)' as const,
  },
  {
    id: 3,
    Icon: UsersIcon,
    title: 'Core Team Execution',
    description:
      'The Core Team is responsible for executing the decisions made by DAO Voters and manage daily operations on behalf of the DAO.',
    size: 'sm',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-[#4a85ff]',
    spotlightColor: 'rgba(168, 85, 247, 0.2)' as const,
  },
  {
    id: 4,
    Icon: Code,
    title: 'Building the Solana Option Standard',
    description:
      'Our mission is to provide autonomous, non-custodial solution(s) for how on-chain options are created, priced, and settled through our Solana Option Standard.',
    size: 'lg',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-[#4a85ff]',
    spotlightColor: 'rgba(249, 115, 22, 0.2)' as const,
  },
];

const Features = () => (
  <Section className='relative w-full pt-10'>
    <div className='flex flex-col gap-12'>
      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='flex flex-col gap-4 px-6 text-center'
      >
        <Badge
          variant='outline'
          className='mx-auto mb-2 w-fit border-primary/20 bg-primary/5 text-primary'
        >
          <Zap className='mr-2 h-3 w-3' />
          Why Choose Us
        </Badge>
        <h2 className='mx-auto max-w-3xl bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text font-bold text-3xl text-transparent leading-tight md:text-5xl lg:text-6xl'>
          What is Epicentral Labs?
        </h2>
        <p className='mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl'>
          A community-governed DAO bringing decentralized options trading on-chain.
        </p>
      </motion.div>

      {/* Enhanced Features Grid with better margins */}
      <div className='mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16 pb-16'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className={featureItemVariants({
                size: feature.size as 'sm' | 'lg',
              })}
            >
              <SpotlightCard
                className={`h-full rounded-xl border-border/50 bg-card/50 backdrop-blur-sm ${
                  feature.size === 'sm' ? 'p-6' : 'p-8'
                }`}
                spotlightColor="rgba(74, 133, 255, 0.6)"
              >
                {/* Content */}
                <div className='relative z-10 flex h-full flex-col gap-4'>
                  <div className='flex items-start justify-between'>
                    <div
                      className={`rounded-lg border border-border/50 bg-background/50 p-3`}
                    >
                      <feature.Icon
                        className={`h-6 w-6 ${feature.iconColor}`}
                      />
                    </div>
                  </div>

                  <div className='flex flex-1 flex-col space-y-2'>
                    <h3 className='font-semibold text-xl tracking-tight'>
                      {feature.title}
                    </h3>
                    <p className='flex-1 text-muted-foreground leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
export default Features;
