import Image from 'next/image';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { Spacing } from '../Spacing';
import { useInView } from 'react-intersection-observer';

type SliderProps = { images: { src: string; href: string }[] };

const Clients = ({ images }: SliderProps) => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: false,
  });

  return (
    <div className='p-10 container mx-auto'>
      <Headline tag='h2'>Unsere Kunden</Headline>
      <SubHeadline className='max-w-[45em]'>
        Wir glauben, dass Marken die kulturelle Verbindung zwischen Unternehmen und ihren Gemeinschaften sind.
      </SubHeadline>
      <Spacing type='content' />
      <div
        ref={ref}
        className={`flex flex-wrap flex gap-8 justify-center items-center opacity-0 ${inView ? 'animate-fadeIn' : ''}`}
      >
        {images.map((image, key) => (
          <Image key={key} width={100} height={100} src={image.src} alt='client logo' />
        ))}
      </div>
    </div>
  );
};

export default Clients;
