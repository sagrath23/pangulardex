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
}
