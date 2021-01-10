import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  animations: [
		trigger('hoverCard',[
			state('default', style({
			})),
			state('open', style({
				//transform: 'scale(1.2)',
			})),
			transition('default => open', [
				animate('0.2s')
			]),
			transition('open => default', [
				animate('0.2s')
			])
		])
	]
})
export class CardComponent implements OnInit {
	@Input() movie: any;
	//@Input() title: string;
	//@Input() poster: string;

  constructor() { }

  ngOnInit(): void {
  }

	//animations
	isCardOpen = false;
	toggle() {
		this.isCardOpen = !this.isCardOpen;
	}

}
