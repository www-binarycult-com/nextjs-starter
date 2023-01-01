/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { ProjectHeadline } from './ProjectHeadline';
import { useProject } from './ProjectProvider';

type ProjectTextProps = { position: number; children: ReactNode; headline: string };

export const ProjectText = ({ position, children, headline }: ProjectTextProps) => {
  const { state } = useProject();

  return (
    <div
      className={`transition-all ease-linear absolute  ${
        state.position === position
          ? 'opacity-100 translate-y-0 duration-500 '
          : state.prevPosition > state.position
          ? 'opacity-0 translate-x-10 duration-100'
          : 'opacity-0 -translate-x-10 duration-100'
      } ${state.position === position ? 'visible' : 'invisible'}`}
    >
      <ProjectHeadline position='relative'>{headline}</ProjectHeadline>
      {state.position && children}
    </div>
  );
};
