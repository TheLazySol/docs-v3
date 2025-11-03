import DocsPageComponent from '@/components/docs-page';
import { getDocs } from '@/lib/source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DocsSlugPage({ params }: PageProps) {
  const { slug } = await params;
  return <DocsPageComponent slug={slug} />;
}

export async function generateStaticParams() {
  return getDocs()
    .filter((page) => page.slugs.length > 0)
    .map((page) => ({
      slug: page.slugs,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { getDoc } = await import('@/lib/source');
  const page = getDoc(slug);

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
