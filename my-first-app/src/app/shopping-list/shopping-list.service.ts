import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Injectable({ providedIn: 'root', })
export class ShoppingListService {

    public addedIngredientEmitter = new EventEmitter<Ingredient[]>();

    private ingList: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)];

    getIngredients() {
        return this.ingList.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingList.push(ingredient);
        this.addedIngredientEmitter.emit(this.ingList.slice());
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingList.push(...ingredient);
        this.addedIngredientEmitter.emit(this.ingList.slice());
    }

}