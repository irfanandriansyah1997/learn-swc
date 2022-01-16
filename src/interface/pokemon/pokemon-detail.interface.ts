import { IFormattedValue } from '@interface/general';

import { IBasePokemon } from './base-pokemon.interface';
import { IPokemonEvolution } from './pokemon-evolution.interface';
import { IPokemonStatsItem } from './pokemon-stats.interface';

/**
 * Pokemon Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemon extends IBasePokemon {
  ability: IPokemonAbilityItem[];
  about: string;
  evolution: IPokemonEvolution[];
  formattedAttribute: IPokemonFormattedAttribute;
  species: string[];
  stats: IPokemonStatsItem[];
  training: IPokemonTrainingItem[];
}

/**
 * Pokemon Formatted Attribute Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonFormattedAttribute {
  eggsCycle: IFormattedValue;
  eggsGroup: IFormattedValue[];
  height: IFormattedValue;
  weight: IFormattedValue;
}

/**
 * Pokemon Ability Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonAbilityItem {
  isHiddenAbility: boolean;
  name: string;
}

/**
 * Pokemon Training Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonTrainingItem {
  type: string;
  value: string;
}
