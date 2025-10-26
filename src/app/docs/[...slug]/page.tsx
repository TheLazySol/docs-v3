import { getDoc, getDocs, type DocsPage as DocsPageType } from '@/lib/source';
import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DocsSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page: DocsPageType | undefined = getDoc(slug);
  
  if (!page) {
    notFound();
  }

  const { body: MDX, headings, lastModified } = page.data as any;

  return (
    <DocsPage 
      toc={headings}
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

export async function generateStaticParams() {
  return getDocs().map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page: DocsPageType | undefined = getDoc(slug);
  
  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
