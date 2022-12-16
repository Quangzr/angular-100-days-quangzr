import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day11-typescript-data-type',
  templateUrl: './day11-typescript-data-type.component.html',
  styleUrls: ['./day11-typescript-data-type.component.css'],
})
export class Day11TypescriptDataTypeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //Các kiểu dữ liệu trong TypeScript
  // let someString: string; // string, char
  // let someNumber: number; // float, double, int
  // let someBoolean: boolean; // true, false
  // let something: any; // có thể gán sang cho bất kỳ kiểu dữ liệu nào khác
  // let someStringArray: string[]; // tương tự cho number[], boolean[], any[]
  // let someObject: object;
  // let someNull: null;
  // let someUndefined: undefined;
  // let someUnknown: unknown;
  // let someNever: never; // ví dụ như một hàm throw exception
  // let someTuple: [string, number];
  // let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi
  // let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi
}
