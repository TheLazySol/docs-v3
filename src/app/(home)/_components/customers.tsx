'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import CabanaLight from '@/public/images/logos/light/cabana.svg';
import PythLight from '@/public/images/logos/light/pyth.svg';
import RealmsLight from '@/public/images/logos/light/realms.svg';
import TritonLight from '@/public/images/logos/light/triton.svg';
import WattLight from '@/public/images/logos/light/watt.svg';

import CabanaDark from '@/public/images/logos/dark/cabana.svg';
import PythDark from '@/public/images/logos/dark/pyth.svg';
import RealmsDark from '@/public/images/logos/dark/realms.svg';
import TritonDark from '@/public/images/logos/dark/triton.svg';
import WattDark from '@/public/images/logos/dark/watt.svg';

import { BlurImage } from '@/components/blur-image';
import { Section } from '@/components/section';
import Autoplay from 'embla-carousel-auto-scroll';

const logos = [
  {
    name: 'Realms',
    light: RealmsLight,
    dark: RealmsDark,
  },
  {
    name: 'Triton',
    light: TritonLight,
    dark: TritonDark,
  },
  {
    name: 'Pyth',
    light: PythLight,
    dark: PythDark,
  },
  {
    name: 'Cabana',
    light: CabanaLight,
    dark: CabanaDark,
  },
  {
    name: 'Watt',
    light: WattLight,
    dark: WattDark,
  },
];

export const Customers = ({
  count,
}: {
  count: number;
}) => {
  const closest = Math.floor(count / 50) * 50;

  return (
    <Section className='relative flex flex-col items-center justify-center gap-8 p-6 py-8 md:py-10'>
      <div className='w-full'>
        <Carousel
          plugins={[
            Autoplay({
              speed: 600 / 1000,
              startDelay: 100,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: 'start',
            dragFree: true,
            loop: true,
          }}
        >
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem className='basis-1/2 md:basis-1/3 lg:basis-1/4' key={logo.name}>
                <div className='flex items-center justify-center'>
                  <BlurImage
                    src={logo.light}
                    alt={logo.name}
                    width={320}
                    height={96}
                    imageClassName='h-24 w-80 select-none object-contain'
                    className='rounded-md p-4 dark:hidden'
                  />
                  <BlurImage
                    src={logo.dark}
                    alt={logo.name}
                    width={320}
                    height={96}
                    imageClassName='h-24 w-80 select-none object-contain'
                    className='hidden rounded-md p-4 dark:block'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};
