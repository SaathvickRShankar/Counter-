import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Counter';
  clicked = true;
  click = 0;
  add() {
    this.click += 1;
  }
  minus() {
    this.click -= 1;
    if (this.click <= 0) {
      this.click = 0;
    }
  }
  reset() {
    this.click = 0;
  }
}
