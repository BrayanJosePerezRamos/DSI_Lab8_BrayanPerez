import { PokemonInterface } from '../pokemons/pokemonInterface';
// clase abstracta para crear pokemon factory method
export abstract class PokemonCreator {
  constructor( 
    public id: number,
    public name: string,
    public level: number,
    public evolutionStage: number,
    public health: number,
    public attack: number,
  ) {}
  public abstract createPokemon(): PokemonInterface;

  public createPokemonAndEvolve(): PokemonInterface {
    const pokemon = this.createPokemon();
    pokemon.evolve();
    return pokemon;
  }

  public createPokemonAndAttack(): PokemonInterface {
    const pokemon = this.createPokemon();
    pokemon.basicAttack();
    return pokemon;
  }
}