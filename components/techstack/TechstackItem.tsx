import { ReactNode } from 'react';
import { Headline } from '../Headline';

type ServiceItemsTypes = {
  title: string;
  href: string;
  children: ReactNode;
  stack: {
    src: string;
    title: string;
  }[];
};

export const TechstackItem = ({ title, children, stack }: ServiceItemsTypes) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`px-10 md:p-6 rounded w-full flex flex-col gap-5 duration-200 `}>
        <div>
          <Headline tag='h3'>{title}</Headline>
        </div>
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
  );
};
