import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipiesStartComponent } from "./recipies/recipies-start/recipies-start.component";
import { RecipeDetailComponent } from "./recipies/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipies', pathMatch: 'full' },
  { path: 'recipies', component: RecipiesComponent, children: [
    { path: '', component: RecipiesStartComponent, pathMatch: 'full' },
    { path: ':id', component: RecipeDetailComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
