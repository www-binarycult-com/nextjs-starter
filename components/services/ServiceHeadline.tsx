import { ForwardedRef, forwardRef, HTMLProps, ReactNode, useEffect, useRef, useState } from 'react';

type ServiceHeadline = { children: ReactNode } & HTMLProps<HTMLAnchorElement>;

export const ServiceHeadline = forwardRef(
  ({ children, onMouseEnter }: ServiceHeadline, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <a onMouseEnter={onMouseEnter} ref={ref} className='p-8 border-black border-4'>
        {children}
      </a>
    );
  }
);

ServiceHeadline.displayName = 'ServiceHeadline';
