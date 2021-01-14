import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faTimesCircle, faPlus, faThumbsUp, faThumbsDown, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
//   animations: [
// 		trigger('hoverCard',[
// 			state('default', style({
				
// 			})),
// 			state('hover', style({
// 				//transform: 'scale(1.2)',
// 			})),
// 			transition('default => open', [
// 				animate('0.2s')
// 			]),
// 			transition('open => default', [
// 				animate('0.2s')
// 			])
// 		])
// 	]
})
export class CardComponent implements OnInit {
  @Input() movie: any;
  @Input() moviesGenresList: any[];
  
  //icons
  faTimesCircle = faTimesCircle;
  faPlus = faPlus;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faPlay = faPlay;


  constructor() { }

  ngOnInit(): void {
  }

  //genres
  // displayGenres(): void{
  //   for(let i = 0; i < this.moviesGenresList.length; i++){
  //     console.log(i);
  //   }
  // }

	//animations
	isCardHover = false;
	toggle() {
		this.isCardHover = !this.isCardHover;
  }

}
