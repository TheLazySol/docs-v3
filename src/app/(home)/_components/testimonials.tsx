'use client';

import { Section } from '@/components/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import SpotlightCard from '@/components/ui/spotlight-card';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    title: '"Epicentral Labs is where community drives real crypto innovation"',
    author: {
      name: '@Ene_anthonyy',
      image: 'https://pbs.twimg.com/profile_images/1932690606230261760/kBOrnmRa_400x400.jpg',
      link: 'https://x.com/Ene_anthonyy',
    },
    date: 'Oct. 7th, 2025',
    link: 'https://x.com/Ene_anthonyy/status/1975685789666169307',
  },
  {
    title: '"The real movement happens in github commits."',
    author: {
      name: '@0xbigturk',
      image: 'https://pbs.twimg.com/profile_images/1975793902419378176/I-SimT_a_400x400.jpg',
      link: 'https://x.com/0xbigturk',
    },
    date: 'Jan. 12th, 2025',
    link: 'https://x.com/0xbigturk/status/1878553907942531174',
  },
  {
    title: '"The biggest defi unlock is going to be options trading on Solana."',
    author: {
      name: '@TonyBetW',
      image: 'https://pbs.twimg.com/profile_images/1828537820085895168/pgoaN6-W_400x400.jpg',
      link: 'https://x.com/TonyBetW',
    },
    date: 'Oct. 24th, 2025',
    link: 'https://x.com/TonyBetW/status/1981847969994277340',
  },
  {
    title: '"Transitioning to full community-only token governance is a bold move; not many DAOs achieve this in their lifetime."',
    author: {
      name: '@1xraccoon',
      image: 'https://pbs.twimg.com/profile_images/1955326522690052096/TVSANLzm_400x400.png',
      link: 'https://x.com/1xraccoon',
    },
    date: 'Dec. 8th, 2024',
    link: 'https://x.com/1xraccoon/status/1865818411642839254',
  },
  {
    title: '"DAO Meta + Building fullstack first mover tech (options trading) on Solana. Stacked team with great network and partnerships."',
    author: {
      name: '@cryptojuggler3',
      image: 'https://pbs.twimg.com/profile_images/1939905803424587776/_QsYRw8L_400x400.jpg',
      link: 'https://x.com/cryptojuggler3',
    },
    date: 'Oct. 5th, 2025',
    link: 'https://x.com/cryptojuggler3/status/1974689760032539025',
  },
  {
    title: '"$LABS Epicentral Labs is the most undervalued utility I\'ve seen in a while."',
    author: {
      name: '@MidTermDev',
      image: 'https://pbs.twimg.com/profile_images/1975996023647391744/aHktaApr_400x400.jpg',
      link: 'https://x.com/MidTermDev',
    },
    date: 'Oct. 5th, 2025',
    link: 'https://x.com/MidTermDev/status/1974717448617374183',
  },
  {
    title: '"No memes here. Real builders. Real utility."',
    author: {
      name: '@OG_Chapo_',
      image: 'https://pbs.twimg.com/profile_images/1946968353450426369/Uh_h0WCC_400x400.jpg',
      link: 'https://x.com/OG_Chapo_',
    },
    date: 'Jul 9th, 2025',
    link: 'https://x.com/OG_Chapo_/status/1943029471382245585',
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
            Loved by CT
          </h2>
          <p className='max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg'>
            See what crypto twitter is saying about Epicentral Labs.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className='w-full'
        >
          <CarouselContent className='mx-6 py-6'>
            {testimonials.map((item, index) => (
              <CarouselItem
                className='pl-0 pr-4 lg:basis-1/2'
                key={`${item.title}_${index}`}
              >
                <SpotlightCard
                  className='testimonial-card flex min-h-[280px] flex-col justify-between rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-card/80 hover:border-primary/30 shadow-[0_12px_15px_-4px_rgba(74,133,255,0.11)] hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.15)] dark:shadow-[0_12px_15px_-4px_rgba(74,133,255,0.25)] dark:hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.5)] lg:col-span-2'
                  spotlightColor='rgba(74, 133, 255, 0.2)'
                >
                  <div className='relative z-10 flex h-full flex-col justify-between'>
                    <h3 className='text-2xl md:text-3xl tracking-tight flex-shrink-0 mb-6'>{item.title}</h3>
                    <div className='flex items-end justify-between gap-4 flex-shrink-0'>
                      <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2 text-sm'>
                          <span className='text-muted-foreground'>By</span>
                          <Avatar className='h-6 w-6'>
                            <AvatarImage src={item.author.image} />
                            <AvatarFallback>??</AvatarFallback>
                          </Avatar>
                          <a
                            href={item.author.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-primary transition-colors underline'
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.author.name}
                          </a>
                        </div>
                        <span className='text-xs text-muted-foreground italic ml-1'>
                          {item.date}
                        </span>
                      </div>
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium'
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Post{' '}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 50 50'
                          className='inline-block'
                          fill='currentColor'
                        >
                          <path d='M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z'></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials;
