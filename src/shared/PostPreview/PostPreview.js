
import { useMemo } from 'react';
import styles from './PostPreview.module.scss';
import { Link } from '../Button/Button';

export default function PostPreview({ title, img, text, isReverse, buttonText, buttonLink = '#', bgColor = 'white', buttonVariant }) {

    const containerClassName = useMemo(() => {
        const classes = [styles.container];
        if (isReverse) {
            classes.push(styles.container__reversed)
        }
        return classes.join(' ');
    }, [isReverse])

    return (
        <div className={containerClassName} style={{ background: bgColor }}>
            <div className={styles.image} style={{ background: `url(${img}) center / cover` }}></div>
            <div className={styles.content}>
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link href={buttonLink} variant={buttonVariant}>{buttonText}</Link>
                </div>
            </div>
        </div>
    );
};
