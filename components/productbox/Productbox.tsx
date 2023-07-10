import { Button } from '../button/Button';

export const Productbox = () => {
  return (
    <div className='py-4 xl:py-6 px-5 xl:px-10 flex flex-col border-2 border-solid border-black rounded w-[300px] xl:w-[450px] bg-white'>
      <h6 className='pb-2 text-2xl pb-4 xl:pb-6 xl:text-2xl font-bold'>Professionelle Firmenwebseite</h6>
      <p className='text-gray-400'>keine versteckten Kosten, kein Baukasten, Pure Kreativität</p>
      <div className='flex gap-4 my-4 xl:my-6'>
        <s className='text-red-500 text-3xl'>3000€</s>
        <span className='bg-primary px-2 py-1 border-2 border-black rounded'>70% RABATT</span>
      </div>
      <div className='flex flex-col'>
        <p className='text-gray-400'>nur:</p>
        <p className='text-6xl text-center'>800€</p>
        <p className='text-gray-400'>exkl. Mwst.</p>
      </div>
      <div className='border rounded mt-2 xl:mt-4' />
      <ul className='py-4 xl:py-8'>
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
        <li className='flex gap-2 pt-2'>
          <span>
            <img width={16} src='landingpage/check.svg' />
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
      <p className='mb-6 text-center'>
        Domain & Hosting <span className='underline decoration-primary decoration-4'>12 Monate</span> geschenkt
      </p>
      <div className='flex justify-center'>
        <Button className='uppercase bg-primary after:bg-white h-12' asButton={false} href='#contact'>
          Kontaktieren
        </Button>
      </div>
    </div>
  );
};
