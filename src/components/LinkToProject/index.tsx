import React from 'react';

import Image from 'next/image';

import { cx } from '@/utils/all';

import CategoryLabel from '@/components/blog/category';

type LinkToProjectProps = {
  title: string;
  description: string;
  cover_image: string;
  linkToProject: string;
};

const LinkToProject = ({
  title,
  description,
  cover_image,
  linkToProject
}: LinkToProjectProps) => {
  return (
    <>
      <div className={cx('group cursor-pointer')}>
        <div
          className={cx(
            ' overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800'
          )}>
          <a
            className={cx('relative block', 'aspect-video')}
            href={linkToProject}
            target="_blank"
            rel="noopener">
            <Image
              src={cover_image}
              alt="Thumbnail"
              className="object-cover transition-all"
              fill
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          </a>
        </div>

        <div>
          <div>
            <CategoryLabel
              categories={[
                'DataScience',
                'Machine Learning',
                'Regression'
              ]}
            />
            <h2
              className={cx(
                'text-2xl',
                'line-clamp-2 font-medium  tracking-normal text-black',
                'mt-2    dark:text-white'
              )}>
              <a href={linkToProject} target="_blank" rel="noopener">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-emerald-800 dark:to-emerald-900">
                  {title}
                </span>
              </a>
            </h2>

            <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
              <a href={linkToProject} target="_blank" rel="noopener">
                {description}
              </a>
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
