import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-component',
  templateUrl: './toggle-component.component.html',
  styleUrls: ['./toggle-component.component.css'],
})
export class ToggleComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
}
