import { Button as ChakraButton } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';

import { IButton, ButtonIconPosition, ButtonStyle } from '@app/core/strapi';
import { ThemeSizes } from '@app/core/theme';

import { buttonIconsMap } from './constants';

export const Button = (
  {
    text,
    icon,
    iconPosition,
    link = '',
    configs,
    style = ButtonStyle.DARK_SOLID,
    openInNewWindow,
  }: IButton
) => {
  const Icon = useMemo(() => buttonIconsMap[icon], [icon]);

  const handleClick = useCallback((e) => {
    if (link.substr(0, 7) === '#modal-') {
      e.preventDefault();
      const modalName = link.substr(7);
      // TODO: provide possibility to open modal
      console.log(`Open modal with name: ${modalName}`);
    }
  }, [link]);

  return (
    <ChakraButton
      as={'a'}
      href={link}
      target={openInNewWindow ? '_blank' : '_self'}
      leftIcon={icon && iconPosition === ButtonIconPosition.LEFT && <Icon boxSize={8} />}
      rightIcon={icon && iconPosition === ButtonIconPosition.RIGHT && <Icon boxSize={8} />}
      variant={style}
      size={configs.size || ThemeSizes.xxl}
      onClick={handleClick}
    >{text}</ChakraButton>
  );
};
