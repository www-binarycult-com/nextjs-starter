import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import { LandingpageHero } from '../components/Landingpage/LandingpageHero';
import ContactForm from '../components/form/ContactForm';
import { Spacing } from '../components/Spacing';
import { Advantages } from '../components/Landingpage/Advantages';
import { TextImageList } from '../components/Landingpage/TextImageList';
import { Cta } from '../components/Landingpage/Cta';

const items = [
  {
    headline: '1. Wir beraten Sie',
    text: 'Durch die Kontaktaufnahme sichern Sie sich unverbindlich das aktuelle Top-Angebot. In einem persönlichen 1. Gespräch besprechen wir Ihre Wünsche und Vorstellungen.',
    image: '/landingpage/code.svg',
    list: ['Experten als Ansprechpartner', 'Unkompliziert und Verständlich', 'indivudell und schnell'],
  },
  {
    headline: '2. Wir erstellen ihre Webseite',
    text: 'Ihr ganz persönlicher Webdesigner beginnt, auf Basis Ihrer Wünsche, Ihre individuelle neue Website raketenschnell zu erstellen. Modernste Website Designs auf Sie und Ihr Business abgestimmt.',
    image: '/landingpage/new.svg',
    list: ['Upload ihrer Dateien', 'Ihre Vorstellung unsere Umsetzung', 'Support zu jeder Zeit'],
  },
  {
    headline: '3. Die letzten Kleinigkeiten',
    text: 'Gemeinsam veredeln wir Ihre Website und geben ihr den letzten, optimalen Schliff. Im Anschluss kümmern wir uns für Sie um die komplette Abwicklung und Onlinestellung Ihrer neuen Traumwebsite.',
    image: '/landingpage/virtual.svg',
    list: ['Webseitenvorschau', 'Domain, Hosting & E-Mails inklusive', 'CMS zur Pflege Ihrer Website'],
  },
];

const Landingpage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landingpage</title>
        <meta name='description' content='immajung - Landingpage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LandingpageHero />
        <div id='contact-form' className='flex flex-col md:flex-row container m-auto'>
          <div className='w-full md:w-2/3 '>
            <ContactForm />
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
      </main>
      <Footer />
    </div>
  );
};

export default Landingpage;
