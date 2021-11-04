import { IStrapiMedia } from '../strapi-media';

export interface IGallery {
  photos: Array<IStrapiMedia>;
  configs: {};
}
