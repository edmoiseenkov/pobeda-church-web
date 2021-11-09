import { getStaticPathsPostsCreator } from '@app/pages/post';
import { PostType } from '@app/core/strapi';

export { Post as default, getStaticProps } from '@app/pages/post';

export const getStaticPaths = getStaticPathsPostsCreator(PostType.PAGE);
