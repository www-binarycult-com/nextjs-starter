import type { NextPage } from 'next';
import Head from 'next/head';
import { Slider } from '../components/slider';

const images = [
  { href: '/', src: '/1.png' },
  { href: '/', src: '/2.png' },
  { href: '/', src: '/3.png' },
  { href: '/', src: '/4.png' },
  { href: '/', src: '/5.png' },
  { href: '/', src: '/6.png' },
];
import { ProjectProvider } from '../components/ProjectProvider';
import { ProjectList } from '../components/ProjectList';
import { Headline } from '../components/Headline';
import { ServicesAlt } from '../components/services/Services';
import { Hero } from '../components/hero/Hero';
import { TextImageSection } from '../components/text-image/TextImageSection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white'>
        <Hero />
        <TextImageSection
          heading='Ueberschrift'
          text='Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
          image={{ src: './coder.svg' }}
        />
        <TextImageSection
          heading='Ueberschrift'
          text='Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
        />
        <TextImageSection
          heading='Ueberschrift'
          reversedOrder
          text='Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
          image={{ src: './coder.svg' }}
        />
        <ProjectProvider>
          <ProjectList />
        </ProjectProvider>
        <ServicesAlt />
      </main>
      <Slider images={images} />
      <footer>
        <p className='h-screen '>Binarycult website</p>
        <Headline tag='h1'>Überschrift</Headline>
        <br />
        <Headline tag='h2'>Überschrift</Headline>
        <br />
        <Headline tag='h3'>Überschrift</Headline>
        <br />
        <Headline tag='h4'>Überschrift</Headline>
        <br />
        <Headline tag='h5'>Überschrift</Headline>
        <br />
        <p className='h-screen bg-green-100'>Binarycult website</p>
      </footer>
    </div>
  );
};

export default Home;
