import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CharactersListComponent,
    MovieComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
          {
            path: 'movies',
            component: MoviesListComponent
          },
          {
            path: 'characters',
            component: CharactersListComponent
          }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
