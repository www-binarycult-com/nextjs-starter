import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = { size?: 'cta' | 'landingCta' } & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, size = 'cta', ...props }: ButtonProps) => {
  const classes = classNames(className, 'ctaButton');
  return (
    <button className={classes} {...props}>
      <span className='ctaButtonSpan'>{children}</span>
    </button>
  );
};
