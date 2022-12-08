import { ReactNode } from 'react';

type ServiceItemsTypes = {
  position: number;
  hoveredPosition?: number;
  title: string;
  href: string;
  children: ReactNode;
};

export const ServicesItem = ({ position, hoveredPosition, title, children, href }: ServiceItemsTypes) => {
  return (
    <div className={`absolute z-0 w-full h-full flex justify-center items-center`}>
      <div
        className={`p-8 w-[80%] h-[60%] bg-white flex  gap-8 ${
          hoveredPosition === position ? 'opacity-1 visible' : 'opacity-0'
        } duration-500`}
      >
        <div className='flex flex-col-reverse'>{title}</div>
        <div>
          <div className='mt-8'>{children}</div>
          <a href={href}>Mehr Erfahren</a>
        </div>
      </div>
    </div>
  );
};
