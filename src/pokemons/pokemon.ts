import { PokemonInterface } from './pokemonInterface';
// clase pokemon
export abstract class Pokemon implements PokemonInterface {
  id: number;
  name: string;
  abstract type: string;
  level: number;
  evolutionStage: number;
  health: number;
  attack: number;
  abstract weakAgainst: string;
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