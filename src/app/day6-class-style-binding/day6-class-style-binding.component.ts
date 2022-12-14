import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6-class-style-binding',
  templateUrl: './day6-class-style-binding.component.html',
  styleUrls: ['./day6-class-style-binding.component.css'],
})
export class Day6ClassStyleBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isDanger = false;

  isWarning = false;

  classTest = 'danger-color warning-color';

  styleTest = 'height: 50px';

  changeDanger() {
    this.isDanger = !this.isDanger;
  }

  changeWarning() {
    this.isWarning = !this.isWarning;
  }
}
