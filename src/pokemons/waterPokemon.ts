import { Pokemon } from './pokemon';

export class WaterPokemon extends Pokemon {
  public type: string;
  public weakAgainst: string;
  public strongAgainst: string;
  /**
   * Constructor de la clase WaterPokemon
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
    this.strongAgainst = 'electric';
    this.type = 'water';
  }
}