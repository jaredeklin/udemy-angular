import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Milk', 2)
  ];

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }
}
