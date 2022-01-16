import { Maybe, PokemonItem } from '@contract/graphql';

import { bulkVerifiedIsNotEmpty } from '@utils/general';
import { MaybeType } from '@interface/general';
import { IBasePokemon } from '@interface/pokemon';

type AdapterParameterType = Maybe<Maybe<PokemonItem>[]>;

/**
 * Translate Pokemon List To Base Pokemon
 *
 * @param {MaybeType<AdapterParameterType>} pokemons pokemon array from graphql response
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {IBasePokemon[]} formatted pokemon
 * @since 0.0.2
 */
export const translatePokemonListToBasePokemon = (
  pokemons: MaybeType<AdapterParameterType>
): IBasePokemon[] => {
  const response: IBasePokemon[] = [];

  if (pokemons && pokemons.length) {
    pokemons.forEach((pokemon) => {
      if (
        pokemon &&
        bulkVerifiedIsNotEmpty([pokemon.id, pokemon.name, pokemon.image])
      ) {
        const { id, image, name } = pokemon;

        response.push({
          id: id as number,
          image: image as string,
          name: name as string
        });
      }
    });
  }

  return response;
};
