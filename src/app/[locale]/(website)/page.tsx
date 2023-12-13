import { useLocale } from 'next-intl';
import HomePage, { getArticles } from './home';
import { Locale } from '@/i18n';

export default async function IndexPage() {
  const locale = useLocale();
  const articles = await getArticles(locale as Locale);

  return <HomePage articles={articles} />;
}
