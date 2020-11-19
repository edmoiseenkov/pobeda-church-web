import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styles from './Button.module.scss';

export const buttonVariants = {
  black: styles.black,
  white: styles.white,
  outline: styles.outline,
};

export const Button = ({
  children,
  variant = styles.black,
  component: Component = 'button',
  icon: Icon,
  ...rest
}) => {
  const buttonClass = useMemo(() => {
    return [styles.base, variant].join(' ');
  }, [variant]);

  return (
    <Component className={buttonClass} {...rest}>
      {Icon ? <Icon className={styles.icon} /> : null}
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  component: PropTypes.string,
  icon: PropTypes.func,
};

export const Link = ({ children, ...rest }) => {
  return (
    <Button component={'a'} {...rest}>
      {children}
    </Button>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
};
