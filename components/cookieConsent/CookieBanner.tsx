import Cookies from 'js-cookie';
import { MouseEvent, useEffect, useState } from 'react';

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true';
const USER_CONSENT_COOKIE_EXPIRE_DATE = new Date().getTime() + 365 * 24 * 60 * 60;

const CookieBanner = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    const consentIsTrue =
      Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true' || Cookies.get(USER_CONSENT_COOKIE_KEY) === 'false';
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  const onDecline = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'false', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <section className='fixed bottom-0 left-0 w-full py-2 md:py-4 bg-black text-cta'>
      <div className='flex flex-col items-start px-5 py-3 space-y-2 bg-gray-200 md:flex-row md:space-y-0 md:items-stretch md:space-x-2'>
        <div className='flex items-center flex-grow text-gray-900'>
          <p className='text-sm font-medium'>
            Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern.{' '}
            <a className='text-sm underline hover:text-lightAccent'>Mehr auf unserer Datenschutzvereinbarung.</a>.
          </p>
        </div>
        <div className='flex items-center gap-5'>
          <button className='p-3 text-sm font-bold text-black uppercase bg-white whitespace-nowrap' onClick={onClick}>
            Akzeptieren
          </button>
          <button className='p-3 text-sm font-bold text-black uppercase bg-white whitespace-nowrap' onClick={onDecline}>
            Ablehnen
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieBanner;
