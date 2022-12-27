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

const cmsStack: TechStackTypes = [
  { src: 'cms/wordpress.svg', title: 'Wordpress' },
  { src: 'cms/sanity.svg', title: 'Sanity' },
  { src: 'cms/shopify.svg', title: 'Shopify' },
  { src: 'cms/netlify.svg', title: 'Netlify' },
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
              CMS
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
              Im Frontend setzen wir auf leistungsstarke und zukunftsorientierte Technologien. Unser Tech-Stack umfasst
              React, Next, Gatsby, SolidJS und CSS, die wir in Kombination mit dem CSS-Framework Tailwind einsetzen.
              Zusätzlich verwenden wir three.js, eine JavaScript-Bibliothek, die es uns ermöglicht, interaktive
              3D-Grafiken und Animationssequenzen in unsere Webseiten zu integrieren.
            </TechItem>
            <TechItem stack={backendStack} href='' hoveredPosition={position?.position} position={2} title='Backend'>
              Im Backend setzen wir auf leistungsstarke und zukunftssichere Technologien. Unser Tech-Stack umfasst
              NodeJS, Typescript, GoLang und verschiedene Datenbanken wie PostgreSQL und MongoDB.
            </TechItem>
            <TechItem stack={mobileStack} href='' hoveredPosition={position?.position} position={3} title='Mobile'>
              Im Bereich Mobile setzen wir auf Flutter und React-native, zwei leistungsstarke Frameworks für die
              Entwicklung von nativen Apps für Android und iOS.
            </TechItem>
            <TechItem stack={cmsStack} href='' hoveredPosition={position?.position} position={4} title='CMS'>
              Unsere Agentur bietet auch Unterstützung bei der Wahl und Einführung von Content Management Systemen
              (CMS). Wir haben Erfahrung mit verschiedenen CMS wie Wordpress, Shopify, Sanity, Contentfull und
              netlify-cms. Wir beraten Sie gerne bei der Wahl des passenden CMS für Ihre Anforderungen und unterstützen
              Sie bei der Einführung und Nutzung des Systems. Auf Wunsch übernehmen wir auch die Pflege und Wartung
              Ihres CMS.
            </TechItem>
          </div>
        </div>
      </div>
    </div>
  );
};