import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1 = false;
  user2 = false;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1 = true;
        } else if (id === 2) {
          this.user2 = true;
        }
      }
    );
  }
}
