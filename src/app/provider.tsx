'use client';

import SearchDialog from '@/components/search';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { ProgressProvider } from '@bprogress/next/app';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { RootProvider } from 'fumadocs-ui/provider';
import { useEffect, useState, type ReactNode } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function Provider({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <RootProvider
        search={{
          SearchDialog,
        }}
      >
        <ProgressProvider
          height='2px'
          color='var(--color-primary)'
          options={{
            showSpinner: false,
          }}
          stopDelay={1000}
          delay={1000}
          startOnLoad
          shallowRouting
        >
          <TooltipProvider>
            {mounted ? (
              <ViewTransition>{children}</ViewTransition>
            ) : (
              children
            )}
          </TooltipProvider>
        </ProgressProvider>
        <Toaster />
        <TailwindIndicator />
      </RootProvider>
    </ThemeProvider>
  );

  return content;
}
