import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Headline } from './Headline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderProps = { images: { src: string; href: string }[] };

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 1,
  cssEase: 'linear',
};

export const Sliders = ({ images }: SliderProps) => {
  const before =
    "before:content-[''] before:absolute before:w-[200px] before:h-[100px] before:z-[2] before:left-0 before:top-0 before:bg-gradient-slider";
  const after =
    "after:content-[''] after:absolute after:w-[200px] after:h-[100px] after:z-[2] after:right-0 after:top-0 after:transform after:rotate-180 after:bg-gradient-slider";

  return (
    <div className='p-10'>
      <Headline>Our Clients</Headline>
      <p className='py-4 max-w-md text-gray-500'>
        Wir glauben, dass Marken die kulturelle Verbindung zwischen Unternehmen und ihren Gemeinschaften sind.
      </p>
      <Slider {...settings}>
        {images.map(({ src }, key) => (
          <div key={key} className='mx-4'>
            <Image src={src} className='w-32' height='100' width='250' alt='' />
          </div>
        ))}
      </Slider>
    </div>
  );
};
