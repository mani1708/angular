import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipes;
  @Input() index: number;
  ngOnInit(): void {
  }

}
