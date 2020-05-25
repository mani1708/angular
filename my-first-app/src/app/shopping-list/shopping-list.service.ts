import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root', })
export class ShoppingListService {

    public ingredientsChanged = new Subject<Ingredient[]>();
    public editSelected = new Subject<number>();

    private ingList: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)];

    getIngredients() {
        return this.ingList.slice();
    }

    getIngredientByIndex(index: number) {
        return this.ingList[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingList.push(ingredient);
        this.ingredientsChanged.next(this.ingList.slice());
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingList.push(...ingredient);
        this.ingredientsChanged.next(this.ingList.slice());
    }

    updateIngredient(index: number, updatedIngredient: Ingredient) {
        this.ingList[index] = updatedIngredient;
        this.ingredientsChanged.next(this.ingList.slice());
    }

    deleteIngredient(index: number) {
        this.ingList.splice(index, 1);
        this.ingredientsChanged.next(this.ingList.slice());
    }

}