import { getDoc, type DocsPage as DocsPageType } from '@/lib/source';
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function DocsIndexPage() {
  const page: DocsPageType | undefined = getDoc([]);
  
  if (!page) {
    notFound();
  }

  const { body: MDX, toc, lastModified } = page.data as any;

  return (
    <DocsPage 
      toc={toc}
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
