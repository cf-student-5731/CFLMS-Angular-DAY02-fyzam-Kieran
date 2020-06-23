import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  cars = [
    {
      imgSrc: '../../assets/img/ford-escape.jpg',
      brand: 'Ford',
      model: 'Escape',
    },

    {
      imgSrc: '../../assets/img/honda-crv.jpg',
      brand: 'Honda',
      model: 'CR-V',
    },

    {
      imgSrc: '../../assets/img/jeepgrandcheroke.jpg',
      brand: 'Jeep',
      model: 'Grand Cherokee',
    },

    {
      imgSrc: '../../assets/img/nissanrogue.jpg',
      brand: 'Nissan',
      model: 'Rogue',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
