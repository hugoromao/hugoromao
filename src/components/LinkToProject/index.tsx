import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { cx } from '@/utils/all';

import CategoryLabel from '@/components/blog/category';

type LinkToProjectProps = {
  title: string;
  description: string;
  cover_image: string;
  linkToProject: string;
  categories: string[];
};

const LinkToProject = ({
  title,
  description,
  cover_image,
  linkToProject,
  categories
}: LinkToProjectProps) => {
  return (
    <>
      <div className={cx('group cursor-pointer')}>
        <div
          className={cx(
            ' overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800'
          )}>
          <Link
            className={cx('relative block', 'aspect-video')}
            href={linkToProject}>
            <Image
              src={cover_image}
              alt="Thumbnail"
              className="object-cover transition-all"
              fill
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          </Link>
        </div>

        <div>
          <div>
            <CategoryLabel categories={categories} />
            <h2
              className={cx(
                'text-2xl',
                'line-clamp-2 font-medium  tracking-normal text-black',
                'mt-2    dark:text-white'
              )}>
              <Link href={linkToProject}>
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-emerald-800 dark:to-emerald-900">
                  {title}
                </span>
              </Link>
            </h2>

            <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
              <Link href={linkToProject}>{description}</Link>
            </p>

            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkToProject;
