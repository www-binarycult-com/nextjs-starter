import { Headline } from '../Headline';
import { Navigation } from '../navigation/Navigation';

export const Hero = () => {
  return (
    <div className='border-8 border-black h-[80vh] hero'>
      <div className='p-10'>
        <div className='flex justify-between'>
          <div>
            <a href='/'>
              <Headline tag='h5'>{'<immajung />'}</Headline>
            </a>
          </div>
          <div className='md:mr-8'>
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
  );
};
