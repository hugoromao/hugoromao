import { Locale } from '@/i18n';
import { useLocale } from 'next-intl';

import ArticleList from '@/components/articlelist';
import { getArticles } from '../home';

export default async function Archive() {
  const locale = useLocale();
  const articles = await getArticles(locale as Locale);

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
