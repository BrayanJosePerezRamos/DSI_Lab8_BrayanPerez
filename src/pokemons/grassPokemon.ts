import { Pokemon } from './pokemon';

/**
 * GrassPokemon class that extends Pokemon class
 */
export class GrassPokemon extends Pokemon {
  public weakAgainst: string;
  public strongAgainst: string;
  public type: string;
  /**
   * Constructor de la clase GrassPokemon
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
    this.weakAgainst = 'fire';
    this.strongAgainst = 'water';
    this.type = 'grass';
  }
}
