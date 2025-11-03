'use client';

import { Section } from '@/components/section';
import Balancer from 'react-wrap-balancer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon, ExternalLinkIcon, Wallet, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

export default function About(): React.ReactElement {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = '';
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [lightboxImage, closeLightbox]);

  return (
    <Section className='grid divide-y divide-dashed divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0'>
      <div className='flex flex-col gap-4 px-6 py-10 md:py-14'>
        <h4 className='text-left font-regular text-3xl tracking-tighter md:text-5xl'>
          How It Works
        </h4>
        <Image
          src='/images/about/how-it-works/gov-structure-lightmode.svg'
          alt='Epicentral DAO Governance Structure'
          width={800}
          height={600}
          className='cursor-pointer rounded-md transition-transform hover:scale-[1.02] saturate-[0.7] dark:hidden'
          onClick={() => openLightbox('/images/about/how-it-works/gov-structure-lightmode.svg')}
        />
        <Image
          src='/images/about/how-it-works/gov-structure-darkmode.svg'
          alt='Epicentral DAO Governance Structure'
          width={800}
          height={600}
          className='hidden cursor-pointer rounded-md transition-transform hover:scale-[1.02] saturate-[0.7] dark:block'
          onClick={() => openLightbox('/images/about/how-it-works/gov-structure-darkmode.svg')}
        />
      </div>

      <div className='gap-4 px-6 py-10 md:py-14'>
        <div className='w-full space-y-8'>
          {/* Step 1: Get LABS Token */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-start gap-4'>
              <div className='flex flex-col items-center'>
                <div className='flex size-8 items-center justify-center rounded-full border-2 border-[#4a85ff] bg-[#4a85ff]/10 text-sm font-semibold text-[#4a85ff]'>
                  1
                </div>
                <div className='mt-2 h-full w-px bg-border' />
              </div>
              <div className='flex-1'>
                <h2 className='bg-gradient-to-b from-black to-black bg-clip-text font-bold text-2xl text-transparent tracking-tighter dark:bg-gradient-to-b dark:bg-opacity-50 dark:from-foreground dark:to-muted-foreground/70 md:text-3xl'>
                  <Balancer>Get LABS Token</Balancer>
                </h2>
                <div className='mt-4'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        className='group w-fit min-w-[200px] justify-between bg-card/50 backdrop-blur-sm text-left font-normal transition-all hover:bg-card/80 hover:border-primary/30 border-border/50'
                      >
                        <span className='flex items-center gap-2'>
                          <Wallet className='size-4 text-muted-foreground group-hover:text-primary transition-colors' />
                          Select Exchange
                        </span>
                        <ChevronDownIcon className='size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align='start' 
                      className='w-[var(--radix-dropdown-menu-trigger-width)] border-border/50 bg-card/50 backdrop-blur-sm dark:bg-card/50'
                      sideOffset={8}
                    >
                      <DropdownMenuItem asChild className='cursor-pointer rounded-md transition-colors hover:bg-card/80'>
                        <a
                          href='https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex w-full items-center justify-between gap-2 px-3 py-2.5'
                        >
                          <span className='flex items-center gap-2.5 text-sm font-medium'>
                            <Image
                              src='/images/logos/jupiter_logo.svg'
                              alt='Jupiter'
                              width={30}
                              height={30}
                              className='size-[30px] object-contain'
                            />
                            Jupiter Exchange
                          </span>
                          <ExternalLinkIcon className='size-3.5 text-muted-foreground' />
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className='bg-border/50 mx-1' />
                      <DropdownMenuItem asChild className='cursor-pointer rounded-md transition-colors hover:bg-card/80'>
                        <a
                          href='https://cabana.exchange/token/LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR?partner=Epicentral'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex w-full items-center justify-between gap-2 px-3 py-2.5'
                        >
                          <span className='flex items-center gap-2.5 text-sm font-medium'>
                            <Image
                              src='/images/logos/cabana_logo.svg'
                              alt='Cabana'
                              width={30}
                              height={30}
                              className='size-[30px] object-contain'
                            />
                            Cabana Exchange
                          </span>
                          <ExternalLinkIcon className='size-3.5 text-muted-foreground' />
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className='bg-border/50 mx-1' />
                      <DropdownMenuItem asChild className='cursor-pointer rounded-md transition-colors hover:bg-card/80'>
                        <a
                          href='https://raydium.io/swap/?inputCurrency=sol&outputCurrency=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR&inputMint=2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv&outputMint=CRTx1JouZhzSU6XytsE42UQraoGqiHgxabocVfARTy2s'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex w-full items-center justify-between gap-2 px-3 py-2.5'
                        >
                          <span className='flex items-center gap-2.5 text-sm font-medium'>
                            <Image
                              src='/images/logos/raydium_logo.svg'
                              alt='Raydium'
                              width={30}
                              height={30}
                              className='size-[30px] object-contain'
                            />
                            Raydium
                          </span>
                          <ExternalLinkIcon className='size-3.5 text-muted-foreground' />
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <div className='ml-6 h-px w-full bg-border' />
          </div>

          {/* Step 2: Deposit $LABS into DAO */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-start gap-4'>
              <div className='flex flex-col items-center'>
                <div className='flex size-8 items-center justify-center rounded-full border-2 border-[#4a85ff] bg-[#4a85ff]/10 text-sm font-semibold text-[#4a85ff]'>
                  2
                </div>
                <div className='mt-2 h-full w-px bg-border' />
              </div>
              <div className='flex-1'>
                <h2 className='bg-gradient-to-b from-black to-black bg-clip-text font-bold text-2xl text-transparent tracking-tighter dark:bg-gradient-to-b dark:bg-opacity-50 dark:from-foreground dark:to-muted-foreground/70 md:text-3xl'>
                  <Balancer>Deposit $LABS into DAO</Balancer>
                </h2>
                <p className='mt-4 text-lg text-muted-foreground'>
                  Stake your $LABS tokens in the DAO through Realms to participate in governance and earn rewards from protocol revenue.
                </p>
                <Image
                  src='/images/about/how-it-works/2-desposit.png'
                  alt='Deposit LABS'
                  width={500}
                  height={300}
                  className='mt-4 cursor-pointer rounded-md shadow-[8px_8px_24px_rgba(0,0,0,0.3),4px_4px_12px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.02] dark:shadow-[8px_8px_24px_rgba(0,0,0,0.7),4px_4px_12px_rgba(0,0,0,0.5)]'
                  onClick={() => openLightbox('/images/about/how-it-works/2-desposit.png')}
                />
              </div>
            </div>
            <div className='ml-6 h-px w-full bg-border' />
          </div>

          {/* Step 3: Vote */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-start gap-4'>
              <div className='flex flex-col items-center'>
                <div className='flex size-8 items-center justify-center rounded-full border-2 border-[#4a85ff] bg-[#4a85ff]/10 text-sm font-semibold text-[#4a85ff]'>
                  3
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='bg-gradient-to-b from-black to-black bg-clip-text font-bold text-2xl text-transparent tracking-tighter dark:bg-gradient-to-b dark:bg-opacity-50 dark:from-foreground dark:to-muted-foreground/70 md:text-3xl'>
                  <Balancer>Vote</Balancer>
                </h2>
                <p className='mt-4 text-lg text-muted-foreground'>
                  Participate in DAO proposals and help shape the future of Epicentral Labs.
                </p>
                <Image
                  src='/images/about/how-it-works/3-dao-proposal.png'
                  alt='DAO Proposal'
                  width={500}
                  height={300}
                  className='mt-4 cursor-pointer rounded-md shadow-[8px_8px_24px_rgba(0,0,0,0.3),4px_4px_12px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.02] dark:shadow-[8px_8px_24px_rgba(0,0,0,0.7),4px_4px_12px_rgba(0,0,0,0.5)]'
                  onClick={() => openLightbox('/images/about/how-it-works/3-dao-proposal.png')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in'
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className='absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50'
            aria-label='Close lightbox'
          >
            <X className='size-6' />
          </button>
          <div className='relative max-h-[90vh] max-w-[90vw]'>
            <Image
              src={lightboxImage}
              alt='Enlarged view'
              width={1200}
              height={800}
              className='max-h-[90vh] max-w-[90vw] rounded-md object-contain shadow-2xl'
              onClick={(e) => e.stopPropagation()}
              priority
            />
          </div>
        </div>
      )}
    </Section>
  );
}
