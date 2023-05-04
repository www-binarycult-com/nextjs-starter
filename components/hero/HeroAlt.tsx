import Link from 'next/link';
import { Headline } from '../Headline';
import { Navigation } from '../navigation/Navigation';

export const Hero = () => {
  return (
    <>
      <div className='relative h-[100vh] hero'>
        <div className='px-10 container m-auto'>
          <div className='flex justify-between'>
            <div className='pb-10'>
              <Link href='/'>
                <Headline tag='h5'>{'<immajung />'}</Headline>
              </Link>
            </div>
            <div className='mt-8 md:mr-8'>
              <Navigation />
            </div>
          </div>
          <div className='border-y-2 py-12 sm:py-28 border-black'>
            <h1 className='font-bold text-5xl md:text-8xl uppercase'>immajung</h1>
          </div>
          <h2 className='text-2xl mt-32 md:text-xl w-1/2 uppercase'>
            Gemeinsam mit uns meistern Sie die Herausforderungen der Digitalisierung.
          </h2>
        </div>
      </div>
      <div className='flex w-full items-center justify-center absolute bottom-16 right-16'>
        <a href='#agency' className='animate-bounce p-2 w-12 h-12 border-black flex items-center justify-center'>
          <svg className='w-12 h-12 text-black' fill='none' strokeWidth='2' viewBox='0 0 24 24' stroke='black'>
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </a>
      </div>
    </>
  );
};
