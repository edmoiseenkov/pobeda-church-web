import { IMenuItem } from '@app/core/strapi';

export interface ISettings {
  id: number;
  menu: Array<IMenuItem>;
  instagram: string;
  telegram: string;
  facebook: string;
  youtube: string;
}
