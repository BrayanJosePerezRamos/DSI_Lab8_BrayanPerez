import 'mocha';
import {expect} from 'chai';
import { WaterPokemonCreator } from '../src/pokefactory/waterPokemonCreator';

describe('Water Pokemon Creator', () => {
  it('should create a water pokemon', () => {
    const firePokemonCreator = new WaterPokemonCreator( 1, 'Squirtle', 1, 1, 100, 15);
    const firePokemon = firePokemonCreator.createPokemon();
    expect(firePokemon.health).to.equal(100);
    expect(firePokemon.weakAgainst).to.equal('fire');
  });
})

// create and attack a water pokemon
describe('FirePokemonCreator atack', () => {
  it('should create and attack a water pokemon', () => {
      const firePokemonCreator = new WaterPokemonCreator( 1, 'Squirtle', 1, 1, 85, 15);
      const firePokemon = firePokemonCreator.createPokemon();
      firePokemon.basicAttack();
      expect(firePokemon.level).to.equal(2);
  });
})

// create and evolve a water pokemon
describe('FirePokemonCreator evolve', () => {
  it('should create and evolve a fire pokemon', () => {
      const firePokemonCreator = new WaterPokemonCreator( 1, 'Squirtle', 1, 1, 100, 15);
      const firePokemon = firePokemonCreator.createPokemonAndEvolve();
      expect(firePokemon.evolutionStage).to.equal(2);
  });
})

