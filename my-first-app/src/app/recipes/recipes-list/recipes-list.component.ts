import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  recipes: Recipes[];
  subscription: Subscription;

  constructor(private recipesServ: RecipesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipesServ.recipesChanged.subscribe((recipes: Recipes[]) => {
      this.recipes = recipes;
    })

    this.recipes = this.recipesServ.getRecipes();
  }

  onNewRecipeClick() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
