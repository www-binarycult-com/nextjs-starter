import { ReactNode } from 'react';
import classNames from 'classnames';

type HeadlineProps = { children: ReactNode; className?: string; tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' };

export const Headline = ({ children, className, tag = 'h1' }: HeadlineProps) => {
  const component = { tag: tag };
  const classes = classNames(
    "inline relative before:bg-cta before:content-[''] before:w-full before:h-[40%] before:left-4 before:bottom-0 before:z-[-1] before:absolute",
    tag === 'h1' && 'text-4xl',
    tag === 'h2' && 'text-3xl',
    tag === 'h3' && 'text-2xl',
    tag === 'h4' && 'text-xl',
    tag === 'h5' && 'text-lg',
    className
  );

  return (
    <component.tag className={classes}>
      {children}
      <span className='animate-blink'>_</span>
    </component.tag>
  );
};
