import { User } from '@/types/devto';
import Image from 'next/image';
import Link from 'next/link';

async function getUser(): Promise<User> {
  if (!process.env.DEVTO_APIKEY) {
    throw new Error('No dev.to api key provided');
  }

  const headers = new Headers();
  headers.append('accept', 'application/vnd.forem.api-v1+json');
  headers.append('api-key', process.env.DEVTO_APIKEY);

  const response = await fetch('https://dev.to/api/users/me', {
    headers
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
}

export default async function AuthorCard() {
  const { profile_image, name, summary } = await getUser();

  return (
    <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
          <Image
            src={profile_image}
            alt={name}
            className="rounded-full object-cover"
            fill
            sizes="96px"
          />
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About {name}
            </h3>
          </div>
          <div>{summary}</div>
          <div className="mt-3">
            <Link
              href={`/about`}
              className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 ">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
