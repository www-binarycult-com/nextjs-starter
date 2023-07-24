import { Productbox } from '../productbox/Productbox';

export const LandingpageHero = () => {
  return (
    <div className='bg-landingpage-hero bg-cover bg-center '>
      <div className='container m-auto gap-16'>
        <div className='py-32 flex flex-col-reverse items-center md:flex-row md:items-start'>
          <div className='flex flex-col text-center mt-5 md:mt-0 md:text-left'>
            <h1 className='md:text-5xl text-4xl uppercase text-white mb-8'>Die Webseite für dein Unternehmen</h1>
            <p className='md:text-5xl text-4xl uppercase text-primary'>Jetzt erstellen lassen</p>
            <div className='flex justify-end'>
              <img className='rotate-90 hidden md:block' width={250} src='/landingpage/arrow.svg' />
            </div>
          </div>
          <div>
            <Productbox />
          </div>
        </div>
      </div>
    </div>
  );
};
