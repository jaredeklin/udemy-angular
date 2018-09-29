import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";

// @Injectable({providedIn: 'root'})

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('test recipe', 'test description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('test recipe2', 'test description2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  getRecipies() {
    const allRecipies = [...this.recipes];
    return allRecipies;
  }
}
