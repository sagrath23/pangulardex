import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokeindex',
  templateUrl: './pokeindex.component.html',
  styleUrls: ['./pokeindex.component.css'],
  providers: [PokeapiService]
})
export class PokeindexComponent implements OnInit {

  private pokemonsList: Array<Pokemon>;
  constructor(private pokeApi: PokeapiService) { }

  ngOnInit() {
    this.pokemonsList = this.pokeApi.getPokemonsList();
  }

}
