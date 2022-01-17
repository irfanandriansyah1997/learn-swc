import { COLOR } from './color';
import { FONT_FAMILY, FONT_SIZE } from './typography';

export const THEME_CONSTANT = {
  color: COLOR,
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE
  }
} as const;

export type IThemeConfig = typeof THEME_CONSTANT;
