import { Section, Text, Video } from '@app/components';
import { StrapiComponent } from '@app/core/strapi';

export const StrapiDynamicZoneMap: Record<StrapiComponent, unknown> = {
  [StrapiComponent.GALLERY]: null, // TODO: add gallery component
  [StrapiComponent.VIDEO]: Video,
  [StrapiComponent.TEXT]: Text,
  [StrapiComponent.SECTION]: Section,
};
