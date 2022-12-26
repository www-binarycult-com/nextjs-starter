import classNames from 'classnames';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerClassNames = classNames('fixed space-y-2 z-50', isOpen ? 'menu-open' : 'menu-closed');
  const menuClassNames = classNames(
    'fixed bg-yellow-400 w-full h-screen top-0 left-0 z-40 flex justify-center items-center',
    isOpen ? 'opacity-100' : 'opacity-0 hidden'
  );
  return (
    <menu>
      <button onClick={() => setIsOpen(!isOpen)} className={burgerClassNames}>
        <div className='w-8 h-1 bg-black'></div>
        <div className='w-8 h-1 bg-black'></div>
        <div className='w-8 h-1 bg-black'></div>
      </button>
      <div className={menuClassNames}>
        <div>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/#contact-form'>Kontankt</a>
            </li>
          </ul>
        </div>
      </div>
    </menu>
  );
};
