import { Section, Text } from '@app/components';
import { StrapiComponent } from '@app/core/strapi';

export const StrapiDynamicZoneMap: Record<StrapiComponent, unknown> = {
  [StrapiComponent.GALLERY]: null, // TODO: add gallery component
  [StrapiComponent.VIDEO]: null, // TODO: add video component
  [StrapiComponent.TEXT]: Text,
  [StrapiComponent.SECTION]: Section,
};
