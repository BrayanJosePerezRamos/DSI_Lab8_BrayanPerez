import { Pokemon } from './pokemon';

export class WaterPokemon extends Pokemon {
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
    this.weakAgainst = 'fire';
    this.strongAgainst = 'electric';
    this.type = 'water';
  }
}