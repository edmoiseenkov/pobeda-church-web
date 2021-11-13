import { IButton, IStrapiMedia, SectionImagePosition } from '@app/core/strapi';

export interface ISection {
  id: number;
  image: IStrapiMedia;
  text: string;
  buttons: Array<IButton>;
  imagePosition: SectionImagePosition;
  backgroundColor: number;
}
