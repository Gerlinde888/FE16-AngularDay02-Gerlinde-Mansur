import { Component, OnInit } from '@angular/core';
// import { car } from './myClass/script';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  // array = car;
  title = 'Tesla Car Rental';
  counter: number = 0;
  cars: Array<{ name: string, age: number }> = [{
    name: "Tesla D",
    age: 5
  }, {
    name: "Tesla Y",
    age: 2
    }, {
    name: "Tesla Z",
      age: 1
    }];

  clickCounter() {
    this.counter += 2;
  }

}
