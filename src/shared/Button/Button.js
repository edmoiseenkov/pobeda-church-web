
import { useMemo } from 'react';
import styles from './Button.module.scss';

export const buttonVariants = {
    black: styles.black,
    white: styles.white,
    outline: styles.outline,
};

export function Button ({ children, variant = styles.black, component = 'button', ...rest }) {
    const Component = component;

    const buttonClass = useMemo(() => {
        return [styles.base, variant].join(' ');
    }, [variant]);

    return (<Component className={buttonClass} {...rest}>{children}</Component>);
}

export function Link ({ children, ...rest }) {
    return (<Button component={'a'} {...rest}>{children}</Button>);
}
