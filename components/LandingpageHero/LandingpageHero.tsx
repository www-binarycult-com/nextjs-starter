import Link from 'next/link';
import { Headline } from '../Headline';
import { Navigation } from '../navigation/Navigation';
import { Productbox } from '../productbox/Productbox';

export const LandingpageHero = () => {
  return (
    <>
      <div className='relative h-[100vh] hero'>
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
      <Productbox />
    </>
  );
};
