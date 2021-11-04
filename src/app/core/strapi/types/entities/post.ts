import { IGallery, IImage, IImageSection, ISEOTags, IText, IVideo } from '@app/core/strapi';
import { PostType } from '@app/core/strapi/enums';

export interface IPost {
  id: number;
  title: string;
  seo: ISEOTags;
  slug: string;
  type: PostType;
  content: Array<IGallery | IImageSection | IImage | IVideo | IText>;
}
