import { Suspense } from 'react';

import Loading from '@/components/loading';
import Container from '@/components/container';

import Archive from './archive';

export const dynamic = 'force-dynamic';

export const runtime = 'edge';

export default async function ArchivePage() {
  return (
    <>
      <Container className="relative">
        <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Archive
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">
            See all posts I have ever written.
          </p>
        </div>
        <Suspense fallback={<Loading />}>
          <Archive />
        </Suspense>
      </Container>
    </>
  );
}
