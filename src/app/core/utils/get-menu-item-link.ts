import { IMenuItem, PostType } from '@app/core/strapi';

export const getMenuItemLink = (item: IMenuItem) => {
  if (item.post) {
    return `${item.post.type === PostType.POST ? '/posts' : ''}/${item.post.slug}`;
  } else if (item.link) {
    return item.link.link;
  }

  return '';
};
