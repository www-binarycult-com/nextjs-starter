import { useRef, useState } from 'react';
import { Headline } from '../Headline';
import { ServicesBox } from './ServiceBox';
import { ServicesItem } from './ServicesItem';
import { ServiceHeadline } from './ServiceHeadline';

export const ServicesAlt = () => {
  const divElement = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const ref4 = useRef<HTMLAnchorElement>(null);
  const ref5 = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState<{
    position?: number;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
  } | null>(null);

  return (
    <div>
      <div className='box-border block bg-cover relative w-full px-4 md:px-12 py-12 bg-yellow-200 z-10'>
        <div className='pb-4' ref={divElement}>
          <Headline className='z-10' tag='h2'>
            Our Services
          </Headline>
        </div>
        <ServicesBox position={position} />
        <div
          className='relative z-2 gap-8 flex flex-wrap'
          onClick={() => {
            setPosition({ ...position, top: undefined, left: undefined, width: undefined, height: undefined });
          }}
        >
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 1,
                top: (ref1.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                left: ref1.current?.getBoundingClientRect().left,
                width: ref1.current?.getBoundingClientRect().width,
                height: ref1.current?.getBoundingClientRect().height,
              });
            }}
            ref={ref1}
          >
            Full Service
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 2,
                top: (ref2.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                left: ref2.current?.getBoundingClientRect().left,
                width: ref2.current?.getBoundingClientRect().width,
                height: ref2.current?.getBoundingClientRect().height,
              });
            }}
            ref={ref2}
          >
            UI / UX Design
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 3,
                top: (ref3.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                left: ref3.current?.getBoundingClientRect().left,
                width: ref3.current?.getBoundingClientRect().width,
                height: ref3.current?.getBoundingClientRect().height,
              });
            }}
            ref={ref3}
          >
            Hosting
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 4,
                top: (ref4.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                left: ref4.current?.getBoundingClientRect().left,
                width: ref4.current?.getBoundingClientRect().width,
                height: ref4.current?.getBoundingClientRect().height,
              });
            }}
            ref={ref4}
          >
            Technical SEO
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 5,
                top: (ref5.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                left: ref5.current?.getBoundingClientRect().left,
                width: ref5.current?.getBoundingClientRect().width,
                height: ref5.current?.getBoundingClientRect().height,
              });
            }}
            ref={ref5}
          >
            Web Development
          </ServiceHeadline>
        </div>
        <div className='bg-yellow-200 pt-8'>
          <ServicesItem href='' hoveredPosition={position?.position} position={1} title='Full Service'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deserunt nemo velit, sint debitis
            perferendis sequi voluptatem praesentium voluptatum consectetur reprehenderit, dolorem ratione facilis
            dignissimos quam, totam et ex voluptates?
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={2} title='UI / UX Design'>
            Creating visual design concepts and user experiences which captivate the audience from the loading screen.
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={3} title='Hosting'>
            No matter the project or client, our compute options give you the flexibility an agency needs to handle
            different client requests. Whether you are looking to host hundreds of small websites or build a complicated
            application, we have you covered at a lower cost than other cloud providers.
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={4} title='Technical SEO'>
            Comprehensive analysis of your homepage. Optimization for local keywords. Acceleration of page load time,
            text and image optimization for TOP ranking on Google.
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={5} title='Web Development'>
            Designing complex and scalable web applications that can seamlessly handle the load of an enterprise-grade
            business while keeping data securely guarded.
          </ServicesItem>
        </div>
      </div>
    </div>
  );
};
