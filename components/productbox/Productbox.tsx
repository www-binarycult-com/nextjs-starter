import { Button } from '../button/Button';

export const Productbox = () => {
  return (
    <div className='py-6 px-10 flex flex-col border-2 border-solid border-black rounded w-fit'>
      <h6 className='pb-6'>Professionelle Firmenwebseite</h6>
      <p>keine versteckten Kosten, kein Baukasten, Pure Kreativität</p>
      <div className='flex gap-4 pb-4'>
        <s className='text-red-500'>3000</s>
        <span className='bg-primary px-2 py-1 border-1 solid rounded'>70% RABATT</span>
      </div>
      <div className='flex flex-col'>
        <p className=''>nur:</p>
        <p>800€</p>
        <p className=''>exkl. Mwst.</p>
      </div>
      <div className='border-1 solid pt-4' />
      <ul className='py-8'>
        <li className='flex gap-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          Premium Design
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          Smartphone & Tablet optimiert
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          Technische Pflege & Wartung
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img st width={16} src='landingpage/check.svg' />
          </span>
          Google Indexierung
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          Premium Design
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          SSL & DSGO konform
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          mehrere Unterseiten
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          Professionelle E-Mail Adressen
        </li>
        <li className='flex gap-2 py-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
          </span>
          Eigene Bearbeitung der Webseite
        </li>
      </ul>
      <p>Domain & Hosting 12 geschenkt</p>
      <Button>Kontaktieren</Button>
    </div>
  );
};
