import Link from 'next/link';
import Container from '@/components/container';
import ArticleList from '@/components/articlelist';
import { MyArticles } from '@/types/devto';

export async function getArticles(): Promise<MyArticles> {
  if (!process.env.DEVTO_APIKEY) {
    throw new Error('No dev.to api key provided');
  }

  const headers = new Headers();
  headers.append('accept', 'application/vnd.forem.api-v1+json');
  headers.append('api-key', process.env.DEVTO_APIKEY);

  const response = await fetch('https://dev.to/api/articles/me', {
    headers
  });

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export default function Post({ articles }: { articles: MyArticles }) {
  return (
    <>
      {articles.length && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {articles.slice(0, 2).map(article => (
              <ArticleList
                key={article.id}
                article={article}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {articles.slice(2, 14).map(article => (
              <ArticleList
                key={article.id}
                article={article}
                aspect="square"
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
