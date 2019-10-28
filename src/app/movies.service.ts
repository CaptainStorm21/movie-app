import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './data-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Promise <Movie[]> {
    return Promise.resolve(MOVIES);
  }
}
