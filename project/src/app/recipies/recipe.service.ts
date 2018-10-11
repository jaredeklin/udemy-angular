import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class RecipeService {
  startedEditing = new Subject<number>();
  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next([...this.recipes]);
  }

  updateRecipes(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next([...this.recipes]);
  }
}
