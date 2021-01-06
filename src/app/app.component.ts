import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TmdbService } from './services/tmdb.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title: string = 'Netflix-Clone';
	trendingMoviesThisWeek: any;
	trendingMoviesSubscription: Subscription;

	constructor(private apiService: TmdbService){

	}

	ngOnInit(): void{
		this.trendingMoviesSubscription = this.apiService.trendingMoviesSubject.subscribe(
			(trendingMoviesThisWeek: any)=>{this.trendingMoviesThisWeek = trendingMoviesThisWeek}
		)
		this.apiService.emitTrendingMoviesSubject();
		this.apiService.getTrendingMovies();
	}
}
