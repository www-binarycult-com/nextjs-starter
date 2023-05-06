import { ReactNode } from 'react';
import { Headline } from '../Headline';

export const ProjectHeadline = ({
  children,
  position,
  className,
}: {
  children: ReactNode;
  position: 'relative' | 'position';
  className?: string;
}) => {
  return (
    <div className={`${position} pb-5`}>
      <Headline hasSpacing={false} tag='h3'>
        {children}
      </Headline>
    </div>
  );
};
