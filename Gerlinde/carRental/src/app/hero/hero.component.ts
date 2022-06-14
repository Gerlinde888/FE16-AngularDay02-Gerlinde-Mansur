import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // heroImage: string = "/assets/hero_car.png";
  heroHeading: string ="Read our 2022 Impact Report";
  heroText: string = "Order Online for Touchless Delivery";
  heroBtnText: string = "Learn More";
  heroBtnUrl: string = "about";
  constructor() { }

  ngOnInit(): void {
  }

}