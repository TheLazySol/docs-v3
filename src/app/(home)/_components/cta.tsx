import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
          className='text-center mb-12'
        >
          <Badge variant='outline' className='mb-4 bg-primary/10 border-primary/20 text-primary'>
            <Rocket className='h-3 w-3 mr-2' />
            Ready to Start?
          </Badge>
          <h2 className='max-w-4xl mx-auto font-bold text-3xl tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent mb-6'>
            Build the Future of DeFi Options
          </h2>
          <p className='max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl'>
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
            <Card className='relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:from-primary/10 hover:to-background transition-all duration-300 hover:shadow-xl hover:shadow-primary/10'>
              <CardContent className='p-8'>
                <div className='flex items-start gap-4 mb-6'>
                  <div className='p-3 rounded-lg bg-primary/10 border border-primary/20'>
                    <Zap className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold mb-2'>Start Trading Today</h3>
                    <p className='text-muted-foreground'>
                      Get instant access to our platform and start trading options on Solana.
                    </p>
                  </div>
                </div>
                
                <div className='space-y-4'>
                  <Button 
                    size='lg' 
                    className='w-full group gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300'
                    asChild
                  >
                    <Link href={env.NEXT_PUBLIC_APP_URL || '/contact'}>
                      <Rocket className='h-4 w-4' />
                      Get started for free
                      <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                    </Link>
                  </Button>
                  
                  <div className='flex items-center justify-center gap-6 text-sm text-muted-foreground'>
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
            <Card className='border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-2 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                    <Icons.discord className='h-5 w-5 text-blue-500' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold mb-1'>Join Our Community</h4>
                    <p className='text-sm text-muted-foreground'>Connect with developers and traders</p>
                  </div>
                  <Button variant='outline' size='sm' asChild>
                    <Link href='/contact'>
                      Join <ArrowRight className='h-3 w-3 ml-1' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className='border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-2 rounded-lg bg-green-500/10 border border-green-500/20'>
                    <Icons.arrowUpRight className='h-5 w-5 text-green-500' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold mb-1'>View Documentation</h4>
                    <p className='text-sm text-muted-foreground'>Learn how to integrate our SDK</p>
                  </div>
                  <Button variant='outline' size='sm' asChild>
                    <Link href='/docs'>
                      Learn <ArrowRight className='h-3 w-3 ml-1' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className='border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-2 rounded-lg bg-purple-500/10 border border-purple-500/20'>
                    <Star className='h-5 w-5 text-purple-500' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold mb-1'>GitHub Repository</h4>
                    <p className='text-sm text-muted-foreground'>Explore our open-source code</p>
                  </div>
                  <Button variant='outline' size='sm' asChild>
                    <Link href='https://github.com' target='_blank' rel='noopener noreferrer'>
                      View <ArrowRight className='h-3 w-3 ml-1' />
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
