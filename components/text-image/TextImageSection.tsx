import classNames from 'classnames';
import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

interface ITextImageSection {
  reversedOrder?: boolean;
  heading?: string;
  subheading?: string;
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  className?: string;
  children: ReactNode;
}

export const TextImageSection = ({
  reversedOrder,
  children,
  heading,
  subheading = ' ',
  image,
  className,
}: ITextImageSection) => {
  const flex = classNames(
    'flex gap-8',
    reversedOrder ? 'md:flex-row-reverse flex-col-reverse' : 'flex-col md:flex-row'
  );
  const textWidth = classNames(image && 'md:w-1/2 w-full');
  const container = classNames(className, 'p-10 container m-auto');

  return (
    <div className={container}>
      {heading && <Headline tag='h2'>{heading}</Headline>}
      {subheading && <SubHeadline>{subheading}</SubHeadline>}
      <Spacing type='content' />
      <div className={flex}>
        <div className={textWidth}>{children}</div>
        {image && (
          <div className='md:w-1/2 w-full'>
            <img className='m-auto' {...image} />
          </div>
        )}
      </div>
    </div>
  );
};
