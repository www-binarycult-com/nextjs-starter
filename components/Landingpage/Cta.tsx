import classNames from 'classnames';
import { Button } from '../button/Button';

export const Cta = () => {
  const container = classNames('p-10 container m-auto flex gap-16 flex-col items-center');

  return (
    <div className='bg-landingpage-cta bg-cover bg-center py-20'>
      <div className={container}>
        <h2 className='text-white text-center text-3xl'>Überzeugen Sie Ihre Kunden mit einer modernen Website</h2>
        <p className='text-center text-white'>
          Sichern Sie sich jetzt für kurze Zeit 60% Rabatt. Die meisten Unternehmen haben heute bereits eine Website,
          doch diese überzeugt oft so gut wie keine Kunden. Wir erstellen Ihnen eine moderne Website, mit denen Sie sich
          von Ihren Mitbewerbern abheben.
        </p>

        <Button className='uppercase bg-white'>Kontaktiere uns</Button>
      </div>
    </div>
  );
};
