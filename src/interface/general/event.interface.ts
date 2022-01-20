/**
 * Event Component Interface
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 0.0.3
 */
export type IEventComponent<E = string, P = undefined> = P extends undefined
  ? {
      event: E;
      payload?: P;
    }
  : {
      event: E;
      payload: P;
    };
