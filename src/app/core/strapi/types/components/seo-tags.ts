import { IStrapiMedia } from '../strapi-media';

export interface ISEOTags {
  id: number;
  title: string;
  description: string;
  keywords: string;
  image: IStrapiMedia;
}
