import { Icon, IconProps } from '@chakra-ui/react';
import { LogoSVG } from '@assets/icons';

export const LogoIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 52 77" {...props}>
      <LogoSVG />
    </Icon>
  );
};
