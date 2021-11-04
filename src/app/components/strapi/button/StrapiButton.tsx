import { Button as ChakraButton } from '@chakra-ui/react';
import { useMemo } from 'react';

import { IButton } from '@app/core/strapi/types';
import { ButtonIconPosition, ButtonTarget } from '@app/core/strapi/enums';

export const Button = (
  {
    text,
    icon,
    iconPosition,
    target,
    link,
    configs,
    style,
  }: IButton
) => {
  const Icon = useMemo(() => {
    return null; // TODO: provide icon
  }, [icon]);

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
      leftIcon={iconPosition === ButtonIconPosition.LEFT && <Icon />}
      rightIcon={iconPosition === ButtonIconPosition.RIGHT && <Icon />}
      variant={style} // TODO: sync styles
      {...configs}
    >{text}</ChakraButton>
  );
};
