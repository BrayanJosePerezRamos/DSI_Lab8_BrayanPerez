import { Pokemon } from './pokemon';

/**
 * @class FirePokemon
 * @extends Pokemon
 * @description Fire type pokemon class
 */
export class FirePokemon extends Pokemon {
  public weakAgainst: string;
  public strongAgainst: string;
  public type: string;
  /**
   * Constructor de la clase FirePokemon
   * @param id identificador del pokemon
   * @param name nombre del pokemon
   * @param level nivel del pokemon
   * @param evolutionStage etapa de evolucion del pokemon
   * @param health vida del pokemon
   * @param attack ataque del pokemon
   */
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
