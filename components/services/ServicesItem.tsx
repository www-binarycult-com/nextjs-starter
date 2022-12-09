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
      <div className={`p-4 md:p-8 w-full md:w-[80%] bg-white flex flex-col  gap-8 duration-500`}>
        <div className='flex'>{title}</div>
        <div>
          <div className='mb-8'>{children}</div>
          <a href={href}>Mehr Erfahren</a>
        </div>
      </div>
    </div>
  ) : null;
};
