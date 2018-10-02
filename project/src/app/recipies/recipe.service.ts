import { Recipe } from "./recipe.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

// @Injectable({providedIn: RecipiesComponent})

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'test description',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [new Ingredient('onions', 2), new Ingredient('peppers', 3)]
      ),
    new Recipe(
      'test recipe2',
      'test description2',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [new Ingredient('tomato', 2), new Ingredient('chicken', 3)]
    )
  ];

  getRecipies() {
    return [...this.recipes];
  }
}
