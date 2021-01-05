import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//@Injectable()
export class TmdbService {

  private _trendingMovies: BehaviorSubject<any[]> = new BehaviorSubject(null);
  public trendingMovies: Observable<any[]> = this._trendingMovies.asObservable();
  
  constructor(private _http: HttpClient) {
  }

  async load(){
    const { results = [] } = await this._http
      .get(environment.trendingMoviesWeekUrl + environment.apiKey)
      .toPromise()
      .catch(err => err);
      this._trendingMovies.next(results);
      //console.log(results);
  }
  
}
