/* eslint-disable react/no-unescaped-entities */
import Container from '@/components/container';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About Me
      </h1>
      <div className="text-center">
        <p className="text-lg">Building a better world with code!</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {Array(3)
          .fill(1)
          .map((number, index) => {
            return (
              <div
                key={number + index}
                className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16">
                <Image
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--4KJSv_of--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/450999/e824e272-70dd-41b6-ac84-a41cecd46945.png"
                  alt="Hugo Lima"
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
            );
          })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          I am a skilled Front-End Developer with experience in
          usability, testing, and maintenance of web and mobile
          systems. I have three years of experience and am proficient
          in a range of technologies, including TypeScript, Next.js,
          and React Native.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
