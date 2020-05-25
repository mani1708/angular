import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  constructor(private shoppingListServ: ShoppingListService) { }
  private subscription: Subscription;

  ngOnInit() {
    this.ingredients = this.shoppingListServ.getIngredients();
    this.subscription = this.shoppingListServ.addedIngredientEmitter.subscribe((ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
