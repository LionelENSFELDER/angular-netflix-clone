import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { TmdbService } from './services/tmdb.service';
import SwiperCore from 'swiper/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	//string values
	title: string = 'Netflix-Clone';
	//movies
	trendingMovies: any;
	trendingMoviesSubscription: Subscription;
	//top rated movies
	topRatedMovies: any;
	topRatedMoviesSubscription: Subscription;
	//tv shows
	trendingShows: any;
	trendingShowsSubscription: Subscription;
	//genres
	moviesGenresList: any;
	moviesGenresListSubscription: Subscription;

	sliderConfig = {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			1024: {
			  slidesPerView: 7,
			  spaceBetween: 20,
			},
		  }
	}

	constructor(private apiService: TmdbService){

	}

	@HostListener('window:scroll', ['$event']) 
	onScroll(e: Event): void {
		let navbar = (document.getElementById('navbar'));
		let position = (document.documentElement.scrollTop || document.body.scrollTop);
		if(position >= 200){
			navbar.classList.remove('bg-transparent');
			navbar.classList.add('bg-black');
		}else{
			navbar.classList.add('bg-transparent');
			navbar.classList.remove('bg-black');
		}
	}

	@HostListener('click', ['$event'])
	onClickOnCard(e: Event){
		let event = e;
		let element = e.target;
	}

	ngOnInit(): void{
		//movies genres
		this.moviesGenresListSubscription = this.apiService.moviesGenresListSubject.subscribe(
			(moviesGenresList: any)=>{this.moviesGenresList = moviesGenresList}
		)
		this.apiService.getMoviesGenresList();
		this.apiService.emitMoviesGenresListSubject();

		//trending movies
		this.trendingMoviesSubscription = this.apiService.trendingMoviesSubject.subscribe(
			(trendingMovies: any)=>{this.trendingMovies = trendingMovies}
		)
		this.apiService.getTrendingMovies();
		this.apiService.emitTrendingMoviesSubject();

		//top rated movies
		this.topRatedMoviesSubscription = this.apiService.topRatedMoviesSubject.subscribe(
			(topRatedMovies: any)=>{this.topRatedMovies = topRatedMovies}
		)
		this.apiService.getTopRatedMovies();
		this.apiService.emitTopRatedMoviesSubject();

		//trending shows
		this.trendingShowsSubscription = this.apiService.trendingShowsSubject.subscribe(
			(trendingShows: any)=>{this.trendingShows = trendingShows}
		)
		this.apiService.getTrendingShows();
		this.apiService.emitTrendingShowsSubject();
	}

}
