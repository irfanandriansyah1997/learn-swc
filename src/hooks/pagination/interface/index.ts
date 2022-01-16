/**
 * Base Pagination State Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IBasePaginationState {
  offset: number;
  totalData: number;
}

/**
 * Pagination Hooks State Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPaginationHooksState extends IBasePaginationState {
  enableLoadMore: boolean;
}

/**
 * Pagination Hooks Action Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPaginationHooksAction {
  updateRangePagination(param: IBasePaginationState): void;
}

/**
 * Pagination Hooks Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPaginationHooks {
  action: IPaginationHooksAction;
  state: IPaginationHooksState;
}
