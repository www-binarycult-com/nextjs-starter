import { Navigation } from '../navigation/Navigation';

export const Hero = () => {
  return (
    <div className='border-8 border-black h-[80vh] bg-hero bg-cover bg-center'>
      <div className='p-10'>
        <div className=' flex justify-between'>
          <div>
            <h1>LOGO</h1>
          </div>
          <Navigation />
        </div>
        <div className='mt-96'>
          <h1 className='font-bold text-9xl'>AGENTUR NAME</h1>
          <h2 className='text-4xl mt-10'>Slogan Lorem Ipsum</h2>
        </div>
      </div>
    </div>
  );
};
