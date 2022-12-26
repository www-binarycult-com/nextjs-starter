import { Headline } from '../Headline';
import { Navigation } from '../navigation/Navigation';

export const Hero = () => {
  return (
    <div className='border-8 border-black h-[80vh] bg-hero bg-cover bg-center '>
      <div className='p-10'>
        <div className='flex justify-between'>
          <div>
            <Headline tag='h5'>{'<immajung />'}</Headline>
          </div>
          <div className='mr-8'>
            <Navigation />
          </div>
        </div>
        <div className='mt-28 md:mt-32'>
          <h1 className='font-bold text-5xl md:text-8xl'>immajung</h1>
          <h2 className='text-4xl mt-10'>Gemeinsam mit uns meistern Sie die Herausforderungen der Digitalisierung.</h2>
        </div>
      </div>
    </div>
  );
};
