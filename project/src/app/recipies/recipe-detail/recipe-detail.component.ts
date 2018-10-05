import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params.id;
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      });
  }

  addToList() {
    this.shoppingListService.addIngredients(this.recipeDetail.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit-recipe'], { relativeTo: this.route });
  }
}
