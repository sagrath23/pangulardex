import { Injectable } from '@angular/core';
import { PokemonList } from './pokemon.list';

@Injectable()
export class PokeapiService {

  constructor() { }

  getPokemonsList(): Array<PokemonList> {
    const result: Array<PokemonList> = [{
      'url': 'https://pokeapi.co/api/v2/pokemon-form/1/',
      'name': 'bulbasaur'
    }];
    return result;
  }
}
