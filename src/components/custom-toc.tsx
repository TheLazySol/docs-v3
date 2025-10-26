'use client';

import {
  AnchorProvider,
  ScrollProvider,
  TOCItem,
  type TOCItemType,
} from 'fumadocs-core/toc';
import { type ReactNode, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { githubConfig } from '@/lib/github-config';

interface CustomTOCProps {
  items: TOCItemType[];
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
        aria-label="Table of Contents"
      >
        <div className="space-y-4">
          {title && (
            <h2 
              id="toc-title" 
              className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-3 pb-3 border-b border-border/40"
            >
              {title}
            </h2>
          )}
          
          <div ref={viewRef} className="space-y-1.5">
            <ScrollProvider 
              containerRef={viewRef}
              showIndicator={showScrollIndicator}
            >
              <ul className="space-y-0.5">
                {items.map((item) => (
                  <li key={item.url}>
                    <TOCItem 
                      href={item.url}
                      className="block text-sm text-muted-foreground transition-colors hover:text-foreground py-1.5 px-3 rounded-md hover:bg-accent/50 border-l-2 border-transparent hover:border-primary/30 data-[active=true]:border-primary data-[active=true]:text-primary data-[active=true]:font-semibold data-[active=true]:bg-transparent"
                    >
                      {item.title}
                    </TOCItem>
                  </li>
                ))}
              </ul>
            </ScrollProvider>
          </div>
          
          {/* Footer for TOC */}
          <div className="mt-6 pt-4 border-t border-border/40 space-y-3">
            <p className="text-xs text-muted-foreground">
              <span className="text-primary font-medium">{items.length}</span> sections
            </p>
            {lastModified && (
              <div>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Last updated:</span>{' '}
                  {githubConfig.formatDate(lastModified)}
                </p>
              </div>
            )}
            {githubEditUrl && (
              <div>
                <a 
                  href={githubEditUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1.5 group"
                >
                  <span>Edit this page</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
  items: TOCItemType[];
  depth?: number;
  maxDepth?: number;
}

export function NestedTOC({ 
  items, 
  depth = 0, 
  maxDepth = 2 
}: NestedTOCProps) {
  if (depth > maxDepth || !items || items.length === 0) return null;

  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.url} className={depth > 0 ? 'ml-4' : ''}>
          <TOCItem 
            href={item.url}
            className={`block text-sm transition-colors py-1 px-2 rounded-md hover:bg-accent/50 ${
              depth === 0 
                ? 'text-muted-foreground hover:text-foreground font-medium' 
                : 'text-muted-foreground/80 hover:text-muted-foreground text-xs'
            }`}
          >
            {item.title}
          </TOCItem>
          {item.children && item.children.length > 0 && (
            <NestedTOC items={item.children} depth={depth + 1} maxDepth={maxDepth} />
          )}
        </li>
      ))}
    </ul>
  );
}
