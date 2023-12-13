'use client';

import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from '@vercel/speed-insights/next';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <SpeedInsights />
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </>
  );
}
