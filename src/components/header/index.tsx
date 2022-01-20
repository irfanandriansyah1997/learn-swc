import { useCallback, useState } from 'react';

import TabAction from '@components/tab-action';
import {
  ITabActionEvent,
  ITabListItem
} from '@components/tab-action/interface';

import { HeaderWrapper } from './styles';

const TAB_LIST: ITabListItem[] = [
  {
    id: 0,
    text: 'Pokedex List'
  },
  {
    id: 1,
    text: 'My Pokemon'
  }
];

/**
 * Header Component
 *
 * @returns {JSX.Element} react element
 * @since 0.0.3
 */
const Header = () => {
  const [tabSelection, registerTabSelection] = useState(0);

  /**
   * Event Handler Tab Action
   *
   * @param {IEventOnChangeIndex} event
   * @returns {void}
   */
  const eventHandlerTabAction: ITabActionEvent = useCallback(
    ({ event, payload }) => {
      if (event === 'on-change-index') {
        registerTabSelection(payload);
      }
    },
    []
  );

  return (
    <HeaderWrapper>
      <img
        loading="lazy"
        src="https://i.ibb.co/bBTTVbp/logo.png"
        alt="Pokedex Apps"
      />
      <TabAction
        active={tabSelection}
        list={TAB_LIST}
        on={eventHandlerTabAction}
      />
    </HeaderWrapper>
  );
};

export default Header;
