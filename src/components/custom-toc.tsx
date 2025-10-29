'use client';

import { githubConfig } from '@/lib/github-config';
import type { TOCItemType } from 'fumadocs-core/server';
import { AnchorProvider, ScrollProvider, TOCItem } from 'fumadocs-core/toc';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';

interface ExtendedTOCItemType extends TOCItemType {
  children?: ExtendedTOCItemType[];
}

interface CustomTOCProps {
  items: ExtendedTOCItemType[];
  title?: string;
  className?: string;
  showScrollIndicator?: boolean;
  githubEditUrl?: string;
  lastModified?: Date;
}

export function CustomTOC({
  items,
  title = 'On This Page',
  className = '',
  showScrollIndicator = true,
  githubEditUrl,
  lastModified,
}: CustomTOCProps) {
  const viewRef = useRef<HTMLDivElement>(null);

  if (!items || items.length === 0) return null;

  return (
    <AnchorProvider toc={items}>
      <nav
        className={`sticky top-20 max-h-[calc(100vh-6rem)] overflow-auto ${className}`}
        aria-label='Table of Contents'
      >
        <div className='space-y-4'>
          {title && (
            <h2
              id='toc-title'
              className='mb-3 border-border/40 border-b pb-3 font-bold text-primary/70 text-xs uppercase tracking-widest'
            >
              {title}
            </h2>
          )}

          <div ref={viewRef} className='space-y-1.5'>
            <ScrollProvider containerRef={viewRef}>
              <ul className='space-y-0.5'>
                {items.map((item) => (
                  <li key={item.url}>
                    <TOCItem
                      href={item.url}
                      className='block rounded-md border-transparent border-l-2 px-3 py-1.5 text-muted-foreground text-sm transition-colors hover:border-primary/30 hover:bg-accent/50 hover:text-foreground data-[active=true]:border-primary data-[active=true]:bg-transparent data-[active=true]:font-semibold data-[active=true]:text-primary'
                    >
                      {item.title}
                    </TOCItem>
                  </li>
                ))}
              </ul>
            </ScrollProvider>
          </div>

          {/* Footer for TOC */}
          <div className='mt-6 space-y-3 border-border/40 border-t pt-4'>
            <p className='text-muted-foreground text-xs'>
              <span className='font-medium text-primary'>{items.length}</span>{' '}
              sections
            </p>
            {lastModified && (
              <div>
                <p className='text-muted-foreground text-xs'>
                  <span className='font-medium'>Last updated:</span>{' '}
                  {githubConfig.formatDate(lastModified)}
                </p>
              </div>
            )}
            {githubEditUrl && (
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
            )}
          </div>
        </div>
      </nav>
    </AnchorProvider>
  );
}

interface NestedTOCProps {
  items: ExtendedTOCItemType[];
  depth?: number;
  maxDepth?: number;
}

export function NestedTOC({ items, depth = 0, maxDepth = 2 }: NestedTOCProps) {
  if (depth > maxDepth || !items || items.length === 0) return null;

  return (
    <ul className='space-y-1'>
      {items.map((item) => (
        <li key={item.url} className={depth > 0 ? 'ml-4' : ''}>
          <TOCItem
            href={item.url}
            className={`block rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent/50 ${
              depth === 0
                ? 'font-medium text-muted-foreground hover:text-foreground'
                : 'text-muted-foreground/80 text-xs hover:text-muted-foreground'
            }`}
          >
            {item.title}
          </TOCItem>
          {item.children && item.children.length > 0 && (
            <NestedTOC
              items={item.children}
              depth={depth + 1}
              maxDepth={maxDepth}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
