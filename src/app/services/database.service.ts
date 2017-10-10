import { Injectable, OnInit } from '@angular/core';

import { AngularIndexedDB } from 'angular2-indexeddb';
import { Pokemon } from '../pokemon/pokemon';

@Injectable()
export class DatabaseService {

  private db: AngularIndexedDB;

  constructor() {
    console.log('creating database...');
    this.db = new AngularIndexedDB('pokemonDb', 1);

    console.log('open local database');
    this.db.openDatabase(1, (event) => {
      const objectStore = event.currentTarget.result.createObjectStore(
        'pokemons', { keyPath: 'name' , autoIncrement: true });

      objectStore.createIndex('name', 'name', { unique: true });
    }).then(() => {
      console.log('local database opened');
    } );
  }

  getPokemonByName(pokemonName: string): Promise<Pokemon> {
    console.log('searching ' + pokemonName + ' in local database');
    return this.db.getByKey('pokemons', pokemonName).then(
      (pokemon) => {
        return pokemon;
      }, (error) => {
        console.log(error);
      });
  }

  addPokemon(pokemon: Pokemon): void {
    this.db.add('pokemons', pokemon).then(
      () => {
        console.log('pokemon added to localdatabase');
      },
      (error) => {
        console.log(error);
      });
  }
}
