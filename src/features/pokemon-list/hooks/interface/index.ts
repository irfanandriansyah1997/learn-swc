import { IAppsError } from '@interface/general';
import { IBasePokemon } from '@interface/pokemon';

/**
 * Pokemon List Hooks Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonListHooks {
  action: IPokemonListHooksAction;
  state: IPokemonListHooksState;
}

/**
 * Pokemon List Hooks State Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonListHooksState {
  error?: IAppsError;
  loading: boolean;
  pokemons: IBasePokemon[];
}

/**
 * Pokemon List Hooks Action Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonListHooksAction {
  loadMore(): void;
}
