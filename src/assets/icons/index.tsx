import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

const createIconComponent = (iconPath, viewBox?) => {
  const IconSVG = require(`${iconPath}`).ReactComponent;
  return (props: IconProps) => (
    <Icon viewBox={viewBox} {...props}>
      <IconSVG />
    </Icon>
  );
}

export const ArrowHomeIcon = createIconComponent('./arrow-home.svg');
export const ArrowInFooterIcon = createIconComponent('./arrow-in-footer.svg');
export const ArrowLeftIcon = createIconComponent('./arrow-left.svg');
export const ArrowRightIcon = createIconComponent('./arrow-right.svg');
export const LocationIcon = createIconComponent('./location.svg');
export const LogoIcon = createIconComponent('./logo.svg', '0 0 52 77');
export const MenuIcon = createIconComponent('./menu.svg');
export const TelegramIcon = createIconComponent('./telegram.svg');
export const YoutubeIcon = createIconComponent('./youtube.svg');
export const FacebookIcon = createIconComponent('./facebook.svg');
export const InstagramIcon = createIconComponent('./instagram.svg');
