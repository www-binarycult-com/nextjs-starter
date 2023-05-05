import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headline } from '../Headline';

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
  { src: 'backend/go.svg', title: 'Go' },
  { src: 'backend/java.svg', title: 'Java' },
  { src: 'backend/nodejs.svg', title: 'NodeJS' },
  { src: 'backend/php.svg', title: 'PHP' },
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

export const TechstackAlt = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: false,
  });

  return (
    <div ref={ref} className='flex container mx-auto'>
      <div className={`hidden md:w-1/2 p-10 pb-[50vh] md:block`}>
        <div className={`sticky top-10 `}>
          <div className='relative pb-10'>
            <Headline tag='h2'>Technologien</Headline>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 '>
        <div className='pt-8'>
          <div className={`flex justify-center items-center`}>
            <div className={`p-4 md:p-6 rounded w-full flex flex-col gap-8 duration-200 `}>
              <div>
                <Headline tag='h3'>Frontend</Headline>
              </div>
              <div>
                <div className='mb-8'>
                  {' '}
                  Im Frontend setzen wir auf leistungsstarke und zukunftsorientierte Technologien. Unser Tech-Stack
                  umfasst React, Next, Gatsby, SolidJS und CSS, die wir in Kombination mit dem CSS-Framework Tailwind
                  einsetzen. Zusätzlich verwenden wir three.js, eine JavaScript-Bibliothek, die es uns ermöglicht,
                  interaktive 3D-Grafiken und Animationssequenzen in unsere Webseiten zu integrieren.
                </div>
                <div className='flex flex-wrap gap-4'>
                  {frontendStack.map(({ title, src }, key) => (
                    <div key={key} className=' flex w-32 h-32 flex-col justify-center content-center'>
                      <img className='w-12 h-12 self-center' src={src} width={110} height={110} alt='' />
                      <span className='self-center pt-4'>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <div className={`p-4 md:p-6 rounded w-full md:w-[80%] flex flex-col gap-8 duration-200 `}>
              <div>
                <Headline tag='h3'>Backend</Headline>
              </div>{' '}
              <div>
                <div className='mb-8'>
                  {' '}
                  Im Backend setzen wir auf leistungsstarke und zukunftssichere Technologien. Unser Tech-Stack umfasst
                  NodeJS, Typescript, GoLang und verschiedene Datenbanken wie PostgreSQL und MongoDB.
                </div>
                <div className='flex flex-wrap gap-4'>
                  {backendStack.map(({ title, src }, key) => (
                    <div key={key} className=' flex w-32 h-32 flex-col justify-center content-center'>
                      <img className='w-12 h-12 self-center' src={src} width={110} height={110} alt='' />
                      <span className='self-center pt-4'>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <div className={`p-4 md:p-6 rounded w-full md:w-[80%] flex flex-col gap-8 duration-200 `}>
              <div>
                <Headline tag='h3'>Mobile / Apps</Headline>
              </div>{' '}
              <div>
                <div className='mb-8'>
                  Im Bereich Mobile setzen wir auf Flutter und React-native, zwei leistungsstarke Frameworks für die
                  Entwicklung von nativen Apps für Android und iOS.
                </div>
                <div className='flex flex-wrap gap-4'>
                  {mobileStack.map(({ title, src }, key) => (
                    <div key={key} className=' flex w-32 h-32 flex-col justify-center content-center'>
                      <img className='w-12 h-12 self-center' src={src} width={110} height={110} alt='' />
                      <span className='self-center pt-4'>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <div className={`p-4 md:p-6 rounded w-full md:w-[80%] flex flex-col gap-8 duration-200 `}>
              <div>
                <Headline tag='h3'>CMS</Headline>
              </div>{' '}
              <div>
                <div className='mb-8'>
                  Unsere Agentur bietet auch Unterstützung bei der Wahl und Einführung von Content Management Systemen
                  (CMS). Wir haben Erfahrung mit verschiedenen CMS wie Wordpress, Shopify, Sanity, Contentfull und
                  netlify-cms. Wir beraten Sie gerne bei der Wahl des passenden CMS für Ihre Anforderungen und
                  unterstützen Sie bei der Einführung und Nutzung des Systems. Auf Wunsch übernehmen wir auch die Pflege
                  und Wartung Ihres CMS.
                </div>
                <div className='flex flex-wrap gap-4'>
                  {cmsStack.map(({ title, src }, key) => (
                    <div key={key} className=' flex w-32 h-32 flex-col justify-center content-center'>
                      <img className='w-12 h-12 self-center' src={src} width={110} height={110} alt='' />
                      <span className='self-center pt-4'>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
