import HomePage, { getArticles } from './home';

import Container from '@/components/container';
import LinkToProject from '@/components/LinkToProject';

export default async function IndexPage() {
  const articles = await getArticles();

  return (
    <>
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <LinkToProject
            title="California Housing Prices"
            description="A regression model to predict the median house prices for California districts derived from the 1990 census."
            cover_image="/img/california.jpg"
            linkToProject="/california"
            categories={[
              'DataScience',
              'Regression',
              'ML'
            ]}
          />
          <LinkToProject
            title="MNIST Classifier"
            description="Handwritten Digit Classifier using K-Nearest Neighbors with 97.14% accuracy"
            cover_image="/img/mnist2.jpg"
            linkToProject="/mnist"
            categories={[
              'DataScience',
              'Classification',
              'ML'
            ]}
          />
          <LinkToProject
            title="EasyGuard"
            description="Protect your online accounts with secure and memorable passwords, generated through a personalized and scientifically tested process."
            cover_image="/img/easyguard.jpg"
            linkToProject="https://play.google.com/store/apps/details?id=app.hugoromao.gamified_password_generator.twa"
            categories={['Cybersecurity', 'Password Generator']}
          />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 "></div>
      </Container>
      <HomePage articles={articles} />
    </>
  );
}
