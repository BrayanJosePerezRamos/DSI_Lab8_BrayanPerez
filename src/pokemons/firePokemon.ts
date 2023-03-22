import { Pokemon } from './pokemon';

export class FirePokemon extends Pokemon {
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
    this.weakAgainst = 'water';
    this.strongAgainst = 'grass';
    this.type = 'fire';
  }
}
