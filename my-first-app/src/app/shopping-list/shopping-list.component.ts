import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[];
  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListServ.getIngredients();
    this.shoppingListServ.addedIngredientEmitter.subscribe((ingredient: Ingredient[]) => {
      this.ingredients=ingredient;
    })
  }

  onClickAddButton(ingItem: Ingredient) {
    this.shoppingListServ.addIngredient(ingItem);
  }

}
