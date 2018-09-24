import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evens = [];
  odds = [];

  onStart(number: number) {
    console.log(number)
    if (number % 2 === 0) {
      this.evens.push(number)
    } else {
      this.odds.push(number)
    }   
  }
}
