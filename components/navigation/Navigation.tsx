import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerClassNames = classNames('fixed space-y-2 z-50', isOpen ? 'menu-open' : 'menu-closed');
  const menuClassNames = classNames(
    'fixed bg-primary w-full h-screen top-0 left-0 z-40 flex justify-center items-center',
    isOpen ? 'opacity-100' : 'opacity-0 hidden'
  );
  return (
    <menu>
      <button onClick={() => setIsOpen(!isOpen)} className={burgerClassNames}>
        <div className='w-8 h-1 bg-secondary'></div>
        <div className='w-8 h-1 bg-secondary'></div>
        <div className='w-8 h-1 bg-secondary'></div>
      </button>
      <div className={menuClassNames}>
        <div>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/#contact-form'>Kontankt</Link>
            </li>

            <li>
              <Link href='/dsgvo'>Datenschutz</Link>
            </li>

            <li>
              <Link href='/impressum'>Impressum</Link>
            </li>
          </ul>
        </div>
      </div>
    </menu>
  );
};
