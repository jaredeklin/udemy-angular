import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  handleAddIngredient(form: NgForm) {
    const { name, amount } = form.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredients([ingredient]);
  }

}
