import { githubConfig } from '@/lib/github-config';
import { type DocsPage as DocsPageType, getDoc } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

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
      tableOfContent={{
        style: 'clerk',
        footer: (
          <div className='mt-4 space-y-3 border-border/40 border-t pt-4'>
            {lastModified && (
              <div>
                <p className='text-muted-foreground text-xs'>
                  <span className='font-medium'>Last updated:</span>{' '}
                  {githubConfig.formatDate(new Date(lastModified))}
                </p>
              </div>
            )}
            <div>
              <a
                href={githubEditUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center gap-1.5 text-primary text-xs hover:underline'
              >
                <span>Edit this page</span>
                <ExternalLink className='group-hover:-translate-y-0.5 h-3 w-3 transition-transform group-hover:translate-x-0.5' />
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
