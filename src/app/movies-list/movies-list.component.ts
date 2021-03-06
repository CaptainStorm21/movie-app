import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [MoviesService]
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  getMovies(): void {
    this.moviesService.getMovies().
    then(movies => this.movies = movies);
  }

  ngOnInit() {
    this.getMovies();
  }

}
