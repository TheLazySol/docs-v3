import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';
import { baseOptions, docsLinkItems } from '../layout.config';
import { docsPageTree } from '@/lib/source';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <DocsLayout
        tree={docsPageTree}
        {...baseOptions}
        links={docsLinkItems}
        nav={{
          component: (
            <Header
              finalLinks={getLinks(docsLinkItems)}
              {...baseOptions}
            />
          ),
        }}
        sidebar={{
          footer: (
            <div className="flex items-center justify-center py-2 text-sm text-muted-foreground">
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
