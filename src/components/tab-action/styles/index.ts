import styled from '@emotion/styled';

import {
  ITabActionItemProps,
  ITabActionWrapperProps
} from '@components/tab-action/interface';
import { getColor } from '@styles/mixins';

export const TabsActionWrapper = styled.div<ITabActionWrapperProps>(
  ({ count }) => `
  align-items: center;
  background-color: ${getColor('white')};
  border-bottom: 1px solid ${getColor('gray')};
  box-shadow: 0 0px 1px rgba(40, 41, 61, 0.08), 0 2px 2px rgba(96, 97, 112, 0.08);
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(${count}, 1fr);
  height: 40px;
  rowGap: 0;
  width: 100%
`
);

export const TabActionItem = styled.div<ITabActionItemProps>(
  ({ active }) => `
  align-items: center;
  border-bottom: 2px solid ${active ? getColor('red') : 'transparent'};
  display: flex;
  height: 100%;
  justify-content: center;
`
);
