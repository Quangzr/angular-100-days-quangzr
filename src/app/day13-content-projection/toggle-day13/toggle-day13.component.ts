import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-day13',
  templateUrl: './toggle-day13.component.html',
  styleUrls: ['./toggle-day13.component.css'],
})
export class ToggleDay13Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
