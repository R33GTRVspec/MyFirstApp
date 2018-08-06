import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'SEAT', 'Mazda', 'Lada', 'Bentley'];
  dates = [
    new Date(2015,3,4),
    new Date(2011,2,5),
    new Date(2009,1,14),
    new Date(2005,6,23),
  ];


  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }


}
