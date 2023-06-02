import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

export const Button = ({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classes = classNames(className, 'ctaButton');
  return (
    <button className={classes} {...props}>
      <span className='ctaButtonSpan'>{children}</span>
    </button>
  );
};
