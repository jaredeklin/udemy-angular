import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() start = new EventEmitter<number>()
  number = 1;
  interval;

  constructor() { }

  ngOnInit() {
  }

  startClick() {
    this.interval = setInterval(() => {
      this.start.emit(this.number)
      this.number++;
    }, 1000)
  }

  stopClick() {
    clearInterval(this.interval)
  }

}
