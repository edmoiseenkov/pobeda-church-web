import { Box } from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';

import { ImageSection } from '@app/components';
import { getPageProps } from '@app/core/utils';
import { IHomePage } from '@app/core/strapi';

import { AskQuestion } from './components';
import { sectionColors } from './constants';

export const getStaticProps = getPageProps<IHomePage>(async () => {
  try {
    const homePage = await axios.get('/home-page');
    return { props: homePage.data };
  } catch (err) {}

  return { props: {} };
})

export const Home = (props: IHomePage) => {
  return (
    <Box>
      {/*TODO: move Head to layout*/}
      <Head>
        <title>Церковь "Победа" г. Днепр</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<PageIntro />*/}
      {/*<BlackMenu menu={settings.menu} />*/}

      <ImageSection {...(props.mainSection)} />
      <ImageSection {...props.churchSection}/>

      <AskQuestion />

      {(props.sections || []).map((section, i) => (
        <ImageSection
          key={i}
          isRightSide={!(i % 2)}
          bgColor={sectionColors[(i + 1) % 4]}
          {...section}
        />
      ))}
    </Box>
  );
}
