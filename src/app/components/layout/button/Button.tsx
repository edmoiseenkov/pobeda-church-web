import { Button as ChakraButton } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import { useCallback, useMemo } from 'react';

import { Modal } from '@app/core/enums';
import { useModal } from '@app/core/providers';
import { IButton, ButtonIconPosition, ButtonStyle } from '@app/core/strapi';
import { ThemeSizes } from '@app/core/theme';

import { buttonIconsMap } from './constants';

export interface IButtonProps extends IButton {
  sx?: SystemStyleObject;
}

export const Button = (
  {
    text,
    icon,
    iconPosition,
    link = '',
    configs,
    style = ButtonStyle.DARK_SOLID,
    openInNewWindow,
    sx,
  }: IButtonProps
) => {
  const modal = useModal();

  const Icon = useMemo(() => buttonIconsMap[icon], [icon]);

  const handleClick = useCallback((e) => {
    if (link.substr(0, 7) === '#modal-') {
      e.preventDefault();
      const modalName = link.substr(7) as Modal;
      modal.open(modalName, configs?.modal?.props);
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
      size={configs?.size || ThemeSizes.xxl}
      sx={sx}
      onClick={handleClick}
    >{text}</ChakraButton>
  );
};
