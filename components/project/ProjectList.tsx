import { useProject } from './ProjectProvider';
import { ProjectItem } from './ProjectItem';
import { ProjectText } from './ProjectText';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { Spacing } from '../Spacing';

const projectListArray = [
  {
    headline: 'IKS Hannover',
    content: (
      <p>
        IKS Hannover ist ein in Hannover ansässiger Pflegedienst. Ziel dieses Projektes war es, mit einem
        benutzerfreundlichem CMS, die maximale Performance einer Webseite zu erreichen. Hierfür wurden Technologien wie
        Gatsby(Static Site Generator), Wordpress CMS, React.js und Serveless Functions genutzt. Neben der Erstellung der
        Webseite, so wie einem eigenen Jobportal wurde Suchmaschinenoptimierung betrieben, um eine möglichst große
        Sichtbarkeit der Webseite zu erreichen.{' '}
      </p>
    ),
    imgSrc: 'iks-hannover.png',
    backgroundColor: 'black',
  },
  {
    headline: 'Vitalist',
    content: (
      <p>
        Vitalist ist ein in Hannover ansässiges Yoga Studio. Ziel dieses Projektes war es, mit einem
        benutzerfreundlichem CMS, die maximale Performance einer Webseite zu erreichen. Hierfür wurden Technologien wie
        Gatsby(Static Site Generator), Wordpress CMS, React.js und Serveless Functions genutzt. Neben der Erstellung der
        Webseite, so wie einem online Kursplan + online Kursbuchungssystem wurde Suchmaschinenoptimierung betrieben, um
        eine möglichst große Sichtbarkeit der Webseite zu erreichen.
      </p>
    ),
    imgSrc: 'vita-list.png',
    backgroundColor: '#9FA365',
  },
  {
    headline: 'Faber Ernährungsberatung',
    content: (
      <p>
        Ernährungsberatung Faber ist eine in Hannover - Langenhagen ansässige Ernährungsberatung. Ziel dieses Projektes
        war es, mit minmalen Ertrag, die maximale Performance einer Webseite zu erreichen. Hierfür wurden Technologien
        wie Gatsby(Static Site Generator), Netlify (CMS und Host), React.js und Serveless Functions genutzt. Neben der
        Erstellung der Webseite wurde Suchmaschinenoptimierung betrieben, um eine möglichst große Sichtbarkeit der
        Webseite zu erreichen.
      </p>
    ),
    imgSrc: 'faber.png',
    backgroundColor: '#01072e',
  },
];

export const ProjectList = () => {
  const { state } = useProject();

  return (
    <div id='trigger'>
      <div className='flex md:flex-row flex-col container mx-auto'>
        <div id='test' className='hidden md:w-1/2 p-10 pb-[50vh] md:block'>
          <div className='sticky top-10'>
            <div className='relative'>
              <Headline tag='h2'>Unsere Projekte</Headline>
              <SubHeadline>Von Wordpress bis hinzu einer indivudellen Softwarelösung</SubHeadline>
              <Spacing type='content' />
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
        <div className='md:hidden px-10'>
          <Headline tag='h2'>Unsere Projekte</Headline>
          <SubHeadline>Von Wordpress bis hinzu einer indivudellen Softwarelösung</SubHeadline>
          <Spacing type='content' />
        </div>
        <div
          id='right'
          className='w-full md:w-1/2 transition-all duration-300 ease-in bg-black'
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
