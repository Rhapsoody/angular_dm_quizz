import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{

  constructor(
    private categoryService: CategoryService,
  ) { }

  categoryList: any[] = this.categoryService.categoryList;

  filteredCategoryList: any[] = [];

  ngOnInit(): void {
    this.categoryService.getCategoryList();
  }

}
