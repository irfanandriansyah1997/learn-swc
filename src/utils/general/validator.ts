/**
 * Is Not Empty
 *
 * @param {unknown} param - parameter to be checked
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description validate parameter is not include empty string, null or undefined
 * @returns {boolean} is not contain empty string, null or undefined ?
 * @since 0.0.2
 */
export const isNotEmpty = (param: unknown): boolean =>
  [null, '', undefined].filter((item) => item === param).length === 0;

/**
 * Bulk Verified Is Not Empty
 *
 * @param {unknown[]} param - array parameter to be checked serialized
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {boolean} result checking process
 * @since 0.0.2
 */
export const bulkVerifiedIsNotEmpty = (param: unknown[]): boolean =>
  param.filter(isNotEmpty).length === param.length;
