import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

import { HtmlHead } from '@app/components';
import { IPost, PostType } from '@app/core/strapi';
import { getPageProps, useMediaQuery } from '@app/core/utils';
import { StrapiDynamicZoneMap } from '@app/core/constants';
import { breakpoints } from '@app/core/theme/constants';

export function getStaticPathsPostsCreator(postType: PostType) {
  return async () => {
    const { data: posts } = await axios.get(`/posts?type=${postType}`)

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))

    return { paths, fallback: false }
  }
}

export const getStaticProps = getPageProps<{}>(async ({ params }) => {
  try {
    const { data: posts } = await axios.get(`/posts?slug=${params.slug}`);
    return { props: posts[0] };
  } catch (err) {}

  return { props: {} };
})

export const Post = (props: IPost) => {
  const [isLG] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  return (
    <Box>
      <HtmlHead title={props.title} seo={props.seo} />

      <Flex
        alignItems={'end'}
        bg={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.image.url}) center / cover`}
        color={'white'}
        h={{ base: 280, lg: 380 }}
        mb={50}
      >
        <Container maxW="container.lg" px={0}>
          <Heading
            as={'h1'}
            size={isLG ? '4xl' : '2xl'}
            fontWeight={500}
            mb={50}
            p={{ base: '0 20px', lg: '0' }}
          >
            {props.title}
          </Heading>
        </Container>
      </Flex>

      {props.content.map(({ component, ...content }, i) => {
        const Component: any = StrapiDynamicZoneMap[component];
        return (<Component key={i} {...content} />);
      })}
    </Box>
  );
};
