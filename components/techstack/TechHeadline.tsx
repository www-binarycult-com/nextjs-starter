import { ForwardedRef, forwardRef, HTMLProps, ReactNode, useEffect, useRef, useState } from 'react';

type TechHeadline = { children: ReactNode } & HTMLProps<HTMLAnchorElement>;

export const TechHeadline = forwardRef(
  ({ children, onMouseEnter }: TechHeadline, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <a onMouseEnter={onMouseEnter} ref={ref} className='p-8 border-4 border-black w-40'>
        {children}
      </a>
    );
  }
);

TechHeadline.displayName = 'TechHeadline';
