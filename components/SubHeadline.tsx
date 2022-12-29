import { ReactNode } from 'react';
import classNames from 'classnames';
import { Spacing } from './Spacing';

type HeadlineProps = { children: ReactNode; className?: string; tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' };

export const SubHeadline = ({ children, className, tag = 'h5' }: HeadlineProps) => {
  const component = { tag: tag };
  const classes = classNames(
    '',
    tag === 'h1' && 'text-4xl',
    tag === 'h2' && 'text-3xl',
    tag === 'h3' && 'text-2xl',
    tag === 'h4' && 'text-xl',
    tag === 'h5' && 'text-md',
    className
  );

  return (
    <>
      <Spacing type='subheadline' />
      <component.tag className={classes}>{children}</component.tag>
    </>
  );
};
