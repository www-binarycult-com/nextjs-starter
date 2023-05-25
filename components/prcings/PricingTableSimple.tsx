import React from 'react';

type PricingCardProps = {
  title: string;
  oldPrice: string;
  newPrice: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
};

const PricingCard: React.FC<PricingCardProps> = ({ title, oldPrice, newPrice, features, buttonText, buttonLink }) => {
  return (
    <section className='flex flex-col justify-center antialiased bg-gray-900 text-gray-600 p-4'>
      <div className='h-full'>
        <div className='max-w-xs mx-auto'>
          <div className='relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5'>
            <header className='pb-4 mb-4 border-b border-indigo-200 border-opacity-30'>
              <h3 className='text-xl font-extrabold text-indigo-50 leading-snug mb-2'>{title}</h3>

              <div className='font-extrabold mb-1'>
                <span className='text-lg text-indigo-200 line-through'>{oldPrice} €</span>
                <br />
                <span className='text-4xl text-indigo-50'>{newPrice} €</span>
              </div>
              <div className='text-indigo-200'>Nur solange unsere Kapizitat es zulasst</div>
            </header>
            <ul className='text-indigo-200 text-sm space-y-2 flex-grow mb-6'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-center'>
                  <svg
                    className='w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={buttonLink}
              className='font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-green-400 hover:bg-green-500 text-white focus:outline-none focus-visible:ring-2'
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
