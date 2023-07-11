import classNames from 'classnames';
import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

interface ITextImageItem {
  headline: string;
  image: string;
  text: string;
  list: string[];
  reversedOrder?: boolean;
}

interface ITextImageList {
  heading?: string;
  subheading?: string;
  id?: string;
  className?: string;
  items: ITextImageItem[];
}

export const TextImageItem = ({ reversedOrder, headline, text, list, image }: ITextImageItem) => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.3,
  });

  const flex = classNames(
    `opacity-0 ${inView ? 'animate-fadeInRight' : ''}`,
    'flex gap-8',
    reversedOrder ? 'md:flex-row-reverse flex-col' : 'flex-col md:flex-row'
  );
  const textWidth = classNames(image && 'md:w-1/2 w-full', `opacity-0 ${inView ? 'animate-fadeInLeft' : ''}`);
  const img = classNames(`opacity-0 ${inView ? 'animate-fadeInRight' : ''}`, 'm-auto');

  return (
    <div ref={ref} className={flex}>
      <div className={textWidth}>
        {' '}
        {headline && <Headline tag='h4'>{headline}</Headline>}
        <Spacing type='subheadline' />
        <p>{text}</p>
        <ul>
          {list.map((element, key) => (
            <li key={key} className='flex gap-2 pt-2'>
              <span>
                <img width={16} src='landingpage/check.svg' />
              </span>
              {element}
            </li>
          ))}
        </ul>
      </div>
      {image && (
        <div className='md:w-1/2 w-full flex p-0 xl:px-8 flex justify-center'>
          <img src={image} width={361} />
        </div>
      )}
    </div>
  );
};

export const TextImageList = ({ heading, subheading = ' ', items, id, className }: ITextImageList) => {
  const container = classNames(className, 'p-10 container m-auto');

  return (
    <div className={container} id={id}>
      <div>
        {heading && <Headline tag='h2'>{heading}</Headline>}
        {subheading && <SubHeadline>{subheading}</SubHeadline>}
      </div>
      <Spacing type='content' />
      {items.map((item, key) => (
        <>
          <TextImageItem
            reversedOrder={key % 2 !== 0}
            headline={item.headline}
            list={item.list}
            image={item.image}
            text={item.text}
            key={key}
          />
          <Spacing type='content' />
        </>
      ))}
    </div>
  );
};
