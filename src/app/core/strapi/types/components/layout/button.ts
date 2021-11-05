import { ThemeSizes } from '@app/core/theme';
import { ButtonIcon, ButtonIconPosition, ButtonStyle } from '@app/core/strapi';

export interface IButton {
  id: number;
  text: string;
  icon: ButtonIcon;
  iconPosition: ButtonIconPosition;
  link: string;
  configs?: Partial<{
    size: ThemeSizes;
  }>;
  style: ButtonStyle;
  openInNewWindow: boolean;
}
