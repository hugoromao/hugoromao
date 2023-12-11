import Link from 'next/link';
import Container from '@/components/container';
import ArticleList from '@/components/articlelist';
import { Article } from '@/types/devto';

export default function Post({ articles }: { articles: Article[] }) {
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
