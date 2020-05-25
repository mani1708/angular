import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipes[];

  constructor(private recipesServ: RecipesService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesServ.getRecipes();
  }

  onNewRecipeClick() {
    this.router.navigate(['new'], {relativeTo:this.route})

  }
}
