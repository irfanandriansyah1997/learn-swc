import { Theme } from '@emotion/react';

import type { IThemeConfig } from '@styles/constant';

export * from './general-props.interface';

/**
 * Style Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.3
 */
export interface IStyleProps {
  theme: IThemeConfig;
}

/**
 * Emotion Style Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.3
 */
export interface IEmotionStyleProps {
  theme: Theme;
}
