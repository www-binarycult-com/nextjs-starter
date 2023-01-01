import { ForwardedRef, forwardRef, HTMLProps, ReactNode } from 'react';

type ServiceHeadline = { children: ReactNode; position?: boolean } & HTMLProps<HTMLAnchorElement>;

export const ServiceHeadline = forwardRef(
  ({ children, onMouseEnter, position }: ServiceHeadline, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <a
        onMouseEnter={onMouseEnter}
        ref={ref}
        className={`p-6 border-black border-4 transition-all duration-500 ${position ? 'bg-white' : 'bg-transparent'}`}
      >
        {children}
      </a>
    );
  }
);

ServiceHeadline.displayName = 'ServiceHeadline';
