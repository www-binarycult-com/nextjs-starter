import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import { LandingpageHero } from '../components/Landingpage/LandingpageHero';
import ContactForm from '../components/form/ContactForm';
import { Spacing } from '../components/Spacing';
import { Advantages } from '../components/Landingpage/Advantages';
import { TextImageList } from '../components/Landingpage/TextImageList';
import { Cta } from '../components/Landingpage/Cta';
import { Accordion } from '../components/Landingpage/Accordion';
import { Button } from '../components/button/Button';

const items = [
  {
    headline: '1. Wir begleiten Sie durch den Prozess',
    text: 'Bei uns steht Ihr Projekt an erster Stelle. Nehmen Sie unverbindlich Kontakt auf und sichern Sie sich unser exklusives Angebot. Wir besprechen Ihre Ideen und Wünsche im Detail während eines persönlichen Gesprächs.',
    image: '/landingpage/code.svg',
    list: ['Direkter Kontakt zu Experten', 'Einfache und verständliche Beratung', 'Schnelle und individuelle Lösungen'],
  },
  {
    headline: '2. Erstellung Ihrer maßgeschneiderten Webseite',
    text: 'Ihr persönlicher Webdesigner verwandelt Ihre Vision in eine moderne, maßgeschneiderte Website, die genau auf Ihre Bedürfnisse und Ihr Geschäft zugeschnitten ist. Erleben Sie Geschwindigkeit und Design auf einem neuen Niveau.',
    image: '/landingpage/new.svg',
    list: ['Problemloses Hochladen Ihrer Dateien', 'Ihre Ideen sind unsere Blaupause', 'Support zu jeder Zeit'],
  },
  {
    headline: '3. Die Feinarbeit und Fertigstellung',
    text: 'Zusammen verfeinern wir Ihre Website und geben ihr den letzten, perfekten Schliff. Nach der Fertigstellung kümmern wir uns um die gesamte Abwicklung und die Online-Schaltung Ihrer neuen Traumwebsite.',
    image: '/landingpage/virtual.svg',
    list: [
      'Vorab Webseitenansicht',
      'Domain, Hosting & E-Mails inklusive',
      'CMS für einfache Pflege und Aktualisierungen Ihrer Website',
    ],
  },
];

const Landingpage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Immajung | Deine Web Agentur</title>
        <meta name='description' content='immajung - Sichern Sie sich Ihre neue Website mit unserem Top Sparangebot' />
      </Head>
      <main>
        <LandingpageHero />
        <div id='contact-form' className='flex flex-col md:flex-row container m-auto'>
          <div className='w-full md:w-2/3 '>
            <ContactForm classNameButton='uppercase bg-primary after:bg-white h-10' />
          </div>
          <div className='w-full p-10 md:w-1/3'>
            <div className='hidden md:block'>
              <Spacing type='large' />
            </div>
            <div className='flex'>
              <img className='pt-16' width={300} {...{ src: './landingpage/messaging.svg' }} />
            </div>
          </div>
        </div>
        <Advantages />
        <TextImageList heading="So Funktioniert's" subheading='Schritt für Schritt zu Ihrem Erfolg' items={items} />
        <Cta />
        <Accordion />
        <Spacing type='section' />
        <div className='container m-auto'>
          <Button
            className='animate-bounce uppercase bg-primary after:bg-white h-12 w-full m-auto'
            asButton={false}
            href='#contact'
          >
            Kontaktiere uns
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landingpage;
