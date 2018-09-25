import { Component, OnInit } from '@angular/core';
// import { Recipe } from "./recipe.module";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  currentRecipeDetail: {name: string, description: string};

  constructor() { }

  ngOnInit() {
  }

  onShowRecipeDetail(recipe: {name: string, description: string}) {  
    console.log(this.currentRecipeDetail);
      
    this.currentRecipeDetail = {
      name: recipe.name,
      description: recipe.description
    }
  }

}
