import { Button as ChakraButton, Icon, IconProps } from '@chakra-ui/react';
import { useMemo } from 'react';

import { IButton } from '@app/core/strapi/types';
import { ButtonIcon, ButtonIconPosition, ButtonStyle, ButtonTarget } from '@app/core/strapi/enums';
import { LocationSVG } from '@assets/icons';

const LocationIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <LocationSVG />
    </Icon>
  );
};

// TODO: provide icons
const icons = {
  [ButtonIcon.LOCATION]: LocationIcon,
};

export const Button = (
  {
    text,
    icon,
    iconPosition,
    target,
    link,
    configs,
    style = ButtonStyle.DARK_SOLID,
  }: IButton
) => {
  const Icon = useMemo(() => icons[icon], [icon]);

  const openIn = useMemo(() => {
    switch (target) {
      case ButtonTarget.NEW_WINDOW: return '_blank';
      case ButtonTarget.MODAL_WINDOW: return ''; // TODO
      default: return '_self';
    }
  }, [target]);

  return (
    <ChakraButton
      as={'a'}
      href={link}
      target={openIn}
      leftIcon={icon && iconPosition === ButtonIconPosition.LEFT && <Icon boxSize={8} />}
      rightIcon={icon && iconPosition === ButtonIconPosition.RIGHT && <Icon boxSize={8} />}
      variant={style}
      {...configs}
    >{text}</ChakraButton>
  );
};
