import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { env } from '@/env';
import { ArrowRight, Rocket, Star, Users, Zap } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import type React from 'react';

export default function CTA(): React.ReactElement {
  return (
    <Section className='relative overflow-hidden px-4 py-16 sm:px-16 sm:py-24 md:py-32'>
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5' />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 text-center'
        >
          <Badge
            variant='outline'
            className='mb-4 border-primary/20 bg-primary/10 text-primary'
          >
            <Rocket className='mr-2 h-3 w-3' />
            Ready to Start?
          </Badge>
          <h2 className='mx-auto mb-6 max-w-4xl bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text font-bold text-3xl text-transparent tracking-tight md:text-5xl lg:text-6xl'>
            Build the Future of DeFi Options
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl'>
            Join the Solana options ecosystem. Explore our open-source SDK and
            tools to create, execute, and manage decentralized option contracts.
          </p>
        </motion.div>

        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className='relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-background transition-all duration-300 hover:from-primary/10 hover:to-background hover:shadow-primary/10 hover:shadow-xl'>
              <CardContent className='p-8'>
                <div className='mb-6 flex items-start gap-4'>
                  <div className='rounded-lg border border-primary/20 bg-primary/10 p-3'>
                    <Zap className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='mb-2 font-bold text-2xl'>
                      Start Trading Today
                    </h3>
                    <p className='text-muted-foreground'>
                      Get instant access to our platform and start trading
                      options on Solana.
                    </p>
                  </div>
                </div>

                <div className='space-y-4'>
                  <Button
                    size='lg'
                    className='group w-full gap-3 bg-gradient-to-r from-primary to-primary/90 shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-primary hover:shadow-xl'
                    asChild
                  >
                    <Link href={env.NEXT_PUBLIC_APP_URL || '/contact'}>
                      <Rocket className='h-4 w-4' />
                      Get started for free
                      <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Link>
                  </Button>

                  <div className='flex items-center justify-center gap-6 text-muted-foreground text-sm'>
                    <div className='flex items-center gap-2'>
                      <Star className='h-4 w-4 text-yellow-500' />
                      <span>4.9/5 Rating</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Users className='h-4 w-4 text-blue-500' />
                      <span>10K+ Users</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <Card className='border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='rounded-lg border border-blue-500/20 bg-blue-500/10 p-2'>
                    <Icons.discord className='h-5 w-5 text-blue-500' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='mb-1 font-semibold'>Join Our Community</h4>
                    <p className='text-muted-foreground text-sm'>
                      Connect with developers and traders
                    </p>
                  </div>
                  <Button variant='outline' size='sm' asChild>
                    <Link href='/contact'>
                      Join <ArrowRight className='ml-1 h-3 w-3' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className='border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='rounded-lg border border-green-500/20 bg-green-500/10 p-2'>
                    <Icons.arrowUpRight className='h-5 w-5 text-green-500' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='mb-1 font-semibold'>View Documentation</h4>
                    <p className='text-muted-foreground text-sm'>
                      Learn how to integrate our SDK
                    </p>
                  </div>
                  <Button variant='outline' size='sm' asChild>
                    <Link href='/docs'>
                      Learn <ArrowRight className='ml-1 h-3 w-3' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className='border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='rounded-lg border border-purple-500/20 bg-purple-500/10 p-2'>
                    <Star className='h-5 w-5 text-purple-500' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='mb-1 font-semibold'>GitHub Repository</h4>
                    <p className='text-muted-foreground text-sm'>
                      Explore our open-source code
                    </p>
                  </div>
                  <Button variant='outline' size='sm' asChild>
                    <Link
                      href='https://github.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View <ArrowRight className='ml-1 h-3 w-3' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
