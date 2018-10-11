import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'
import { RecipeService } from '../recipies/recipe.service';
import { Recipe } from '../recipies/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http,
    private recipesService: RecipeService) { }

  storeRecipe() {
    return this.http.put('https://recipe-book-9dde2.firebaseio.com/recipes.json', this.recipesService.getRecipies());
  }

  getRecipes() {
    return this.http
      .get('https://recipe-book-9dde2.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        }
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipesService.setRecipies(recipes);
      });
  }
}
