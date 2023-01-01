import { useEffect, useRef, useState } from 'react';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { Spacing } from '../Spacing';
import { useInView } from 'react-intersection-observer';
import { ServicesItem } from './ServicesItem';
import { ServiceHeadline } from './ServiceHeadline';

export const Services = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  });
  const divElement = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const ref4 = useRef<HTMLAnchorElement>(null);
  const ref5 = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState<{
    position?: number;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
  } | null>(null);

  useEffect(() => {
    setPosition({
      position: 1,
      top: (ref1.current?.offsetTop || 0) + 232 + (divElement.current?.clientHeight || 0),
      left: ref1.current?.getBoundingClientRect().left,
      width: ref1.current?.getBoundingClientRect().width,
      height: ref1.current?.getBoundingClientRect().height,
    });
  }, []);

  return (
    <div className={`transition-all duration-500 delay-100 ease-in-out ${inView ? 'bg-cta' : ''}`} ref={ref}>
      <div className={`box-border block bg-cover relative w-full px-4 md:px-12 py-12  z-10 container m-auto`}>
        <Headline className='z-10' tag='h2'>
          Unsere Dienstleistungen
        </Headline>
        <SubHeadline>Von der Beratung bis zum Full-Service</SubHeadline>
        <Spacing type='content' />
        {/* <ServicesBox position={position} /> */}
        <div className='relative z-2 gap-8 flex overflow-x-auto md:flex-wrap'>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 1,
                top: (ref1.current?.offsetTop || 0) + 232 + (divElement.current?.clientHeight || 0),
                left: ref1.current?.getBoundingClientRect().left,
                width: ref1.current?.getBoundingClientRect().width,
                height: ref1.current?.getBoundingClientRect().height,
              });
            }}
            position={position?.position === 1}
            ref={ref1}
          >
            <span className={`${position?.position === 1 ? 'underline md:no-underline' : 'no-underline'} `}>
              Full Service
            </span>
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 2,
                top: (ref2.current?.offsetTop || 0) + 232 + (divElement.current?.clientHeight || 0),
                left: ref2.current?.getBoundingClientRect().left,
                width: ref2.current?.getBoundingClientRect().width,
                height: ref2.current?.getBoundingClientRect().height,
              });
            }}
            position={position?.position === 2}
            ref={ref2}
          >
            <span className={`${position?.position === 2 ? 'underline md:no-underline' : 'no-underline'} `}>
              UI / UX Design
            </span>
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 3,
                top: (ref3.current?.offsetTop || 0) + 232 + (divElement.current?.clientHeight || 0),
                left: ref3.current?.getBoundingClientRect().left,
                width: ref3.current?.getBoundingClientRect().width,
                height: ref3.current?.getBoundingClientRect().height,
              });
            }}
            position={position?.position === 3}
            ref={ref3}
          >
            <span className={`${position?.position === 3 ? 'underline md:no-underline' : 'no-underline'} `}>
              Hosting
            </span>
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 4,
                top: (ref4.current?.offsetTop || 0) + 232 + (divElement.current?.clientHeight || 0),
                left: ref4.current?.getBoundingClientRect().left,
                width: ref4.current?.getBoundingClientRect().width,
                height: ref4.current?.getBoundingClientRect().height,
              });
            }}
            position={position?.position === 4}
            ref={ref4}
          >
            <span className={`${position?.position === 4 ? 'underline md:no-underline' : 'no-underline'} `}>
              Technisches SEO
            </span>
          </ServiceHeadline>
          <ServiceHeadline
            onMouseEnter={() => {
              setPosition({
                position: 5,
                top: (ref5.current?.offsetTop || 0) + 232 + (divElement.current?.clientHeight || 0),
                left: ref5.current?.getBoundingClientRect().left,
                width: ref5.current?.getBoundingClientRect().width,
                height: ref5.current?.getBoundingClientRect().height,
              });
            }}
            position={position?.position === 5}
            ref={ref5}
          >
            <span className={`${position?.position === 5 ? 'underline md:no-underline' : 'no-underline'} `}>
              Web Development
            </span>
          </ServiceHeadline>
        </div>
        <div className='pt-8'>
          <ServicesItem href='' hoveredPosition={position?.position} position={1} title='Full Service'>
            Wir bei immajung sind stolz darauf, ein umfassendes Angebot an digitalen Dienstleistungen anzubieten, um
            unsere Kunden bei ihrem Streben nach Erfolg zu unterstützen. Von der Webentwicklung und dem Hosting bis hin
            zu technischer SEO und UI/UX-Design verfügt unser Expertenteam über die Fähigkeiten und die Erfahrung, um
            Ihr Unternehmen in der digitalen Welt zum Erfolg zu führen. Mit dem Schwerpunkt auf moderner Technik und
            benutzerfreundlichem Design sind wir bestens gerüstet, um Ihrem Unternehmen zu Wachstum und Erfolg zu
            verhelfen. Kontaktieren Sie uns noch heute, um mehr über unser Full-Service-Angebot zu erfahren und wie Ihr
            Unternehmen davon profitieren kann.
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={2} title='UI / UX Design'>
            Als Digitalagentur in Hannover bietet immajung fachkundige UI/UX-Design-Services, um unseren Kunden zu
            helfen, benutzerfreundliche, ansprechende und visuell ansprechende Websites zu erstellen. Mit dem Fokus auf
            moderne Designprinzipien und nutzerzentriertes Design kann unser Expertenteam Ihnen helfen, eine Website zu
            erstellen, die nicht nur gut aussieht, sondern auch ein nahtloses und angenehmes Nutzererlebnis bietet.
            Setzen Sie sich noch heute mit uns in Verbindung, um mehr darüber zu erfahren, wie unsere
            UI/UX-Designservices Ihrem Unternehmen zugutekommen und Ihnen zum Erfolg in der digitalen Welt verhelfen
            können.{' '}
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={3} title='Hosting'>
            Als führende Digitalagentur in Hannover, Deutschland, bietet immajung zuverlässige und sichere
            Hosting-Services zur Unterstützung Ihrer Online-Aktivitäten. Mit dem Fokus auf Betriebszeit, Leistung und
            Sicherheit sind unsere Hosting-Lösungen so konzipiert, dass Ihre Website reibungslos und effizient läuft, so
            dass Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können. Kontaktieren Sie uns noch heute, um
            mehr über unsere Hosting-Services zu erfahren und wie Ihr Unternehmen davon profitieren kann.
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={4} title='Technical SEO'>
            Wir bei immajung wissen, wie wichtig die Suchmaschinenoptimierung (SEO) für moderne Unternehmen ist. Deshalb
            bieten wir umfassende technische SEO-Dienstleistungen an, die unseren Kunden helfen, ihre
            Suchmaschinenplatzierungen zu verbessern und mehr Besucher auf ihre Websites zu bringen. Von der
            Keyword-Recherche und On-Page-Optimierung bis hin zum Linkaufbau und der Erstellung von Inhalten - unsere
            technischen SEO-Experten verfügen über das Wissen und die Erfahrung, um Ihrem Unternehmen zum Erfolg in der
            digitalen Welt zu verhelfen. Setzen Sie sich noch heute mit uns in Verbindung, um mehr darüber zu erfahren,
            wie wir Ihr Unternehmen dabei unterstützen können, sein Suchmaschinenranking zu verbessern und mehr Besucher
            auf Ihre Website zu bringen.
          </ServicesItem>
          <ServicesItem href='' hoveredPosition={position?.position} position={5} title='Web Development'>
            Bei immajung sind wir stolz auf unsere erstklassigen Webentwicklungsdienste. Ganz gleich, ob Sie eine
            einfache Website zur Präsentation Ihres Unternehmens oder eine komplexere Plattform zur Unterstützung Ihrer
            Online-Aktivitäten benötigen, unser Expertenteam verfügt über die Fähigkeiten und die Erfahrung, um die von
            Ihnen benötigten Lösungen zu liefern. Mit einem Schwerpunkt auf moderner Technik und benutzerfreundlichem
            Design können unsere Webentwicklungsdienste Ihrem Unternehmen zum Erfolg in der digitalen Welt verhelfen.
            Kontaktieren Sie uns noch heute, um mehr zu erfahren
          </ServicesItem>
        </div>
      </div>
    </div>
  );
};
