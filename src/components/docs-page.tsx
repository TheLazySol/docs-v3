import { getDoc, type DocsPage as DocsPageType } from '@/lib/source';
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/page';
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

  return (
    <DocsPage 
      toc={tableOfContents}
      lastUpdate={lastModified ? new Date(lastModified) : undefined}
      tableOfContent={{
        style: 'clerk',
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
