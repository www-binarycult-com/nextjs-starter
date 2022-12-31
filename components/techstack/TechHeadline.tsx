import { ForwardedRef, forwardRef, HTMLProps, ReactNode, useEffect, useRef, useState } from 'react';

type TechHeadline = { children: ReactNode; position?: boolean } & HTMLProps<HTMLAnchorElement>;

export const TechHeadline = forwardRef(
  ({ children, onMouseEnter, position }: TechHeadline, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <a
        onMouseEnter={onMouseEnter}
        ref={ref}
        className={`p-8 border-4 border-black w-40 flex justify-center items-center transition-all duration-500 ${
          position ? 'bg-white' : 'bg-transparent'
        }`}
      >
        {children}
      </a>
    );
  }
);

TechHeadline.displayName = 'TechHeadline';
