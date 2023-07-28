import { useState } from 'react';
import { Spacing } from '../Spacing';
import { Headline } from '../Headline';
import { SubHeadline } from '../SubHeadline';
import { Button } from '../button/Button';
import Link from 'next/link';
import { Validate } from './utils/Validate';

export const ContactForm = ({ classNameButton = '' }: { classNameButton?: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateForm = Validate({ name, email, phone, message })

    const errorMessageString = Object.values(validateForm).join("\n");
    setErrorsMessage(errorMessageString);

    const isValidForm = (errorsMessage: object) => {
      console.log(errorsMessage)
      return Object.values(errorsMessage).every(value => value === "");
    };

    if (isValidForm(validateForm)) {
      const res = await fetch("api/sendgrid", {
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
          accepted: accepted
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
    } else {
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
    }
  }

  return (
    <div className='p-10' id='contact'>
      <form onSubmit={handleSubmit}>
        <input type='hidden' name='form-name' value='contact' />
        <input type='hidden' name='bot-field' />
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
          <label className='block text-gray-700 mb-2' htmlFor='email'>
            Telefon:
          </label>
          <input
            className='border rounded py-2 px-3 w-full'
            type='tel'
            id='phone'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='message'>
            Nachricht:
          </label>
          <textarea
            className='border rounded py-2 px-3 w-full h-48'
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
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
              <Link href='/dsgvo' title='Datenschutzvereinbarung'>
                Datenschutzvereinbarung
              </Link>{' '}
              gelesen und akzeptiert. Keine Sorge wir werden Sie nicht mit Spam E-Mails nerven oder Ihre Daten
              weitergeben.
            </span>
          </label>
        </div>
        <div>
          <Button
            disabled={!accepted}
            className={`uppercase bg-primary after:bg-white h-12 ${!accepted ? 'opacity-50' : ''}`}
            href='#contact'
          >
            Kontaktiere uns
          </Button>
        </div>
      </form>
      {showSuccessMessage && <p>Ihre Nachricht wurde erfolgreich gesendet</p>}
      {showFailureMessage && (
        <>
          <div className="text-red-500 text-xl text-xl">Entschuldigung, leider ist ein Fehler aufgetreten</div>
          <div className="whitespace-pre-line text-red-500 text-xl text-xl">{errorsMessage}</div>
        </>
      )}
    </div >
  );
};

export default ContactForm;
