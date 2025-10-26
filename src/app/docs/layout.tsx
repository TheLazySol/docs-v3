import { Header } from '@/components/sections/header';
import { docsPageTree } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';
import { baseOptions, docsLinkItems } from '../layout.config';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <DocsLayout
        tree={docsPageTree}
        {...baseOptions}
        links={docsLinkItems}
        nav={{
          component: (
            <Header finalLinks={getLinks(docsLinkItems)} {...baseOptions} />
          ),
        }}
        sidebar={{
          footer: (
            <div className='flex items-center justify-center py-2 text-muted-foreground text-sm'>
              v1.0.0
            </div>
          ),
        }}
      >
        {children}
      </DocsLayout>
    </div>
  );
};

export default Layout;
