import axios from 'axios';
import { Box, Button, Flex, Icon, IconProps } from '@chakra-ui/react';
import Head from 'next/head';
import getConfig from 'next/config';
import { useEffect } from 'react';

import { PostPreview, Footer } from '@app/components';
import { getPageProps } from '@app/core/utils';
import { IHomePage } from '@app/core/strapi';
import { LocationSVG } from '@assets/icons';

import { AskQuestion, BlackMenu, PageIntro } from './components';
import { sectionColors } from './constants';

const { publicRuntimeConfig } = getConfig();

const LocationIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <LocationSVG />
    </Icon>
  );
};

export const getStaticProps = getPageProps<IHomePage>(async () => {
  try {
    const homePage = await axios.get('/home-page');
    return { props: homePage.data };
  } catch (err) {}

  return { props: {} };
})

export const Home = (props: IHomePage) => {
  useEffect(() => {
    console.log('Home props:', props);
  }, []);

  return (
    <Box>
      <Head>
        <title>Церковь "Победа" г. Днепр</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<PageIntro />*/}
      {/*<BlackMenu menu={settings.menu} />*/}

      {props.mainSection && (
        <Flex
          alignItems={'center'}
          bg={{
            base: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${publicRuntimeConfig.strapiApi}${props.mainSection.image.url}) center / cover
          `,
            lg: `
            linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url(${publicRuntimeConfig.strapiApi}${props.mainSection.image.url}) center / cover
          `,
          }}
          color={'white'}
          height={'100vh'}
          minH={700}
          justifyContent={'center'}
          p={15}
          textAlign={'center'}
        >
          <Box>
            <Box
              dangerouslySetInnerHTML={{ __html: props.mainSection.text }}
              sx={{
                marginBottom: '16px',
                p: {
                  fontSize: '28px',
                }
              }}
            />
            {(props.mainSection.buttons || []).map((button, i) => (
              // TODO: set icon
              <Button key={i} leftIcon={<LocationIcon boxSize={8} />} variant={'solidReversed'} size={'xxl'}>
                {button.text}
              </Button>
            ))}
          </Box>
        </Flex>
      )}

      <PostPreview
        text={props.churchSection.text}
        buttonText={props.churchSection.buttons[0].text}
        buttonLink={props.churchSection.buttons[0].link}
        img={`${publicRuntimeConfig.strapiApi}${props.churchSection.image.url}`}
      />

      <AskQuestion />

      {(props.sections || []).map((section, i) => (
        // TODO: rename & improve (rewrite)
        <PostPreview
          key={i}
          isReverse={!(i % 2)}
          bgColor={sectionColors[(i + 1) % 4]}
          text={section.text}
          buttonText={section.buttons[0].text}
          buttonLink={section.buttons[0].link}
          img={`${publicRuntimeConfig.strapiApi}${section.image.url}`}
        />
      ))}
      <Footer />
    </Box>
  );
}
