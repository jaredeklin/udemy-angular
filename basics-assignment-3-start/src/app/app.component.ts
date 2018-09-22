import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .hide-display {
      visibility: hidden;
    }
    .five {
      background-color: blue;
      color: white;
    }
  `]
})
export class AppComponent {
  displayToggle: boolean = false;
  numberOfClicks = []

  onDisplayClick = () => {
    this.displayToggle = !this.displayToggle;
    let id: number = Date.now()
    this.numberOfClicks.push(id)
  }
}
