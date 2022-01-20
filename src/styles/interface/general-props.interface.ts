import { Property } from 'csstype';

import type { IThemeConfig } from '@/styles/constant';

export type IColor = IThemeConfig['color'];
export type IFontSize = IThemeConfig['typography']['fontSize'];

/**
 * Grid Props Interface
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 0.0.3
 */
export interface IGridProps {
  rowGap: number;
  templates: string | string[];
}

interface IBaseTextProps {
  textAlign?: Property.TextAlign;
}

/**
 * Text Props Interface
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 0.0.3
 */
export interface ITextProps extends IBaseTextProps {
  color?: keyof IColor;
  fontSize?: keyof IFontSize;
  fontWeight?: Property.FontWeight;
}

/**
 * Label Props Interface
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 0.0.3
 */
export type ILabelProps = IBaseTextProps;

/**
 * Heading Props Interface
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 0.0.3
 */
export interface IHeadingProps extends IBaseTextProps {
  color?: keyof IColor;
}
