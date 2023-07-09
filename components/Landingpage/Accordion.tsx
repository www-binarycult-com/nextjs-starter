import { useRef, useState } from 'react';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

const faqs = [
  {
    id: 1,
    header: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: 'Where does it come from?',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: 'Why do we use it?',
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: 'Where can I get some?',
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];

const AccordionItem = (props: any) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className='border-b-2 border-solid border-black'>
      <div>
        <div className={`flex items-start cursor-pointer justify-between py-4 pr-4 `} onClick={() => handleToggle(id)}>
          <h5 className=''>{header}</h5>
          <img
            className={`transition-transform ${active === id ? 'rotate-180' : ''}`}
            width={20}
            src='landingpage/chevron-up.svg'
          />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`relative h-0 overflow-hidden transition-height duration-500 ease ${active === id ? 'h-auto' : ''}`}
        style={active === id ? { height: contentEl?.current?.scrollHeight } : { height: '0px' }}
      >
        <div className='m-0 min-h-[15px]'>
          <p className='p-4'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export const Accordion = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div className='p-10 container m-auto'>
      <Headline tag='h2'>FAQ</Headline>
      <SubHeadline>Ihre Fragen bleiben nicht unbeantwortet</SubHeadline>
      <Spacing type='content' />
      {faqs.map((faq, index) => {
        return <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />;
      })}
    </div>
  );
};
