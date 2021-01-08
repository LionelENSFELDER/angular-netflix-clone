import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { TmdbService } from './services/tmdb.service';
import { faCoffee, faSearch, faGift, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title: string = 'Netflix-Clone';
	trendingMovies: any;
	trendingMoviesSubscription: Subscription;
	trendingShows: any;
	trendingShowsSubscription: Subscription;

	faGift = faGift;
	faSearch = faSearch;
	faBell = faBell;

	constructor(private apiService: TmdbService){

	}

	ngOnInit(): void{
		this.trendingMoviesSubscription = this.apiService.trendingMoviesSubject.subscribe(
			(trendingMovies: any)=>{this.trendingMovies = trendingMovies}
		)
		this.apiService.getTrendingMovies();
		this.apiService.emitTrendingMoviesSubject();

		this.trendingShowsSubscription = this.apiService.trendingShowsSubject.subscribe(
			(trendingShows: any)=>{this.trendingShows = trendingShows}
		)
		this.apiService.getTrendingShows();
		this.apiService.emitTrendingShowsSubject();
	}

	slideConfig = {
		"arrows" : true,
		"slidesToShow" : 7,
		"slidesToScroll" : 1,
		"dots" : true,
		"infinite" : false,
		// "autoRotate" : true,
		// "autoRotateAfter" : 5000,
		//"autoplay" : true,
		//"autoplaySpeed" : 1000
	};
	
}
