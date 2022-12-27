import { useState } from 'react';
import { useProject } from './ProjectProvider';
import { ProjectItem } from './ProjectItem';
import { ProjectText } from './ProjectText';

const projectListArray = [
  {
    headline: 'IKS Hannover',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, soluta nisi, tempore harum qui corporis
          veniam officiis repellat id voluptatum quas alias minus aliquam. Illum reprehenderit eligendi odio libero
          sapiente!
        </p>
      </>
    ),
    imgSrc: 'iks-hannover.png',
    backgroundColor: '#EE7917',
  },
  {
    headline: 'Vitalist',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, soluta nisi, tempore harum qui corporis
          veniam officiis repellat id voluptatum quas alias minus aliquam. Illum reprehenderit eligendi odio libero
          sapiente!
        </p>
      </>
    ),
    imgSrc: 'vita-list.png',
    backgroundColor: '#D7E6CF',
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
    imgSrc: 'faber.png',
    backgroundColor: '#01072e',
  },
];

export const ProjectList = () => {
  const { state } = useProject();

  return (
    <div id='trigger'>
      <div className='flex  '>
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
          {projectListArray.map(({ headline, content, backgroundColor, imgSrc }, key) => {
            return (
              <ProjectItem
                key={'ProjectItem-' + key}
                imgSrc={imgSrc}
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
