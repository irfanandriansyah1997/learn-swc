import { render } from 'react-dom';

import Homepage from '@components/homepage';
import { GraphqlProvider } from '@utils/graphql';

/**
 * Main Apps Component
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description main entrypoint apps component
 * @returns {JSX.Element} react elementss
 * @since 0.0.2
 */
const Apps = () => (
  <GraphqlProvider>
    <Homepage />
  </GraphqlProvider>
);

render(<Apps />, document.querySelector('#root'));
