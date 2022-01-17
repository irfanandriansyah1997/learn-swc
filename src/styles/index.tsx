import { ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { THEME_CONSTANT } from './constant';

/**
 * Style Provider
 *
 * @param {PropsWithChildren<unknown>} props - style provider props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 * @returns {JSX.Element} react element
 */
const StyleProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={{ ...THEME_CONSTANT }}>{children}</ThemeProvider>
  );
};

export default StyleProvider;
