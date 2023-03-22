import 'mocha';
import {expect} from 'chai';
import {GrassPokemonCreator} from '../src/pokefactory/grassPokemonCreator';

describe('GrassPokemonCreator', () => {
  it('should create a grass pokemon', () => {
    const firePokemonCreator = new GrassPokemonCreator( 1, 'bulbasour', 1, 1, 100, 15);
    const firePokemon = firePokemonCreator.createPokemon();
    expect(firePokemon.health).to.equal(100);
    expect(firePokemon.weakAgainst).to.equal('fire');
  });
})

// create and evolve a grass pokemon
describe('GrassPokemon evolve', () => {
  it('should create and evolve a fire pokemon', () => {
      const firePokemonCreator = new GrassPokemonCreator( 1, 'Bulbasour', 1, 1, 100, 15);
      const firePokemon = firePokemonCreator.createPokemonAndEvolve();
      expect(firePokemon.evolutionStage).to.equal(2);
  });
})

// create and atack a grass pokemon
describe('GrassPokemon atack', () => {
  it('should create and attack a fire pokemon', () => {
    const firePokemonCreator = new GrassPokemonCreator( 1, 'Bulbasour', 1, 1, 85, 15);
    const firePokemon = firePokemonCreator.createPokemon();
    firePokemon.basicAttack();
    expect(firePokemon.level).to.equal(2);
  });
})
