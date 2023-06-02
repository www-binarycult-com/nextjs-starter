import Image from 'next/image';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { Spacing } from '../Spacing';
import { useInView } from 'react-intersection-observer';

type ClientsImageTypes = { src: string; alt?: string; href?: string };

type SliderProps = { images: ClientsImageTypes[] };

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
        className={`flex flex-wrap flex gap-16 md:gap-32 justify-center items-center opacity-0 ${
          inView ? 'animate-fadeIn' : ''
        }`}
      >
        {images.map((image, key) => (
          <ClientsImage src={image.src} alt={image.alt} key={key} />
        ))}
      </div>
    </div>
  );
};

const ClientsImage = ({ src, alt, href }: ClientsImageTypes) => {
  return (
    <a className='grayscale  hover:grayscale-0' href={href}>
      <Image alt={alt || 'client logo'} width={100} height={100} src={src} />
    </a>
  );
};

export default Clients;
