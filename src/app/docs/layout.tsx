import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';
import { baseOptions, linkItems } from '../layout.config';
import { docsPageTree } from '@/lib/source';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <DocsLayout
      tree={docsPageTree}
      {...baseOptions}
      links={linkItems}
      nav={{
        component: (
          <Header
            finalLinks={getLinks(linkItems, baseOptions.githubUrl)}
            {...baseOptions}
          />
        ),
      }}
    >
      {children}
      <Footer />
    </DocsLayout>
  );
};

export default Layout;
