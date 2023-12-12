import { Metadata } from 'next';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

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
  }
};

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export const revalidate = 3600;
