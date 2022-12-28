import { FC } from 'react';

export const LinkCTA: FC<React.HTMLProps<HTMLAnchorElement>> = (props) => {
  return (
    <a
      {...props}
      className="inline relative before:bg-cta before:content-[''] before:w-full before:h-[40%] before:bottom-0 before:z-[-1] before:absolute"
    >
      {props.children}

      <span className='animate-blink'>_</span>
    </a>
  );
};
