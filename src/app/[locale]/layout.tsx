import '@/styles/tailwind.css';

import { Inter, Lora } from 'next/font/google';

import { Providers } from './providers';

import { cx } from '@/utils/all';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora'
});

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: 'pt' | 'en' };
}) {
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
