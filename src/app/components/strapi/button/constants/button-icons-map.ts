import { IconProps } from '@chakra-ui/react';
import React from 'react';

import { ButtonIcon } from '@app/core/strapi';
import * as icons from '@assets/icons';

export const buttonIconsMap: Record<ButtonIcon, React.FC<IconProps>> = {
  [ButtonIcon.LOCATION]: icons.LocationIcon,
  [ButtonIcon.VIDEO]: icons.YoutubeIcon,
}
