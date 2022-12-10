import classNames from 'classnames';
import { DetailedHTMLProps, HTMLProps, ImgHTMLAttributes } from 'react';
import { Headline } from '../Headline';

interface ITextImageSection {
  reversedOrder?: boolean;
  heading?: string;
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  text: string;
  className?: string;
}

export const TextImageSection = ({ reversedOrder, heading, image, text, className }: ITextImageSection) => {
  const flex = classNames('flex', reversedOrder ? 'md:flex-row-reverse flex-col-reverse' : 'flex-col md:flex-row');
  const textWidth = classNames(image && 'md:w-1/2 w-full');
  const container = classNames(className, 'p-10');

  return (
    <div className={container}>
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
