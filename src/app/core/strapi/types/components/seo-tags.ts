import { IStrapiMedia } from '../strapi-media';

export interface ISEOTags {
  id: number;
  description: string;
  keywords: string;
  image: IStrapiMedia;
}
