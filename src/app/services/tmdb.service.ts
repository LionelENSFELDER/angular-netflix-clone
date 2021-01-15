import { Injectable, OnInit } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

@Injectable()
export class TmdbService implements OnInit{

	constructor(private httpClient: HttpClient) {
	}

	private trendingMovies: any[] = [];
	private trendingShows: any[] = [];
	private moviesGenresList: any[] = [];
	private api: any= {
		key: '3047ca0f5fac291860193498b5d24f44',
		url: 'https://api.themoviedb.org/3/',
		posters: 'https://image.tmdb.org/t/p/original',
		trendingMoviesUrl: 'https://api.themoviedb.org/3/trending/movie/week?api_key=',
		trendingShowsUrl: 'https://api.themoviedb.org/3/trending/tv/week?api_key=',
		moviesGenresURL: 'https://api.themoviedb.org/3/genre/movie/list?api_key='
	}

	ngOnInit(): void {
		this.getTrendingMovies();
		this.getMoviesGenresList();
	}

	moviesGenresListSubject = new Subject<any[]>();
	emitMoviesGenresListSubject(){
		this.moviesGenresListSubject.next(this.moviesGenresList)
	}
	getMoviesGenresList(): void{
		this.httpClient
		.get<any[]>(this.api.moviesGenresURL + this.api.key)
		.subscribe(
			(response: any)=>{
				this.moviesGenresList = response;
				console.log('Fetch genres from API', this.moviesGenresList);
				this.emitMoviesGenresListSubject();
			},
			(error)=>{ console.log('Error !' + error)}
		)
	}

	trendingMoviesSubject = new Subject<any[]>();
	emitTrendingMoviesSubject(){
		this.trendingMoviesSubject.next(this.trendingMovies)
	}
	getTrendingMovies(){
		this.httpClient
		.get<any[]>(this.api.trendingMoviesUrl + this.api.key)
		.subscribe(
			(response: any)=>{
				this.trendingMovies = Object.values(response.results);
				console.log('Fetch movies from API', this.trendingMovies);
				this.emitTrendingMoviesSubject();
			},
			(error)=>{ console.log('Error !' + error)}
		)
	}


	trendingShowsSubject = new Subject<any[]>();
	emitTrendingShowsSubject(){
		this.trendingShowsSubject.next(this.trendingShows)
	}
	getTrendingShows(){
		this.httpClient
		.get<any[]>(this.api.trendingShowsUrl + this.api.key)
		.subscribe(
			(response: any)=>{
				this.trendingShows = Object.values(response.results);
				console.log('Fetch shows from API', this.trendingShows);
				this.emitTrendingShowsSubject();
			},
			(error)=>{ console.log('Error !' + error)}
		)
	}
}