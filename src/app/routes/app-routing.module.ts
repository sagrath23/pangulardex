import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokeindexComponent } from '../pokeindex/pokeindex.component';
import { PokemonComponent } from '../pokemon/pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: PokeindexComponent },
  { path: 'pokemon/:name', component: PokemonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
