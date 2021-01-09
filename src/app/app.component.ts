import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { TmdbService } from './services/tmdb.service';
import { faPlay, faSearch, faGift, faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

	//icons
	faGift = faGift;
	faSearch = faSearch;
	faBell = faBell;
	faPlay = faPlay;
	faInfoCircle = faInfoCircle;

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
		"slidesToShow" : 10,
		"slidesToScroll" : 1,
		"dots" : true,
		"infinite" : false,
		// "autoRotate" : true,
		// "autoRotateAfter" : 5000,
		//"autoplay" : true,
		//"autoplaySpeed" : 1000
	};
	
}
