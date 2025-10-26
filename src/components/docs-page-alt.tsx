import { getDoc, type DocsPage as DocsPageType } from '@/lib/source';
import { DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { CustomTOC } from './custom-toc';
import { githubConfig } from '@/lib/github-config';

interface DocsPageProps {
  slug: string[];
  useCustomTOC?: boolean;
}

export default function DocsPageAltComponent({ slug, useCustomTOC = false }: DocsPageProps) {
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

  // If using custom TOC, wrap the content in a layout that includes the TOC
  if (useCustomTOC) {
    return (
      <div className="flex gap-8">
        {/* Main content */}
        <div className="flex-1 max-w-4xl">
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
          <DocsBody>
            <MDX />
          </DocsBody>
          
          {lastModified && (
            <div className="mt-8 pt-8 border-t border-border/40">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Last updated:</span>{' '}
                {new Date(lastModified).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            </div>
          )}
        </div>

        {/* Custom TOC Sidebar */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <CustomTOC 
            items={tableOfContents} 
            title="On This Page"
            className="top-24"
            githubEditUrl={githubEditUrl}
            lastModified={lastModified ? new Date(lastModified) : undefined}
          />
        </aside>
      </div>
    );
  }

  // Otherwise, use the default DocsPage component with enhanced TOC options
  return (
    <>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX />
      </DocsBody>
    </>
  );
}
