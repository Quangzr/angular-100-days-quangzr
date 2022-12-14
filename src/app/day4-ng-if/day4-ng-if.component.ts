import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4-ng-if',
  templateUrl: './day4-ng-if.component.html',
  styleUrls: ['./day4-ng-if.component.css'],
})
export class Day4NgIfComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  age = 17;

  increaseAge() {
    this.age = this.age + 1;
  }

  decreaseAge() {
    this.age = this.age - 1;
  }
}
