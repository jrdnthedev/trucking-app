import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pebbles';
  isOpen = false;

  onOpenEventClicked(value: boolean): void {
    this.isOpen = value;
  }
}
