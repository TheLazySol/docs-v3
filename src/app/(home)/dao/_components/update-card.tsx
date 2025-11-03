import { BlurImage } from '@/components/blur-image';
import SpotlightCard from '@/components/ui/spotlight-card';
import { CalendarIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import Balancer from 'react-wrap-balancer';

interface PostCardProps {
  title: string;
  description: string;
  image?: string | null;
  url: string;
  date: string;
  author: string;
  tags?: string[];
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  image,
  url,
  date,
  author,
  tags,
}) => {
  return (
    <SpotlightCard
      className='update-card flex min-h-full flex-col gap-4 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-card/80 hover:border-primary/30 shadow-[0_12px_15px_-4px_rgba(74,133,255,0.11)] hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.15)] dark:shadow-[0_12px_15px_-4px_rgba(74,133,255,0.25)] dark:hover:shadow-[0_15px_20px_-6px_rgba(74,133,255,0.5)]'
      spotlightColor='rgba(74, 133, 255, 0.2)'
    >
      <Link
        href={url}
        className='relative z-10 flex h-full flex-col gap-4'
      >
        {image && (
          <div className='relative inline-flex items-center justify-center transition-transform hover:scale-105'>
            <BlurImage
              width={853}
              height={554}
              src={image}
              alt={title}
              className='relative rounded-lg'
            />
          </div>
        )}

        <div className='flex h-full flex-col justify-between gap-4'>
          <div className='flex-1 space-y-2'>
            <h2 className='font-medium text-lg md:text-xl lg:text-2xl'>
              <Balancer>{title}</Balancer>
            </h2>
            <p className='line-clamp-3 overflow-hidden text-ellipsis text-medium text-muted-foreground'>
              <Balancer>{description}</Balancer>
            </p>
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <div className='group inline-flex items-center gap-2 text-muted-foreground text-sm'>
              <span className='inline-flex items-center gap-1 capitalize'>
                <UserIcon className='size-4 transition-transform hover:scale-125' />
                {author}
              </span>
              <span>•</span>
              <span className='inline-flex items-center gap-1'>
                <CalendarIcon className='size-4 transition-transform hover:scale-125' />
                {date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </SpotlightCard>
  );
};
