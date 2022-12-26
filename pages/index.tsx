import type { NextPage } from 'next';
import Head from 'next/head';
import { Slider } from '../components/slider';
import { ProjectProvider } from '../components/project/ProjectProvider';
import { ProjectList } from '../components/project/ProjectList';
import { Services } from '../components/services/Services';
import { Hero } from '../components/hero/Hero';
import { TextImageSection } from '../components/text-image/TextImageSection';
import { ContactForm } from '../components/form/ContactForm';
import { ContactCTA } from '../components/callToActions/ContactCTA';

const images = [
  { href: '/', src: '/1.png' },
  { href: '/', src: '/2.png' },
  { href: '/', src: '/3.png' },
  { href: '/', src: '/4.png' },
  { href: '/', src: '/5.png' },
  { href: '/', src: '/6.png' },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <TextImageSection
          heading='Ueberschrift'
          text='Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
          image={{ src: './coder.svg' }}
          className=' '
        />
        <div className=' '>
          <ContactCTA />
        </div>
        <ProjectProvider>
          <ProjectList />
        </ProjectProvider>
        <TextImageSection
          heading='Ueberschrift'
          className=' '
          text='Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
        />
        <Services />
        <Slider images={images} />
        <TextImageSection
          heading='Ueberschrift'
          reversedOrder
          className=' '
          text='Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
          image={{ src: './coder.svg' }}
        />
        <div id='contact-form' className='flex flex-col-reverse md:flex-row  '>
          <div className='w-full md:w-1/2 '>
            <ContactForm />
          </div>
          <div className='w-full p-10 md:w-1/2'>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem
            ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum
            dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
