import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Day3DataEventBindingComponent } from './day3-data-event-binding/day3-data-event-binding.component';
import { Day4NgIfComponent } from './day4-ng-if/day4-ng-if.component';
import { Day5NgForComponent } from './day5-ng-for/day5-ng-for.component';
import { Day6ClassStyleBindingComponent } from './day6-class-style-binding/day6-class-style-binding.component';
import { Day7InputBindingComponent } from './day7-input-binding/day7-input-binding.component';
import { ProgressBarComponent } from './day7-input-binding/progress-bar/progress-bar.component';
import { Day8OutputBindingComponent } from './day8-output-binding/day8-output-binding.component';
import { AuthorDetailComponent } from './day8-output-binding/author-detail/author-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  // cần khai báo thêm các component vào phần declarations để có thể sử dụng
  declarations: [
    AppComponent,
    Day3DataEventBindingComponent,
    Day4NgIfComponent,
    Day5NgForComponent,
    Day6ClassStyleBindingComponent,
    Day7InputBindingComponent,
    ProgressBarComponent,
    Day8OutputBindingComponent,
    AuthorDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
