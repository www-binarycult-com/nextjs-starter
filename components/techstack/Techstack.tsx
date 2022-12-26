import { useRef, useState } from 'react';
import { Headline } from '../Headline';
import { TechBox } from './TechBox';
import { TechItem } from './TechItem';
import { TechHeadline } from './TechHeadline';

type TechStackTypes = {
  src: string;
  title: string;
}[];

const frontendStack: TechStackTypes = [
  { src: 'frontend/react.svg', title: 'React' },
  { src: 'frontend/html.svg', title: 'HTML' },
  { src: 'frontend/tailwindcss.svg', title: 'Tailwind CSS' },
  { src: 'frontend/typescript.svg', title: 'Typescript' },
  { src: 'frontend/javascript.svg', title: 'Javascript' },
  { src: 'frontend/wordpress.svg', title: 'Wordpress' },
  { src: 'frontend/gatsby.svg', title: 'Gatsby' },
  { src: 'frontend/nextjs.svg', title: 'NextJS' },
  { src: 'more.svg', title: 'More' },
];

const backendStack: TechStackTypes = [
  { src: 'backend/go.svg', title: 'React' },
  { src: 'backend/java.svg', title: 'HTML' },
  { src: 'backend/nodejs.svg', title: 'NodeJS' },
  { src: 'backend/php.svg', title: 'Typescript' },
  { src: 'more.svg', title: 'More' },
];

const mobileStack: TechStackTypes = [
  { src: 'mobile/flutter.svg', title: 'Flutter' },
  { src: 'mobile/react-native.svg', title: 'React Native' },
  { src: 'more.svg', title: 'More' },
];

const devOpsStack: TechStackTypes = [
  { src: 'devOps/aws.svg', title: 'Amazon Web Services' },
  { src: 'devOps/azure.svg', title: 'Microsoft Azure' },
  { src: 'devOps/docker.svg', title: 'Docker' },
  { src: 'devOps/kubernetes.svg', title: 'Kubernetes' },
  { src: 'more.svg', title: 'More' },
];

export const TechStack = () => {
  const divElement = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const ref4 = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState<{
    position?: number;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
  } | null>(null);

  return (
    <div>
      <div className='box-border bg-white block bg-cover relative w-full px-4 md:px-12 py-12 bg-yellow-200 z-10  '>
        <div className='pb-16' ref={divElement}>
          <Headline className='z-10' tag='h2'>
            Our Techstack
          </Headline>
        </div>
        <div className='block md:flex'>
          <TechBox position={position} />
          <div
            className='relative z-2 gap-8 flex flex-wrap md:flex-col'
            onClick={() => {
              setPosition({ ...position, top: undefined, left: undefined, width: undefined, height: undefined });
            }}
          >
            <TechHeadline
              onMouseEnter={() => {
                setPosition({
                  position: 1,
                  top: (ref1.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                  left: ref1.current?.getBoundingClientRect().left,
                  width: ref1.current?.getBoundingClientRect().width,
                  height: ref1.current?.getBoundingClientRect().height,
                });
              }}
              ref={ref1}
            >
              Frontend
            </TechHeadline>
            <TechHeadline
              onMouseEnter={() => {
                setPosition({
                  position: 2,
                  top: (ref2.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                  left: ref2.current?.getBoundingClientRect().left,
                  width: ref2.current?.getBoundingClientRect().width,
                  height: ref2.current?.getBoundingClientRect().height,
                });
              }}
              ref={ref2}
            >
              Backend
            </TechHeadline>
            <TechHeadline
              onMouseEnter={() => {
                setPosition({
                  position: 3,
                  top: (ref3.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                  left: ref3.current?.getBoundingClientRect().left,
                  width: ref3.current?.getBoundingClientRect().width,
                  height: ref3.current?.getBoundingClientRect().height,
                });
              }}
              ref={ref3}
            >
              Mobile
            </TechHeadline>
            <TechHeadline
              onMouseEnter={() => {
                setPosition({
                  position: 4,
                  top: (ref4.current?.offsetTop || 0) + 48 + (divElement.current?.clientHeight || 0),
                  left: ref4.current?.getBoundingClientRect().left,
                  width: ref4.current?.getBoundingClientRect().width,
                  height: ref4.current?.getBoundingClientRect().height,
                });
              }}
              ref={ref4}
            >
              Dev Ops
            </TechHeadline>
          </div>
          <div
            className={`hidden md:block ${
              position?.height ? 'md:hidden' : ''
            } right-1/4 md:transition-opacity animate-fadeIn md:absolute`}
          >
            <img src='coder.svg' alt='' />
          </div>
          <div className='bg-yellow-200 pt-8'>
            <TechItem stack={frontendStack} href='' hoveredPosition={position?.position} position={1} title='Frontend'>
              Wir bei immajung sind stolz darauf, ein umfassendes Angebot an digitalen Dienstleistungen anzubieten, um
              unsere Kunden bei ihrem Streben nach Erfolg zu unterstützen. Von der Webentwicklung und dem Hosting bis
              hin zu technischer SEO und UI/UX-Design verfügt unser Expertenteam über die Fähigkeiten und die Erfahrung,
              um Ihr Unternehmen in der digitalen Welt zum Erfolg zu führen. Mit dem Schwerpunkt auf moderner Technik
              und benutzerfreundlichem Design sind wir bestens gerüstet, um Ihrem Unternehmen zu Wachstum und Erfolg zu
              verhelfen. Kontaktieren Sie uns noch heute, um mehr über unser Full-Service-Angebot zu erfahren und wie
              Ihr Unternehmen davon profitieren kann.
            </TechItem>
            <TechItem stack={backendStack} href='' hoveredPosition={position?.position} position={2} title='Backend'>
              Als Digitalagentur in Hannover bietet immajung fachkundige UI/UX-Design-Services, um unseren Kunden zu
              helfen, benutzerfreundliche, ansprechende und visuell ansprechende Websites zu erstellen. Mit dem Fokus
              auf moderne Designprinzipien und nutzerzentriertes Design kann unser Expertenteam Ihnen helfen, eine
              Website zu erstellen, die nicht nur gut aussieht, sondern auch ein nahtloses und angenehmes Nutzererlebnis
              bietet. Setzen Sie sich noch heute mit uns in Verbindung, um mehr darüber zu erfahren, wie unsere
              UI/UX-Designservices Ihrem Unternehmen zugutekommen und Ihnen zum Erfolg in der digitalen Welt verhelfen
              können.{' '}
            </TechItem>
            <TechItem stack={mobileStack} href='' hoveredPosition={position?.position} position={3} title='Mobile'>
              Als führende Digitalagentur in Hannover, Deutschland, bietet immajung zuverlässige und sichere
              Hosting-Services zur Unterstützung Ihrer Online-Aktivitäten. Mit dem Fokus auf Betriebszeit, Leistung und
              Sicherheit sind unsere Hosting-Lösungen so konzipiert, dass Ihre Website reibungslos und effizient läuft,
              so dass Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können. Kontaktieren Sie uns noch
              heute, um mehr über unsere Hosting-Services zu erfahren und wie Ihr Unternehmen davon profitieren kann.
            </TechItem>
            <TechItem stack={devOpsStack} href='' hoveredPosition={position?.position} position={4} title='Dev Ops'>
              Wir bei immajung wissen, wie wichtig die Suchmaschinenoptimierung (SEO) für moderne Unternehmen ist.
              Deshalb bieten wir umfassende technische SEO-Dienstleistungen an, die unseren Kunden helfen, ihre
              Suchmaschinenplatzierungen zu verbessern und mehr Besucher auf ihre Websites zu bringen. Von der
              Keyword-Recherche und On-Page-Optimierung bis hin zum Linkaufbau und der Erstellung von Inhalten - unsere
              technischen SEO-Experten verfügen über das Wissen und die Erfahrung, um Ihrem Unternehmen zum Erfolg in
              der digitalen Welt zu verhelfen. Setzen Sie sich noch heute mit uns in Verbindung, um mehr darüber zu
              erfahren, wie wir Ihr Unternehmen dabei unterstützen können, sein Suchmaschinenranking zu verbessern und
              mehr Besucher auf Ihre Website zu bringen.
            </TechItem>
          </div>
        </div>
      </div>
    </div>
  );
};
