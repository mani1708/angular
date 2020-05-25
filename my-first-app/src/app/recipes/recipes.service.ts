import { Recipes } from './recipes.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesService {

    recipesChanged = new Subject<Recipes[]>();
    private recipes: Recipes[] = [
        new Recipes(
            'Hyderabadi Biryani Recipe',
            'Indeginious Hyderabadi Buryani, with special hyderababdi Chicken masala',
            'https://p1.pxfuel.com/preview/1001/930/345/rice-chicken-food-dinner-restaurant-lunch.jpg'
            , [new Ingredient('Rice', 1),
            new Ingredient('Chicken', 1)]
        ),
        new Recipes(
            'Kolhapuri Biryani Recipe',
            'Authentic Kolhapuri Biryani, with Roasted Chicken and Boiled Eggs',
            'https://cdn.pixabay.com/photo/2019/11/14/11/24/eastern-food-4625963_960_720.jpg'
            , [new Ingredient('Rice', 1),
            new Ingredient('Chicken', 1), new Ingredient('Eggs', 2)])
    ]

    constructor(private shoppingListserv: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListserv.addIngredients(ingredients);
    }

    findById(index: number) {
        return this.recipes[index];
    }

    addRecipe(newRecipe: Recipes) {
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());

    }

    updateRecipie(index: number, newRecipe: Recipes) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipie(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }




}