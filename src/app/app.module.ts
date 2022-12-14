import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Day3DataEventBindingComponent } from './day3-data-event-binding/day3-data-event-binding.component';
import { Day4NgIfComponent } from './day4-ng-if/day4-ng-if.component';
import { Day5NgForComponent } from './day5-ng-for/day5-ng-for.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  // cần khai báo thêm các component vào phần declarations để có thể sử dụng
  declarations: [
    AppComponent,
    Day3DataEventBindingComponent,
    Day4NgIfComponent,
    Day5NgForComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
