import { NextPage } from 'next';
import { LinkCTA } from '../../components/callToActions/LinkCTA';
// import { Head } from 'next/document';
import CookieBanner from '../../components/cookieConsent/CookieBanner';
import Footer from '../../components/footer/Footer';
import ContactForm from '../../components/form/ContactForm';
import PricingCard from '../../components/prcings/PricingTableSimple';
import { Spacing } from '../../components/Spacing';

const Home: NextPage = () => {
  return (
    <div>
      {/* <Head> */}
      {/*   <title>immajung - deine Web Dev Agentur</title> */}
      {/*   <meta name='description' content='Remote First Web Development Agentur aus Hannover' /> */}
      {/*   <link rel='icon' href='/favicon.ico' /> */}
      {/* </Head> */}
      <main>
        <PricingCard
          title='Website'
          oldPrice='1500'
          newPrice='750'
          features={['Responsive Design', 'Kein Template', 'Inklusive CMS', 'SEO Optimiert']}
          buttonText='Jetzt anfragen'
          buttonLink='https://yourwebsite.com/buy'
        />
        <div id='contact-form' className='flex flex-col md:flex-row container p-5 m-auto'>
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
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Home;
