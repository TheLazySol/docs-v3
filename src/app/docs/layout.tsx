import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions, linkItems } from '../layout.config';
import { docsPageTree } from '@/lib/source';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <DocsLayout
      tree={docsPageTree}
      {...baseOptions}
      links={linkItems}
    >
      {children}
    </DocsLayout>
  );
};

export default Layout;
