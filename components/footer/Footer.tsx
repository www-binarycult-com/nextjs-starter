import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-yellow-400 text-center p-10'>
      <div className='mx-auto'>
        <div className='flex items-center justify-between'>
          <p className='text-sm'>Copyright 2023, immajung</p>
          <nav className='text-sm font-semibold'>
            <ul className='flex items-center'>
              <li className='mr-3'>
                <a
                  href='/'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  Home
                </a>
              </li>
              <li className='mr-3'>
                <a
                  href='/dsgvo'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  DSGVO
                </a>
              </li>
              <li className='mr-3'>
                <a
                  href='/impressum'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  Impressum
                </a>
              </li>
              <li className='mr-3'>
                <a
                  href='#contact-form'
                  className='text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out'
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mt-8'>
          <p className='text-gray-600 text-sm font-semibold tracking-wide'>immajung</p>
          <p className='mt-1 text-gray-500 text-xs font-medium tracking-wide'>
            Gemeinsam mit uns meistern Sie die Herausforderungen der Digitalisierung.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;