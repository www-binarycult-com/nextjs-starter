import { ReactNode } from 'react';
import JSXStyle from 'styled-jsx/style';

type ServiceItemsTypes = {
  position: number;
  hoveredPosition?: number;
  title: string;
  href: string;
  children: ReactNode;
};

export const ServicesItem = ({ position, hoveredPosition, title, children, href }: ServiceItemsTypes) => {
  return hoveredPosition === position ? (
    <div className={`z-0 w-full flex justify-center items-center transition-opacity animate-fadeIn`}>
      <div className={`p-4 md:p-8 w-full md:w-[60%] bg-white flex flex-col  gap-8 duration-200`}>
        <div className='flex text-2xl'>{title}</div>
        <div>
          <div className='mb-8'>{children}</div>
          <a className='text-white hover-underline-animation' href={'/#contact-form'}>
            Mehr Erfahren
          </a>
        </div>
      </div>
    </div>
  ) : null;
};
