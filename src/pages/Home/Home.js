import PropTypes from 'prop-types';
import Head from 'next/head';
import getConfig from 'next/config';

import PageIntro from '../../components/PageIntro/PageIntro';
import PostPreview from '../../components/PostPreview/PostPreview';
import { Button, buttonVariants } from '../../components/Button/Button';
import { ReactComponent as MapIcon } from '../../assets/icons/Maps.svg';
import Footer from '../../components/Footer/Footer';

import styles from './Home.module.scss';

const { publicRuntimeConfig } = getConfig();

const menuItems = [
  { name: 'Церковь', link: '#' },
  { name: 'Музыка', link: '#' },
  { name: 'Дети', link: '#' },
  { name: 'Молоджное', link: '#' },
];

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Церковь "Победа" г. Днепр</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageIntro />

      <ul className={styles.menu}>
        {menuItems.map((item, i) => (
          <li key={i}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className={styles.sundayService}>
        <div>
          <h2>Воскресное служение</h2>
          <p>в 11:00, добро пожаловать</p>
          <Button variant={buttonVariants.white} icon={() => <MapIcon />}>
            Посмотреть на карте
          </Button>
        </div>
      </div>
      {posts &&
        posts.map(({ title, content, btn, image, bgColor, id }, i) => (
          <PostPreview
            key={id}
            title={title}
            isReverse={i % 2}
            bgColor={bgColor}
            text={content}
            buttonText={btn}
            buttonLink={'#'}
            img={`${publicRuntimeConfig.strapiApi}${image.url}`}
          />
        ))}
      <Footer />
    </div>
  );
}

Home.propTypes = {
  posts: PropTypes.object,
};

export default Home;
