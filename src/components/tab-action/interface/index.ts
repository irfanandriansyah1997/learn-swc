import { IEventComponent } from '@interface/general';

export type IEventOnChangeIndex = IEventComponent<'on-change-index', number>;

export type ITabActionEvent = (event: IEventOnChangeIndex) => void;

/**
 * Tab List Item Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.3
 */
export interface ITabListItem {
  id: number;
  text: string;
}

/**
 * Tab Action Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.3
 */
export interface ITabActionProps {
  active: number;
  list: ITabListItem[];
  on: ITabActionEvent;
}

/**
 * Tab Action Wrapper Props
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 0.0.3
 */
export interface ITabActionWrapperProps {
  count: number;
}

/**
 * Tab Action Item Props
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 0.0.3
 */
export interface ITabActionItemProps {
  active: boolean;
}
