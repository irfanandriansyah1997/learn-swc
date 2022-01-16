/**
 * Formatted Value Interface
 *
 * @description this interface can be useful for transform raw data to formatted value, for example you can transform height,
 * weight attribute from graphql response to this type
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IFormattedValue {
  formattedValue: string;
  key: string;
  value: number;
}
