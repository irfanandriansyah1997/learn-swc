import { Global, ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { BASIC_STYLE, THEME_CONSTANT } from './constant';

export * from './styles/general.styles';

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
    <ThemeProvider theme={{ ...THEME_CONSTANT }}>
      <Global styles={BASIC_STYLE}></Global>
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
