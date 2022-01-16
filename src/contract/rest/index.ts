/* eslint-disable @typescript-eslint/no-explicit-any */
interface Color {
  name: string;
  url: string;
}

interface EggGroup {
  name: string;
  url: string;
}

interface EvolutionChain {
  url: string;
}

interface Language {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

interface Language2 {
  name: string;
  url: string;
}

interface Genera {
  genus: string;
  language: Language2;
}

interface Generation {
  name: string;
  url: string;
}

interface GrowthRate {
  name: string;
  url: string;
}

interface Habitat {
  name: string;
  url: string;
}

interface Language3 {
  name: string;
  url: string;
}

interface Name {
  language: Language3;
  name: string;
}

interface Area {
  name: string;
  url: string;
}

interface PalParkEncounter {
  area: Area;
  base_score: number;
  rate: number;
}

interface Pokedex {
  name: string;
  url: string;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: Pokedex;
}

interface Shape {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
  url: string;
}

interface Variety {
  is_default: boolean;
  pokemon: Pokemon;
}

export interface ISpeciesResponse {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain;
  evolves_from_species?: any;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Shape;
  varieties: Variety[];
}
