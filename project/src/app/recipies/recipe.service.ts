import { Recipe } from "./recipe.model";
import { Injectable, EventEmitter } from "@angular/core";
// import { RecipiesComponent } from "./recipies.component";

// @Injectable({providedIn: RecipiesComponent})

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('test recipe', 'test description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('test recipe2', 'test description2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  getRecipies() {
    // const allRecipies = [...this.recipes];
    return [...this.recipes];
  }
}
