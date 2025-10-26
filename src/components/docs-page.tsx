import { getDoc, type DocsPage as DocsPageType } from '@/lib/source';
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { githubConfig } from '@/lib/github-config';

interface DocsPageProps {
  slug: string[];
}

export default function DocsPageComponent({ slug }: DocsPageProps) {
  const page: DocsPageType | undefined = getDoc(slug);
  
  if (!page) {
    notFound();
  }

  // Extract data consistently - handle both toc and headings properties
  const { body: MDX, toc, headings, lastModified } = page.data as any;
  
  // Use toc if available, otherwise fall back to headings
  const tableOfContents = toc || headings || [];

  // Generate GitHub edit URL
  const filePath = slug.length > 0 ? `${slug.join('/')}.mdx` : 'index.mdx';
  const githubEditUrl = githubConfig.getEditUrl(filePath);

  return (
    <DocsPage 
      toc={tableOfContents}
      lastUpdate={lastModified ? new Date(lastModified) : undefined}
      tableOfContent={{
        style: 'clerk',
        header: (
          <div className="mb-4">
            <h2 id="toc-title" className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-3 pb-3 border-b border-border/40">
              On This Page
            </h2>
          </div>
        ),
        footer: (
          <div className="mt-4 pt-4 border-t border-border/40 space-y-3">
                         {lastModified && (
               <div>
                 <p className="text-xs text-muted-foreground">
                   <span className="font-medium">Last updated:</span>{' '}
                   {githubConfig.formatDate(new Date(lastModified))}
                 </p>
               </div>
             )}
            <div>
              <a 
                href={githubEditUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline flex items-center gap-1.5 group"
              >
                <span>Edit this page</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ),
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}
