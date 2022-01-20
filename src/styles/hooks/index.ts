import { useTheme } from '@emotion/react';

import type { IThemeConfig } from '@styles/constant';

/**
 * Use Apps Theme
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description get constant theme from theme provider
 * @returns {IThemeConfig} theme value
 * @since 0.0.2
 */
export const useAppsTheme = (): IThemeConfig => {
  const theme = useTheme();

  if (theme === undefined)
    throw new Error('useAppsTheme must be used within the StyleProvider');

  return theme as IThemeConfig;
};
