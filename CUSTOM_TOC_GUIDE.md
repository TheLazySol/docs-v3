# Custom TOC Implementation Guide

This guide explains how to use and customize the Table of Contents (TOC) in your documentation pages.

## Overview

The documentation now includes multiple ways to implement and customize the TOC:

1. **Enhanced DocsPage TOC** - Using Fumadocs' built-in TOC with custom options
2. **Custom TOC Component** - A fully custom TOC using headless components
3. **Alternative Docs Page** - Example implementation with TOC sidebar

## Current Implementation

### Enhanced DocsPage Component (`src/components/docs-page.tsx`)

The current docs pages use the enhanced TOC with:

- **Custom header**: "On This Page" title with styling
- **Custom footer**: Support link and additional information
- **Clerk style**: Minimal, clean design
- **Responsive**: Works on all screen sizes

```tsx
tableOfContent={{
  style: 'clerk',
  header: (
    <div className="mb-4">
      <h2 id="toc-title" className="...">
        On This Page
      </h2>
    </div>
  ),
  footer: (
    <div className="mt-4 pt-4 border-t border-border/40">
      <p className="text-xs text-muted-foreground">
        Need help? <a href="/support" className="text-primary hover:underline">Contact Support</a>
      </p>
    </div>
  ),
}}
```

### Custom TOC Component (`src/components/custom-toc.tsx`)

A fully custom TOC component using headless Fumadocs components:

```tsx
import { CustomTOC } from '@/components/custom-toc';

<CustomTOC 
  items={tableOfContents}
  title="On This Page"
  className="top-24"
  showScrollIndicator={true}
/>
```

**Features:**
- Sticky positioning
- Scroll indicator
- Active section highlighting
- Section count in footer
- Fully customizable styling

## Configuration Options

### TOC Options

```tsx
tableOfContent={{
  // Enable or disable TOC
  enabled?: boolean;
  
  // Header component
  header?: ReactNode;
  
  // Footer component
  footer?: ReactNode;
  
  // Custom TOC component
  component?: ReactNode;
  
  // Style variant
  style?: "clerk" | "normal";
  
  // Single item mode
  single?: boolean;
}}
```

### Custom TOC Component Props

```tsx
interface CustomTOCProps {
  items: TOCItemType[];          // TOC items array
  title?: string;                 // TOC title
  className?: string;             // Additional CSS classes
  showScrollIndicator?: boolean;  // Show scroll indicator
}
```

## Styling

### CSS Classes

The TOC uses the following IDs and classes:

- `#fd-toc` - Main TOC container
- `#fd-tocnav` - Mobile TOC navigation
- `#toc-title` - TOC title
- `[data-style="clerk"]` - Clerk style variant
- `[data-active="true"]` - Active TOC item

### Custom Styles (`src/styles/globals.css`)

#### Standard TOC
```css
#fd-toc {
  @apply rounded-xl border border-solid border-border/40;
  @apply bg-card/50 backdrop-blur-sm shadow-sm;
}
```

#### Clerk Style
```css
#fd-toc[data-style="clerk"] {
  @apply border-0 bg-transparent p-0;
}
```

#### Active Item
```css
#fd-toc a[data-active="true"] {
  @apply text-primary font-semibold border-primary;
  @apply border-l-2 border-primary;
}
```

## Usage Examples

### Example 1: Default Enhanced TOC

```tsx
import DocsPageComponent from '@/components/docs-page';

export default function Page({ params }) {
  return <DocsPageComponent slug={params.slug} />;
}
```

### Example 2: Using Custom TOC Component

```tsx
import { CustomTOC } from '@/components/custom-toc';

export default function Page({ params }) {
  const { toc } = page.data;
  
  return (
    <div className="flex gap-8">
      <article className="flex-1">
        {/* Content */}
      </article>
      
      <aside className="w-64">
        <CustomTOC 
          items={toc}
          title="Contents"
        />
      </aside>
    </div>
  );
}
```

### Example 3: Nested TOC with Children

```tsx
import { NestedTOC } from '@/components/custom-toc';

<NestedTOC 
  items={tableOfContents}
  depth={0}
  maxDepth={3}
/>
```

## Advanced Customization

### Custom TOC Title Styling

Style the TOC title using the `#toc-title` ID:

```css
#toc-title {
  @apply text-xs font-bold uppercase tracking-widest;
  @apply text-primary/70 mb-3 pb-3 border-b border-border/40;
}
```

### Custom TOC Item Styling

```css
#fd-toc a {
  @apply text-muted-foreground hover:text-foreground;
  @apply transition-all duration-200;
  @apply border-l-2 border-transparent hover:border-primary/30;
}

#fd-toc a[data-active="true"] {
  @apply text-primary font-semibold;
  @apply border-l-2 border-primary;
}
```

### Scrollbar Customization

```css
#fd-toc::-webkit-scrollbar {
  width: 6px;
}

#fd-toc::-webkit-scrollbar-thumb {
  @apply bg-border/40 rounded-full;
}
```

## Inline TOC Component

For inline TOC within the content:

```tsx
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

<InlineTOC 
  items={toc}
  className="rounded-none border-b border-dashed"
>
  Table of Contents
</InlineTOC>
```

## Headless Components

For complete customization:

```tsx
import {
  AnchorProvider,
  ScrollProvider,
  TOCItem,
  type TOCItemType,
} from 'fumadocs-core/toc';
import { useRef } from 'react';

export function CustomTOC({ items }: { items: TOCItemType[] }) {
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <AnchorProvider toc={items}>
      <div ref={viewRef} className="overflow-auto">
        <ScrollProvider containerRef={viewRef}>
          {items.map((item) => (
            <TOCItem key={item.url} href={item.url}>
              {item.title}
            </TOCItem>
          ))}
        </ScrollProvider>
      </div>
    </AnchorProvider>
  );
}
```

## Mobile Responsiveness

The TOC is automatically responsive:

- Desktop: Sticky sidebar TOC
- Tablet: Collapsible TOC button
- Mobile: Hidden by default, accessible via button

## Accessibility

The TOC includes:

- ARIA labels for navigation
- Keyboard navigation support
- Focus indicators
- Semantic HTML structure

## Tips

1. **Keep it concise**: Don't show too many levels deep
2. **Active state**: Always highlight the current section
3. **Sticky positioning**: Useful for long content
4. **Scroll behavior**: Smooth scrolling to sections
5. **Performance**: Only render TOC when items exist

## Troubleshooting

### TOC not showing

```tsx
// Check if toc exists
const tableOfContents = toc || headings || [];

// Ensure TOC has items
if (tableOfContents.length === 0) {
  return null;
}
```

### Active state not working

Ensure `AnchorProvider` wraps your TOC:

```tsx
<AnchorProvider toc={items}>
  {/* TOC content */}
</AnchorProvider>
```

### Styling not applying

Check that you're using the correct ID selectors:
- `#fd-toc` for the container
- `[data-style="clerk"]` for clerk variant
- `[data-active="true"]` for active items

## Timestamp and Edit Link Features

### Last Modified Timestamp

The TOC footer now displays a formatted timestamp showing when the page was last modified:

```tsx
{lastModified && (
  <div>
    <p className="text-xs text-muted-foreground">
      <span className="font-medium">Last updated:</span>{' '}
      {githubConfig.formatDate(new Date(lastModified))}
    </p>
  </div>
)}
```

**Example output**: "Last updated: January 15, 2024 at 03:45 PM"

### Edit This Page Link

The TOC footer includes an "Edit this page" link that opens the file on GitHub for editing:

```tsx
<a 
  href={githubEditUrl} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-xs text-primary hover:underline flex items-center gap-1.5 group"
>
  <span>Edit this page</span>
  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
</a>
```

### GitHub Configuration

The GitHub repository settings are centralized in `src/lib/github-config.ts`:

```tsx
export const githubConfig = {
  repo: 'https://github.com/EpicentralLabs/docs-v3',
  branch: 'main',
  docsPath: 'content/docs',
  
  getEditUrl(filePath: string): string {
    return `${this.repo}/edit/${this.branch}/${this.docsPath}/${filePath}`;
  },
  
  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  },
};
```

**To customize**: Update the `repo`, `branch`, or `docsPath` in the config file.

### Complete TOC Footer Example

```tsx
footer: (
  <div className="mt-4 pt-4 border-t border-border/40 space-y-3">
    {lastModified && (
      <div>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Last updated:</span>{' '}
          {githubConfig.formatDate(new Date(lastModified))}
        </p>
      </div>
    )}
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
  </div>
)
```

## References

- [Fumadocs TOC Documentation](https://fumadocs.vercel.app/docs/components/table-of-contents)
- [Headless Components](https://fumadocs.vercel.app/docs/headless-components)
- [Fumadocs Core TOC](https://fumadocs.vercel.app/docs/api/core/toc)
