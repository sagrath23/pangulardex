import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonList } from '../services/pokemon.list';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokeindex',
  templateUrl: './pokeindex.component.html',
  styleUrls: ['./pokeindex.component.css'],
  providers: [PokeapiService]
})
export class PokeindexComponent implements OnInit {

  private pokemonsList: PokemonList[];
  private selectedPokemon: Pokemon;
  constructor(private pokeApi: PokeapiService) { }

  ngOnInit() {
    this.pokeApi.getPokemonsList().then((response) => { this.pokemonsList = response; });
  }

  getDetail(pokemon: PokemonList): void {
    this.pokeApi.getPokemon(pokemon.name).then((result) => {this.selectedPokemon = result; });
  }
}
