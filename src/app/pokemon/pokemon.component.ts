import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { PokeapiService } from '../services/pokeapi.service';
import { Pokemon } from './pokemon';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pokemon',
  providers: [PokeapiService],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  private pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokeApi: PokeapiService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.pokeApi.getPokemon(params.get('name')))
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }
}
