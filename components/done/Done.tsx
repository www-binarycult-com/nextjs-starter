import { useInView } from 'react-intersection-observer';
import { useSpring, animated, SpringValue, Interpolation } from 'react-spring';
import { easeBounceOut } from 'd3-ease';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

const svgConfig = { easing: easeBounceOut, duration: 2500 };
const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;

export const Done = () => {
  const n = 100;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  const projects = useSpring({
    stroke: inView ? 20 : 0,
    otherStroke: inView ? '100, 100' : '0,100',
    delay: 500,
    config: {
      mass: 1,
      tension: 280,
      friction: 120,
    },
  });

  const clients = useSpring({
    stroke: inView ? 12 : 0,
    otherStroke: inView ? '100, 100' : '0,100',
    delay: 500,
    config: {
      mass: 1,
      tension: 280,
      friction: 120,
    },
  });

  const spotify = useSpring({
    stroke: inView ? 200 : 0,
    otherStroke: inView ? '100, 100' : '0,100',
    delay: 500,
    config: {
      mass: 1,
      tension: 280,
      friction: 120,
    },
  });

  const props3 = useSpring({
    stroke: inView ? 99 : 0,
    otherStroke: inView ? '100, 100' : '0,100',
    delay: 500,
    config: {
      mass: 1,
      tension: 280,
      friction: 120,
    },
  });

  return (
    <div className='bg-cta '>
      <div className='p-10 container mx-auto'>
        <Headline tag='h2'>Unsere Erfolge</Headline>
        <SubHeadline className='max-w-[45em]'>
          Der wichtigste und wertvollste Erfolg sind unsere zufriedenen Kunden. Egal ob es eine neue Webseite oder eine
          Webanwendung für den Betrieb ist. Bei uns sind Sie in den richtigen Händen
        </SubHeadline>
        <Spacing type='content' />
        <div
          ref={ref}
          className={` flex w-full flex-wrap justify-center md:justify-between  opacity-0 ${
            inView ? 'animate-fadeIn' : ''
          }`}
        >
          <div className='mb-10 md:mb-0'>
            <Wheel
              title='Abgeschlossene Projekte'
              stroke={projects.stroke.interpolate((x) => Math.round(x))}
              otherStroke={projects.otherStroke}
            />
          </div>
          <div className='mb-10 md:mb-0'>
            <Wheel
              title='Zufriedene Kunden'
              stroke={clients.stroke.interpolate((x) => Math.round(x))}
              otherStroke={clients.otherStroke}
            />
          </div>
          <div className='mb-10 md:mb-0'>
            <Wheel
              title='Getrunkene Kaffee'
              stroke={props3.stroke.interpolate((x) => Math.round(x))}
              otherStroke={props3.otherStroke}
            />
          </div>
          <div className=''>
            <Wheel
              title='Spotify abgespielt'
              stroke={spotify.stroke.interpolate((x) => Math.round(x))}
              otherStroke={spotify.otherStroke}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type WheelType = {
  title?: string;
  stroke?: Interpolation<number, number>;
  otherStroke?: SpringValue<string>;
};

const Wheel = ({ title, stroke, otherStroke }: WheelType) => (
  <div className='flex flex-col items-center flex-wrap'>
    <svg viewBox='0 0 36 36' style={{ textAnchor: 'middle' }} width='100'>
      <path style={{ fill: 'none' }} className='stroke-1' d={circlePath} />
      <animated.path
        style={{ fill: 'none' }}
        className=' stroke-[1.5]] stroke-[black]'
        strokeDasharray={otherStroke}
        d={circlePath}
      />
      <animated.text x='18' y='23'>
        {stroke}
      </animated.text>{' '}
    </svg>
    <h3 className='text-xl mt-4'>{title}</h3>
  </div>
);
