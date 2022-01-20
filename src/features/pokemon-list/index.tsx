import styled from '@emotion/styled';

import { getColor } from '@styles/mixins';

import { usePokemonList } from './hooks';

const Image0 = styled.div`
  background: ${getColor('blue')};
  width: 100%;
  height: 10px;
  background-size: contain;
`;

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

  return (
    <div>
      <Image0></Image0>
    </div>
  );
};

export default PokemonListContainer;
