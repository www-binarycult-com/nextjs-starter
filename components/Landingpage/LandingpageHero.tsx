import Link from 'next/link';
import { Headline } from '../Headline';
import { Navigation } from '../navigation/Navigation';
import { Productbox } from '../productbox/Productbox';

export const LandingpageHero = () => {
  return (
    <div className='bg-landingpage-hero bg-cover bg-center '>
      <div className='container m-auto gap-16'>
        <div className='py-32 flex'>
          <div className='flex flex-col '>
            <h1 className='text-6xl uppercase text-white mb-8'>Die Webseite für dein Business</h1>
            <p className='text-6xl uppercase text-primary'>Jetzt erstellen lassen</p>
            <div className='flex justify-end'>
              <img className='rotate-90' width={250} src='/landingpage/arrow.svg' />
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
