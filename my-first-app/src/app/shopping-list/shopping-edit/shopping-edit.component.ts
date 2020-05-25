import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName',{static : false}) nameInput: ElementRef;
  @ViewChild('ingAmount',{static : false}) amountInput: ElementRef;
  

  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit(): void {
  }

  onClickAdd() {
  const ingName=this.nameInput.nativeElement.value;
  const ingAmount=this.amountInput.nativeElement.value;
  const ingredientObj=new Ingredient(ingName,ingAmount);
  this.shoppingListServ.addIngredient(ingredientObj);
  }

}
