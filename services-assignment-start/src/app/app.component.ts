import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeToInactive: number;
  inactiveToActive: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.inactiveToActive = this.counterService.inactiveToActive;
    this.activeToInactive = this.counterService.activeToInactive;
  }
}
