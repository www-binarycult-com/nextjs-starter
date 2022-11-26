import { ReactNode } from 'react';
import { Headline } from './Headline';

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
    <div className={`${position} pb-10`}>
      <Headline>{children}</Headline>
      {/* <h1 className={`text-4xl ${className}`}>{children}</h1> */}
    </div>
  );
};
