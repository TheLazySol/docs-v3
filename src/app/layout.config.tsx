import { Icons } from '@/components/icons/icons';
import type { LinkItemType } from 'fumadocs-ui/layouts/links';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const title = 'Epicentral Labs';
export const description =
  'Documentation for Epicentral Labs - Decentralized Options Trading on Solana.';
export const owner = 'Epicentral Labs';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title,
  },
};

export const linkItems: LinkItemType[] = [
  {
    icon: <Icons.info />,
    text: 'About',
    url: '/about',
    active: 'url',
  },
  {
    text: 'Docs',
    url: '/docs',
    active: 'url',
  },
  {
    type: 'menu',
    text: 'Blog',
    items: [
      {
        text: 'Posts',
        description: 'View all blog posts',
        url: '/blog',
        icon: <Icons.posts />,
      },
      {
        text: 'Tags',
        description: 'View blog posts by tags',
        url: '/tags',
        icon: <Icons.tags />,
      },
    ],
  },
  {
    type: 'icon',
    text: 'Twitter',
    url: 'https://x.com/EpicentralLabs',
    icon: <Icons.twitter />,
    label: 'Twitter',
    secondary: true,
  },
  {
    type: 'icon',
    text: 'GitHub',
    url: 'https://github.com/EpicentralLabs',
    icon: <Icons.gitHub />,
    label: 'GitHub',
    secondary: true,
  },
  {
    type: 'icon',
    text: 'Discord',
    url: 'https://discord.gg/5asAuY2sR8',
    icon: <Icons.discord />,
    label: 'Discord',
    secondary: true,
  },
];

// Docs-specific links without social icons
export const docsLinkItems: LinkItemType[] = [
  {
    icon: <Icons.info />,
    text: 'About',
    url: '/about',
    active: 'url',
  },
  {
    text: 'Docs',
    url: '/docs',
    active: 'url',
  },
  {
    type: 'menu',
    text: 'Blog',
    items: [
      {
        text: 'Posts',
        description: 'View all blog posts',
        url: '/blog',
        icon: <Icons.posts />,
      },
      {
        text: 'Tags',
        description: 'View blog posts by tags',
        url: '/tags',
        icon: <Icons.tags />,
      },
    ],
  },
];

export const postsPerPage = 5;
