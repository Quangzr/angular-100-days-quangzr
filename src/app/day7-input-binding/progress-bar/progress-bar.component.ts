import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
  <div
    class="progress-bar-container"
    [style.backgroundColor]="backgroundColor"
  >
    <div
      class="progress"
      [style]="{backgroundColor: progressColor, width: progress + '%'}"
    >
    </div>
  </div>
  `,
  styles: [
    `
    .progress-bar-container,
    .progress {
      height: 20px;
    }
    .progress-bar-container {
      width: 100%;
    }
  `,
  ],
})

// constructor sẽ chạy mỗi khi component được gọi
// ngOnInit sẽ chạy mỗi khi component được gọi và nhận đủ các input truyền vào
// ngOnChanges sẽ chạy mỗi khi component thay đổi
// Flow chạy nếu component có input: constructor -> ngOnChanges -> ngOnInit
// Flow chạy nếu component ko có input: constructor -> ngOnInit
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {
    console.log('constructor', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  ngOnInit() {
    console.log('ngOnInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
