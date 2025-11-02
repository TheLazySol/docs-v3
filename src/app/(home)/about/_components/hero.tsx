'use client';

import { Section } from '@/components/section';
import Balancer from 'react-wrap-balancer';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import RealmsLight from '@/public/images/logos/light/realms.svg';
import RealmsDark from '@/public/images/logos/dark/realms.svg';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (sectionRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) {
            // Parallax moves slower than scroll (0.5 factor = parallax speed)
            // When section is at top of viewport, offset is 0
            // As user scrolls, background moves slower
            const parallaxOffset = rect.top * 0.5;
            setScrollY(parallaxOffset);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <Section className='relative w-full overflow-hidden px-4 py-16 sm:px-16 sm:py-24 md:py-32'>
      {/* Background image with parallax */}
      <div
        ref={sectionRef}
        className='absolute inset-0 z-0 overflow-hidden'
      >
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(/images/about/hero/epicentraldao-screenshot.png)',
            transform: `translateY(${scrollY}px) scale(1.4)`,
            filter: 'blur(10px)',
          }}
        />
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-background/60 backdrop-blur-[1px]' />
      </div>

      {/* Content */}
      <div className='relative z-10 mx-auto flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <h1 className='max-w-2xl bg-gradient-to-b from-black to-black bg-clip-text font-regular text-4xl text-transparent tracking-tighter sm:text-6xl md:text-7xl px-2 dark:bg-gradient-to-b dark:bg-opacity-50 dark:from-foreground dark:to-muted-foreground/70'>
            <Balancer>
              Epicentral<strong>DAO</strong>
            </Balancer>
          </h1>
          <p className='mx-auto max-w-2xl text-lg text-gray-900 md:text-xl dark:text-muted-foreground/90'>
            <Balancer>
              Innovating the options market on Solana, one vote at a time.
            </Balancer>
          </p>
          <div className='flex items-center gap-2 text-sm text-gray-600 md:text-base dark:text-muted-foreground/90'>
            <div className='relative h-12 w-auto md:h-16'>
              <Image
                src={RealmsLight}
                alt='Realms'
                height={64}
                width={64}
                className='h-12 w-auto object-contain dark:hidden md:h-16'
              />
              <Image
                src={RealmsDark}
                alt='Realms'
                height={64}
                width={64}
                className='hidden h-12 w-auto object-contain dark:block md:h-16'
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
