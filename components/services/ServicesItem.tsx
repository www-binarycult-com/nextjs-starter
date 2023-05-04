import { ReactNode } from 'react';
import { Headline } from '../Headline';
import { useInView } from 'react-intersection-observer';
import { animated } from 'react-spring';

type ServiceItemsTypes = {
  title: string;
  href: string;
  children: ReactNode;
  animation?: string;
  inView: boolean;
};

export const ServicesItem = ({ title, children, href, animation, inView }: ServiceItemsTypes) => {
  return (
    <div className={`flex opacity-0 justify-center  ${inView ? animation : ''}`}>
      <div className={`flex flex-col gap-8 duration-200`}>
        <div>
          <Headline hasSpacing={false} tag='h3'>
            {title}
          </Headline>
        </div>
        <div>
          <div className='mb-4'>{children}</div>
          <a className=' hover-underline-animation' href={'/#contact-form'}>
            <b>Mehr Erfahren</b>
          </a>
        </div>
      </div>
    </div>
  );
};
