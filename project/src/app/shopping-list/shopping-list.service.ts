import { Ingredient } from "../shared/ingredient.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Milk', 2)
  ];

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }
}
