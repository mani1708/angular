import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;

  index: number;
  editMode = false;
  subscription: Subscription;
  editedItem: Ingredient;

  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListServ.editSelected.subscribe(
      (id: number) => {
        this.index = id;
        this.editMode = true;
        this.editedItem = this.shoppingListServ.getIngredientByIndex(id);
        this.slForm.setValue(
          {
            name: this.editedItem.name,
            amount: this.editedItem.amount
          }
        );
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredientObj = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListServ.updateIngredient(this.index, ingredientObj);
    } else {
      this.shoppingListServ.addIngredient(ingredientObj);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListServ.deleteIngredient(this.index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
