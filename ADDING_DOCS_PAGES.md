# How to Add New Pages to the Documentation

This guide explains how to add new pages to the Epicentral Labs documentation system built with Fumadocs.

## Overview

The documentation system uses:
- **Fumadocs** for the documentation framework
- **MDX** files for content (Markdown with JSX components)
- **Automatic routing** based on file structure
- **Sidebar navigation** generated from the file tree
- **Consistent TOC and Last Modified** across all pages via shared layout

## File Structure

```
content/docs/
├── index.mdx          # Home page (/docs)
├── stakinglab.mdx     # Staking Lab page (/docs/stakinglab)
├── meta.json          # Navigation configuration
└── [new-page].mdx     # Your new pages go here
```

## Step-by-Step Guide

### 1. Create Your MDX File

Create a new `.mdx` file in the `content/docs/` directory:

```bash
# Example: Create a new page called "trading-guide"
touch content/docs/trading-guide.mdx
```

### 2. Add Frontmatter

Every MDX file needs frontmatter at the top with `title` and `description`:

```mdx
---
title: "Trading Guide"
description: "Learn how to trade options on Epicentral Labs"
---

# Trading Guide

Your content goes here...
```

### 3. Write Your Content

Use standard Markdown syntax with MDX capabilities:

```mdx
---
title: "Trading Guide"
description: "Learn how to trade options on Epicentral Labs"
---

# Trading Guide

## Getting Started

This guide will help you understand how to trade options on our platform.

### Prerequisites

- A Solana wallet
- SOL for transaction fees
- Basic understanding of options trading

## Step 1: Connect Your Wallet

1. Click the "Connect Wallet" button
2. Select your preferred wallet
3. Approve the connection

## Code Examples

You can include code blocks:

```typescript
import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com');
```

## Advanced Features

### Custom Components

You can use custom React components in your MDX:

```jsx
<Callout type="info">
  This is an important note about trading options.
</Callout>
```

### Interactive Elements

```jsx
<Button onClick={() => alert('Hello!')}>
  Click me
</Button>
```

## Next Steps

- Learn about [Staking Lab](/docs/stakinglab)
- Read our [API documentation](/docs/api)
```

### 4. Update Navigation (Optional)

The sidebar navigation is automatically generated from your file structure. However, you can customize the order and grouping by editing `content/docs/meta.json`:

```json
{
  "title": "Documentation",
  "pages": [
    "index",
    "trading-guide",
    "stakinglab"
  ]
}
```

### 5. Test Your Page

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Navigate to your new page:
   ```
   http://localhost:3000/docs/trading-guide
   ```

## File Naming Conventions

- Use **kebab-case** for file names: `trading-guide.mdx`
- Avoid spaces and special characters
- Keep names descriptive but concise

## URL Structure

Your file name determines the URL:
- `content/docs/trading-guide.mdx` → `/docs/trading-guide`
- `content/docs/api/reference.mdx` → `/docs/api/reference`

## Frontmatter Options

Required fields:
- `title`: Page title (displayed in browser tab and page header)
- `description`: Page description (for SEO and page previews)

Optional fields:
- `lastModified`: Custom last modified date
- `tags`: Array of tags for categorization
- `image`: Featured image URL

Example:
```mdx
---
title: "Advanced Trading"
description: "Advanced trading strategies and techniques"
lastModified: "2024-01-15"
tags: ["trading", "advanced", "strategies"]
image: "/images/advanced-trading.jpg"
---
```

## Content Guidelines

### Writing Style
- Use clear, concise language
- Break content into digestible sections
- Include code examples where relevant
- Add callouts for important information

### Markdown Features
- Use `#` for main headings
- Use `##` for section headings
- Use `###` for subsections
- Use `-` or `*` for bullet points
- Use `1.` for numbered lists

### Code Blocks
```typescript
// Use language tags for syntax highlighting
const example = "TypeScript code";
```

```bash
# Shell commands
pnpm install
```

## Troubleshooting

### Page Not Showing
1. Check that your file is in `content/docs/`
2. Verify the frontmatter is correct
3. Restart the development server
4. Check the browser console for errors

### Navigation Issues
1. Ensure your file is included in `meta.json` if you're customizing navigation
2. Check that the file name doesn't conflict with existing routes
3. Verify the MDX syntax is valid

### Build Errors
1. Check for syntax errors in your MDX
2. Ensure all imports are correct
3. Validate your frontmatter format

## Examples

### Simple Page
```mdx
---
title: "Quick Start"
description: "Get started with Epicentral Labs"
---

# Quick Start

Welcome to Epicentral Labs! This guide will help you get started.

## What You'll Need

- A Solana wallet
- Some SOL for fees

## Next Steps

Ready to dive in? Check out our [Trading Guide](/docs/trading-guide).
```

### Page with Code Examples
```mdx
---
title: "API Reference"
description: "Complete API reference for Epicentral Labs"
---

# API Reference

## Authentication

All API requests require authentication:

```typescript
const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};
```

## Endpoints

### Get Options

```typescript
const response = await fetch('/api/options', {
  headers
});
```
```

## Technical Implementation

### Shared Layout Component

The documentation system uses a shared layout component (`src/components/docs-page.tsx`) to ensure consistency across all pages:

- **Consistent TOC**: All pages display Table of Contents based on headings
- **Last Modified**: Shows when the page was last updated
- **Unified Styling**: Uses Fumadocs' `DocsPage` component with consistent configuration

### Data Structure

The system handles different data structures from Fumadocs:
- Uses `toc` property when available
- Falls back to `headings` property for compatibility
- Ensures `lastModified` is properly formatted as Date object

### Page Components

Both index and slug pages use the same shared component:
- `src/app/docs/page.tsx` - Home page (`/docs`)
- `src/app/docs/[...slug]/page.tsx` - All other pages (`/docs/*`)

This ensures identical behavior and styling across all documentation pages.

## Need Help?

If you encounter issues:
1. Check the [Fumadocs documentation](https://fumadocs.vercel.app/)
2. Review existing pages for examples
3. Ask in the Discord community

---

**Happy documenting!** 📚
