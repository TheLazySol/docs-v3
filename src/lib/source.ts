import { loader } from 'fumadocs-core/source';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { blog, docs } from '.source';

export const source = loader({
  baseUrl: '/blog',
  source: createMDXSource(blog),
});
export const { getPage: getPost, getPages: getPosts, pageTree } = source;

export const docsSource = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs),
});
export const { getPage: getDoc, getPages: getDocs, pageTree: docsPageTree } = docsSource;

export const getPageTree = (type: 'blog' | 'docs') => {
  if (type === 'docs') {
    return docsPageTree;
  }
  return pageTree;
};

export type Post = ReturnType<typeof getPost>;

const posts = getPosts();

export const getSortedByDatePosts = () =>
  posts.toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const getTags = () => {
  const tagSet = new Set<string>();

  for (const post of posts) {
    if (post.data.tags) {
      for (const tag of post.data.tags) {
        tagSet.add(tag);
      }
    }
  }

  return Array.from(tagSet).toSorted();
};

export const getPostsByTag = (tag: string) => {
  return posts
    .filter((post) => post.data.tags?.includes(tag))
    .toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;

export type DocsPage = InferPageType<typeof docsSource>;
export type DocsMeta = InferMetaType<typeof docsSource>;
