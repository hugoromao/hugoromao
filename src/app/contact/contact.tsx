/* eslint-disable react/no-unescaped-entities */

import { EnvelopeIcon } from '@heroicons/react/24/outline';

import Container from '@/components/container';

export default function Contact() {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">Let's build something amazing!😄</p>
      </div>

      <div className="my-10 grid md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact Me
          </h2>
          <p className="mt-5 max-w-sm">
            Have something to say? I am here to help. Fill up the form
            or send an email.
          </p>

          <div className="mt-5">
            <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
              <EnvelopeIcon className="h-4 w-4" />
              <a href={`mailto:hugo8romao@gmail.com`}>
                hugo8romao@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <form
            action="https://formsubmit.co/ba7bf037c11403908c244babd678294c"
            method="POST"
            className="my-10">
            <div className="mb-5">
              <input
                type="text"
                required
                placeholder={'Full Name'}
                autoComplete="false"
                name="name"
                maxLength={80}
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'}`}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder={'Email Address'}
                autoComplete="false"
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'}`}
                name="email"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                required
                placeholder={'Your Message'}
                className={`h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200  ${'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'}`}
                name="message"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
