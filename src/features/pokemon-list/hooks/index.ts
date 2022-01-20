import { useQuery } from '@apollo/client';
import type { Query, QueryPokemonsArgs as Args } from '@contract/graphql';
import { useCallback, useMemo, useRef, useState } from 'react';

import { usePagination } from '@hooks/pagination';
import { translatePokemonListToBasePokemon } from '@utils/adapter/basic-pokemon/pokemon-list.adapter';
import { logError } from '@utils/error';
import { IAppsError, MaybeType } from '@interface/general';
import { IBasePokemon } from '@interface/pokemon';

import * as GetPokemonList from './query/pokemon-list.graphql';
import { IPokemonListHooks } from './interface';

/**
 * Pokemon List Hooks
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description this hooks can be useful for get fetching data pokemon list from graphql services
 * @returns {IPokemonListHooks} response hooks
 * @since 0.0.2
 */
export const usePokemonList = (): IPokemonListHooks => {
  const [variables, setVariables] = useState<Args>({
    limit: 0,
    offset: 10
  });
  const [pokemons, setPokemons] = useState<IBasePokemon[]>([]);
  const error = useRef<MaybeType<IAppsError>>(undefined);

  const {
    action: { updateRangePagination },
    state: { enableLoadMore, offset }
  } = usePagination();

  const { loading } = useQuery<Pick<Query, 'pokemons'>, Args>(GetPokemonList, {
    onCompleted: ({ pokemons }) => {
      if (pokemons) {
        const { count, nextOffset, results } = pokemons;

        setPokemons((currentPokemon) => {
          return [
            ...currentPokemon,
            ...translatePokemonListToBasePokemon(results)
          ];
        });

        updateRangePagination({
          offset: nextOffset || 0,
          totalData: count || 0
        });
      }
    },
    onError: (e) => {
      if (e) error.current = logError(e, 'pokemon list hooks');
    },
    skip: false,
    variables
  });

  /**
   * Load More
   *
   * @description for simulate user get next data from graphql
   * @returns {void}
   * @since 0.0.2
   */
  const loadMore = useCallback(() => {
    if (enableLoadMore)
      setVariables((currentVariables) => ({ ...currentVariables, offset }));
  }, [enableLoadMore, offset]);

  return useMemo(() => {
    return {
      action: {
        loadMore
      },
      state: {
        error: error.current,
        loading,
        pokemons
      }
    };
  }, [loadMore, loading, pokemons]);
};
