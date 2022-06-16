import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  cars: Array< {name: string, year: number, image: string}> = [{
    name: 'Tesla D',
    year: 2017,
    image: '/assets/image1.jpg'
  },{
    name: 'Tesla Y',
    year: 2021,
    image: '/assets/image2.jpeg'
  },{
    name: 'Tesla X',
    year: 2015,
    image: 'assets/image3.jpeg'
  }];
 
  constructor() { }

  ngOnInit(): void {
  }

}
