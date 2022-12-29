import { ReactNode } from 'react';
import classNames from 'classnames';
import { Spacing } from './Spacing';

type HeadlineProps = { children: ReactNode; className?: string; tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' };

export const SubHeadline = ({ children, className, tag = 'h5' }: HeadlineProps) => {
  const component = { tag: tag };
  const classes = classNames('text-sm', className);

  return (
    <>
      <Spacing type='subheadline' />
      <component.tag className={classes}>{children}</component.tag>
    </>
  );
};
