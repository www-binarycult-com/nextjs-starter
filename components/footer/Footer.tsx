import Link from 'next/link';
import React from 'react';
import { Headline } from '../Headline';

export const Footer = () => {
  return (
    <footer className='bg-black border-t-2 border-solid border-black mt-16'>
      <div className='p-10 container m-auto flex gap-8 md:flex-row flex-col-reverse'>
        <div className='md:w-1/2 w-full'>
          <h3 className='text-white text-2xl animate-pulse'>immajung</h3>
          <p className='mt-1 text-gray-500 text-xs font-medium tracking-wide'>
            Gemeinsam mit uns meistern Sie die Herausforderungen der Digitalisierung.
          </p>
          <p className='text-sm mt-4'>Copyright 2023, immajung</p>
        </div>
        <div className='md:w-1/2 w-full flex items-center justify-center flex-col'>
          <nav className='text-sm font-semibold'>
            <ul className='flex items-center gap-4 flex-wrap'>
              <li className='mr-3'>
                <Link href='/'>
                  <span className='hover-underline-animation text-white '>Kostenlose Erstberatung</span>
                </Link>
              </li>
              <li className='mr-3'>
                <Link href='/dsgvo'>
                  <span className='hover-underline-animation text-white '>Datenschutz</span>
                </Link>
              </li>
              <li className='mr-3'>
                <Link href='/impressum'>
                  <span className='hover-underline-animation text-white '>Impressum</span>
                </Link>
              </li>
              <li className='mr-3'>
                <Link href='/#contact-form'>
                  <span className='hover-underline-animation text-white '>Kontakt</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
