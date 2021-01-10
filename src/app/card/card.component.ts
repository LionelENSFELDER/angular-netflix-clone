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
			state('hover', style({
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

  constructor() { }

  ngOnInit(): void {
  }

	//animations
	isCardHover = false;
	toggle() {
		this.isCardHover = !this.isCardHover;
	}

}
