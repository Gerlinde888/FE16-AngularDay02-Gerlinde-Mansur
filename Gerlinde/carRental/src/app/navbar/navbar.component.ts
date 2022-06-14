import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  // array = car;
  title = 'Tesla Car Rental';
  counter: number = 0;

  clickCounter() {
    this.counter += 10;
  }


}
