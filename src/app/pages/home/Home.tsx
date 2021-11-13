import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

import { HtmlHead, Section } from '@app/components';
import { getPageProps } from '@app/core/utils';
import { IHomePage } from '@app/core/strapi';

import { AskQuestion } from './components';

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
      <HtmlHead seo={props.seo} />

      {/*<PageIntro />*/}
      {/*<BlackMenu menu={settings.menu} />*/}

      <Section {...(props.mainSection)} />
      <Section {...props.churchSection}/>

      {/*<AskQuestion />*/}

      {(props.sections || []).map((section, i) => (
        <Section key={i} {...section} />
      ))}
    </Box>
  );
}
