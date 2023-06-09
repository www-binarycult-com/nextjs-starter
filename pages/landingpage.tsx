import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import { LandingpageHero } from '../components/LandingpageHero/LandingpageHero';

const Impressum: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landingpage</title>
        <meta name='description' content='immajung - Landingpage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LandingpageHero />
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
