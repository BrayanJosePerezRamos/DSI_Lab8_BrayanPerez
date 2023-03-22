import 'mocha';
import {expect} from 'chai';
import {FirePokemonCreator} from '../src/pokefactory/firePokemonCreator';

describe('FirePokemonCreator', () => {
    it('should create a fire pokemon', () => {
        const firePokemonCreator = new FirePokemonCreator( 1, 'Charmander', 1, 1, 100, 15);
        const firePokemon = firePokemonCreator.createPokemon();
        expect(firePokemon.health).to.equal(100);
        expect(firePokemon.weakAgainst).to.equal('water');
    });
})

// create and evolve a fire pokemon
describe('FirePokemonCreator evolve', () => {
    it('should create and evolve a fire pokemon', () => {
        const firePokemonCreator = new FirePokemonCreator( 1, 'Charmander', 1, 1, 100, 15);
        const firePokemon = firePokemonCreator.createPokemonAndEvolve();
        expect(firePokemon.evolutionStage).to.equal(2);
    });
})

// create and attack a fire pokemon
describe('FirePokemonCreator atack', () => {
    it('should create and attack a fire pokemon', () => {
        const firePokemonCreator = new FirePokemonCreator( 1, 'Charmander', 1, 1, 85, 15);
        const firePokemon = firePokemonCreator.createPokemon();
        firePokemon.basicAttack();
        expect(firePokemon.level).to.equal(2);
    });
})

