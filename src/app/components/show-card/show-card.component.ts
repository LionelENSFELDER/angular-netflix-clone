import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.sass']
})
export class ShowCardComponent implements OnInit {

	@Input() show: any;
	@Input() genres: any;

	constructor() { }

	ngOnInit(): void {
		this.displayGenres();
	}

	//genres
	displayGenres(): string{
	let itemGenres = this.show.genre_ids;
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
