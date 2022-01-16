/**
 * Pokemon Evolution Item Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonEvolutionItem {
  images: string;
  name: string;
}

/**
 * Pokemon Evolution Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.2
 */
export interface IPokemonEvolution {
  after: IPokemonEvolutionItem;
  before: IPokemonEvolutionItem;
  requiredStep: string;
  type: string;
}
