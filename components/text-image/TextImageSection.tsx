import classNames from 'classnames';
import { DetailedHTMLProps, HTMLProps, ImgHTMLAttributes } from 'react';
import { Headline } from '../Headline';

interface ITextImageSection {
  reversedOrder?: boolean;
  heading?: string;
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  text: string;
}

export const TextImageSection = ({ reversedOrder, heading, image, text }: ITextImageSection) => {
  const flex = classNames('flex', reversedOrder ? 'md:flex-row-reverse flex-col-reverse' : 'flex-col md:flex-row');
  const textWidth = classNames(image && 'md:w-1/2 w-full');
  return (
    <div className='p-10 '>
      {heading && (
        <div className='pb-10'>
          <Headline>{heading}</Headline>
        </div>
      )}
      <div className={flex}>
        <div className={textWidth}>{text}</div>
        {image && (
          <div className='md:w-1/2 w-full'>
            <img className='m-auto' {...image} />
          </div>
        )}
      </div>
    </div>
  );
};
