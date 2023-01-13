/* eslint-disable @next/next/no-img-element */
import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useProject } from './ProjectProvider';

type ProjectItemProps = {
  imgSrc?: string;
  svgSrc?: string;
  position: number;
  backgroundColor: string;
  children: ReactNode;
  headline: string;
};

export const ProjectItem = ({ position, backgroundColor, imgSrc, svgSrc, headline, children }: ProjectItemProps) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  const { changeConfig } = useProject();

  useEffect(() => {
    if (inView) {
      changeConfig({ position: position, color: backgroundColor });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (inView) {
      changeConfig({ position: position, color: backgroundColor });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <a className='block group min-h-[100vh]'>
      <div id='test' className='relative min-h-[80vh]'>
        <div id='inner' className='flex items-center justify-items-center absolute w-full h-full inset-0 min-h-[80vh]'>
          <div className='relative flex flex-col'>
            <h1 className='text-3xl md:text-4xl p-6 md:p-12 md:hidden text-white'>{headline}</h1>
            <div className='relative'>
              <div id='item_screen' className='items-center flex flex-col justify-items-center relative w-full'>
                <img
                  ref={ref}
                  alt=''
                  src={imgSrc}
                  className='rounded duration-700 transition-all max-w-[80%] group-hover:scale-110 md:max-h-[30vw] md:max-w-[70%]'
                />
              </div>
            </div>
            {<div className='relative p-6 md:p-12 md:hidden text-white'>{children}</div>}
          </div>
        </div>
      </div>
    </a>
  );
};

ProjectItem.displayName = 'ProjectItem';
