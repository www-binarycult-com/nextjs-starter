import { useState } from 'react';
import { ProjectProvider, useProject } from './ProjectProvider';
import { ProjectHeadline } from './ProjectHeadline';
import { ProjectItem } from './ProjectItem';
import { ProjectText } from './ProjectText';

const projectListArray = [
  {
    headline: 'Vodafone',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, soluta nisi, tempore harum qui corporis
          veniam officiis repellat id voluptatum quas alias minus aliquam. Illum reprehenderit eligendi odio libero
          sapiente!
        </p>
      </>
    ),
    imgSrc: 'bild1.webp',
    svgSrc: 'svgbild1.svg',
    backgroundColor: '#1F132C',
  },
  {
    headline: 'Madsack',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, soluta nisi, tempore harum qui corporis
          veniam officiis repellat id voluptatum quas alias minus aliquam. Illum reprehenderit eligendi odio libero
          sapiente!
        </p>
      </>
    ),
    imgSrc: 'bild2.webp',
    svgSrc: 'svgbild2.svg',
    backgroundColor: '#161616',
  },
  {
    headline: 'Faber Ernährungsberatung',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, soluta nisi, tempore harum qui corporis
          veniam officiis repellat id voluptatum quas alias minus aliquam. Illum reprehenderit eligendi odio libero
          sapiente!
        </p>
      </>
    ),
    imgSrc: 'bild3.webp',
    svgSrc: 'svgbild3.svg',
    backgroundColor: '#00449C',
  },
];

export const ProjectList = () => {
  const { state } = useProject();

  return (
    <div id='trigger'>
      <div className='flex'>
        <div id='test' className='hidden md:w-1/2 p-10 pb-[50vh] md:block'>
          <div className='sticky top-10'>
            <div className='relative pb-10'>
              {projectListArray.map(({ content, headline }, key) => {
                return (
                  <ProjectText headline={headline} position={key + 1} key={'projectText' + key}>
                    {content}
                  </ProjectText>
                );
              })}
            </div>
          </div>
        </div>
        <div
          id='right'
          className='w-full md:w-1/2 transition-all duration-300 ease-in '
          style={{ background: state.color }}
        >
          {projectListArray.map(({ headline, content, backgroundColor, imgSrc, svgSrc }, key) => {
            return (
              <ProjectItem
                key={'ProjectItem-' + key}
                imgSrc={imgSrc}
                svgSrc={svgSrc}
                backgroundColor={backgroundColor}
                position={key + 1}
                headline={headline}
              >
                {content}
              </ProjectItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};
