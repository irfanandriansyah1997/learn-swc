import type { IThemeConfig } from '@styles/constant';
import { COLOR } from '@styles/constant/color';
import { FONT_SIZE } from '@styles/constant/typography';
import type { IEmotionStyleProps } from '@styles/interface';
import { GenTypeAttribute } from '@interface/general';

type IColor = keyof IThemeConfig['color'];

type IFontFamily = keyof GenTypeAttribute<
  IThemeConfig['typography'],
  'fontFamily'
>;

type IFontSize = keyof GenTypeAttribute<IThemeConfig['typography'], 'fontSize'>;

/**
 * High Order Function Theme Props
 *
 * @param {(param: IThemeConfig) => T} func - anonymous function
 * @description this method can be useful for get theme attributes from ThemeProvider value
 * @returns {T} Formatted result
 * @since 0.0.3
 */
export const HOFThemeProps = <T>(func: (param: IThemeConfig) => T) => {
  return ({ theme }: IEmotionStyleProps) => {
    if (
      theme &&
      Object.prototype.hasOwnProperty.call(theme, 'color') &&
      Object.prototype.hasOwnProperty.call(theme, 'typography')
    ) {
      return func(theme as unknown as IThemeConfig);
    }

    throw new Error(
      'theme is not defined, please check theme provider is already wrap your component !'
    );
  };
};

/**
 * Get Color From Theme Constant
 *
 * @param {IColor} colorName - color name
 * @returns {string} color value from constant
 * @since 0.0.3
 */
export const getColor = (colorName: IColor) => {
  return HOFThemeProps(
    ({ color }: IThemeConfig) => color[colorName] || COLOR.black
  );
};

/**
 * Get Font Size From Theme Constant
 *
 * @param {IFontSize} fontSizePreset - font size preset based on the registered font face constant
 * @returns {string | number} font size pixel
 * @since 0.0.3
 */
export const getFontSize = (fontSizePreset: IFontSize) => {
  return HOFThemeProps(
    ({ typography: { fontSize } }: IThemeConfig) =>
      fontSize[fontSizePreset] || FONT_SIZE.normal
  );
};

/**
 * Get Font Face From Theme Constant
 *
 * @param {IFontFamily} fontFamilyPreset - font family key
 * @returns {string | number} font size pixel
 * @since 0.0.3
 */
export const getFontFamily = (fontFamilyPreset: IFontFamily) => {
  return HOFThemeProps(
    ({ typography: { fontFamily } }: IThemeConfig) =>
      fontFamily[fontFamilyPreset] || FONT_SIZE.normal
  );
};
