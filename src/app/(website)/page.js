import HomePage from './home';

export default async function IndexPage() {
  return (
    <HomePage
      posts={[
        {
          title:
            '5 Effective Brain Recharging Activities No One is Talking About',
          slug: 'https://dev.to/hugoromao/test-3g8c',
          excerpt: 'excerpt',
          author: {},
          mainImage: {
            src: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=3840&q=75',
            alt: 'alt'
          },
          categories: [{ color: 'blue', slug: 'LIFESTYLE' }],
          publishedAt: new Date().toISOString(),
          featured: true,
          body: 'body'
        }
      ]}
    />
  );
}

// export const revalidate = 60;
