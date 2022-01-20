import { render } from 'react-dom';

import Header from '@components/header';
import { GraphqlProvider } from '@utils/graphql';
import PokemonListContainer from '@features/pokemon-list';

import StyleProvider from './styles';

/**
 * Main Apps Component
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description main entrypoint apps component
 * @returns {JSX.Element} react elementss
 * @since 0.0.2
 */
const Apps = () => {
  return (
    <GraphqlProvider>
      <StyleProvider>
        <Header />
        <PokemonListContainer />
      </StyleProvider>
    </GraphqlProvider>
  );
};

render(<Apps />, document.querySelector('#root'));
