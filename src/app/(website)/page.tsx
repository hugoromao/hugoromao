import HomePage from './home';

import { Article } from '@/types/devto';

async function getArticles(): Promise<Article[]> {
  if (!process.env.DEVTO_APIKEY) {
    throw new Error('No dev.to api key provided');
  }

  const headers = new Headers();
  headers.append('accept', 'application/vnd.forem.api-v1+json');
  headers.append('api-key', process.env.DEVTO_APIKEY);

  const response = await fetch('https://dev.to/api/articles/me', {
    headers,
    next: { revalidate: 0 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export default async function IndexPage() {
  const articles = await getArticles();

  return <HomePage articles={articles} />;
}
