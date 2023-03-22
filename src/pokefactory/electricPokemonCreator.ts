import { PokemonCreator } from "./pokemonCreator";
import { PokemonInterface } from "../pokemons/pokemonInterface";
import { ElectricPokemon } from "../pokemons/electricPokemon";

/**
 * FirePokemonCreator
 */
export class ElectricPokemonCreator extends PokemonCreator {
  /**
   * constructor
   * @param id identificador del pokemon
   * @param name nombre del pokemon
   * @param level nivel del pokemon
   * @param evolutionStage etapa de evolucion del pokemon
   * @param health vida del pokemon
   * @param attack ataque del pokemon
   */
  constructor(
    public id: number,
    public name: string,
    public level: number,
    public evolutionStage: number,
    public health: number,
    public attack: number,
  ) {
    super(id, name, level, evolutionStage, health, attack);
  }

  /**
   * createPokemon - Creates a new ElectricPokemon
   * @returns PokemonInterface
   */
  public createPokemon(): PokemonInterface {
    return new ElectricPokemon(
      this.id,
      this.name,
      this.level,
      this.evolutionStage,
      this.health,
      this.attack
    );
  }
}