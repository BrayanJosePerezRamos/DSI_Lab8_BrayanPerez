import { Pokemon } from './pokemon';

export class GrassPokemon extends Pokemon {
  public weakAgainst: string;
  public strongAgainst: string;
  public type: string;
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
    this.strongAgainst = 'water';
    this.type = 'grass';
  }
}
