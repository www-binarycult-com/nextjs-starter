import type { NextPage } from 'next';
import Head from 'next/head';
import { ProjectProvider } from '../components/project/ProjectProvider';
import { ProjectList } from '../components/project/ProjectList';
import { Services } from '../components/services/Services';
import { Hero } from '../components/hero/Hero';
import { TextImageSection } from '../components/text-image/TextImageSection';
import { ContactForm } from '../components/form/ContactForm';
import { ContactCTA } from '../components/callToActions/ContactCTA';
import { Footer } from '../components/footer/Footer';
import { LinkCTA } from '../components/callToActions/LinkCTA';
import CookieBanner from '../components/cookieConsent/CookieBanner';
import { Spacing } from '../components/Spacing';
import Clients from '../components/clients/Clients';
import { Done } from '../components/done/Done';
import { Workflow } from '../components/workflow/Workflow';
import { Techstack } from '../components/techstack/Techstack';
import { Cta } from '../components/Landingpage/Cta';

const images = [
  { href: '/', src: '/clients/casa.png' },
  { href: '/', src: '/clients/vitalistlogo.jpeg' },
  { href: '/', src: '/clients/vergoelst.svg' },
  { href: '/', src: '/clients/iks.webp' },
  { href: '/', src: '/clients/faber.svg' },
  { href: '/', src: '/clients/sezer.jpeg' },
  { href: '/', src: '/clients/ariston.png' },
  { href: '/', src: '/clients/change-mediated.png' },
  { href: '/', src: '/clients/oralchirurgie.png' },
  { href: '/', src: '/clients/logo_cleanin.png' },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>immajung - deine Web Dev Agentur</title>
        <meta name='description' content='Remote First Web Development Agentur aus Hannover' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <TextImageSection
          heading='Hallo!'
          id='agency'
          subheading='Wir sind Ihr Partner für Web Development und mehr.'
          image={{ src: './test.svg' }}
          className=' '
        >
          <>
            <p>
              Wir sind eine Remote-Web-Development-Agentur, die sich auf kleine und mittelständische Unternehmen
              spezialisiert hat und aus Hannover operiert. Wir bieten modernste Technologien und Lösungen in den
              Bereichen Web Development, UI/UX Design, SEO, Hosting und Full Service an.
            </p>
            <br />
            <p>
              Die Digitalisierung ist in aller Munde und bietet für Unternehmen viele Chancen und Möglichkeiten.
              Allerdings stellen sie auch viele Herausforderungen dar, die es zu meistern gilt. Wir von immajung möchten
              Ihnen dabei helfen, diese Herausforderungen erfolgreich zu bewältigen.
            </p>
            <p>
              Unser Team besteht aus erfahrenen und hochqualifizierten Experten, die sich jeden Tag dafür einsetzen,
              unseren Kunden bei der Bewältigung der Herausforderungen der Digitalisierung zu helfen. Wir arbeiten mit
              Leidenschaft und Engagement und sind stets bemüht, unsere Leistungen stetig zu verbessern und auf dem
              neuesten Stand der Technik zu halten.
            </p>
            <br />
            <p>
              Mit unserem Full-Service-Angebot sind wir Ihr zuverlässiger Partner für alle Belange rund um die
              Digitalisierung Ihres Unternehmens. Wir beraten Sie umfassend und erarbeiten gemeinsam mit Ihnen eine
              Strategie, die auf Ihre Bedürfnisse und Ziele abgestimmt ist.
            </p>
            <p>
              Lassen Sie uns gemeinsam die Herausforderungen der Digitalisierung meistern und Ihr Unternehmen
              erfolgreich in die Zukunft führen. Kontaktieren Sie uns und lernen Sie uns und unser Angebot näher kennen.
            </p>
            <br />
            <LinkCTA href='#contact-form'>Sagen Sie uns gerne Hallo!</LinkCTA>
          </>
        </TextImageSection>
        <ProjectProvider>
          <ProjectList />
        </ProjectProvider>
        <ContactCTA />
        <Done />
        <Workflow />
        <Services />
        <Cta />
        <Techstack />
        <Clients images={images} />
        <div id='contact-form' className='flex flex-col md:flex-row container m-auto'>
          <div className='w-full md:w-1/2 '>
            <ContactForm />
          </div>
          <div className='w-full p-10 md:w-1/2'>
            <div className='hidden md:block'>
              <Spacing type='large' />
            </div>
            <p>
              Sie haben Fragen oder möchten mehr über unsere Leistungen erfahren? <br />
              <br />
              Dann zögern Sie nicht, uns zu kontaktieren. Wir stehen Ihnen gerne zur Verfügung und beantworten Ihre
              Anfragen schnellstmöglich. Nutzen Sie dafür einfach das Kontaktformular nebenan oder schreiben Sie uns
              eine E-Mail an <br />
            </p>
            <LinkCTA href=''>info@immajung.de</LinkCTA>. Wir freuen uns darauf, von Ihnen zu hören.
            <div className='flex'>
              <img className='pt-16' width={300} {...{ src: './contact.svg' }} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Home;
