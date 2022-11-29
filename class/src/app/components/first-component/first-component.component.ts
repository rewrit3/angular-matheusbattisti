import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: String = 'Adolfo';
  age: number = 33;
  job = 'Web Developer';
  hobbies = ['Futebol', 'Música', 'E-Sports'];
  car = {
    name: 'Corsa',
    year: 2009,
  }

  constructor() { }

  ngOnInit(): void {
  }
}
