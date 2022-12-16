import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleDay10Component } from './toggle-day10/toggle-day10.component';

@Component({
  selector: 'app-day10-view-child',
  templateUrl: './day10-view-child.component.html',
  styleUrls: ['./day10-view-child.component.css'],
})
export class Day10ViewChildComponent implements OnInit {
  @ViewChild('toggleComp') toggleComp: ToggleDay10Component;
  constructor() {}

  ngOnInit() {}

  isChecked = true;

  ngAfterViewInit() {
    console.log(this.toggleComp);
  }
}
