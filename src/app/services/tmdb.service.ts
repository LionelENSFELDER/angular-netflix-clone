import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
//import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

@Injectable()
export class TmdbService implements OnInit{

	constructor(private httpClient: HttpClient) {
	}

	private trendingMovies: any[] = [];
	private api: any= {
		key: '3047ca0f5fac291860193498b5d24f44',
		url: 'https://api.themoviedb.org/3/',
		moviesPoster: 'https://image.tmdb.org/t/p/original',
		trendingMoviesWeekUrl: 'https://api.themoviedb.org/3/trending/movie/week?api_key='
	}

	ngOnInit(): void {
		this.getTrendingMovies();
	}

	trendingMoviesSubject = new Subject<any[]>();

	emitTrendingMoviesSubject(){
		this.trendingMoviesSubject.next(this.trendingMovies)
	}

	getTrendingMovies(){
		this.httpClient
		.get<any[]>(this.api.trendingMoviesWeekUrl + this.api.key)
		.subscribe(
			(response: any)=>{
				this.trendingMovies = Object.values(response.results);
				console.log('Fetch from API', this.trendingMovies);
				this.emitTrendingMoviesSubject();
			},
			(error)=>{ console.log('Error !' + error)}
		)
	}


}