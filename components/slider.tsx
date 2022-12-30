import Image from 'next/image';
import { Headline } from './Headline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SubHeadline } from './SubHeadline';
import { Spacing } from './Spacing';

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

const SliderComp = ({ images }: SliderProps) => {
  return (
    <div className='p-10 container mx-auto'>
      <Headline>Unsere Kunden</Headline>
      <SubHeadline>
        Wir glauben, dass Marken die kulturelle Verbindung zwischen Unternehmen und ihren Gemeinschaften sind.
      </SubHeadline>
      <Spacing type='content' />
      <Slider {...settings}>
        {images.map(({ src }, key) => (
          <div key={key} className='mx-4'>
            <Image src={src} className='w-32' height='100' width='250' alt='client logo' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
