import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories-box',
  templateUrl: './categories-box.component.html',
  styleUrls: ['./categories-box.component.scss']
})
export class CategoriesBoxComponent {

  @Input() filteredCategoryList: any[] = [];


}
