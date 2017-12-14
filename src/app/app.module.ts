import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokeindexComponent } from './pokeindex/pokeindex.component';

import { AppRoutingModule } from './routes/app-routing.module';

// PWA Improvement
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokeindexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [] // register service worker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
