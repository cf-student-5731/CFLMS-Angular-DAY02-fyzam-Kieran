import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  donationCounter: number = 0;
  constructor() { }
  

	onClickMe(){
    this.donationCounter += 10;
	}
  ngOnInit(): void {
  }

}
