import '@/styles/tailwind.css';

import { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Lora } from 'next/font/google';

import { Providers } from './providers';

import { cx } from '@/utils/all';

import Footer from '@/components/footer';
import Navbar, { NavBarItem } from '@/components/navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://hugoromao.vercel.app'),
  title: 'Hugo Romão • Personal Website',
  description:
    'Welcome to my personal laboratory – a cozy corner of the internet where science and technology come to life with a personal touch!',
  keywords: ['Hugo Romão', 'Portfólio', 'Blog'],
  authors: [{ name: 'Hugo Lima Romão' }],
  openGraph: {
    title: 'Hugo Romão • Personal Website',
    description:
      'Welcome to my personal laboratory – a cozy corner of the internet where science and technology come to life with a personal touch!',
    images: [
      {
        url: 'https://hugoromao.vercel.app/opengraph.png',
        width: 800,
        height: 600
      }
    ]
  },
  twitter: {
    title: 'Hugo Romão • Personal Website',
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: 'Qufe6ZpDpJZ659WymsEhkTVRMrdkF8rG887Sdm9iDiM'
  }
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const leftmenu: NavBarItem[] = [
    {
      label: 'Home',
      href: `/`
    },
    {
      label: 'About',
      href: `/about`
    }
  ];

  const rightmenu: NavBarItem[] = [
    {
      label: 'Archive',
      href: `/archive`
    },
    {
      label: 'Contact',
      href: `/contact`
    }
  ];

  const hotjarID = process.env.NEXT_PUBLIC_HOTJAR_ID;

  return (
    <html
      lang="en-US"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <Navbar leftmenu={leftmenu} rightmenu={rightmenu} />
          <main>{children}</main>
          <Footer />
          {hotjarID !== undefined ? (
            <Script id="HotJarAnalytics" strategy="afterInteractive">
              {`!function(t,h,e,j,s,n){t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:${hotjarID},hjsv:6},s=h.getElementsByTagName("head")[0],(n=h.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,s.appendChild(n)}(window,document);`}
            </Script>
          ) : null}
        </Providers>
      </body>
    </html>
  );
}
