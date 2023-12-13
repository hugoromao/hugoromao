import { Suspense } from 'react';

import Loading from '@/components/loading';
import Container from '@/components/container';

import Archive from './archive';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export const runtime = 'edge';

export default async function ArchivePage() {
  const t = await getTranslations('archive');

  return (
    <>
      <Container className="relative">
        <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          {t('title')}
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">{t('subtitle')}</p>
        </div>
        <Suspense fallback={<Loading />}>
          <Archive />
        </Suspense>
      </Container>
    </>
  );
}
