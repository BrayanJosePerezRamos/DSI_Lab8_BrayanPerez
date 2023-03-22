import { Pokemon } from './pokemon';

export class ElectricPokemon extends Pokemon {
  public type: string;
  public weakAgainst: string;
  public strongAgainst: string;
  constructor(
    id: number,
    name: string,
    level: number,
    evolutionStage: number,
    health: number,
    attack: number,
  ) {
    super(id, name, level, evolutionStage, health, attack);
    this.weakAgainst = 'earth';
    this.strongAgainst = 'water';
    this.type = 'electric';
  }
}