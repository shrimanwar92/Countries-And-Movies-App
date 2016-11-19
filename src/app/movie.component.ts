import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [MovieService]
  //pipes: [TwitterDateWithTimePipe]
})

export class MovieComponent {
  errorMessage: string;
  //tweets: Tweet[];
  movies: any[];
  mode = 'Observable';

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  searchMovie(query) {
    //alert(query)
    this.movieService.searchMovieByName(query)
      .subscribe(
         movies => this.movies = movies,
         error =>  this.errorMessage = <any>error);
  }
}