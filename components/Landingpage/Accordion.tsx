import { useRef, useState } from 'react';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

const faqs = [
  {
    id: 1,
    header: 'Wie gewährleisten wir eine Website, die alle begeistert?',
    text: 'Bei Immajung kreieren wir maßgeschneiderte Websites - keine vorgefertigten Bausteine, reine Kreativität. Sie profitieren von unserer Expertise aus über 500 Projekten und unseren innovativen Prozessen. Wir arbeiten eng mit Ihnen zusammen, um Ihre Erwartungen an Design und Funktion zu erfüllen und übernehmen den Großteil der Arbeit. Ihr Wunsch trifft auf unsere Kreativität - ein unschlagbares Team.',
  },
  {
    id: 2,
    header: 'Sind Änderungen nach Erhalt des Entwurfs möglich?',
    text: 'Wir sind erst zufrieden, wenn Sie es sind. Daher ermöglicht unser Feedback-Tool schnelle und präzise Anpassungen an Ihrem Website-Design. Geben Sie Ihr Feedback direkt auf der Website und unser Webdesigner setzt Ihre Änderungswünsche problemlos um.',
  },
  {
    id: 3,
    header: 'Können Sie Ihre aktuelle Domain behalten?',
    text: 'Selbstverständlich! Wir können Ihre bestehende Domain entweder umziehen oder eine Verbindung zu Ihrer neuen Website herstellen. Unser Rundum-Service ist darauf ausgelegt, Ihnen den Prozess so einfach wie möglich zu gestalten.',
  },
  {
    id: 4,
    header: 'Fallen zusätzliche Kosten an?',
    text: 'Die Investition von 799€ netto umfasst die vollständige Erstellung Ihrer Website. Domain & Hosting sind für die ersten 12 Monate inklusive und nutzen unsere schnellen, CO2-neutralen Server in Deutschland. Danach bieten wir spezielle Konditionen für nur 19,99€ pro Monat, die Website-Nutzung, Domain, Hosting, technische Pflege & Wartung sowie Zugang zu Ihrem Kundenportal umfassen.',
  },
  {
    id: 5,
    header: 'Was beinhaltet unsere Geld-zurück-Garantie?',
    text: 'Wir sind überzeugt von unserer Arbeit und möchten, dass Sie es auch sind. Sollten Sie wider Erwarten mit dem ersten Entwurf unzufrieden sein und keine Änderungen wünschen, erhalten Sie Ihr Geld zurück. Es ist unser Anspruch, Ihre Nummer 1 im Website-Dschungel zu sein.',
  },
  {
    id: 6,
    header: 'Wie lange dauert die Erstellung einer Website?',
    text: 'Dank unseres engagierten Teams können wir Ihre Website in der Regel innerhalb von 14 Tagen online stellen. Die genaue Dauer hängt vom jeweiligen Aufwand ab. In einem persönlichen Gespräch können wir Ihnen genauere Details geben.',
  },
  {
    id: 7,
    header: 'Bieten wir weitere optionale Dienstleistungen?',
    text: 'Nutzen Sie unseren erweiterten Service zu einem herausragenden Preis-Leistungs-Verhältnis. Zusätzliche Angebote umfassen Logoerstellung, Texterstellung, Online Marketing, SEO-Optimierung, Google My Business und Social Media Dienstleistungen.',
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
