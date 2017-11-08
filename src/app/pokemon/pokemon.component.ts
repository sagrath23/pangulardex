import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { PokeapiService } from '../services/pokeapi.service';
import { DatabaseService } from '../services/database.service';
import { Pokemon } from './pokemon';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pokemon',
  providers: [PokeapiService, DatabaseService],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  private pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private db: DatabaseService, private pokeApi: PokeapiService, private location: Location) { }

  ngOnInit(): void {
    this.db.openDatabase().then(
      (response) => {
        this.route.paramMap.switchMap(
          (params: ParamMap) => {
            // check if pokemon is in local database
            return this.searchPokemonInDatabase(params.get('name'));
          }).subscribe(
            (pokemon) => {
              this.pokemon = pokemon;
            });
      },
      (error) => {
        console.log(error);
      });
  }

  searchPokemonInDatabase(name: string): Promise<Pokemon> {
    return this.db.getPokemonByName(name).then((storedPokemon) => {
      if (storedPokemon) {
        return storedPokemon;
      } else {
        // otherwise, get pokemon from service
        return this.getPokemonFromService(name);
      }
    }).catch(
      (error) => {
        return Promise.reject(error);
      });
  }

  getPokemonFromService(name: string): Promise<Pokemon> {
    return this.pokeApi.getPokemon(name).then((newPokemon) => {
      return this.addPokemonToDatabase(newPokemon);
    });
  }

  addPokemonToDatabase(newPokemon: Pokemon): Promise<Pokemon> {
    this.db.addPokemon(newPokemon);
    return Promise.resolve(newPokemon);
  }

  goBack(): void {
    this.location.back();
  }
}
