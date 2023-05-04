import Image from 'next/image';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { Spacing } from '../Spacing';

type SliderProps = { images: { src: string; href: string }[] };

const images = [
  { href: '/', src: '/clients/casa.png' },
  { href: '/', src: '/clients/vitalistlogo.jpeg' },
  { href: '/', src: '/clients/vergoelst.svg' },
  { href: '/', src: '/clients/iks.webp' },
  { href: '/', src: '/clients/faber.svg' },
  { href: '/', src: '/clients/sezer.jpeg' },
  { href: '/', src: '/clients/ariston.png' },
  { href: '/', src: '/clients/change-mediated.png' },
  { href: '/', src: '/clients/oralchirurgie.png' },
  { href: '/', src: '/clients/logo_cleanin.png' },
];

const SliderComponent = ({ images }: SliderProps) => {
  return (
    <div className='p-10 container mx-auto'>
      <Headline tag='h2'>Unsere Kunden</Headline>
      <SubHeadline className='max-w-[45em]'>
        Wir glauben, dass Marken die kulturelle Verbindung zwischen Unternehmen und ihren Gemeinschaften sind.
      </SubHeadline>
      <Spacing type='content' />
      <div className='flex flex-wrap'>
        <div key={1} className='gap-8 w-1/4 flex justify-center items-center flex-col'>
          <Image width={100} height={100} src={'/clients/casa.png'} alt='client logo' />
          <Image width={100} height={100} src={'/clients/vitalistlogo.jpeg'} alt='client logo' />
        </div>
        <div key={1} className='gap-8 w-1/4 flex justify-center items-center flex-col'>
          <Image width={100} height={100} src={'/clients/vergoelst.svg'} alt='client logo' />
          <Image width={100} height={100} src={'/clients/faber.svg'} alt='client logo' />
          <Image width={100} height={100} src={'/clients/sezer.jpeg'} alt='client logo' />
        </div>
        <div key={1} className='gap-8 w-1/4 flex justify-center items-center flex-col'>
          <Image width={100} height={100} src={'/clients/ariston.png'} alt='client logo' />
          <Image width={100} height={100} src={'/clients/change-mediated.png'} alt='client logo' />
          <Image width={100} height={100} src={'/clients/oralchirurgie.png'} alt='client logo' />
        </div>
        <div key={1} className='gap-8 w-1/4 flex justify-center items-center flex-col'>
          <Image width={100} height={100} src={'/clients/logo_cleanin.png'} alt='client logo' />
          <Image width={100} height={100} src={'/clients/casa.png'} alt='client logo' />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
