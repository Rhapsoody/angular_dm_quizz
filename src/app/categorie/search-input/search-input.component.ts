import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  constructor(
    private categoryService: CategoryService,
  ) { }

  filterCategory(filter: string) {
    if(!filter) {
      return
    }

    const filteredCategoryList = this.categoryService.categoryList.filter(
      category => category?.label.toLowerCase().includes(filter.toLowerCase())
    );

    this.categoryService.changeCategory(filteredCategoryList);
  }
}
