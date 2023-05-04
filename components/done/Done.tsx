import { useInView } from 'react-intersection-observer';
import { useSpring, animated, SpringValue, Interpolation } from 'react-spring';
import { easeBounceOut } from 'd3-ease';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

export const Done = () => {
  const n = 100;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div>
      <div className='p-10 container mx-auto'>
        <Headline tag='h2'>Fun Facts</Headline>
        <SubHeadline className='max-w-[45em]'>
          Der wichtigste und wertvollste Erfolg sind unsere zufriedenen Kunden. Egal ob es eine neue Webseite oder eine
          Webanwendung für den Betrieb ist. Bei uns sind Sie in den richtigen Händen.
        </SubHeadline>
        <Spacing type='content' />
        <div ref={ref} className={`flex w-full flex-wrap justify-center md:justify-between`}>
          <div className={`mb-10 md:mb-0 flex opacity-0 ${inView ? 'animate-fadePop' : ''} `}>
            <img className='w-24 pr-6' src='./fun/fred.png' />
            <div>
              <h5 className='text-3xl flex justify-center'>4</h5>
              <p>Jahre auf dem Markt</p>
            </div>
          </div>
          <div className={`mb-10 md:mb-0 flex opacity-0 ${inView ? 'animate-fadePop2' : ''} `}>
            <img className='w-24 pr-6' src='./fun/mitarbeiter.png' />
            <div>
              <h5 className='text-3xl flex justify-center'>5</h5>
              <p>aktive Mitarbeiter</p>
            </div>
          </div>
          <div className={`mb-10 md:mb-0 flex opacity-0 ${inView ? 'animate-fadePop3' : ''} `}>
            <img className='w-24 pr-6' src='./fun/done.png' />
            <div>
              <h5 className='text-3xl flex justify-center'>16+</h5>
              <p>fertige Projekte</p>
            </div>
          </div>
          <div className={`mb-10 md:mb-0 flex opacity-0 ${inView ? 'animate-fadePop4' : ''} `}>
            <img className='w-24 pr-6' src='./fun/coffee.png' />
            <div>
              <h5 className='text-3xl flex justify-center'>330</h5>
              <p>Becher Kaffee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
