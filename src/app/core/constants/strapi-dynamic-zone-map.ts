import { Gallery, Section, Text, Video } from '@app/components';
import { StrapiComponent } from '@app/core/strapi';

export const StrapiDynamicZoneMap: Record<StrapiComponent, unknown> = {
  [StrapiComponent.GALLERY]: Gallery,
  [StrapiComponent.VIDEO]: Video,
  [StrapiComponent.TEXT]: Text,
  [StrapiComponent.SECTION]: Section,
};
