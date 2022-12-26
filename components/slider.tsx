import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Headline } from './Headline';

type SliderProps = { images: { src: string; href: string }[] };

export const Slider = ({ images }: SliderProps) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  const before =
    "before:content-[''] before:absolute before:w-[200px] before:h-[100px] before:z-[2] before:left-0 before:top-0 before:bg-gradient-slider";
  const after =
    "after:content-[''] after:absolute after:w-[200px] after:h-[100px] after:z-[2] after:right-0 after:top-0 after:transform after:rotate-180 after:bg-gradient-slider";

  return (
    <div className='p-10'>
      <Headline>Our Clients</Headline>
      <p className='py-4 max-w-md'>
        Wir glauben, dass Marken die kulturelle Verbindung zwischen Unternehmen und ihren Gemeinschaften sind.
      </p>
      <div
        ref={ref}
        className={`bg-white   h-[100px] m-auto overflow-hidden relative w-full ${before} ${after} ${
          inView && 'animate-fade-in'
        }`}
      >
        <div className='flex w-full animate-slide-scroll'>
          {images.map(({ src }, key) => (
            <div key={key} className='h-[100px] w-[250px] flex'>
              <Image src={src} className='max-w-none' height='100' width='250' alt='' />
            </div>
          ))}
          {images.map(({ src }, key) => (
            <div key={key} className='h-[100px] w-[250px] flex'>
              <Image src={src} className='max-w-none' height='100' width='250' alt='' />
            </div>
          ))}
          {images.map(({ src }, key) => (
            <div key={key} className='h-[100px] w-[250px] flex'>
              <Image src={src} className='max-w-none' height='100' width='250' alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
