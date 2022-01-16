/**
 * Pokemon Stats Type
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export enum IPokemonStatsType {
  attack = 'Attack',
  defense = 'Defense',
  hp = 'HP',
  'special-attack' = 'Spc. Attack',
  'special-defense' = 'Spc. Defense',
  speed = 'Speed'
}

/**
 * Pokemon Stats Item
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonStatsItem {
  percentage: number;
  type: IPokemonStatsType;
  value: number;
}
