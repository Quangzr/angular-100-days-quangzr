import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-day10',
  templateUrl: './toggle-day10.component.html',
  styleUrls: ['./toggle-day10.component.css'],
})
export class ToggleDay10Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter();

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
