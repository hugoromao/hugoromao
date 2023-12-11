import PostPage from './default';

export async function generateMetadata() {
  const post = {
    title:
      '5 Effective Brain Recharging Activities No One is Talking About',
    slug: 'https://dev.to/hugoromao/test-3g8c',
    excerpt: 'excerpt',
    mainImage: {
      src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--3vJZG4Nf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/exes4njxpfd51oe7o828.jpg',
      alt: 'alt'
    },
    author: {
      name: 'Hugo Romão',
      slug: 'hugo-romao',
      image: {
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--4KJSv_of--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/450999/e824e272-70dd-41b6-ac84-a41cecd46945.png',
        alt: 'alt'
      },
      bio: 'bio'
    },
    categories: [{ color: 'blue', slug: 'LIFESTYLE' }],
    publishedAt: new Date().toISOString(),
    featured: true,
    body: 'body'
  };
  return { title: post.title };
}

export default async function PostDefault() {
  const post = {
    title:
      '5 Effective Brain Recharging Activities No One is Talking About',
    slug: 'https://dev.to/hugoromao/test-3g8c',
    excerpt: 'excerpt',
    mainImage: {
      src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--3vJZG4Nf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/exes4njxpfd51oe7o828.jpg',
      alt: 'alt'
    },
    author: {
      name: 'Hugo Romão',
      slug: 'hugo-romao',
      image: {
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--4KJSv_of--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/450999/e824e272-70dd-41b6-ac84-a41cecd46945.png',
        alt: 'alt'
      },
      bio: 'bio'
    },
    categories: [{ color: 'blue', slug: 'LIFESTYLE' }],
    publishedAt: new Date().toISOString(),
    featured: true,
    body: 'body'
  };

  return <PostPage post={post} />;
}

// export const revalidate = 60;
