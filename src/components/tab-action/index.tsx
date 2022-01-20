import { Text } from '@/styles';

import type { ITabActionProps } from './interface';
import { TabActionItem, TabsActionWrapper } from './styles';

/**
 * Tab Action Component
 *
 * @param {ITabActionProps} props tab action props
 * @returns {JSX.Element} react element
 * @since 0.0.3
 */
const TabAction = ({ active, list, on }: ITabActionProps) => (
  <TabsActionWrapper count={list.length}>
    {list.map(({ id, text }) => (
      <TabActionItem
        key={`${id}-${text}`}
        active={active === id}
        onClick={(e) => {
          e.preventDefault();
          on({
            event: 'on-change-index',
            payload: id
          });
        }}
      >
        <Text
          color={active === id ? 'red' : 'secondary'}
          fontWeight={500}
          fontSize="normal"
        >
          {text}
        </Text>
      </TabActionItem>
    ))}
  </TabsActionWrapper>
);

export default TabAction;
