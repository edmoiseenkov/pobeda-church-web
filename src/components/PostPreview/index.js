import PropTypes from 'prop-types';
import { useMemo, useContext } from 'react';

import { buttonVariants, Link } from '../Button';
import { LayoutContext } from '../../App';

import styles from './PostPreview.module.scss';

export default function PostPreview({
  title,
  img,
  text,
  isReverse,
  buttonText,
  buttonLink = '#',
  bgColor = 'white',
  buttonVariant,
}) {
  const { isMobile } = useContext(LayoutContext);

  const containerClassName = useMemo(() => {
    const classes = [styles.container];
    if (isReverse) {
      classes.push(styles.container__reversed);
    }
    return classes.join(' ');
  }, [isReverse]);

  return (
    <div className={containerClassName} style={{ background: bgColor }}>
      {!isMobile && (
        <div
          className={styles.image}
          style={{ background: `url(${img}) center / cover` }}
        />
      )}
      <div
        className={styles.content}
        style={
          isMobile
            ? {
                background: `linear-gradient(
                      rgba(0, 0, 0, 0.5),
                      rgba(0, 0, 0, 0.5)
                    ),
                    url(${img}) center / cover`,
              }
            : {}
        }
      >
        <div>
          <div dangerouslySetInnerHTML={{ __html: text }} />
          <Link
            href={buttonLink}
            variant={
              isMobile
                ? buttonVariants.white
                : buttonVariant || buttonVariants.black
            }
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

PostPreview.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isReverse: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string,
  bgColor: PropTypes.string,
  buttonVariant: PropTypes.string,
};
