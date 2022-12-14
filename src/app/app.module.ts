import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Day4NgIfComponent } from './day4-ng-if/day4-ng-if.component';
import { Day3DataEventBindingComponent } from './day3-data-event-binding/day3-data-event-binding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  // cần khai báo thêm các component vào phần declarations để có thể sử dụng
  declarations: [
    AppComponent,
    Day4NgIfComponent,
    Day3DataEventBindingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
