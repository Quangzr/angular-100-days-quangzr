import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleDay10Component } from './toggle-day10/toggle-day10.component';

@Component({
  selector: 'app-day10-view-child',
  templateUrl: './day10-view-child.component.html',
  styleUrls: ['./day10-view-child.component.css'],
})
export class Day10ViewChildComponent implements OnInit {
  //Tên trong ngoặc phải giống với tên # ở bên html
  @ViewChild('toggleComp', { static: true }) toggleComp: ToggleDay10Component;
  constructor() {}

  //Trong ngOnInit sẽ thấy this.toggleComp undefined vì view chưa render kịp
  // nếu muốn trong ngOnInit nhận ra thì phải static: true trong ViewChild (nhưng this.toggleComp phải ko ở trong directive)
  ngOnInit() {
    console.log('onInit', this.toggleComp);
  }

  isChecked = true;

  ngAfterViewInit() {
    console.log(this.toggleComp);
  }
}
