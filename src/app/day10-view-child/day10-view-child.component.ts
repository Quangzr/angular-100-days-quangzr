import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ToggleDay10Component } from './toggle-day10/toggle-day10.component';

@Component({
  selector: 'app-day10-view-child',
  templateUrl: './day10-view-child.component.html',
  styleUrls: ['./day10-view-child.component.css'],
})
export class Day10ViewChildComponent implements OnInit {
  //Sử dụng ViewChild hoặc ViewChildren thì có ngAfterViewInit
  //Tên trong ngoặc '' phải giống với tên # ở bên html
  @ViewChild('toggleComp', { static: true }) toggleComp: ToggleDay10Component;
  //Nếu muốn tương tác với nhiều child thì có thể dùng children với kiểu dữ liệu QueryList
  //Nếu có 1 child nào đó trong list children ở trong Structural Directive thì sẽ ko sử dụng đc ở ngOnInit nhưng vẫn sử dụng đươc ở ngAfterViewInit
  @ViewChildren('toggleComp') toggleComps: QueryList<ToggleDay10Component>;
  constructor() {}

  //Trong ngOnInit sẽ thấy this.toggleComp undefined vì view chưa render kịp
  //Nếu muốn trong ngOnInit nhận ra thì phải static: true trong ViewChild (nhưng this.toggleComp phải ko ở trong Structural Directive)
  ngOnInit() {
    console.log('onInit', this.toggleComp);
  }

  isChecked = true;

  ngAfterViewInit() {
    console.log(this.toggleComp);
    //Dùng trong trường hợp Children
    //this.toggleComps.changes.subscribe(console.log);
  }
}
