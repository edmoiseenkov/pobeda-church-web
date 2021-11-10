import {
  ISEOTags,
  IStrapiMedia,
  StrapiComponent
} from '@app/core/strapi';
import { PostType } from '@app/core/strapi/enums';

export interface IPostContent {
  component: StrapiComponent;
  [key: string]: unknown;
}

export interface IPost {
  id: number;
  title: string;
  seo: ISEOTags;
  slug: string;
  type: PostType;
  content: Array<IPostContent>;
  image: IStrapiMedia;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}
