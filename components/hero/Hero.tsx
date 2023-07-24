import Link from 'next/link';
import { Headline } from '../Headline';
import { Navigation } from '../navigation/Navigation';

export const Hero = () => {
  return (
    <>
      <div className='relative h-[100vh] hero'>
        <div className='p-10 container m-auto'>
          <div className='flex justify-between'>
            <div>
              <Link href='/'>
                <h5 className='text-secondary'>{String('<immajung />')}</h5>
              </Link>
            </div>
            <div className='mt-8 md:mr-8'>
              <Navigation />
            </div>
          </div>
          <div className='mt-16 md:mt-32'>
            <h1 className='font-bold text-5xl md:text-8xl text-secondary'>immajung</h1>
            <h2 className='text-2xl mt-10 md:text-4xl text-secondary'>
              Gemeinsam mit uns meistern Sie die Herausforderungen der Digitalisierung.
            </h2>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center absolute bottom-16'>
        <a
          href='#agency'
          className='border-2 border-secondary animate-bounce p-2 w-12 h-12 border-black rounded-full flex items-center justify-center'
        >
          <svg
            className='w-12 h-12 text-secondary'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='#14213D'
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </a>
      </div>
    </>
  );
};
