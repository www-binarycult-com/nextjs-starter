import Link from 'next/link';
import React from 'react';
import { Headline } from '../Headline';

export const Footer = () => {
  return (
    <footer className='bg-primary text-center p-10'>
      <div className='mx-auto'>
        <div className='flex items-center justify-between flex-col'>
          <nav className='text-sm font-semibold'>
            <ul className='flex items-center'>
              <li className='mr-3'>
                <Link
                  href='/'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  Home
                </Link>
              </li>
              <li className='mr-3'>
                <Link
                  href='/dsgvo'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  Datenschutz
                </Link>
              </li>
              <li className='mr-3'>
                <Link
                  href='/impressum'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  Impressum
                </Link>
              </li>
              <li className='mr-3'>
                <Link
                  href='/#contact-form'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mt-8'>
          <Headline>immajung</Headline>
          <p className='mt-1 text-gray-500 text-xs font-medium tracking-wide'>
            Gemeinsam mit uns meistern Sie die Herausforderungen der Digitalisierung.
          </p>
          <p className='text-sm mt-24'>Copyright 2023, immajung</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
