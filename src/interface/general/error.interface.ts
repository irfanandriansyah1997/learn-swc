export enum IAppsErrorType {
  network = 0,
  graphql = 1,
  others = 2,
  unknown = -1
}

/**
 * Apps Error Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description for defining custom error object based on apps requirements
 * @since 0.0.2
 */
export interface IAppsError {
  message: string;
  page: string;
  stackTrace?: string;
  type: IAppsErrorType;
}
