'use client';

import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SpotlightCard from '@/components/ui/spotlight-card';
import { ArrowRight, BookOpen, Github, HandCoins, Landmark, Users, Coins, PiggyBank } from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function formatHolderCount(count: number | null): string {
  if (count === null || count === undefined) {
    return 'Loading...';
  }
  
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M+`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K+`;
  }
  
  return `${count.toLocaleString()}+`;
}

export default function CTA(): React.ReactElement {
  const [holderCount, setHolderCount] = useState<number | null>(null);

  const fetchHolderCount = async () => {
    try {
      const response = await fetch('/api/token/overview');
      const data = await response.json();
      
      if (data.success && data.holder !== null && data.holder !== undefined) {
        setHolderCount(data.holder);
      }
    } catch (error) {
      console.error('Error fetching holder count:', error);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchHolderCount();

    // Set up interval to fetch every 5 minutes (300000 ms)
    const interval = setInterval(() => {
      fetchHolderCount();
    }, 300000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <Section className='relative overflow-hidden px-4 py-20 sm:px-16 sm:py-28 md:py-36'>
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
            className='mb-4 border-primary/20 bg-primary/10 text-primary no-underline transition-colors cursor-pointer'
            asChild
          >
            <Link
              href="https://v2.realms.today/dao/5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42/proposals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center no-underline"
            >
              <Coins className='mr-2 h-3 w-4' />
              Join Epicentral DAO
              <ArrowRight className='ml-2 h-3 w-3' />
            </Link>
          </Badge>
          <h2 className='mx-auto mb-8 max-w-5xl bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text font-bold text-3xl text-transparent tracking-tight leading-tight md:text-5xl lg:text-6xl'>
            Shaping DeFi Through Governance
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl'>
            Stake $LABS Tokens to join the DAO and start earning rewards.
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
            <SpotlightCard
              className='overflow-visible'
              spotlightColor='rgba(74, 133, 255, 0.6)'
            >
              <Card className='relative overflow-visible border-primary/20 bg-gradient-to-br from-primary/5 to-background transition-all duration-300 hover:from-primary/10 hover:to-background shadow-[0_12px_15px_-4px_rgba(74,133,255,0.11)] hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.15)] dark:shadow-[0_12px_15px_-4px_rgba(74,133,255,0.25)] dark:hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.5)]'>
                <CardContent className='p-8'>
                  <div className='relative z-10'>
                    <div className='mb-6 flex items-start gap-4'>
                      <div className='rounded-lg border border-[#4a85ff]/20 bg-[#4a85ff]/10 p-3'>
                        <Coins className='h-6 w-6 text-[#4a85ff]' />
                      </div>
                      <div>
                        <h3 className='mb-2 font-bold text-2xl'>
                          <strong>LABS</strong> Token
                        </h3>
                        <p className='text-muted-foreground'>
                          Decide the future of the protocol and earn rewards.
                        </p>
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <Button
                        size='lg'
                        className='group w-full gap-3 bg-gradient-to-r from-primary to-primary/90 shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-primary hover:shadow-xl'
                        asChild
                      >
                        <Link href='https://cabana.exchange/token/LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR?partner=Epicentral' target='_blank' rel='noopener noreferrer'>
                          <HandCoins className='h-4 w-4' />
                            Get $LABS Tokens
                          <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </Link>
                      </Button>

                      <div className='flex items-center justify-center gap-6 text-muted-foreground text-sm'>
                        <div className='flex items-center gap-2'>
                          <Users className='h-4 w-4 text-[#4a85ff]' />
                          <span>Join {formatHolderCount(holderCount)} Other Holders</span>
                        </div>
                      </div>

                      <div className='flex gap-4'>
                        <Button
                          size='lg'
                          variant='outline'
                          className='group flex-1 gap-3'
                          asChild
                        >
                          <Link href='https://v2.realms.today/dao/5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42/proposals' target='_blank' rel='noopener noreferrer'>
                            <Landmark className='h-4 w-4' />
                            Stake for Governance
                            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                          </Link>
                        </Button>

                        <Button
                          size='lg'
                          variant='outline'
                          className='group flex-1 gap-3'
                          asChild
                        >
                          <Link href='#'>
                          <HandCoins className='h-4 w-4' />
                            Stake for Rewards
                            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SpotlightCard>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <SpotlightCard
              className='overflow-visible'
              spotlightColor='rgba(74, 133, 255, 0.6)'
            >
              <Card className='overflow-visible border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card/80 hover:border-primary/30 shadow-[0_12px_15px_-4px_rgba(74,133,255,0.11)] hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.15)] dark:shadow-[0_12px_15px_-4px_rgba(74,133,255,0.25)] dark:hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.5)]'>
                <CardContent className='p-6'>
                  <div className='relative z-10 flex items-center gap-4'>
                    <div className='rounded-lg border border-blue-500/20 bg-blue-500/10 p-2'>
                      <Icons.discord className='h-5 w-5 text-blue-500' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='mb-1 font-semibold'>Join Our Community</h4>
                      <p className='text-muted-foreground text-sm'>
                        Connect with developers, traders, and the Core Team
                      </p>
                    </div>
                    <Button variant='outline' size='sm' asChild>
                      <Link href='https://discord.gg/5asAuY2sR8' target='_blank' rel='noopener noreferrer'>
                        Join <ArrowRight className='ml-1 h-3 w-3' />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SpotlightCard>

            <SpotlightCard
              className='overflow-visible'
              spotlightColor='rgba(74, 133, 255, 0.6)'
            >
              <Card className='overflow-visible border border-border/50 bg-card/60 transition-all duration-300 hover:bg-card/80 hover:border-primary/30 shadow-[0_12px_15px_-4px_rgba(74,133,255,0.11)] hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.15)] dark:shadow-[0_12px_15px_-4px_rgba(74,133,255,0.25)] dark:hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.5)] dark:bg-card/70'>
                <CardContent className='p-6'>
                  <div className='relative z-10 flex items-center gap-4'>
                    <div className='rounded-lg border border-[#4a85ff]/20 bg-[#4a85ff]/10 p-2'>
                      <BookOpen className='h-5 w-5 text-[#4a85ff]' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='mb-1 font-semibold'>View Documentation</h4>
                      <p className='text-muted-foreground text-sm'>
                        Learn more about the protocol and how it works
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
            </SpotlightCard>

            <SpotlightCard
              className='overflow-visible'
              spotlightColor='rgba(74, 133, 255, 0.6)'
            >
              <Card className='overflow-visible border border-border/50 bg-card/60 transition-all duration-300 hover:bg-card/80 hover:border-primary/30 shadow-[0_12px_15px_-4px_rgba(74,133,255,0.11)] hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.15)] dark:shadow-[0_12px_15px_-4px_rgba(74,133,255,0.25)] dark:hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.5)] dark:bg-card/70'>
                <CardContent className='p-6'>
                  <div className='relative z-10 flex items-center gap-4'>
                    <div className='rounded-lg border border-[#4a85ff]/20 bg-[#4a85ff]/10 p-2'>
                      <Github className='h-5 w-5 text-[#4a85ff]' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='mb-1 font-semibold'>GitHub Repository</h4>
                      <p className='text-muted-foreground text-sm'>
                        Explore our open-source repositories and contribute to the project
                      </p>
                    </div>
                    <Button variant='outline' size='sm' asChild>
                      <Link
                        href='https://github.com/EpicentralLabs' target='_blank' rel='noopener noreferrer'>
                        View <ArrowRight className='ml-1 h-3 w-3' />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
