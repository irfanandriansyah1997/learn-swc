import styled from '@emotion/styled';

import { IHeadingProps, ILabelProps, ITextProps } from '@styles/interface';
import { getColor, getFontFamily, getFontSize } from '@styles/mixins';

export const Text = styled.p<ITextProps>(
  ({
    color = 'secondary',
    fontSize = 'normal',
    fontWeight = 400,
    textAlign = 'left',
    theme
  }) => `
    color: ${getColor(color)({ theme })};
    font-family: ${getFontFamily('primary')({ theme })};
    font-size: ${getFontSize(fontSize)({ theme })};
    font-weight: ${fontWeight};
    margin: 0;
    text-align: ${textAlign};
  `
);

export const Label = styled.p<ILabelProps>(
  ({ textAlign = 'left' }) => `
  color: ${getColor('secondary')};
  font-family: ${getFontFamily('primary')};
  font-size: ${getFontSize('normal')};
  font-weight: 400;
  margin: 0;
  text-align: ${textAlign};
`
);

export const Heading = styled.p<IHeadingProps>(
  ({ color = 'primary', textAlign = 'left' }) => `
    color: ${getColor(color)};
    font-family: ${getFontFamily('primary')};
    font-size: ${getFontSize('medium')};
    font-weight: 700;
    margin: 24px 0 12px;
    text-align: ${textAlign};
  `
);

export const Badge = styled.div<{ color?: string }>(
  ({ color }) => `
  background-color: ${color !== undefined ? color : 'rgba(0, 0, 0, 0.25)'};
  border-radius: 20;
  color: ${getColor('white')};
  font-family: ${getFontFamily('primary')};
  font-size: ${getFontSize('text')};
  font-weight: 400;
  padding: 5px 10px;
`
);
