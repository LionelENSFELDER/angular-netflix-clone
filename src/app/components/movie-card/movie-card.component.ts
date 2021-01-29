import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {

	@Input() movie: any;
	@Input() genres: any;

	constructor() { }

	ngOnInit(): void {
		this.displayGenres();
	}

	//genres
	displayGenres(): string{
		let itemGenres = this.movie.genre_ids;
		let genresFromAPI = this.genres.genres;
		let result: string = '';

		//genresArray.forEach(element => console.log(element));

		for(let i = 0; i < itemGenres.length; i++){
			let genreId = itemGenres[i];
			for(let y = 0; y < genresFromAPI.length; y++){
				let actualGenre = genresFromAPI[y].id
				if(genreId == actualGenre){
					result += genresFromAPI[y].name + ', ';
				}
			}
		}
		return result;
	}

}
