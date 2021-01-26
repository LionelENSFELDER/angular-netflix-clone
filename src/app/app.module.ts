import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';

@NgModule({
	declarations: [
		AppComponent,
		CardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule
	],
	exports: [
		
	],
	providers: [],
	bootstrap: [AppComponent]
	})
export class AppModule { }
