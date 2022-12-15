import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day7-input-binding',
  templateUrl: './day7-input-binding.component.html',
  styleUrls: ['./day7-input-binding.component.css'],
})
export class Day7InputBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  backgroudColorBar = 'pink';

  progressBar = 30;

  increaseProgress() {
    if (this.progressBar < 100) {
      this.progressBar = this.progressBar + 5;
    }
  }

  decreaseProgress() {
    if (this.progressBar > 0) {
      this.progressBar = this.progressBar - 5;
    }
  }
}
