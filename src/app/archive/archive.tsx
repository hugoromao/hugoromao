import { getArticles } from '../home';

import ArticleList from '@/components/articlelist';

export default async function Archive() {
  const articles = await getArticles();

  return (
    <>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {articles.map(article => (
          <ArticleList
            key={article.id}
            article={article}
            aspect="square"
          />
        ))}
      </div>
    </>
  );
}
