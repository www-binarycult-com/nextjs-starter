import { useRef, useState } from 'react';
import { Headline } from '../Headline';
import { Spacing } from '../Spacing';
import { SubHeadline } from '../SubHeadline';

const faqs = [
  {
    id: 1,
    header: 'Wie schafft ihr das, dass die Website jedem gefällt',
    text: 'Bei Immajung erstellen wir jede Website individuell nach Maß. Kein Baukasten - Kreativität pur. Dabei profitieren Sie von unserer Erfahrung aus über 500 realisierten Projekten und unseren intelligenten Prozessen. Deshalb besprechen wir im Vorfeld ganz genau, welche Vorstellungen Sie an das Design und die Funktionalität Ihrer Website haben. Unser Ziel ist es dabei, Sie von Beginn an so weit wie möglich zu entlasten. Unsere Webdesigner entwerfen dann die Website nach Ihren Wünschen und unseren kreativen Ideen. ',
  },
  {
    id: 2,
    header: 'Kann ich nach Erhalt des Entwurfs Anpassungen vornehmen lassen?',
    text: 'Die von uns erstellten Website-Designs entsprechen in der Regel direkt dem Geschmack unserer Kunden. Dies erreichen wir zum einen durch unsere jahrelange Erfahrung  und zum anderen durch unsere intelligenten Prozesse. Dazu gehört auch der Feedback-Prozess, falls Sie Änderungen wünschen. Hierfür haben wir eigens unser Feedback-Tool entwickelt, mit dem Sie innerhalb weniger Minuten direkt auf der Website Ihr Feedback hinterlassen können. Ihr Webdesigner übernimmt dann unkompliziert die Änderungen für Sie.',
  },
  {
    id: 3,
    header: 'Kann ich meine aktuelle Domain behalten?',
    text: 'Selbstverständlich können Sie Ihre bisherige Domain weiter verwenden. Wir übernehmen entweder den Umzug für Sie oder stellen eine Verbindung von Ihrem bisherigen Provider zu Ihrer Website her. Ein Full-Service, der auch Sie begeistern wird.',
  },
  {
    id: 4,
    header: 'Entstehen weitere Kosten?',
    text: 'Nein, die Investition von 799€ netto beinhaltet die komplette Erstellung Ihrer Website. Domain & Hosting sind auf Wunsch für 12 Monate inklusive. Dabei nutzen Sie unsere schnellen und CO2-neutralen Server, welche sich ausschließlich in Deutschland befinden. Nach den 12 Monaten profitieren Sie von den Immajung Sonderkonditionen. Für nur 19,99€ im Monat erhalten Sie Ihre Website und weiterhin folgende Vorteile: Website-Nutzung, Domain, Hosting, technische Pflege & Wartung sowie Zugang zu Ihrem Kundenportal. Dort können Sie Statistiken einsehen, Ihre Website bearbeiten und vieles mehr.',
  },
  {
    id: 5,
    header: 'Was bedeutet die Geld zurück Gerantie ?',
    text: 'Immajung ist für Hunderte von Kunden die Nummer 1 im Website-Dschungel. Nicht umsonst wurden wir mit dem German Web Award als beste Webagentur im Bereich Kundenservice und Design ausgezeichnet. Das werden wir auch Ihnen beweisen. Sollten Sie wider Erwarten mit dem Aussehen des erstellten 1. Entwurfs nicht zufrieden sein und keine Änderungen gewünscht haben, erhalten Sie Ihr Geld zurück.',
  },
  {
    id: 6,
    header: 'Wie lange dauert die Erstellung?',
    text: 'Dank unseres engagierten Teams sind wir schnell. Wie schnell? Im Durchschnitt benötigen wir nur ca. 14 Tage bis zur Online Stellung. Die genaue Bearbeitungszeit hängt dabei vom Aufwand ab. In einem persönlichen Gespräch können wir Ihnen das ganz genau sagen.',
  },
  {
    id: 7,
    header: 'Gibt es weitere optinale Dienstleistungen ?',
    text: 'Profitieren Sie auch von weiteren Dienstleistungen - zum besten Preis-Leistungs-Verhältnis auf dem Markt. Wie zum Beispiel: Logoerstellung, Texterstellung, Online Marketing, SEO-Optimierung, Google My Business, Social Media.',
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
