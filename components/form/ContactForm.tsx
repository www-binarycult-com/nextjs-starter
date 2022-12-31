import { useState } from 'react';
import { Spacing } from '../Spacing';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { LinkCTA } from '../callToActions/LinkCTA';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [accepted, setAccepted] = useState(false);

  return (
    <div className='p-10'>
      <form name='contact' method='POST' data-netlify='true'>
        <div>
          <Headline tag='h2'>Kontakt</Headline>
          <SubHeadline>Sprechen Sie uns an und lassen Sie uns gemeinsam Ihr Projekt planen.</SubHeadline>
          <Spacing type='content' />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='name'>
            Name:
          </label>
          <input
            className='border rounded py-2 px-3 w-full'
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='email'>
            Email:
          </label>
          <input
            className='border rounded py-2 px-3 w-full'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='message'>
            Nachricht:
          </label>
          <textarea
            className='border rounded py-2 px-3 w-full'
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type='hidden' name='contact' value='contact' />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='dsgvo'>
            <input
              className='border rounded py-2 px-3 '
              type='checkbox'
              id='dsgvo'
              name='dsgvo'
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            <span className='ml-2'>
              Ich habe die{' '}
              <LinkCTA href='/dsgvo' title='Datenschutzvereinbarung'>
                Datenschutzvereinbarung
              </LinkCTA>{' '}
              gelesen und akzeptiert. Keine Sorge wir werden Sie nicht mit Spam E-Mails nerven oder Ihre Daten
              weitergeben.
            </span>
          </label>
        </div>
        <div>
          <button
            disabled={!accepted}
            className={`bg-cta font-bold py-2 px-4 rounded ${!accepted ? 'opacity-50' : ''}`}
            type='submit'
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
