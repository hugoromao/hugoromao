import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/container';

import { parseISO, format } from 'date-fns';

import CategoryLabel from '@/components/blog/category';
import AuthorCard from '@/components/blog/authorCard';
import { ArticleBySlug } from '@/types/devto';

type ArticleProps = {
  article: ArticleBySlug;
};

export default function Article(props: ArticleProps) {
  const { article } = props;

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel
              categories={String(article.tag_list)
                .split(',')
                .map(t => t.trim())}
            />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {article.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src={article.user.profile_image}
                  alt={article.user.name}
                  className="rounded-full object-cover"
                  fill
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  {article.user.name}
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={article.published_at}>
                    {format(
                      parseISO(article.published_at),
                      'MMMM dd, yyyy'
                    )}
                  </time>
                  <span>
                    · {article.reading_time_minutes || '5'} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          src={article.cover_image}
          alt={'Thumbnail'}
          loading="eager"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md">
          <div
            className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600"
            dangerouslySetInnerHTML={{
              __html: article.body_html
            }}></div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
          <AuthorCard />
        </article>
      </Container>
    </>
  );
}
