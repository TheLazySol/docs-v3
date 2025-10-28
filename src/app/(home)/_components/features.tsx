'use client';

import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { cva } from 'class-variance-authority';
import {
  BarChart3 as BarChartIcon,
  Code,
  HandCoins as HandCoinsIcon,
  Boxes as IntegrationsIcon,
  Shield,
  TrendingUp,
  Users as UsersIcon,
  Zap,
} from 'lucide-react';
import * as motion from 'motion/react-client';

// Create a variant for feature items
const featureItemVariants = cva(
  'group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5',
  {
    variants: {
      size: {
        sm: 'p-6',
        lg: 'p-8 lg:col-span-2',
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
    Icon: HandCoinsIcon,
    title: 'Cost-Effective Solutions',
    description:
      'Maximize ROI with our affordable business automation solutions that scale with your needs.',
    size: 'lg',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-500',
  },
  {
    id: 2,
    Icon: BarChartIcon,
    title: 'Advanced Analytics',
    description:
      'Get deep insights into your business performance with comprehensive analytics and reporting tools.',
    size: 'sm',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    id: 3,
    Icon: UsersIcon,
    title: 'Team Collaboration',
    description:
      'Work seamlessly with your team through integrated collaboration features and real-time updates.',
    size: 'sm',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
  {
    id: 4,
    Icon: IntegrationsIcon,
    title: 'Easy Integration',
    description:
      'Connect with your favorite tools and services through our extensive integration ecosystem.',
    size: 'lg',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-500',
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
          Why Epicentral Labs?
        </h2>
        <p className='mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl'>
          Open-source tools, standards, and infrastructure for decentralized
          options trading on Solana.
        </p>
      </motion.div>

      {/* Enhanced Features Grid */}
      <div className='w-full'>
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
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className='relative z-10 flex flex-col gap-4'>
                <div className='flex items-start justify-between'>
                  <div
                    className={`rounded-lg border border-border/50 bg-background/50 p-3 transition-colors duration-300 group-hover:border-primary/30`}
                  >
                    <feature.Icon
                      className={`h-6 w-6 ${feature.iconColor} transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}
                    />
                  </div>
                  <Badge
                    variant='secondary'
                    className='border-primary/20 bg-primary/10 text-primary text-xs'
                  >
                    {feature.size === 'lg' ? 'Featured' : 'Standard'}
                  </Badge>
                </div>

                <div className='space-y-2'>
                  <h3 className='font-semibold text-xl tracking-tight transition-colors duration-300 group-hover:text-primary'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='flex flex-wrap items-center justify-center gap-8 border-border/50 border-t pt-8'
      >
        <div className='flex items-center gap-3 text-muted-foreground text-sm'>
          <Shield className='h-4 w-4 text-green-500' />
          <span>Secure & Audited</span>
        </div>
        <div className='flex items-center gap-3 text-muted-foreground text-sm'>
          <Code className='h-4 w-4 text-blue-500' />
          <span>Open Source</span>
        </div>
        <div className='flex items-center gap-3 text-muted-foreground text-sm'>
          <TrendingUp className='h-4 w-4 text-purple-500' />
          <span>High Performance</span>
        </div>
      </motion.div>
    </div>
  </Section>
);
export default Features;
