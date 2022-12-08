import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Headline } from '../Headline';
import { ServicesBox } from './ServiceBox';
import { ServicesItem } from './ServicesItem';

export const ServicesAlt = () => {
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam voluptatibus exercitationem
        reiciendis sed ad nostrum? Error, fugit necessitatibus? Exercitationem vero enim adipisci et ipsa veniam
        excepturi, aliquam quis praesentium!
      </p>
      <span>___</span>
      <div className='box-border block bg-cover relative w-full h-[500px] p-12 bg-yellow-200'>
        <ServicesItem href='' hoveredPosition={position?.position} position={1} title='Full Service'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deserunt nemo velit, sint debitis
          perferendis sequi voluptatem praesentium voluptatum consectetur reprehenderit, dolorem ratione facilis
          dignissimos quam, totam et ex voluptates?
        </ServicesItem>
        <ServicesItem href='' hoveredPosition={position?.position} position={2} title='UI/UX Design'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deserunt nemo velit, sint debitis
          perferendis sequi voluptatem praesentium voluptatum consectetur reprehenderit, dolorem ratione facilis
          dignissimos quam, totam et ex voluptates?
        </ServicesItem>
        <ServicesItem href='' hoveredPosition={position?.position} position={3} title='Hosting'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deserunt nemo velit, sint debitis
          perferendis sequi voluptatem praesentium voluptatum consectetur reprehenderit, dolorem ratione facilis
          dignissimos quam, totam et ex voluptates?
        </ServicesItem>
        <ServicesBox position={position} />
        <div
          className='relative z-2 grid-cols-[213px_213px_213px] gap-8 grid'
          onClick={() => {
            setPosition({ ...position, top: undefined, left: undefined, width: undefined, height: undefined });
          }}
        >
          <a
            ref={ref1}
            className='p-8'
            onMouseEnter={() => {
              setPosition({
                position: 1,
                top: (ref1.current?.offsetTop || 0) + 48,
                left: ref1.current?.getBoundingClientRect().left,
                width: ref1.current?.getBoundingClientRect().width,
                height: ref1.current?.getBoundingClientRect().height,
              });
            }}
          >
            Full Service
          </a>
          <a
            ref={ref2}
            className='p-8'
            onMouseEnter={() => {
              setPosition({
                position: 2,
                top: (ref2.current?.offsetTop || 0) + 48,
                left: ref2.current?.getBoundingClientRect().left,
                width: ref2.current?.getBoundingClientRect().width,
                height: ref2.current?.getBoundingClientRect().height,
              });
            }}
          >
            UI / UX Design
          </a>
          <a
            ref={ref3}
            className='p-8'
            onMouseEnter={() => {
              setPosition({
                position: 3,
                top: (ref3.current?.offsetTop || 0) + 48,
                left: ref3.current?.getBoundingClientRect().left,
                width: ref3.current?.getBoundingClientRect().width,
                height: ref3.current?.getBoundingClientRect().height,
              });
            }}
          >
            Hosting
          </a>
        </div>
      </div>
      <div className=''></div>
    </div>
  );
};
