import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'
import { RecipeService } from '../recipies/recipe.service';
import { Recipe } from '../recipies/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http,
    private recipesService: RecipeService,
    private authService: AuthService) { }

  storeRecipe() {
    const token = this.authService.getToken();

    return this.http.put(`https://recipe-book-9dde2.firebaseio.com/recipes.json?auth=${token}`, this.recipesService.getRecipies());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http
      .get(`https://recipe-book-9dde2.firebaseio.com/recipes.json?auth=${token}`)
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
