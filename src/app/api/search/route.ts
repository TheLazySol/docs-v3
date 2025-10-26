import { getDocs, getPosts } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('advanced', {
  indexes: [
    // Include blog posts
    ...getPosts().map((page) => ({
      title: page.data.title,
      structuredData: page.data.structuredData,
      id: page.url,
      url: page.url,
    })),
    // Include docs pages
    ...getDocs().map((page) => ({
      title: page.data.title,
      structuredData: page.data.structuredData,
      id: page.url,
      url: page.url,
    })),
  ],
});
