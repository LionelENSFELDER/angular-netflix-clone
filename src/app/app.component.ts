import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TmdbService } from './services/tmdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title: string = 'Netflix-clone';
  trendingMoviesThisWeek: Observable<any[]>;

  

  constructor(private _apiService: TmdbService){

  }

  async ngOnInit(){
    this.trendingMoviesThisWeek = this._apiService.trendingMovies;
    await this._apiService.load();
    console.log(this.trendingMoviesThisWeek);
  }
}
