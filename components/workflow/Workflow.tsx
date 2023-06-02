import classNames from 'classnames';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

interface ITextImageSection {
  className?: string;
}

export const Workflow = ({ className }: ITextImageSection) => {
  const container = classNames(className, 'p-10 container m-auto overflow-hidden');

  return (
    <div className={container}>
      <Headline tag='h2'>Our Workflow</Headline>
      <SubHeadline>Unsere 4-Stufen-Methode für Ihr Projekt.</SubHeadline>
      <Spacing type='content' />
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          position='right'
          date='Über unsere kostenlose Anfrage werden wir auf Sie aufmerksam. Innerhalb weniger Tage nehmen wir mit Ihnen
          Kontakt auf und Sie erhalten ein unverbindliches erstes Angebot.'
          contentStyle={{ background: 'transparent', color: 'black', borderRadius: '0', boxShadow: 'none', padding: 0 }}
          iconStyle={{
            background: 'black',
            color: 'white',
            borderRadius: '0',
            boxShadow: 'none',
            borderBlockColor: ' black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={<h3 className='text-3xl'>01</h3>}
        >
          <div className='flex items-center flex-col justify-start'>
            <div>
              <Headline hasSpacing={false} tag='h2'>
                Erstberatung
              </Headline>
            </div>
            <div className='mt-4'>
              <img width={200} {...{ src: './workflow/video.svg' }} />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='left'
          contentStyle={{ background: 'transparent', color: 'black', borderRadius: '0', boxShadow: 'none', padding: 0 }}
          iconStyle={{
            background: 'black',
            color: 'white',
            borderRadius: '0',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={<h3 className='text-3xl'>02</h3>}
          date='Mit Ihnen gemeinsam entwickeln wir individuelle Lösungen und digitale Strategien. Unsere Grafikspezialisten
          erschaffen Ihre digitale Visitenkarte und erarbeiten den Grundaufbau Ihrer Website.'
        >
          <div className='flex items-center flex-col justify-start'>
            <div>
              <Headline tag='h2'>Strategie & Planung</Headline>
            </div>
            <div className='mt-4'>
              <img width={200} {...{ src: './workflow/meeting.svg' }} />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<h3 className='text-3xl'>03</h3>}
          contentStyle={{
            background: 'transparent',
            color: 'black',
            borderRadius: '0',
            boxShadow: 'none',
            padding: 0,
          }}
          iconStyle={{
            background: 'black',
            color: 'white',
            borderRadius: '0',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          position='right'
          date='Innerhalb kürzester Zeit designen unsere Experten Ihre Wunschwebsite. Dabei binden wir Sie anhand kurzer
          Abstimmungswege in den Entwicklungsprozess ein und schaffen Transparenz.'
        >
          <div className='flex items-center flex-col justify-start'>
            <div>
              <Headline tag='h2'>Umsetzung</Headline>
            </div>
            <div className='mt-4'>
              <img width={200} {...{ src: './workflow/app.svg' }} />
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
          iconStyle={{
            background: 'black',
            color: 'white',
            borderRadius: '0',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={<h3 className='text-3xl'>04</h3>}
          position='left'
          date='Nach erfolgreichem Erstellen Ihrer Website bieten wir Ihnen ein individuell angepasstes Marketingprogramm
          für Ihr Unternehmen an.'
        >
          <div className='flex items-center flex-col justify-start'>
            <div>
              <Headline tag='h2'>Betreuung & Optimierung</Headline>
            </div>
            <div className='mt-4'>
              <img width={200} {...{ src: './workflow/launch.svg' }} />
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
