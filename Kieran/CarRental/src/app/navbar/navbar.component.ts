import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  totalDonated: number = 0;

  constructor() {}

  ngOnInit(): void {}

  donate(amount: number) {
    this.totalDonated += amount;
    console.log(this.totalDonated);
  }
}
