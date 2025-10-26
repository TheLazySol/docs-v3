'use client';

import { Section } from '@/components/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    title: 'Open-source excellence',
    description:
      'The Solana Options Standard SDK is incredibly well-designed and easy to use. Building on it has been a smooth experience.',
    author: {
      name: 'Hayden Bleasel',
      image: 'https://github.com/haydenbleasel.png',
    },
  },
  {
    title: 'Great documentation',
    description:
      'The documentation is comprehensive and the examples are clear. It made integrating options into our DeFi protocol straightforward.',
    author: {
      name: 'Lee Robinson',
      image: 'https://github.com/leerob.png',
    },
  },
  {
    title: 'Active community',
    description:
      'The Discord community is helpful and responsive. The team is always available to answer questions and provide guidance.',
    author: {
      name: 'shadcn',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    title: 'Solid foundation',
    description:
      'Epicentral Labs is building the infrastructure that the Solana DeFi ecosystem needs. Their work on standards is invaluable.',
    author: {
      name: 'Pontus Abrahamsson',
      image: 'https://github.com/pontusab.png',
    },
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <Section className='relative w-full pt-10'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2 px-6'>
          <h2 className='max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl'>
            Loved by the community
          </h2>
          <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
            See what the community is saying about Epicentral Labs.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className='w-full border-border border-t border-dashed'
        >
          <CarouselContent className='ml-0 divide-x divide-dashed divide-border'>
            {testimonials.map((item, index) => (
              <CarouselItem
                className='pl-0 lg:basis-1/2'
                key={`${item.title}_${index}`}
              >
                <div className='flex aspect-video flex-col justify-between p-6 hover:bg-card lg:col-span-2'>
                  <User className='h-8 w-8 stroke-1 transition-transform hover:rotate-12 hover:scale-125' />
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                      <h3 className='text-xl tracking-tight'>{item.title}</h3>
                      <p className='max-w-xs text-base text-muted-foreground'>
                        {item.description}
                      </p>
                    </div>
                    <p className='flex flex-row items-center gap-2 text-sm'>
                      <span className='text-muted-foreground'>By</span>
                      <Avatar className='h-6 w-6'>
                        <AvatarImage src={item.author.image} />
                        <AvatarFallback>??</AvatarFallback>
                      </Avatar>
                      <span>{item.author.name}</span>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials;
