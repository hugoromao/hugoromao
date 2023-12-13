import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';

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

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const t = useTranslations('navbar');

  const leftmenu: NavBarItem[] = [
    {
      label: t('home'),
      href: `/${locale}`
    },
    {
      label: t('about'),
      href: `/${locale}/about`
    }
  ];

  const rightmenu: NavBarItem[] = [
    {
      label: t('archive'),
      href: `/${locale}/archive`
    },
    {
      label: t('contact'),
      href: `/${locale}/contact`
    }
  ];

  return (
    <>
      <Navbar leftmenu={leftmenu} rightmenu={rightmenu} />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export const revalidate = 3600;
