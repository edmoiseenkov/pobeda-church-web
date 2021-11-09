import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import Head from 'next/head';

import { IPost, PostType } from '@app/core/strapi';
import { getPageProps } from '@app/core/utils';

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
  return (
    <Box>
      <Head>
        <title>{props.title} - Церковь "Победа" г. Днепр</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        alignItems={'end'}
        bg={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.image.url}) center / cover`}
        color={'white'}
        h={380}
      >
        <Container maxW="container.lg">
          <Heading as={'h1'} size={'4xl'} fontWeight={500} mb={50}>{props.title}</Heading>
        </Container>
      </Flex>

      <Container maxW="container.lg" paddingTop={50} px={0} fontSize={22}>

        {props.content.map((contentItem, i) => {
          return (
            <Box
              key={i}
              dangerouslySetInnerHTML={{ __html: (contentItem as any)?.body }}
              sx={{
                img: {
                  marginY: '60px',
                  transform: 'scale(1.1)',
                },
                p: {
                  marginBottom: '20px',
                  _last: {
                    marginBottom: 0
                  }
                },
              }}
            />
          );
        })}
      </Container>
    </Box>
  );
};
