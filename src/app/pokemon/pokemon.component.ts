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
    this.route.paramMap
      .switchMap(
        (params: ParamMap) => {
          // check if pokemon is in local database
          return this.db.getPokemonByName(params.get('name'))
            .then(
              (pokemon) => pokemon,
              (error) => {
                return this.pokeApi.getPokemon(params.get('name'));
              });
        })
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }
}
