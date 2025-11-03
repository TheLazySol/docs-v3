'use client';

import { cva } from 'class-variance-authority';
import { cn } from 'fumadocs-ui/components/api';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from 'fumadocs-ui/components/ui/navigation-menu';
import { BaseLinkItem, type LinkItemType } from 'fumadocs-ui/layouts/links';
import type { ComponentPropsWithoutRef } from 'react';

const menuItemVariants = cva('', {
  variants: {
    variant: {
      main: 'inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4',
      icon: buttonVariants({
        size: 'icon',
        color: 'ghost',
      }),
      button: buttonVariants({
        color: 'secondary',
        className: 'gap-1.5 [&_svg]:size-4',
      }),
    },
  },
  defaultVariants: {
    variant: 'main',
  },
});

export const MenuLinkItem = ({
  item,
  ...props
}: {
  item: LinkItemType;
  className?: string;
}) => {
  if (item.type === 'custom')
    return <div className={cn('grid', props.className)}>{item.children}</div>;

  if (item.type === 'menu') {
    const header = (
      <div className='mobile-menu-item'>
        {item.icon}
        {item.text}
      </div>
    );

    return (
      <div className={cn('mb-4 flex flex-col', props.className)}>
        <div className='mb-1 font-medium text-base text-foreground'>
          {header}
        </div>
        {item.items.map((child, i) => (
          <MenuLinkItem key={i.toString()} item={child} />
        ))}
      </div>
    );
  }

  return (
    <NavigationMenuLink asChild>
      <BaseLinkItem
        item={item}
        className={cn(
          menuItemVariants({ variant: item.type }),
          props.className,
        )}
        aria-label={item.type === 'icon' ? item.label : undefined}
      >
        {item.icon}
        {item.type === 'icon' ? undefined : item.text}
      </BaseLinkItem>
    </NavigationMenuLink>
  );
};

export const Menu = NavigationMenuItem;

export const MenuTrigger = ({
  ...props
}: ComponentPropsWithoutRef<typeof NavigationMenuTrigger> & {}) => {
  return (
    <NavigationMenuTrigger
      {...props}
      suppressHydrationWarning
      className={cn(
        buttonVariants({
          size: 'icon',
          color: 'ghost',
        }),
        props.className,
      )}
    >
      {props.children}
    </NavigationMenuTrigger>
  );
};

export const MenuContent = (
  props: ComponentPropsWithoutRef<typeof NavigationMenuContent>,
) => {
  return (
    <NavigationMenuContent
      {...props}
      className={cn('flex flex-col p-4', props.className)}
    >
      {props.children}
    </NavigationMenuContent>
  );
};
