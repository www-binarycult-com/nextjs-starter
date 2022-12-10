import React from 'react';
import { Headline } from '../Headline';

export const ContactForm: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submit form data to server here...
  };

  return (
    <div className='p-10'>
      <form onSubmit={handleSubmit}>
        <div className='mb-10'>
          <Headline tag='h2'>Kontakt</Headline>
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
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
            Absenden // ToDo Button Color Yellow
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
