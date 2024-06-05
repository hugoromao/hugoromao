import { Locale } from '@/i18n';
import { useLocale } from 'next-intl';

import HomePage, { getArticles } from './home';

import Container from '@/components/container';
import LinkToProject from '@/components/LinkToProject';

export default async function IndexPage() {
  const locale = useLocale();
  const articles = await getArticles(locale as Locale);

  return (
    <>
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <LinkToProject
            title="California Housing Prices"
            description="A regression model to predict the median house prices for California districts derived from the 1990 census."
            cover_image="/img/california.jpg"
            linkToProject="https://california-housing-prices-web.vercel.app/"
          />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 "></div>
      </Container>
      <HomePage articles={articles} />
    </>
  );
}
