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
        this.route.paramMap
          .switchMap(
            (params: ParamMap) => {
              // check if pokemon is in local database
              return this.db.getPokemonByName(params.get('name'))
                .then(
                  (storedPokemon) => {
                    // if exist, then return it
                    if ( storedPokemon ) {
                      return storedPokemon;
                    } else {
                      // otherwise, get pokemon from service
                      return this.pokeApi.getPokemon(params.get('name'))
                              .then(
                                ( newPokemon ) => {
                                  // and save pokemon in local database
                                  this.db.addPokemon(newPokemon);
                                  return newPokemon;
                                });
                    }
                  })
                .catch(
                  (error) => {
                      return Promise.reject(error);
                  });
            })
        .subscribe(
          (pokemon) => {
            this.pokemon = pokemon;
          });
      },
      (error) => {
        console.log(error);
      });

  }

  goBack(): void {
    this.location.back();
  }
}
