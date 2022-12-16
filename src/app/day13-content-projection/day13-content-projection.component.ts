import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day13-content-projection',
  templateUrl: './day13-content-projection.component.html',
  styleUrls: ['./day13-content-projection.component.css'],
})
export class Day13ContentProjectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  questions = {
    question1: true,
    question2: false,
  };
}
