import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  Validator,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

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

  staffInput = new FormGroup({
    imgSrc: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.staffInput.valid) {
      let newCar = this.staffInput.value;

      this.cars.push(newCar);

      console.table(this.cars);
    }
  }
}
