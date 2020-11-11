import { useMemo, useContext } from 'react';
import styles from './PostPreview.module.scss';

import { buttonVariants, Link } from '../Button/Button';

import { LayoutContext } from '../../App'

export default function PostPreview({ title, img, text, isReverse, buttonText, buttonLink = '#', bgColor = 'white', buttonVariant }) {

   const { isMobile } = useContext(LayoutContext)

    const containerClassName = useMemo(() => {
        const classes = [styles.container];
        if (isReverse) {
            classes.push(styles.container__reversed)
        }
        return classes.join(' ');
    }, [isReverse])

    return (
        <div className={containerClassName} style={{ background: bgColor }}>
            {!isMobile && <div className={styles.image} style={{background: `url(${img}) center / cover`}}/>}
            <div className={styles.content} style={isMobile ? {
                background:
                  `linear-gradient(
                      rgba(0, 0, 0, 0.5),
                      rgba(0, 0, 0, 0.5)
                    ),
                    url(${img}) center / cover`
            } : {}}
            >
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link href={buttonLink} variant={isMobile ? buttonVariants.white : buttonVariant || buttonVariants.black}>{buttonText}</Link>
                </div>
            </div>
        </div>
    );
};
