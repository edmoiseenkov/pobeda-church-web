import { IButton, IStrapiMedia } from '@app/core/strapi';

export interface ISection {
  id: number;
  image: IStrapiMedia;
  text: string;
  buttons: Array<IButton>;
  isFullWidth: boolean;
}
