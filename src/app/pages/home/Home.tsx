import { Box, Button, Flex, Icon, IconProps } from '@chakra-ui/react';
import Head from 'next/head';
import getConfig from 'next/config';
import { useEffect } from 'react';

import { PostPreview } from '@app/components';
import { Footer } from '@app/layout';
import { LocationSVG } from '@assets/icons';

import { AskQuestion, BlackMenu, PageIntro } from './components';
import { sectionColors } from './constants';

const { publicRuntimeConfig } = getConfig();

// TODO: describe types
interface IHomeProps {
  homePage: any;
  settings: any;
}

const LocationIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <LocationSVG />
    </Icon>
  );
};

export const Home = ({ homePage = {}, settings }: IHomeProps) => {
  useEffect(() => {
    console.log('homePage', homePage);
  }, []);

  return (
    <Box>
      <Head>
        <title>Церковь "Победа" г. Днепр</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<PageIntro />*/}
      {/*<BlackMenu menu={settings.menu} />*/}

      {homePage.main_section && (
        <Flex
          alignItems={'center'}
          bg={{
            base: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${publicRuntimeConfig.strapiApi}${homePage.main_section.image.url}) center / cover
          `,
            lg: `
            linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url(${publicRuntimeConfig.strapiApi}${homePage.main_section.image.url}) center / cover
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
              dangerouslySetInnerHTML={{ __html: homePage.main_section.text }}
              sx={{
                marginBottom: '16px',
                p: {
                  fontSize: '28px',
                }
              }}
            />
            {(homePage.main_section.buttons || []).map((button, i) => (
              // TODO: set icon
              <Button key={i} leftIcon={<LocationIcon boxSize={8} />} variant={'solidReversed'} size={'xxl'}>
                {button.text}
              </Button>
            ))}
          </Box>
        </Flex>
      )}

      <PostPreview
        text={homePage.church_section.text}
        buttonText={homePage.church_section.buttons[0].text}
        buttonLink={homePage.church_section.buttons[0].link}
        img={`${publicRuntimeConfig.strapiApi}${homePage.church_section.image.url}`}
      />

      <AskQuestion />

      {(homePage.sections || []).map((section, i) => (
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
      <Footer settings={settings} />
    </Box>
  );
}
