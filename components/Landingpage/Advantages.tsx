import { Headline } from '../Headline';
import classNames from 'classnames';
import { SubHeadline } from '../SubHeadline';
import { Spacing } from '../Spacing';

type ItemTypes = { headline: string; text: string; icon: string }[];
const items: ItemTypes = [
  {
    headline: 'Full Service',
    text: 'Wir kümmern uns um Ihre Website. Persönliche Ansprechpartner und raketenschnelle Erstellung.',
    icon: '/landingpage/gear.gif',
  },
  {
    headline: 'Günstigster Preis',
    text: 'Jetzt schnell sein und 60% Rabatt auf Ihre Website sichern. Keine versteckten Kosten. Domain & Hosting geschenkt.',
    icon: '/landingpage/save-money.gif',
  },
  {
    headline: 'Perfektes Design',
    text: 'Begeistern Sie Ihre Kunden mit raketenhaften Designs. Auf dem Desktop und auf allen mobilen Endgeräten.',
    icon: '/landingpage/monitor.gif',
  },
  {
    headline: 'Geld zurück Garantie',
    text: 'ie werden von unserem Design begeistert sein - garantiert! Wenn nicht, bekommen Sie Ihr Geld zurück.*',
    icon: '/landingpage/cashback.gif',
  },
];

export const Advantages = () => {
  const container = classNames('p-10 container m-auto overflow-hidden');

  return (
    <div className={container}>
      <Headline tag='h2'>Ihre Vorteile</Headline>
      <SubHeadline>Die Gründe warum unsere Kunden uns vertrauen</SubHeadline>
      <Spacing type='content' />
      <div className='flex flex-wrap justify-around gap-4'>
        {items.map((item, key) => (
          <div key={key} className='flex gap-4 flex-col items-center md:w-[270px]'>
            <img width={100} src={item.icon} alt='AltText' />
            <Headline hasSpacing={false} tag='h3'>
              {item.headline}
            </Headline>

            <p className='text-center'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
