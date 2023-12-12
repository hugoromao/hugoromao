import HomePage, { getArticles } from './home';

export default async function IndexPage() {
  const articles = await getArticles();
  return <HomePage articles={articles} />;
}
