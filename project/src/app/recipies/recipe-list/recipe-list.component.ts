import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showDetail = new EventEmitter<{name: string, description: string}>()

  recipes: Recipe[] = [
    new Recipe('test recipe', 'test description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
    new Recipe('test recipe2', 'test description2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ]


  constructor() { }

  ngOnInit() {
  }

  showDetails(recipe: {name: string, description: string}) {   
    // console.log(recipe.description) 
    this.showDetail.emit({
      name: recipe.name, 
      description:recipe.description
    })
  }

}
