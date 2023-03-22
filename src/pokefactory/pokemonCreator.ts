import { PokemonInterface } from '../pokemons/pokemonInterface';
/**
 * Clase abstracta para crear pokemon
 */
export abstract class PokemonCreator {
  /**
   * Constructor de la clase
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
  ) {}
  /**
   * Metodo abstracto para crear pokemon
   * @returns PokemonInterface pokemon creado
   */
  public abstract createPokemon(): PokemonInterface;

  /**
   * Metodo para crear pokemon y evolucionarlo
   * @returns PokemonInterface pokemon creado y evolucionado
   */
  public createPokemonAndEvolve(): PokemonInterface {
    const pokemon = this.createPokemon();
    pokemon.evolve();
    return pokemon;
  }

  /**
   * Metodo para crear pokemon y atacar
   * @returns PokemonInterface pokemon creado y atacado
   */
  public createPokemonAndAttack(): PokemonInterface {
    const pokemon = this.createPokemon();
    pokemon.basicAttack();
    return pokemon;
  }
}