// interfaz para tipo pokemon
export interface PokemonInterface {
  id: number;
  name: string;
  type: string;
  level: number;
  evolutionStage: number;
  health: number;
  attack: number;
  // tipo al que es debil 
  weakAgainst: string;
  // tipo al que es fuerte
  strongAgainst: string;
  //metodos
  basicAttack(): void;
  evolve(): void;
}