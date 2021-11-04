import { ThemeSizes } from '@app/core/theme';
import { ButtonIcon, ButtonIconPosition, ButtonStyle, ButtonTarget } from '@app/core/strapi';

export interface IButton {
  id: number;
  text: string;
  icon: ButtonIcon;
  iconPosition: ButtonIconPosition;
  target: ButtonTarget;
  link: string;
  configs?: Partial<{
    size: ThemeSizes;
  }>;
  style: ButtonStyle;
}
