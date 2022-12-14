import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-day3-data-event-binding',
  templateUrl: './day3-data-event-binding.component.html',
  styleUrls: ['./day3-data-event-binding.component.css'],
})
export class Day3DataEventBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  name = 'Angular ' + VERSION.major;

  user = {
    name: 'Quang',
    age: 1,
  };

  // DATA BINDING
  inputType = 'text';

  // EVENT BINDING
  handleClick() {
    console.log('OK');
  }
}
