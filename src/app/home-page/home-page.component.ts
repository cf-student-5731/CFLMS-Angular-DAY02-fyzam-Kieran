import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
	
	cars = [
		{
		  name: "Mistubishi",
		  model: "Colt"
		},
		{
		  name: "Mercedes",
		  model: "A-Class"
		},
		{
		  name:"Renault",
		  model: "Megane"
		}
	  ];

	constructor() {	}



	ngOnInit(): void {
	}




	// here comes the code


}
