import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UserServices } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users = [];
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UserServices) { }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.setToActive(id);
  }
}
