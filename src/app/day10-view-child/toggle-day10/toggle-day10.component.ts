import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-day10',
  templateUrl: './toggle-day10.component.html',
  styleUrls: ['./toggle-day10.component.css'],
})
export class ToggleDay10Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() checked: boolean;
  @Output() checkedChange = new EventEmi();

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
