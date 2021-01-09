import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  animations: [
		trigger('hoverCard',[
			state('default', style({
				opacity: 1
			})),
			state('open', style({
				opacity: 0
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
	@Input() poster: string;

  constructor() { }

  ngOnInit(): void {
  }

	//animations
	isCardOpen = false;
	toggle() {
		this.isCardOpen = !this.isCardOpen;
	}

}
