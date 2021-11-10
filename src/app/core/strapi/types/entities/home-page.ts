import { ISection, ISEOTags } from '@app/core/strapi';

export interface IHomePage {
  id: number;
  seo: ISEOTags;
  mainSection: ISection;
  churchSection: ISection;
  sections: Array<ISection>;
}
