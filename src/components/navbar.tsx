'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';

import Container from '@/components/container';

export type NavBarItem = {
  label: string;
  href: string;
  badge?: React.ReactNode;
  external?: string;
  children?: string[];
};

export type NavbarProps = {
  leftmenu: NavBarItem[];
  rightmenu: NavBarItem[];
};

export default function Navbar({ leftmenu, rightmenu }: NavbarProps) {
  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                  {leftmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <Link
                        href={item.href}
                        key={`${item.label}${index}`}
                        className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                        target={item.external ? '_blank' : ''}
                        rel={item.external ? 'noopener' : ''}>
                        {item.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/" className="dark:hidden">
                    <Image
                      width={48}
                      height={44}
                      src="/img/logo.svg"
                      alt="Logo"
                      priority={true}
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  </Link>
                  <Link href="/" className="hidden dark:block">
                    <Image
                      width={48}
                      height={44}
                      src="/img/logo-white.svg"
                      alt="Logo"
                      priority={true}
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {rightmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <Link
                        href={item.href}
                        key={`${item.label}${index}`}
                        className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                        target={item.external ? '_blank' : ''}
                        rel={item.external ? 'noopener' : ''}>
                        <span> {item.label}</span>
                        {item.badge && (
                          <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <Link
                        href={item.href}
                        key={`${item.label}${index}`}
                        className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                        target={item.external ? '_blank' : ''}
                        rel={item.external ? 'noopener' : ''}>
                        {item.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}
