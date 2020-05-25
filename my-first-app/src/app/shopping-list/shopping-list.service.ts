import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root', })
export class ShoppingListService {

    public addedIngredientEmitter = new Subject<Ingredient[]>();

    private ingList: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)];

    getIngredients() {
        return this.ingList.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingList.push(ingredient);
        this.addedIngredientEmitter.next(this.ingList.slice());
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingList.push(...ingredient);
        this.addedIngredientEmitter.next(this.ingList.slice());
    }

}