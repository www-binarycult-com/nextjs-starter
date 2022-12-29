import { useState } from 'react';
import { Spacing } from '../Spacing';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submit form data to server here...
  };

  return (
    <div className='p-10'>
      <form onSubmit={handleSubmit}>
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <button className='bg-cta font-bold py-2 px-4 rounded' type='submit'>
            Absenden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
