import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonList } from '../services/pokemon.list';

@Component({
  selector: 'app-pokeindex',
  templateUrl: './pokeindex.component.html',
  styleUrls: ['./pokeindex.component.css'],
  providers: [PokeapiService]
})
export class PokeindexComponent implements OnInit {

  private pokemonsList: PokemonList[];
  constructor(private pokeApi: PokeapiService) { }

  ngOnInit() {
    this.pokeApi.getPokemonsList().then((response) => { this.pokemonsList = response; });
  }

}
