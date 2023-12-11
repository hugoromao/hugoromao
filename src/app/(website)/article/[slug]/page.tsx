import { ArticleBySlug } from '@/types/devto';

import ArticlePage from './default';
import { notFound } from 'next/navigation';

async function getArticle(
  slug: string
): Promise<ArticleBySlug | null> {
  if (!process.env.DEVTO_APIKEY) {
    throw new Error('No dev.to api key provided');
  }

  const headers = new Headers();
  headers.append('accept', 'application/vnd.forem.api-v1+json');
  headers.append('api-key', process.env.DEVTO_APIKEY);

  const response = await fetch(
    `https://dev.to/api/articles/hugoromao/${slug}`,
    {
      headers
    }
  );

  if (response.status === 404) return null;

  if (!response.ok) {
    throw new Error('Failed to fetch article');
  }
  return response.json();
}

export default async function ArticleDefault(props: {
  params: { slug: string };
}) {
  const article = await getArticle(props.params.slug);

  if (article === null) {
    notFound();
    return;
  }

  return <ArticlePage article={article} />;
}
