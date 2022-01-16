import { usePokemonList } from './hooks';

/**
 * Pokemon List Componet
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description pokemon list container will be contain list of card pokemon from graphql response
 * @returns {JSX.Element} React element
 * @since 0.0.2
 */
const PokemonListContainer = () => {
  usePokemonList();

  return <div>Hello World</div>;
};

export default PokemonListContainer;
