import Link from 'next/link';
import { Headline } from '../Headline';
import { Navigation } from '../navigation/Navigation';

export const Hero = () => {
  return (
    <>
      <div className='relative border-8 border-black h-[100vh] hero'>
        <div className='p-10 container m-auto'>
          <div className='flex justify-between'>
            <div>
              <Link href='/'>
                <Headline tag='h5'>{'<immajung />'}</Headline>
              </Link>
            </div>
            <div className='mt-8 md:mr-8'>
              <Navigation />
            </div>
          </div>
          <div className='mt-16 md:mt-32'>
            <h1 className='font-bold text-5xl md:text-8xl'>immajung</h1>
            <h2 className='text-2xl mt-10 md:text-4xl:'>
              Gemeinsam mit uns meistern Sie die Herausforderungen der Digitalisierung.
            </h2>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center absolute bottom-16'>
        <a
          href='#agency'
          className='border-2 border-black animate-bounce p-2 w-12 h-12 border-black rounded-full flex items-center justify-center'
        >
          <svg
            className='w-12 h-12 text-black'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='black'
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </a>
      </div>
    </>
  );
};
