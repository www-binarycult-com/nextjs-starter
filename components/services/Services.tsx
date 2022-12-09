import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Headline } from '../Headline';

export const Services = () => {
  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState<{
    position?: number;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
  } | null>(null);

  return (
    <div>
      <Headline tag='h2'>Our Services</Headline>
      <p className='w-1/3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam voluptatibus exercitationem
        reiciendis sed ad nostrum? Error, fugit necessitatibus? Exercitationem vero enim adipisci et ipsa veniam
        excepturi, aliquam quis praesentium!
      </p>
      <span>___</span>
      <div className='box-border block bg-cover relative w-[900px] h-[500px] p-12'>
        <div className='z-0'>
          <img
            src='bild1-services.webp'
            className={`absolute w-full h-full  top-0 left-0 ${
              position?.position === 1 ? 'opacity-1 visible' : 'opacity-0'
            } transition-all duration-500`}
            width={900}
            height={500}
            alt=''
          />
          <img
            className={`absolute w-full h-full  top-0 left-0 ${
              position?.position === 2 ? 'opacity-1 visible' : 'opacity-0'
            } transition-all duration-500`}
            src='bild2-services.webp'
            width={900}
            height={500}
            alt=''
          />
          <img
            className={`absolute w-full h-full  top-0 left-0 ${
              position?.position === 3 ? 'opacity-1 visible' : 'opacity-0'
            } transition-all duration-500`}
            src='bild3.webp'
            width={900}
            height={500}
            alt=''
          />
        </div>
        <div
          className={`z-1 block absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            position?.height && 'animate-leftRightService'
          }`}
          style={{
            top: position?.top,
            left: position?.left,
            width: position?.width,
            height: position?.height,
          }}
        >
          <div
            className={`bg-yellow-100 w-full h-full block absolute top-0 left-0 ${
              position?.height && 'animate-upDownService'
            }`}
          />
        </div>
        <div
          className='relative z-2 grid-cols-[213px_213px_213px] gap-8 grid'
          onMouseLeave={() => {
            setPosition({ ...position, top: undefined, left: undefined, width: undefined, height: undefined });
          }}
        >
          <a
            ref={ref1}
            href='/test'
            className='p-8'
            onMouseOver={() => {
              setPosition({
                position: 1,
                top: (ref1.current?.offsetTop || 0) + 48,
                left: ref1.current?.getBoundingClientRect().left,
                width: ref1.current?.getBoundingClientRect().width,
                height: ref1.current?.getBoundingClientRect().height,
              });
            }}
          >
            UI / UX Design
          </a>
          <a
            ref={ref2}
            className='p-8'
            href='/test'
            onMouseOver={() => {
              setPosition({
                position: 2,
                top: (ref2.current?.offsetTop || 0) + 48,
                left: ref2.current?.getBoundingClientRect().left,
                width: ref2.current?.getBoundingClientRect().width,
                height: ref2.current?.getBoundingClientRect().height,
              });
            }}
          >
            Hosting
          </a>
          <a
            ref={ref3}
            className='p-8'
            href='/test'
            onMouseOver={() => {
              setPosition({
                position: 3,
                top: (ref3.current?.offsetTop || 0) + 48,
                left: ref3.current?.getBoundingClientRect().left,
                width: ref3.current?.getBoundingClientRect().width,
                height: ref3.current?.getBoundingClientRect().height,
              });
            }}
          >
            Full Service
          </a>
        </div>
      </div>
    </div>
  );
};
