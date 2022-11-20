import { ReactNode } from 'react';

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
      <h1 className={`text-4xl ${className}`}>{children}</h1>
    </div>
  );
};
