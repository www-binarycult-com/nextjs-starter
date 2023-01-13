import { ReactNode } from 'react';

type ServiceItemsTypes = {
  position: number;
  hoveredPosition?: number;
  title: string;
  href: string;
  children: ReactNode;
  stack: {
    src: string;
    title: string;
  }[];
};

export const TechItem = ({ position, hoveredPosition, title, children, stack }: ServiceItemsTypes) => {
  return hoveredPosition === position ? (
    <div className={`z-0 w-full flex justify-center items-center transition-opacity animate-fadeIn`}>
      <div className={`p-4 md:p-6 rounded w-full md:w-[80%] flex flex-col gap-8 duration-200 bg-white`}>
        <div className='flex text-2xl'>{title}</div>
        <div>
          <div className='mb-8'>{children}</div>
          <div className='flex flex-wrap gap-4'>
            {stack.map(({ title, src }, key) => (
              <div key={key} className=' flex w-32 h-32 flex-col justify-center content-center'>
                <img className='w-12 h-12 self-center' src={src} width={110} height={110} alt='' />
                <span className='self-center pt-4'>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
