import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';
  currentDate = new Date();

  updateDatePure() {
    this.currentDate = new Date();
  }

  updateDateImpure() {
    this.currentDate = new Date();
  }
  // @Input() parentData = this.name;
}
