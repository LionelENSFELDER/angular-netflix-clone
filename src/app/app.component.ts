import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { TmdbService } from './services/tmdb.service';
import { faPlay, faSearch, faGift, faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {NgxTinySliderSettingsInterface, NgxTinySliderInstanceInterface, NgxTinySliderService} from 'ngx-tiny-slider';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	tinySliderConfig: NgxTinySliderSettingsInterface;
	tinySliderConfigLazy: NgxTinySliderSettingsInterface;
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

		this.tinySliderConfig = {
			arrowKeys: true,
			autoWidth: true,
			gutter: 10,
			controlsText: ['<<', '>>']
		};

		this.tinySliderConfigLazy = {
			arrowKeys: true,
			waitForDom: true, // do not forget about this
			autoWidth: true,
			gutter: 10,
			nav: true,
			controlsText: ["<", ">"]
		};
	};

	public listOfImages: Array<string> = [
		"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg",
		"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg",
		"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg",
		"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg",
		"http://www.mattsorger.com/newsletterpics/gsw07_01.jpg"
	];
	
}
