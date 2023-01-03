import classNames from 'classnames';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Headline } from '../Headline';
import { Call } from '../icons/Call';
import { Notebook } from '../icons/Notebook';
import { Optimization } from '../icons/Optimization';
import { Strategie } from '../icons/Strategie';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

interface ITextImageSection {
  className?: string;
}

export const Workflow = ({ className }: ITextImageSection) => {
  const container = classNames(className, 'p-10 container m-auto');

  return (
    <div className={container}>
      <Headline>Our Workflow</Headline>
      <SubHeadline>Unsere 4-Stufen-Methode für Ihr Projekt</SubHeadline>
      <Spacing type='content' />
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          position='right'
          date='Über unsere kostenlose Anfrage werden wir auf Sie aufmerksam. Innerhalb weniger Tage nehmen wir mit Ihnen
          Kontakt auf und Sie erhalten ein unverbindliches erstes Angebot.'
          contentStyle={{ background: 'transparent', color: 'black', borderRadius: '0', boxShadow: 'none', padding: 0 }}
          iconStyle={{
            background: 'black',
            color: '#ff0000',
            borderRadius: '0',
            boxShadow: 'none',
            borderBlockColor: ' black',
          }}
        >
          <div className='flex items-center flex-col justify-start'>
            <Headline hasSpacing={false} tag='h2'>
              Erstberatung
            </Headline>
            <div className='mt-4'>
              <Call />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='left'
          contentStyle={{ background: 'transparent', color: 'black', borderRadius: '0', boxShadow: 'none', padding: 0 }}
          iconStyle={{ background: 'black', color: '#ff0000', borderRadius: '0', boxShadow: 'none' }}
          date='Mit Ihnen gemeinsam entwickeln wir individuelle Lösungen und digitale Strategien. Unsere Grafikspezialisten
          erschaffen Ihre digitale Visitenkarte und erarbeiten den Grundaufbau Ihrer Website.'
        >
          <div className='flex items-center flex-col justify-start'>
            <Headline tag='h2'>Strategie & Planung</Headline>
            <div className='mt-4'>
              <Strategie />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'transparent', color: 'black', borderRadius: '0', boxShadow: 'none', padding: 0 }}
          iconStyle={{ background: 'black', color: '#ff0000', borderRadius: '0', boxShadow: 'none' }}
          position='right'
          date='Innerhalb kürzester Zeit designen unsere Experten Ihre Wunschwebsite. Dabei binden wir Sie anhand kurzer
          Abstimmungswege in den Entwicklungsprozess ein und schaffen Transparenz.'
        >
          <div className='flex items-center flex-col justify-start'>
            <Headline tag='h2'>Umsetzung</Headline>
            <div className='mt-4'>
              <Notebook />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: 'transparent',
            color: 'black',
            borderRadius: '0',
            boxShadow: 'none',
            padding: 0,
          }}
          iconStyle={{ background: 'black', color: '#ff0000', borderRadius: '0', boxShadow: 'none' }}
          position='left'
          date='Nach erfolgreichem Erstellen Ihrer Website bieten wir Ihnen ein individuell angepasstes Marketingprogramm
          für Ihr Unternehmen an.'
        >
          <div className='flex items-center flex-col justify-start'>
            <Headline tag='h2'>Betreuung & Optimierung</Headline>
            <div className='mt-4'>
              <Optimization />
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
