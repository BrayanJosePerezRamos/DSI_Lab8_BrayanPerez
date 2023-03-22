import { PokemonInterface } from './pokemonInterface';

/**
 * Clase base Pokemon
 */
export abstract class Pokemon implements PokemonInterface {
  id: number;
  name: string;
  // el tipo se implementa en las clases hijas
  abstract type: string;
  level: number;
  evolutionStage: number;
  health: number;
  attack: number;
  // tipo al que es debil se implementa en las clases hijas
  abstract weakAgainst: string;
  // tipo al que es fuerte se implementa en las clases hijas
  abstract strongAgainst: string;
  constructor(
    id: number,
    name: string,
    level: number,
    evolutionStage: number,
    health: number,
    attack: number,
  ) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.evolutionStage = evolutionStage;
    this.health = health;
    this.attack = attack;
  }
  basicAttack() {
    this.level++;
    console.log('Basic attack');
  }
  evolve() {
    this.evolutionStage++;
    console.log('Evolve');
  }
}