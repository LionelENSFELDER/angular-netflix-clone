import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule  } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ShowCardComponent } from './components/show-card/show-card.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeViewComponent,
		MovieCardComponent,
		ShowCardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule,
		SwiperModule
	],
	exports: [
		
	],
	providers: [],
	bootstrap: [AppComponent]
	})
export class AppModule { }
