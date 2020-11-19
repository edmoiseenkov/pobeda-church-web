
import { useMemo } from 'react';
import styles from './Button.module.scss';

export const buttonVariants = {
    black: styles.black,
    white: styles.white,
    outline: styles.outline,
};

export const Button = ({ children, variant = styles.black, component: Component  = 'button', icon: Icon, ...rest }) => {

    const buttonClass = useMemo(() => {
        return [styles.base, variant].join(' ');
    }, [variant]);

    return (
        <Component className={buttonClass} {...rest}>
            {Icon ? <Icon className={styles.icon} /> : null}
            {children}
        </Component>);
}

export const Link = ({ children, ...rest }) => {
    return (<Button component={'a'} {...rest}>{children}</Button>);
}
