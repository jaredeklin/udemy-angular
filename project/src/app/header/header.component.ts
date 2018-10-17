import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serverService: ServerService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSave() {
    this.serverService
      .storeRecipe()
      .subscribe(
        (response: Response) => console.log(response)
      );
  }

  onGet() {
    this.serverService
      .getRecipes();
  }

}
