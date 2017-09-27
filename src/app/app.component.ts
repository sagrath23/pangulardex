import { Component } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokeindexComponent } from './pokeindex/pokeindex.component';
import { Pokemon } from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedPokemon: Pokemon = {
    'name': 'bulbasaur',
    'weight': 69,
    'sprites': {
      'back_female': null,
      'back_shiny_female': null,
      'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      'front_female': null,
      'front_shiny_female': null,
      'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
    },
    'height': 7,
    'id': 1,
    'types': [{
      'slot': 2,
      'type': {
        'url': 'https://pokeapi.co/api/v2/type/4/',
        'name': 'poison'
      }
    },
    {
      'slot': 1,
      'type': {
        'url': 'https://pokeapi.co/api/v2/type/12/',
        'name': 'grass'
      }
    }]
  };
}
