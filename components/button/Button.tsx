import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  size?: 'cta' | 'landingCta';
  asButton?: boolean;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, size = 'cta', asButton = true, href, ...props }: ButtonProps) => {
  const classes = classNames('ctaButton transparent', className);

  if (!asButton) {
    return (
      <a href={href} className={classes}>
        <span className='ctaButtonSpan'>{children}</span>
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      <span className='ctaButtonSpan'>{children}</span>
    </button>
  );
};
