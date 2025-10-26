import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';
import { baseOptions, linkItems } from '../layout.config';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <HomeLayout
      {...baseOptions}
      links={linkItems}
      nav={{
        component: (
          <Header
            finalLinks={getLinks(linkItems)}
            {...baseOptions}
          />
        ),
      }}
      className='pt-0 min-h-screen bg-gradient-to-br from-background via-background to-background/95 dark:bg-[#050505]'
    >
      <main className='flex flex-1 flex-col relative'>
        {/* Enhanced background with subtle patterns */}
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none' />
        <div className='absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent opacity-30 pointer-events-none' />
        
        {/* Main content with improved spacing and theme support */}
        <div className='relative z-10 flex flex-1 flex-col'>
          {children}
        </div>
        
        {/* Enhanced footer with better theme integration */}
        <div className='relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm'>
          <Footer />
        </div>
      </main>
    </HomeLayout>
  );
};

export default Layout;
