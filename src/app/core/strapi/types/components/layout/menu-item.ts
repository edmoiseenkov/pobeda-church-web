import { IPost } from '@app/core/strapi';

import { IButton } from './button';

export interface IMenuItem {
  id: number;
  name: string;
  post?: IPost;
  link?: IButton;
}
