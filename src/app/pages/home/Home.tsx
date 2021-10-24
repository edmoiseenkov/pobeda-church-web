import Head from 'next/head';
import getConfig from 'next/config';
import { useEffect } from 'react';

import { PageIntro, PostPreview } from '@app/components';
import { Button, buttonVariants, Footer } from '@app/layout';
import { LocationSVG } from '@assets/icons';

import styles from './Home.module.scss';

const { publicRuntimeConfig } = getConfig();

export const Home = ({ homePage, settings }) => {
  useEffect(() => {
    console.log('homePage', homePage);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Церковь "Победа" г. Днепр</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<PageIntro />*/}

      {/*<ul className={styles.menu}>*/}
      {/*  {settings && settings.menu && settings.menu.map((item, i) => (*/}
      {/*    <li key={i}>*/}
      {/*      <a href={item.link ? item.link.link : 'javascript: void(0);'}>{item.name}</a>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      <div className={styles.sundayService}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: homePage.main_section.text }} />
          {homePage.main_section.buttons && homePage.main_section.buttons.map((button, i) => (
            // TODO: set icon
            <Button key={i} variant={buttonVariants.white} icon={() => <LocationSVG />}>
              {button.text}
            </Button>
          ))}
        </div>
      </div>

      {homePage && homePage.sections && homePage.sections.map((section, i) => (
        // TODO: rename & improve (rewrite)
        <PostPreview
          key={i}
          title={''}
          isReverse={!(i % 2)}
          bgColor={'white'}
          text={section.text}
          buttonText={section.buttons[0].text}
          buttonLink={section.buttons[0].link}
          img={`${publicRuntimeConfig.strapiApi}${section.image.url}`}
        />
      ))}
      <Footer settings={settings} />
    </div>
  );
}
