import { IImageSection, ISEOTags } from '@app/core/strapi';

export interface IHomePage {
  id: number;
  seo: ISEOTags;
  mainSection: IImageSection;
  churchSection: IImageSection;
  sections: Array<IImageSection>;
}
