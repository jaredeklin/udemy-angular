import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serverService: ServerService) { }

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
