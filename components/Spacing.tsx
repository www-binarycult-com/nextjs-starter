import classNames from 'classnames';

interface ISpacingProps {
  type: 'headline' | 'subheadline' | 'content' | 'section' | 'large';
}

export const Spacing = ({ type }: ISpacingProps) => {
  const classes = classNames(
    type === 'headline' && 'mt-10',
    type === 'subheadline' && 'mt-5',
    type === 'content' && 'mt-16',
    type === 'section' && 'mt-20',
    type === 'large' && 'mt-24'
  );
  return <div className={classes} />;
};
