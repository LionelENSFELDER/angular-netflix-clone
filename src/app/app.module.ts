import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeViewComponent } from './views/home-view/home-view.component';

import { SwiperModule } from 'swiper/angular';
// import { Routes } from '@angular/router';

// const appRoutes: Routes = [
// 	{ path: '', component: AppareilViewComponent },
// 	{ path: 'auth', component: AuthComponent }
// ];

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		HomeViewComponent,
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
