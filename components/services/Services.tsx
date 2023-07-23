import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { Spacing } from '../Spacing';
import { useInView } from 'react-intersection-observer';
import { ServicesItem } from './ServicesItem';

export const Services = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: false,
  });
  return (
    <div>
      <div ref={ref} className={`box-border block relative  px-10 md:px-12 py-12  z-10 container m-auto`}>
        <Headline className='z-10' tag='h2'>
          Unsere Dienstleistungen
        </Headline>
        <SubHeadline>Von der Beratung bis zum Full-Service.</SubHeadline>
        <Spacing type='content' />
        {/* <ServicesBox position={position} /> */}
        <div className={`md:pt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-5`}>
          <ServicesItem inView={inView} animation='animate-fadeInLeft' href='' title='Full Service'>
            Ganz gleich, ob Sie eine einfache Website zur Präsentation Ihres Unternehmens oder eine komplexere Plattform
            zur Unterstützung Ihrer Online-Aktivitäten benötigen, unser Expertenteam verfügt über die Fähigkeiten und
            die Erfahrung, um die von Ihnen benötigten Lösungen zu liefern. Mit einem Schwerpunkt auf moderner Technik
            und benutzerfreundlichem Design können unsere Webentwicklungsdienste Ihrem Unternehmen zum Erfolg in der
            digitalen Welt verhelfen.
          </ServicesItem>
          <ServicesItem inView={inView} animation='animate-fadeInLeft' href='' title='UI / UX Design'>
            Mit dem Fokus auf moderne Designprinzipien und nutzerzentriertes Design kann unser Expertenteam Ihnen
            helfen, eine Website zu erstellen, die nicht nur gut aussieht, sondern auch ein nahtloses und angenehmes
            Nutzererlebnis bietet.
          </ServicesItem>
          <ServicesItem inView={inView} animation='animate-fadeInLeft' href='' title='Hosting'>
            Wir bieten zuverlässige und sichere Hosting-Services zur Unterstützung Ihrer Online-Aktivitäten. Mit dem
            Fokus auf Betriebszeit, Leistung und Sicherheit sind unsere Hosting-Lösungen so konzipiert, dass Ihre
            Website reibungslos und effizient läuft, so dass Sie sich auf das Wachstum Ihres Unternehmens konzentrieren
            können.
          </ServicesItem>
          <ServicesItem inView={inView} animation='animate-fadeInLeft' href='' title='Technical SEO'>
            Wir bieten umfassende technische SEO-Dienstleistungen an, die unseren Kunden helfen, ihre
            Suchmaschinenplatzierungen zu verbessern und mehr Besucher auf ihre Websites zu bringen. Von der
            Keyword-Recherche und On-Page-Optimierung bis hin zum Linkaufbau und der Erstellung von Inhalten - unsere
            technischen SEO-Experten verfügen über das Wissen und die Erfahrung, um Ihrem Unternehmen zum Erfolg in der
            digitalen Welt zu verhelfen.
          </ServicesItem>

          <ServicesItem inView={inView} animation='animate-fadeInLeft' href='' title='Full Service'>
            Von der Webentwicklung und dem Hosting bis hin zu technischer SEO und UI/UX-Design verfügt unser
            Expertenteam über die Fähigkeiten und die Erfahrung, um Ihr Unternehmen in der digitalen Welt zum Erfolg zu
            führen. Mit dem Schwerpunkt auf moderner Technik und benutzerfreundlichem Design sind wir bestens gerüstet,
            um Ihrem Unternehmen zu Wachstum und Erfolg zu verhelfen.
          </ServicesItem>
          <img
            className={`flex opacity-0 justify-center  ${inView ? 'animate-fadeInRight' : ''}`}
            {...{ src: './services/save.svg' }}
          />
        </div>
      </div>
    </div>
  );
};
