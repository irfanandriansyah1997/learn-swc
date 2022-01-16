export * from './error.interface';
export * from './formatted-value.interface';

/**
 * Maybe Type
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description This type can be useful for indicating the value can be undefined or can be of the type as defined in the T parameter
 * @example
 *
 * type A = Maybe<string> // For the result, the type will contain a string or undefined.
 * @since 0.0.2
 */
export type MaybeType<T> = T | undefined;

/**
 * Null Able Type
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description This type can be useful for indicating the value can be null or can be of the type as defined in the T parameter
 * @example
 *
 * type A = Maybe<string> // For the result, the type will contain a string or null.
 * @since 0.0.2
 */
export type NullAble<T> = T | null;
