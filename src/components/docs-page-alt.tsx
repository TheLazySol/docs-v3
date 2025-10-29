import { githubConfig } from '@/lib/github-config';
import { type DocsPage as DocsPageType, getDoc } from '@/lib/source';
import { DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { CustomTOC } from './custom-toc';

interface DocsPageProps {
  slug: string[];
  useCustomTOC?: boolean;
}

export default function DocsPageAltComponent({
  slug,
  useCustomTOC = false,
}: DocsPageProps) {
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
      <div className='flex gap-8'>
        {/* Main content */}
        <div className='max-w-4xl flex-1'>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
          <DocsBody>
            <MDX />
          </DocsBody>

          {lastModified && (
            <div className='mt-8 border-border/40 border-t pt-8'>
              <p className='text-muted-foreground text-sm'>
                <span className='font-medium'>Last updated:</span>{' '}
                {new Date(lastModified).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })}
              </p>
            </div>
          )}
        </div>

        {/* Custom TOC Sidebar */}
        <aside className='hidden w-64 flex-shrink-0 xl:block'>
          <CustomTOC
            items={tableOfContents}
            title='On This Page'
            className='top-24'
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
