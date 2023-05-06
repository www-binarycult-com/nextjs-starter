import { Headline } from '../Headline';
import { TechstackItem } from './TechstackItem';

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

export const Techstack = () => {
  return (
    <div className='flex container mx-auto md:flex-row flex-col'>
      <div className={`md:w-1/2 p-10`}>
        <div className={`sticky top-10 `}>
          <Headline tag='h2'>Technologien</Headline>
          <p className='pb-8 pt-16'>
            As performance marketing experts and brand strategists, our custom services are designed to achieve every
            brand’s goals and over-deliver on results. We are a full-service agency ready to partner up with you in
            order to reach and exceed your expectations.
          </p>
          <a className=' hover-underline-animation' href={'/#contact-form'}>
            <b>Mehr Erfahren</b>
          </a>
        </div>
      </div>
      <div className='w-full md:w-1/2 '>
        <div className='md:pt-8'>
          <TechstackItem href='' stack={frontendStack} title='Frontend'>
            Im Frontend setzen wir auf leistungsstarke und zukunftsorientierte Technologien. Unser Tech-Stack umfasst
            React, Next, Gatsby, SolidJS und CSS, die wir in Kombination mit dem CSS-Framework Tailwind einsetzen.
            Zusätzlich verwenden wir three.js, eine JavaScript-Bibliothek, die es uns ermöglicht, interaktive
            3D-Grafiken und Animationssequenzen in unsere Webseiten zu integrieren.
          </TechstackItem>
          <TechstackItem href='' stack={backendStack} title='Backend'>
            Im Backend setzen wir auf leistungsstarke und zukunftssichere Technologien. Unser Tech-Stack umfasst NodeJS,
            Typescript, GoLang und verschiedene Datenbanken wie PostgreSQL und MongoDB.
          </TechstackItem>
          <TechstackItem href='' stack={mobileStack} title='Mobile / Apps'>
            Im Bereich Mobile setzen wir auf Flutter und React-native, zwei leistungsstarke Frameworks für die
            Entwicklung von nativen Apps für Android und iOS.
          </TechstackItem>
          <TechstackItem href='' stack={cmsStack} title='CMS'>
            Unsere Agentur bietet auch Unterstützung bei der Wahl und Einführung von Content Management Systemen (CMS).
            Wir haben Erfahrung mit verschiedenen CMS wie Wordpress, Shopify, Sanity, Contentfull und netlify-cms. Wir
            beraten Sie gerne bei der Wahl des passenden CMS für Ihre Anforderungen und unterstützen Sie bei der
            Einführung und Nutzung des Systems. Auf Wunsch übernehmen wir auch die Pflege und Wartung Ihres CMS.
          </TechstackItem>
        </div>
      </div>
    </div>
  );
};
