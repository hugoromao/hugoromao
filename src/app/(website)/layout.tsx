import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

async function sharedMetaData() {
  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: 'Stablo - Blog Template for Next.js & Sanity CMS',
      template: '%s | Stablo'
    },
    description:
      'Stablo - popular open-source next.js and sanity blog template',
    keywords: ['Next.js', 'Sanity', 'Tailwind CSS'],
    authors: [{ name: 'Surjith' }],
    canonical: 'settings?.url',
    openGraph: {
      images: [
        {
          url: '/img/opengraph.jpg',
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: 'Stablo Template',
      card: 'summary_large_image'
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata() {
  return await sharedMetaData();
}

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </>
  );
}

export const revalidate = 3600;
