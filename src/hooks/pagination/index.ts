import { useCallback, useMemo, useState } from 'react';

import { IBasePaginationState, IPaginationHooks } from './interface';

/**
 * Pagination Hooks
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description custom hooks for simulate pagination with implemented infinite scroll mode
 * @returns {IPaginationHooks} result of pagination hooks will be consist of action and state related pagination functionality
 * @since 0.0.2
 */
export const usePagination = (): IPaginationHooks => {
  const [offset, setOffset] = useState(0);
  const [totalData, setTotalData] = useState(0);

  /**
   * Update Range State
   *
   * @param {IPaginationBaseState} param - base pagination state
   * @returns {void}
   */
  const updateRange = useCallback(
    ({
      offset: nextOffset,
      totalData: nextTotalData
    }: IBasePaginationState): void => {
      setOffset((currentOffset) => {
        if (currentOffset !== nextOffset) return nextOffset;

        return currentOffset;
      });

      setTotalData((currentTotalData) => {
        if (currentTotalData !== nextTotalData) return nextTotalData;

        return currentTotalData;
      });
    },
    []
  );

  const enableLoadMore = useMemo(
    () => offset <= totalData,
    [offset, totalData]
  );

  return useMemo(
    (): IPaginationHooks => ({
      action: {
        updateRangePagination: updateRange
      },
      state: {
        enableLoadMore,
        offset,
        totalData
      }
    }),
    [enableLoadMore, offset, totalData, updateRange]
  );
};
