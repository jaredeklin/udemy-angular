import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  updateCount(type: string) {
    if (type === 'toActive') {
      this.inactiveToActive++;
      console.log('To active ' + this.inactiveToActive);
    } else {
      this.activeToInactive++;
      console.log('to inactive ' + this.activeToInactive);
    }
  }
}
